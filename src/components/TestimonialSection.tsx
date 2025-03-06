
import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const testimonials = [
    {
      quote: "The training at Tactical Elite has completely transformed my understanding of personal security. As a CEO who travels frequently, the skills I've gained are invaluable.",
      name: "M. Järvik",
      title: "CEO, Technology Firm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Our executive team completed the VIP Close Protection course, and the level of professionalism was exceptional. The scenarios were realistic and the instructors world-class.",
      name: "A. Kask",
      title: "Security Director, International Corporation",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "I never imagined I'd feel so confident handling firearms and tactical situations. The instructors made complex skills accessible even for someone with no prior experience.",
      name: "E. Tamm",
      title: "Private Individual",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-tactical-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brandRed opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-military font-bold text-white mb-4 tracking-wide">
            CLIENT <span className="text-gradient">SUCCESS STORIES</span>
          </h2>
          <div className="divider mx-auto"></div>
          <p className="text-tactical-200 mt-4">
            Hear from executives, professionals, and individuals who have transformed their security capabilities with our tactical training programs.
          </p>
        </div>

        <div 
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-tactical-800 rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <Quote size={40} className="text-brandRed opacity-40" />
                    </div>
                    
                    <p className="text-tactical-100 text-lg mb-6 italic">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-14 h-14 rounded-full object-cover" 
                    />
                    <div>
                      <div className="text-white font-bold">{testimonials[activeTestimonial].name}</div>
                      <div className="text-tactical-300 text-sm">{testimonials[activeTestimonial].title}</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative hidden lg:block">
                  <img 
                    src="https://images.unsplash.com/photo-1571721795195-a2d50c3a50dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Tactical Training" 
                    className="w-full h-full object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-tactical-900/70"></div>
                  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6">
                    <div className="text-white font-military text-3xl font-bold mb-2">98%</div>
                    <div className="text-white text-sm">Client satisfaction rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute -bottom-5 right-8 flex space-x-2">
              <button 
                onClick={handlePrev}
                className="bg-tactical-700 hover:bg-tactical-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="bg-brandRed hover:bg-brandRed-hover w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-brandRed w-4' 
                  : 'bg-tactical-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-tactical-800 rounded-lg p-6 text-center">
            <div className="text-3xl lg:text-4xl font-military font-bold text-white mb-2">1,500+</div>
            <div className="text-tactical-300">Trained Professionals</div>
          </div>
          <div className="bg-tactical-800 rounded-lg p-6 text-center">
            <div className="text-3xl lg:text-4xl font-military font-bold text-white mb-2">25+</div>
            <div className="text-tactical-300">Corporate Clients</div>
          </div>
          <div className="bg-tactical-800 rounded-lg p-6 text-center">
            <div className="text-3xl lg:text-4xl font-military font-bold text-white mb-2">15+</div>
            <div className="text-tactical-300">Years Experience</div>
          </div>
          <div className="bg-tactical-800 rounded-lg p-6 text-center">
            <div className="text-3xl lg:text-4xl font-military font-bold text-white mb-2">98%</div>
            <div className="text-tactical-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
