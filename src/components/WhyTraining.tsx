
import { useEffect, useRef, useState } from 'react';
import { Check, ShieldAlert, BrainCircuit, Target, Users } from 'lucide-react';

const WhyTraining = () => {
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

  const benefits = [
    "Advanced firearms handling and marksmanship",
    "Close-quarters combat techniques",
    "Situational awareness in high-pressure scenarios",
    "Executive protection protocols",
    "Tactical decision-making under stress",
    "Defensive driving and escape techniques"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-tactical-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brandRed opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-military font-bold text-white mb-4 tracking-wide">
            WHY TACTICAL TRAINING IS <span className="text-gradient">ESSENTIAL</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-tactical-200 mt-4">
            In today's unpredictable world, tactical preparedness isn't just for military and law enforcement—it's a vital skill for executives, high-net-worth individuals, and civilians who understand the value of self-protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className={`bg-tactical-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <div className="p-6">
              <div className="bg-tactical-700 inline-flex p-3 rounded-lg mb-4">
                <ShieldAlert size={28} className="text-brandRed" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Security</h3>
              <p className="text-tactical-300 mb-4">
                Violence and threats can occur anywhere. Our training gives you the skills to protect yourself and your loved ones in any scenario.
              </p>
              <div className="mt-2 text-sm text-tactical-100">
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-brandRed mt-1"><Check size={14} /></span>
                  <span>91% of our clients report increased confidence in high-risk situations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`bg-tactical-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="p-6">
              <div className="bg-tactical-700 inline-flex p-3 rounded-lg mb-4">
                <BrainCircuit size={28} className="text-brandRed" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mental Resilience</h3>
              <p className="text-tactical-300 mb-4">
                Tactical training builds mental toughness and decision-making skills that translate to business, leadership, and daily life challenges.
              </p>
              <div className="mt-2 text-sm text-tactical-100">
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-brandRed mt-1"><Check size={14} /></span>
                  <span>Our training scenarios simulate real-world stress to build true resilience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`bg-tactical-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="p-6">
              <div className="bg-tactical-700 inline-flex p-3 rounded-lg mb-4">
                <Target size={28} className="text-brandRed" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical Skills</h3>
              <p className="text-tactical-300 mb-4">
                From firearms proficiency to hand-to-hand combat, our curriculum provides actionable skills for real-world application.
              </p>
              <div className="mt-2 text-sm text-tactical-100">
                <div className="flex items-start space-x-2 mb-2">
                  <span className="text-brandRed mt-1"><Check size={14} /></span>
                  <span>All techniques are field-tested by former special operations professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <h3 className="text-2xl font-military font-bold text-white mb-4 tracking-wide">SKILLS YOU'LL MASTER</h3>
            <div className="divider"></div>
            <p className="text-tactical-200 mb-6">
              Our comprehensive training programs are designed to build competence and confidence across a spectrum of tactical disciplines:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-tactical-700 p-1 rounded-full text-brandRed mt-1">
                    <Check size={14} />
                  </div>
                  <span className="text-tactical-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="aspect-video bg-tactical-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1595675024853-33b9a26899c7?q=80&w=1000" 
                alt="Tactical Training" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-950 to-transparent opacity-60"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center hover:bg-brandRed-hover transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="white" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-bold">Watch: Real-World Applications of Tactical Training</h4>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-tactical-800 p-4 rounded-lg border border-tactical-700 shadow-lg">
              <div className="flex items-center space-x-3">
                <Users size={24} className="text-brandRed" />
                <div>
                  <div className="text-2xl font-bold text-white">1,500+</div>
                  <div className="text-sm text-tactical-300">Trained Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTraining;
