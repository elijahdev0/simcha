import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ZoomScheduler from './ZoomScheduler';

const Booking = () => {
  const [scheduledMeeting, setScheduledMeeting] = useState<{
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  } | null>(null);

  const handleMeetingScheduled = (meetingDetails: {
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  }) => {
    setScheduledMeeting(meetingDetails);
  };

  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-white mb-4 text-center">
            Available Courses
          </h1>
          <p className="text-tactical-200 text-center mb-12">
            Choose your preferred course and complete the registration form. We'll contact you shortly to confirm your booking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Two-Day Course Card */}
            <div className="bg-tactical-800 p-6 rounded-lg border border-tactical-700">
              <h2 className="text-2xl font-bold text-white mb-4">2-Day Tactical Seminar</h2>
              <div className="space-y-4 text-tactical-200">
                <p><strong>Duration:</strong> 2 days (April 21st to 23rd)</p>
                <p><strong>Location:</strong> S-Arms Shooting Range, Estonia</p>
                <p><strong>Accommodation:</strong> Hestia Hotel Strand (private room)</p>
                <p><strong>Price:</strong> 2900 EUR per participant</p>
                <div className="mt-4">
                  <p className="text-sm mb-2"><strong>Payment Terms:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Non-refundable deposit: 1000 EUR (due within 10 days of confirmation)</li>
                    <li>Balance due: 15 days before course start</li>
                  </ul>
                </div>
              </div>
              <Link
                to="/two-day-course-registration"
                className="mt-6 block w-full bg-brandRed hover:bg-brandRed-hover text-white py-3 rounded-md font-medium text-center transition-colors duration-200"
              >
                Register for 2-Day Course
              </Link>
            </div>

            {/* Five-Day Course Card */}
            <div className="bg-tactical-800 p-6 rounded-lg border border-tactical-700">
              <h2 className="text-2xl font-bold text-white mb-4">5-Day Tactical Seminar</h2>
              <div className="space-y-4 text-tactical-200">
                <p><strong>Duration:</strong> 5 days (April 27 to May 1)</p>
                <p><strong>Location:</strong> S-Arms Shooting Range, Estonia</p>
                <p><strong>Accommodation:</strong> Hestia Hotel Strand (private room)</p>
                <p><strong>Price:</strong> 5700 EUR per participant</p>
                <div className="mt-4">
                  <p className="text-sm mb-2"><strong>Payment Terms:</strong></p>
                  <ul className="list-disc pl-6 text-sm">
                    <li>Non-refundable deposit: 1000 EUR (due within 10 days of confirmation)</li>
                    <li>Balance due: 15 days before course start</li>
                  </ul>
                </div>
              </div>
              <Link
                to="/five-day-course-registration"
                className="mt-6 block w-full bg-brandRed hover:bg-brandRed-hover text-white py-3 rounded-md font-medium text-center transition-colors duration-200"
              >
                Register for 5-Day Course
              </Link>
            </div>
          </div>

          {/* Zoom Meeting Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold text-white mb-6 text-center">
              Schedule a Free Consultation
            </h2>
            <p className="text-tactical-200 text-center mb-8">
              Book a free consultation to discuss your training needs and get personalized recommendations.
            </p>
            
            {scheduledMeeting ? (
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Scheduled!</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Topic:</strong> {scheduledMeeting.topic}</p>
                  <p><strong>Date:</strong> {new Date(scheduledMeeting.startTime).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {new Date(scheduledMeeting.startTime).toLocaleTimeString()}</p>
                  <p><strong>Duration:</strong> {scheduledMeeting.duration} minutes</p>
                  {scheduledMeeting.meetingUrl && (
                    <p>
                      <strong>Join URL:</strong>{' '}
                      <a 
                        href={scheduledMeeting.meetingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brandRed hover:text-brandRed-hover underline"
                      >
                        Click here to join
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <ZoomScheduler onScheduled={handleMeetingScheduled} />
            )}
          </div>

          <div className="mt-12 text-center text-tactical-200">
            <p>For any questions regarding the seminars or registration process, please contact:</p>
            <p className="mt-2"><strong>Email:</strong> Menahem@baldeagletactical.com</p>
            <p><strong>Phone:</strong> +44 7982 369701</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 