
import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className="relative h-screen min-h-[700px] w-full bg-tactical-950 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(204, 0, 0, 0.15), transparent 500px)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMThoNnptMCAxMmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZoMzB2LTZjLTYuNjMgMC0xMi01LjM3LTEyLTEyeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20 bg-tactical-900"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tactical-950"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-tactical-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full self-start animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-brandRed"></span>
              <span className="text-sm font-medium tracking-wide text-white">Estonia's Elite Tactical Training</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-military font-bold text-white hero-text-shadow leading-tight animate-fade-up tracking-wider">
              MASTER TACTICAL SKILLS. <br className="hidden md:block" />
              PERFORM UNDER PRESSURE. <br className="hidden md:block" />
              <span className="text-gradient">SHARPEN YOUR AX.</span>
            </h1>
            
            <p className="text-lg text-tactical-100 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Premium tactical training for professionals, executives, and civilians who demand the highest level of personal security and operational readiness.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <Link to="/booking" className="btn-primary">
                <span>JOIN OUR ELITE TRAINING</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/courses" className="btn-secondary">
                EXPLORE COURSES
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full z-0 opacity-20 md:opacity-70 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-tactical-950 via-transparent to-transparent z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover object-center"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-army-crew-doing-search-and-rescue-9623-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Features */}
      <div className="absolute bottom-0 left-0 right-0 bg-tactical-900/80 backdrop-blur-sm border-t border-tactical-800 py-6 hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-tactical-800 p-3 rounded-full">
                <Shield size={24} className="text-brandRed" />
              </div>
              <div>
                <h3 className="text-white font-medium">Elite Protection</h3>
                <p className="text-sm text-tactical-300">Advanced security training</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-tactical-800 p-3 rounded-full">
                <Target size={24} className="text-brandRed" />
              </div>
              <div>
                <h3 className="text-white font-medium">Premium Facilities</h3>
                <p className="text-sm text-tactical-300">State-of-the-art shooting range</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-tactical-800 p-3 rounded-full">
                <Users size={24} className="text-brandRed" />
              </div>
              <div>
                <h3 className="text-white font-medium">Veteran Instructors</h3>
                <p className="text-sm text-tactical-300">Former special forces personnel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
