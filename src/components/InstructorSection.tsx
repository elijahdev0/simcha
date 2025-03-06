
import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Linkedin } from 'lucide-react';

const InstructorSection = () => {
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

  const instructors = [
    {
      name: 'Markus Rünkson',
      title: 'Chief Instructor',
      specialty: 'Close Protection & Tactical Operations',
      bio: 'Former Estonian Defense Forces special operations commander with 15+ years of experience in high-risk environments worldwide.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Kai Tamm',
      title: 'Firearms Instructor',
      specialty: 'Advanced Marksmanship & Weapons Training',
      bio: 'Internationally certified firearms instructor who has trained military and law enforcement personnel across Europe.',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Elina Kask',
      title: 'Threat Assessment Specialist',
      specialty: 'Security Planning & Risk Mitigation',
      bio: 'Former intelligence officer with expertise in executive protection and security risk assessment for high-profile clients.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Hendrik Mägi',
      title: 'Tactical Medical Instructor',
      specialty: 'Combat Medicine & Emergency Response',
      bio: 'Combat medic with extensive field experience, specializing in tactical emergency medical procedures and training.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-tactical-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brandRed opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gold-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-military font-bold text-white mb-4 tracking-wide">
            MEET OUR <span className="text-gradient">EXPERT INSTRUCTORS</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-tactical-200 mt-4">
            Our team consists of former special forces operators, law enforcement professionals, and security specialists with extensive real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className={`bg-tactical-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-64 object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-900 via-transparent to-transparent"></div>
                
                {/* Specialty Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-tactical-900/80 backdrop-blur-sm p-2 rounded-full">
                    <Shield size={20} className="text-brandRed" />
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-brandRed font-medium text-sm">{instructor.title}</p>
                  <a 
                    href={instructor.linkedin} 
                    className="text-tactical-400 hover:text-white transition-colors duration-200"
                    aria-label={`${instructor.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                
                <div className="mb-4 flex items-center space-x-2">
                  <Award size={16} className="text-gold-400" />
                  <span className="text-sm text-tactical-200">{instructor.specialty}</span>
                </div>
                
                <p className="text-tactical-300 text-sm">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-tactical-800 rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-military font-bold text-white mb-4">WHY TRAIN WITH US?</h3>
              <div className="divider"></div>
              <p className="text-tactical-200 mb-6">
                Our instructors bring decades of combined experience from elite military units, law enforcement agencies, and high-risk security operations. We don't just teach theory—we impart real-world tactical knowledge that has been tested in the most challenging environments.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-tactical-700 p-1 rounded-full text-brandRed mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="text-white font-medium">Former Special Forces Operators</span>
                    <p className="text-tactical-300 text-sm">Our core team comes from elite military units</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-tactical-700 p-1 rounded-full text-brandRed mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="text-white font-medium">International Experience</span>
                    <p className="text-tactical-300 text-sm">Operational experience across Europe, Middle East and Africa</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-tactical-700 p-1 rounded-full text-brandRed mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <span className="text-white font-medium">Continuous Training</span>
                    <p className="text-tactical-300 text-sm">Our instructors regularly update their skills with international certifications</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tactical Training Team" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tactical-900 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white font-military text-3xl font-bold mb-2">100+ YEARS</div>
                <div className="text-tactical-200">Combined operational experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;

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
