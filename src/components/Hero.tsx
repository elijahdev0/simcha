import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
            <p className="text-lg md:text-xl">
              In a world where violence, uncertainty, and complex threats are increasingly prevalent, the ability to protect yourself and perform under pressure is essential, not optional.
            </p>
            <p className="text-lg md:text-xl">
              This training empowers you with the skills to respond decisively, think strategically, and adapt to high-stress situations. Whether it's safeguarding yourself and your loved ones, leading with confidence, or understanding when to follow and execute, these capabilities extend beyond personal security into daily life.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Our goal is to equip you for any challenge that comes your way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-brandRed hover:bg-brandRed-hover text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <span>Book Training Now</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/booking#consultation"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 