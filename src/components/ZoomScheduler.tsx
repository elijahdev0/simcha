import { useState } from 'react';
import { zoomService } from '../services/zoomService';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from './ui/use-toast';
import { Calendar, Clock, Users } from 'lucide-react';

interface ZoomSchedulerProps {
  onScheduled: (meetingDetails: {
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  }) => void;
}

export default function ZoomScheduler({ onScheduled }: ZoomSchedulerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState('Training Consultation');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Combine date and time into ISO string
      const startTime = new Date(`${date}T${time}`).toISOString();
      
      // Create Zoom meeting with calendar integration enabled
      const meeting = await zoomService.createMeeting(
        topic,
        startTime,
        parseInt(duration),
        {
          settings: {
            calendar_integration: true,
            registrants_email_notification: true,
            registrants_confirmation_email: true,
            alternative_hosts_email_notification: true
          }
        }
      );

      // Create calendar event for both parties
      await zoomService.addToCalendar({
        summary: topic,
        description: `Training Consultation\n\nJoin Zoom Meeting:\n${meeting.join_url}`,
        startTime,
        duration: parseInt(duration),
        attendeeEmail: email,
      });

      toast({
        title: "Success!",
        description: "Your consultation has been scheduled and added to both calendars. Check your email for details.",
      });

      onScheduled({
        startTime,
        duration: parseInt(duration),
        topic,
        meetingUrl: meeting.join_url,
      });
    } catch (error) {
      console.error('Failed to schedule consultation:', error);
      toast({
        title: "Error",
        description: "Failed to schedule consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Generate available time slots (9 AM to 5 PM)
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    const formattedHour = hour.toString().padStart(2, '0');
    timeSlots.push(`${formattedHour}:00`);
    timeSlots.push(`${formattedHour}:30`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white flex items-center gap-2">
            <Users className="text-brandRed" size={16} />
            Your Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="bg-tactical-700 border-tactical-600 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-white flex items-center gap-2">
            <Calendar className="text-brandRed" size={16} />
            Select Date
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
            className="bg-tactical-700 border-tactical-600 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="time" className="text-white flex items-center gap-2">
            <Clock className="text-brandRed" size={16} />
            Select Time
          </Label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-3 py-2 bg-tactical-700 border border-tactical-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          >
            <option value="">Choose a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration" className="text-white flex items-center gap-2">
            <Clock className="text-brandRed" size={16} />
            Duration
          </Label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 bg-tactical-700 border border-tactical-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          >
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
          </select>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-brandRed hover:bg-brandRed-hover text-white"
      >
        {isLoading ? 'Scheduling...' : '🗓 Schedule Free Consultation'}
      </Button>
    </form>
  );
} 