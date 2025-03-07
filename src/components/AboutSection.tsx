import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight, Shield, Clock, Medal } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    "Expert-led tactical training courses",
    "Comprehensive skill development programs",
    "Hands-on practical exercises",
    "Internationally recognized certifications",
    "Professional-grade training facilities",
    "Veteran instructors with real-world experience"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-tactical-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-redAccent opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="inline-flex items-center space-x-2 bg-tactical-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-sm font-medium tracking-wide text-white">About Bald Eagle Tactical</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
              A Legacy of Excellence <br />in Tactical Training
            </h2>
            
            <p className="text-tactical-200 mb-8">
              Founded by veterans with decades of experience in the field, Bald Eagle Tactical is committed to providing 
              world-class tactical training to law enforcement, military personnel, and responsible civilians. Our courses 
              are designed to enhance your skills, build confidence, and ensure safety in high-pressure situations.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="bg-accent/20 text-accent p-1 rounded-full">
                    <Check size={16} />
                  </span>
                  <span className="text-tactical-100">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-tactical-800 hover:bg-tactical-700 text-white rounded-md transition-colors duration-300">
              <span>Learn More About Our Courses</span>
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className={`order-first lg:order-last transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Tactical Training" 
                  className="w-full h-96 object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-950 to-transparent opacity-60"></div>
              </div>
              
              {/* Stats Cards */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                <div className="bg-tactical-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-tactical-800">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-xs text-tactical-300">Years Experience</div>
                </div>
                <div className="bg-tactical-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-tactical-800">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs text-tactical-300">Graduates</div>
                </div>
                <div className="bg-tactical-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-tactical-800">
                  <div className="text-2xl font-bold text-white mb-1">24K+</div>
                  <div className="text-xs text-tactical-300">Training Hours</div>
                </div>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-tactical-800 p-4 rounded-lg shadow-lg border border-tactical-700 flex flex-col items-center text-center">
                <Shield className="text-accent mb-2" size={24} />
                <div className="text-sm font-medium text-white">Expert Training</div>
              </div>
              <div className="bg-tactical-800 p-4 rounded-lg shadow-lg border border-tactical-700 flex flex-col items-center text-center">
                <Clock className="text-accent mb-2" size={24} />
                <div className="text-sm font-medium text-white">Flexible Schedule</div>
              </div>
              <div className="bg-tactical-800 p-4 rounded-lg shadow-lg border border-tactical-700 flex flex-col items-center text-center">
                <Medal className="text-accent mb-2" size={24} />
                <div className="text-sm font-medium text-white">Certified Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
