import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ZoomScheduler from './ZoomScheduler';
import { MessageCircle, Calendar, MapPin, Building2, Wallet, CheckCircle2, Star, Timer, Shield, Users, Video } from 'lucide-react';
import { format } from 'date-fns';
import { Check } from 'lucide-react';

const Booking = () => {
  const [scheduledMeeting, setScheduledMeeting] = useState<{
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  } | null>(null);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const nextCourse = new Date('2025-04-21T09:00:00');
      const now = new Date();
      const difference = nextCourse.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, hours, minutes });
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

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
          {/* Exclusive Banner */}
          <div className="bg-gradient-to-r from-brandRed to-tactical-800 p-4 rounded-lg mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-tactical-900 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="text-white" size={24} />
                <h3 className="text-xl font-bold text-white">Limited Availability Alert</h3>
              </div>
              <p className="text-white text-lg">
                🔥 This course is limited to <span className="font-bold">10 participants</span> – Reserve your spot before it's gone!
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-tactical-800 p-6 rounded-lg mb-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Timer className="text-brandRed" />
              Next Training Starts In:
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-tactical-700 p-3 rounded-lg">
                <div className="text-2xl font-bold text-brandRed">{countdown.days}</div>
                <div className="text-sm text-tactical-200">Days</div>
              </div>
              <div className="bg-tactical-700 p-3 rounded-lg">
                <div className="text-2xl font-bold text-brandRed">{countdown.hours}</div>
                <div className="text-sm text-tactical-200">Hours</div>
              </div>
              <div className="bg-tactical-700 p-3 rounded-lg">
                <div className="text-2xl font-bold text-brandRed">{countdown.minutes}</div>
                <div className="text-sm text-tactical-200">Minutes</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-heading font-bold text-white mb-4 text-center">
            💥 Elite Tactical Training Registration
          </h1>
          <p className="text-tactical-200 text-center mb-12">
            Choose your preferred course and complete the registration form. We'll contact you shortly to confirm your booking.
          </p>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Two-Day Course Card */}
            <div className="bg-tactical-800 p-8 rounded-lg border border-tactical-700 relative overflow-hidden flex flex-col h-full">
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 bg-brandRed px-3 py-1 text-sm font-medium text-white rounded-full">
                Limited Spots
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">📌 Two-Day Tactical Seminar</h2>
              
              <div className="space-y-4 text-tactical-200 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="text-brandRed" size={20} />
                  <p>🗓 Date: April 21-23, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-brandRed" size={20} />
                  <p>📍 Location: S-Arms Shooting Range, Estonia</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="text-brandRed" size={20} />
                  <p>🏨 Accommodation: Hestia Hotel Strand (Private Room)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="text-brandRed" size={20} />
                  <p>💰 Price: €2,900</p>
                </div>
                {/* Payment Terms */}
                <div className="bg-tactical-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="text-brandRed" size={20} />
                    <h4 className="font-semibold text-white">Secure Payment Terms</h4>
                  </div>
                  <p className="text-tactical-200 font-bold">
                    Non-refundable deposit required (€1,000) within 10 days
                  </p>
                  <p className="text-tactical-300 text-sm mt-1">
                    Balance due 15 days before course start
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4">✔ What's Included:</h3>
                  <ul className="space-y-2 text-tactical-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Close Quarters Battle (CQB) Drills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Tactical Movement & Situational Awareness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Live-Fire Exercises & Scenario-Based Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Expert Instruction from Special Forces Veterans</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/two-day-course-registration"
                className="block w-full bg-brandRed hover:bg-brandRed-hover text-white py-4 rounded-md font-medium text-center transition-colors duration-200 mt-auto"
              >
                🔴 Register Now – Limited Spots
              </Link>
            </div>

            {/* Five-Day Course Card */}
            <div className="bg-tactical-800 p-8 rounded-lg border border-tactical-700 relative overflow-hidden flex flex-col h-full">
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 bg-brandRed px-3 py-1 text-sm font-medium text-white rounded-full">
                Advanced Training
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">📌 Five-Day Tactical Masterclass</h2>
              
              <div className="space-y-4 text-tactical-200 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="text-brandRed" size={20} />
                  <p>🗓 Date: April 27-May 1, 2025</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-brandRed" size={20} />
                  <p>📍 Location: S-Arms Shooting Range, Estonia</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="text-brandRed" size={20} />
                  <p>🏨 Accommodation: Hestia Hotel Strand (Private Room)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="text-brandRed" size={20} />
                  <p>💰 Price: €5,700</p>
                </div>
                {/* Payment Terms */}
                <div className="bg-tactical-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="text-brandRed" size={20} />
                    <h4 className="font-semibold text-white">Secure Payment Terms</h4>
                  </div>
                  <p className="text-tactical-200 font-bold">
                    Non-refundable deposit required (€1,000) within 10 days
                  </p>
                  <p className="text-tactical-300 text-sm mt-1">
                    Balance due 15 days before course start
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4">✔ What's Included:</h3>
                  <ul className="space-y-2 text-tactical-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Advanced CQB & Urban Warfare Tactics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Night Operations & Low-Light Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Advanced Weapons Handling & Marksmanship</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-brandRed" size={16} />
                      <span>Tactical Team Leadership & Communication</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/five-day-course-registration"
                className="block w-full bg-brandRed hover:bg-brandRed-hover text-white py-4 rounded-md font-medium text-center transition-colors duration-200 mt-auto"
              >
                🔴 Register Now – Limited Spots
              </Link>
            </div>
          </div>

          {/* Zoom Meeting Section */}
          <div className="mt-12 p-6 bg-tactical-800 rounded-lg border border-tactical-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Video className="text-brandRed" />
              Schedule a Free Virtual Consultation
            </h2>

            {scheduledMeeting ? (
              <div className="p-6 bg-tactical-700 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-green-400">
                  <Check size={20} />
                  <h3 className="text-lg font-semibold">Consultation Scheduled!</h3>
                </div>
                <p className="text-white">
                  Your consultation is scheduled for{' '}
                  <span className="font-semibold">
                    {format(new Date(scheduledMeeting.startTime), 'MMMM d, yyyy')} at{' '}
                    {format(new Date(scheduledMeeting.startTime), 'h:mm a')}
                  </span>
                </p>
                <p className="text-gray-300">
                  Duration: {scheduledMeeting.duration} minutes
                </p>
                {scheduledMeeting.meetingUrl && (
                  <p className="text-sm text-gray-300">
                    Meeting link has been sent to your email
                  </p>
                )}
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-6">
                  Book a one-on-one consultation to discuss your training needs and get
                  answers to any questions you may have about our courses.
                </p>
                <ZoomScheduler onScheduled={handleMeetingScheduled} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 