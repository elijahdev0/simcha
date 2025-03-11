import React, { useState } from 'react';
import { format } from 'date-fns';

interface ZoomSchedulerProps {
  onScheduled: (meetingDetails: {
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  }) => void;
}

const ZoomScheduler: React.FC<ZoomSchedulerProps> = ({ onScheduled }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [topic, setTopic] = useState('Training Consultation');

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const startTime = `${selectedDate}T${selectedTime}:00`;
    
    try {
      // Here we'll integrate with your Zoom API endpoint
      const response = await fetch('/api/schedule-zoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startTime,
          duration: parseInt(duration),
          topic,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule meeting');
      }

      const data = await response.json();
      onScheduled({
        startTime,
        duration: parseInt(duration),
        topic,
        meetingUrl: data.join_url,
      });
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('Failed to schedule meeting. Please try again.');
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
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Schedule a Zoom Consultation</h2>
      <form onSubmit={handleSchedule} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={format(new Date(), 'yyyy-MM-dd')}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (minutes)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          >
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brandRed hover:bg-brandRed-hover text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default ZoomScheduler; 