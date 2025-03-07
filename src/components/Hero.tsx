import React from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Master Tactical Excellence
          </h1>
          
          <div className="space-y-6 text-tactical-200 mb-8">
            <p className="text-lg md:text-xl">
              In a world where violence, uncertainty, and complex threats are increasingly prevalent, the ability to protect yourself and perform under pressure is essential, not optional.
            </p>
            <p className="text-lg md:text-xl">
              This training empowers you with the skills to respond decisively, think strategically, and adapt to high-stress situations. Whether it's safeguarding yourself and your loved ones, leading with confidence, or understanding when to follow and execute, these capabilities extend beyond personal security into business and daily life.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Our goal is to equip you for any challenge that comes your way.
            </p>
          </div>

          <div className="bg-tactical-800/50 backdrop-blur-sm p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why This Training Is Essential</h2>
            <p className="text-tactical-200 mb-6">
              Join our immersive tactical seminar in Estonia at the S-Arms Shooting Range, designed for those seeking real-world firearms training, security operations knowledge, and high-intensity tactical drills. Whether you're an experienced professional or looking to sharpen your skills, this seminar provides cutting-edge instruction in a controlled, high-performance environment.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-3">Who Can Attend?</h3>
            <p className="text-tactical-200">
              Our seminar is open to both professionals and civilians with a serious interest in tactical training and self-defense. No prior military or law enforcement experience is required, but a solid understanding of firearm safety is recommended.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-brandRed hover:bg-brandRed-hover text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              View Available Courses
            </Link>
            <Link
              to="/booking"
              className="bg-tactical-800 hover:bg-tactical-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Book Your Training
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 