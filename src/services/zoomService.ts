import axios from 'axios';
import { zoomConfig } from '../config/zoom';

interface MeetingSettings {
  settings?: {
    calendar_integration?: boolean;
    registrants_email_notification?: boolean;
    registrants_confirmation_email?: boolean;
    alternative_hosts_email_notification?: boolean;
  };
}

interface CalendarEvent {
  summary: string;
  description: string;
  startTime: string;
  duration: number;
  attendeeEmail: string;
}

class ZoomService {
  private baseUrl = 'https://api.zoom.us/v2';
  private token: string | null = null;

  private async getAccessToken() {
    if (this.token) return this.token;

    const credentials = Buffer.from(`${zoomConfig.clientId}:${zoomConfig.clientSecret}`).toString('base64');
    
    try {
      const response = await fetch('https://zoom.us/oauth/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=account_credentials&account_id=' + zoomConfig.accountId
      });

      if (!response.ok) {
        throw new Error('Failed to get Zoom access token');
      }

      const data = await response.json();
      this.token = data.access_token;
      return this.token;
    } catch (error) {
      console.error('Error getting Zoom access token:', error);
      throw error;
    }
  }

  async createMeeting(topic: string, startTime: string, duration: number, settings?: MeetingSettings) {
    try {
      const token = await this.getAccessToken();
      const response = await fetch(`${this.baseUrl}/users/me/meetings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          topic,
          type: 2, // Scheduled meeting
          start_time: startTime,
          duration,
          timezone: 'UTC',
          settings: {
            host_video: true,
            participant_video: true,
            join_before_host: true,
            mute_upon_entry: true,
            waiting_room: false,
            meeting_authentication: true,
            ...settings?.settings,
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create Zoom meeting');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating Zoom meeting:', error);
      throw error;
    }
  }

  async listMeetings() {
    try {
      const token = await this.getAccessToken();
      const response = await fetch(`${this.baseUrl}/users/me/meetings`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch meetings');
      }

      return await response.json();
    } catch (error) {
      console.error('Error listing Zoom meetings:', error);
      throw error;
    }
  }

  async addToCalendar(event: CalendarEvent) {
    try {
      // Add to instructor's calendar
      await this.addToGoogleCalendar({
        ...event,
        attendeeEmail: import.meta.env.VITE_INSTRUCTOR_EMAIL,
      });

      // Add to student's calendar if email provided
      if (event.attendeeEmail) {
        await this.addToGoogleCalendar(event);
      }

      return true;
    } catch (error) {
      console.error('Error adding to calendar:', error);
      throw error;
    }
  }

  private async addToGoogleCalendar(event: CalendarEvent) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CALENDAR_API_URL}/events`,
        {
          summary: event.summary,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          end: {
            dateTime: new Date(new Date(event.startTime).getTime() + event.duration * 60000).toISOString(),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          attendees: [
            { email: event.attendeeEmail },
          ],
          reminders: {
            useDefault: true,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GOOGLE_CALENDAR_TOKEN}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error adding to Google Calendar:', error);
      throw error;
    }
  }
}

export const zoomService = new ZoomService(); 