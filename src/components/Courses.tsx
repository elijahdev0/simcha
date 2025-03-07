import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, EuroIcon } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Two-Day Tactical Basics",
      duration: "2 Days",
      dates: "17-19 March 2025",
      location: "Estonia",
      price: 2900,
      description: "Essential tactical training covering critical skills and firearms handling for beginners and enthusiasts.",
      image: "/images/1.jpeg",
    },
    {
      id: 2,
      name: "Five-Day Tactical Masterclass",
      duration: "5 Days",
      dates: "March 23-27, 2025",
      location: "Estonia",
      price: 5700,
      description: "Expert tactical training focusing on strategy, leadership, and security.",
      image: "/images/20241128_142359.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl font-heading font-bold text-white mb-4">
            Our Training Courses
          </h1>
          <p className="text-tactical-200">
            Choose from our selection of professional tactical training courses, 
            designed to meet the needs of security professionals and enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-tactical-800 rounded-lg overflow-hidden border border-tactical-700"
            >
              <div className="relative h-48 bg-tactical-950">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute top-2 left-2 bg-brandRed px-3 py-1 text-sm font-medium text-white rounded">
                  {course.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                
                <div className="flex items-center text-tactical-100 mb-2">
                  <Calendar size={16} className="mr-2 text-brandRed" />
                  <span>{course.dates}</span>
                </div>
                
                <div className="flex items-center text-tactical-100 mb-2">
                  <MapPin size={16} className="mr-2 text-brandRed" />
                  <span>{course.location}</span>
                </div>
                
                <p className="text-tactical-200 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <EuroIcon size={18} className="text-white mr-1" />
                    <div className="text-2xl font-bold text-white">{course.price.toLocaleString('en-US')}</div>
                  </div>
                  <Link 
                    to="/booking" 
                    className="bg-brandRed hover:bg-brandRed-hover text-white px-6 py-2 rounded transition-colors duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses; 