import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-tactical-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-tactical-800 rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <img 
                src="/images/instructor-tactical-2.jpg" 
                alt="Tactical Training Instructor"
                className="w-full h-[600px] object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tactical-900 via-tactical-900/80 to-transparent p-6">
                <h2 className="text-3xl font-heading font-bold text-white mb-2">
                  Elite Tactical Training
                </h2>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-tactical-200 hover:text-white flex items-center gap-2 transition-colors"
                >
                  {isExpanded ? 'Show Less' : 'Learn More About Your Instructor'}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-6 space-y-6">
                {/* Introduction */}
                <div>
                  <p className="text-tactical-200 text-lg leading-relaxed">
                    My name is Menahem, and I've dedicated my life to mastering the art of combat and security, training those who protect and serve. My journey began in the Israeli Special Forces, where I served on the front lines in times of war, sharpening my skills in some of the most challenging and high-stakes environments imaginable.
                  </p>
                </div>

                {/* Professional Training */}
                <div>
                  <p className="text-tactical-200 text-lg leading-relaxed">
                    Following my military service, I pursued further expertise at Israel's most renowned and professional school for bodyguarding, recognized as one of the best in the world. This intensive training refined my abilities in close protection, counter-terrorism, and intelligence operations.
                  </p>
                </div>

                {/* Languages */}
                <div className="pt-4 border-t border-tactical-700">
                  <h3 className="text-xl font-bold text-white mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-tactical-700 rounded-full text-tactical-200">French</span>
                    <span className="px-4 py-2 bg-tactical-700 rounded-full text-tactical-200">English</span>
                    <span className="px-4 py-2 bg-tactical-700 rounded-full text-tactical-200">Hebrew</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="bg-tactical-700 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">Special Forces Experience</h3>
                    <p className="text-tactical-200">Front-line service in Israeli Special Forces</p>
                  </div>
                  <div className="bg-tactical-700 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">Elite Training</h3>
                    <p className="text-tactical-200">Expert in close protection and counter-terrorism</p>
                  </div>
                  <div className="bg-tactical-700 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-2">International Leadership</h3>
                    <p className="text-tactical-200">Extensive experience training elite units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 