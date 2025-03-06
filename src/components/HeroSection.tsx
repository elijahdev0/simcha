
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroElement) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroElement.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroElement.style.setProperty('--mouse-x', `${x}`);
      heroElement.style.setProperty('--mouse-y', `${y}`);
    };
    
    heroElement?.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroElement?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[600px] w-full bg-tactical-950 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(59, 130, 246, 0.15), transparent 400px)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMThoNnptMCAxMmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZoMzB2LTZjLTYuNjMgMC0xMi01LjM3LTEyLTEyeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20 bg-tactical-900"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tactical-950"></div>

      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-tactical-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full self-center md:self-start animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-redAccent"></span>
              <span className="text-sm font-medium tracking-wide text-white">Premium Tactical Equipment</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white hero-text-shadow leading-tight animate-fade-up">
              Professional Grade <br className="hidden md:block" />
              <span className="text-accent">Tactical Equipment</span> <br className="hidden md:block" />
              For Modern Warriors
            </h1>
            
            <p className="text-lg text-tactical-100 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Equip yourself with top-tier tactical gear designed for professionals who demand reliability, precision, and performance.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <button className="px-8 py-3 bg-redAccent hover:bg-redAccent-hover text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg">
                <span>Shop Now</span>
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 bg-transparent hover:bg-tactical-800/50 text-white border border-tactical-700 rounded-md transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-3/4 z-0 opacity-20 md:opacity-70 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-tactical-950 via-transparent to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
          alt="Tactical Equipment" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
