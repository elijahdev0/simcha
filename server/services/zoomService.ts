import axios from 'axios';

interface ZoomTokenResponse {
  access_token: string;
}

interface ZoomMeetingResponse {
  id: string;
  join_url: string;
  start_url: string;
}

class ZoomService {
  private apiKey: string;
  private apiSecret: string;
  private accountId: string;

  constructor() {
    this.apiKey = process.env.ZOOM_CLIENT_ID || '';
    this.apiSecret = process.env.ZOOM_CLIENT_SECRET || '';
    this.accountId = process.env.ZOOM_ACCOUNT_ID || '';

    if (!this.apiKey || !this.apiSecret || !this.accountId) {
      throw new Error('Missing required Zoom API credentials');
    }
  }

  public async getAccessToken(): Promise<string> {
    try {
      const response = await axios.post<ZoomTokenResponse>(
        'https://zoom.us/oauth/token',
        null,
        {
          params: {
            grant_type: 'account_credentials',
            account_id: this.accountId,
          },
          headers: {
            Authorization: `Basic ${Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString('base64')}`,
          },
        }
      );

      return response.data.access_token;
    } catch (error) {
      console.error('Error getting Zoom access token:', error);
      throw new Error('Failed to get Zoom access token');
    }
  }

  public async createMeeting(params: { topic: string; startTime: string; duration: number }): Promise<ZoomMeetingResponse> {
    try {
      const accessToken = await this.getAccessToken();
      
      const response = await axios.post<ZoomMeetingResponse>(
        'https://api.zoom.us/v2/users/me/meetings',
        {
          topic: params.topic,
          start_time: params.startTime,
          duration: params.duration,
          type: 2, // Scheduled meeting
          settings: {
            host_video: true,
            participant_video: true,
            join_before_host: true,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return {
        id: response.data.id,
        join_url: response.data.join_url,
        start_url: response.data.start_url,
      };
    } catch (error) {
      console.error('Error creating Zoom meeting:', error);
      throw new Error('Failed to create Zoom meeting');
    }
  }
}

export default new ZoomService(); 