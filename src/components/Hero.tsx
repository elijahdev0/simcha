import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Siren } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-tactical-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="/20241128_142334~2.jpg"
          alt="Tactical Training"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Bald Eagle Tactical
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading italic text-brandRed mb-6">
            Sharpen Your Axe
          </h2>
          
          <div className="space-y-6 text-tactical-200 mb-8">
            <p className="text-lg md:text-xl font-semibold">
              Excellence Through Professional Training
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-brandRed hover:bg-brandRed-hover text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <span>Secure Your Spot – Limited Availability</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/booking#consultation"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <span>Schedule a Call – Talk to an Instructor</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-tactical-800/50 rounded-lg">
              <Shield className="w-8 h-8 text-brandRed mb-3" />
              <p className="text-white font-medium">Firearms & CQB Training</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-tactical-800/50 rounded-lg">
              <Target className="w-8 h-8 text-brandRed mb-3" />
              <p className="text-white font-medium">Stress-Testing & Combat Readiness</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-tactical-800/50 rounded-lg">
              <Siren className="w-8 h-8 text-brandRed mb-3" />
              <p className="text-white font-medium">Real-World Life Saving Scenarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 