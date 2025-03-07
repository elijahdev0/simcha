import React from 'react';

const About = () => {
  return (
    <div className="bg-tactical-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              I SALUTE YOU
            </h2>
            <p className="text-xl text-tactical-200">
              Meet Menahem - Your Expert Instructor
            </p>
          </div>

          <div className="bg-tactical-800 rounded-lg p-8 md:p-12">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-tactical-200 text-lg leading-relaxed">
                  My name is Menahem, and I've dedicated my life to mastering the art of combat and security, training those who protect and serve. My journey began in the Israeli Special Forces, where I served on the front lines in times of war, sharpening my skills in some of the most challenging and high-stakes environments imaginable.
                </p>
              </div>

              {/* Professional Training */}
              <div>
                <p className="text-tactical-200 text-lg leading-relaxed">
                  Following my military service, I pursued further expertise at Israel's most renowned and professional school for bodyguarding, recognized as one of the best in the world. This intensive training refined my abilities in close protection, counter-terrorism, and intelligence operations, equipping me with the advanced skills needed to excel in modern security.
                </p>
              </div>

              {/* International Experience */}
              <div>
                <p className="text-tactical-200 text-lg leading-relaxed">
                  My career then took me to the heart of international diplomacy, where I served in the Israeli Embassy in Moscow, working directly with the ambassador. My experiences in intelligence and security have uniquely equipped me to train and lead, which I've done extensively across Central and West Africa. I've had the privilege of training elite police units, infantry, and counter-terrorism forces, commanding hundreds of men in high-risk operations.
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
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-tactical-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white mb-3">Special Forces Experience</h3>
              <p className="text-tactical-200">
                Front-line service in Israeli Special Forces during wartime operations
              </p>
            </div>
            <div className="bg-tactical-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white mb-3">Elite Training</h3>
              <p className="text-tactical-200">
                Graduate of Israel's premier bodyguarding school with expertise in close protection and counter-terrorism
              </p>
            </div>
            <div className="bg-tactical-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-white mb-3">International Leadership</h3>
              <p className="text-tactical-200">
                Extensive experience training elite units across Central and West Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 