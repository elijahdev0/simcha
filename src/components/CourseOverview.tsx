
import { useState } from 'react';
import { ArrowRight, Shield, Target, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseOverview = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const courses = [
    {
      id: 'basic',
      title: 'Basic Combat Training',
      description: 'A foundational course for civilians and professionals seeking to develop essential tactical skills and self-defense capabilities.',
      duration: '3 Days',
      price: '€1,950',
      features: [
        'Firearms safety and handling',
        'Basic marksmanship principles',
        'Introduction to tactical movement',
        'Situational awareness training',
        'Defensive tactics fundamentals'
      ],
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'advanced',
      title: 'Advanced Firearms Handling',
      description: 'An intensive program for those looking to master advanced firearms techniques and tactical shooting under pressure.',
      duration: '5 Days',
      price: '€3,450',
      features: [
        'Advanced shooting positions',
        'Dynamic target engagement',
        'Low-light/no-light shooting',
        'Moving and shooting techniques',
        'Stress-induced performance training'
      ],
      image: 'https://images.unsplash.com/photo-1585076491348-7fc2a3590df0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'executive',
      title: 'Executive Protection',
      description: 'Specialized training for executives, high-net-worth individuals, and their security teams to enhance personal safety protocols.',
      duration: '7 Days',
      price: '€5,950',
      features: [
        'Threat assessment and mitigation',
        'Protective formations and movements',
        'Vehicle operations and security',
        'Emergency medical response',
        'Communication and team coordination'
      ],
      image: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'vip',
      title: 'VIP Close Protection',
      description: 'Our premium offering for VIPs requiring the highest level of protection training and custom security protocols.',
      duration: '10 Days',
      price: 'Contact for Pricing',
      features: [
        'Advanced threat analysis',
        'Private facility training',
        'Custom security team integration',
        'International travel security',
        'Comprehensive protection planning'
      ],
      image: 'https://images.unsplash.com/photo-1611499374760-31a1f7a58f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const activeCourse = courses.find(course => course.id === activeTab) || courses[0];

  return (
    <section className="py-24 bg-tactical-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-brandRed opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-military font-bold text-white mb-4 tracking-wide">
            ELITE <span className="text-gradient">TRAINING PROGRAMS</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-tactical-200 mt-4">
            Our tactical training courses are designed for different experience levels and specific security needs. Each program combines classroom instruction with intensive practical exercises.
          </p>
        </div>

        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={`px-4 py-2 md:px-6 md:py-3 text-sm font-medium transition-colors duration-300 rounded ${
                activeTab === course.id 
                  ? 'bg-brandRed text-white' 
                  : 'bg-tactical-800 text-tactical-200 hover:bg-tactical-700 hover:text-white'
              }`}
            >
              {course.title}
            </button>
          ))}
        </div>

        {/* Active Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Course Info */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <h3 className="text-2xl font-military font-bold text-white mb-3">{activeCourse.title}</h3>
            <p className="text-tactical-200 mb-6">{activeCourse.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-tactical-800 rounded-lg p-4">
                <div className="text-sm text-tactical-300">Duration</div>
                <div className="text-xl font-bold text-white">{activeCourse.duration}</div>
              </div>
              <div className="bg-tactical-800 rounded-lg p-4">
                <div className="text-sm text-tactical-300">Investment</div>
                <div className="text-xl font-bold text-white">{activeCourse.price}</div>
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-4">What You'll Learn:</h4>
            <ul className="space-y-3 mb-8">
              {activeCourse.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-tactical-700 p-1 rounded-full text-brandRed mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-tactical-100">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-4">
              <Link to="/booking" className="btn-primary">
                <span>BOOK THIS COURSE</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/courses" className="btn-secondary">
                VIEW DETAILS
              </Link>
            </div>
          </div>
          
          {/* Course Image */}
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={activeCourse.image}
                  alt={activeCourse.title} 
                  className="w-full h-[400px] object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-950 via-transparent to-transparent opacity-70"></div>
              </div>
              
              {/* Course Badge */}
              <div className="absolute top-4 right-4 bg-brandRed px-3 py-1 rounded text-sm font-bold text-white">
                {activeTab === 'vip' ? 'PREMIUM' : 'FEATURED'}
              </div>
              
              {/* Features */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-tactical-900/90 backdrop-blur-sm p-3 rounded-lg flex flex-col items-center text-center">
                    <Shield className="text-brandRed mb-1" size={20} />
                    <div className="text-xs text-white">Expert Training</div>
                  </div>
                  <div className="bg-tactical-900/90 backdrop-blur-sm p-3 rounded-lg flex flex-col items-center text-center">
                    <Target className="text-brandRed mb-1" size={20} />
                    <div className="text-xs text-white">Live-Fire Exercises</div>
                  </div>
                  <div className="bg-tactical-900/90 backdrop-blur-sm p-3 rounded-lg flex flex-col items-center text-center">
                    <Users className="text-brandRed mb-1" size={20} />
                    <div className="text-xs text-white">Small Group Sizes</div>
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="absolute -bottom-5 right-8 bg-tactical-800 rounded-lg px-4 py-2 shadow-lg border border-tactical-700">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <Star size={16} className="text-gold-400 fill-gold-400" />
                  <span className="text-white font-bold ml-2">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

function Check(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 24} 
      height={props.size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
