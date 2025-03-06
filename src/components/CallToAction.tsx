
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-tactical-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMThoNnptMCAxMmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZoMzB2LTZjLTYuNjMgMC0xMi01LjM3LTEyLTEyeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20 bg-tactical-900"></div>
      
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brandRed opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold-500 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-tactical-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-tactical-700 p-3 rounded-full">
                  <Shield size={24} className="text-brandRed" />
                </div>
                <div className="text-lg text-white font-military font-bold">BECOME TACTICALLY PREPARED</div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-military font-bold text-white mb-6 tracking-wide">
                READY TO ELEVATE YOUR<br />
                <span className="text-gradient">TACTICAL CAPABILITIES?</span>
              </h2>
              
              <p className="text-tactical-200 mb-8">
                Join our elite training programs and gain the skills, confidence, and preparedness needed in today's uncertain world. Whether you're an executive, security professional, or concerned civilian, we have the right course for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-tactical-700 rounded-lg p-4">
                  <div className="text-lg font-bold text-white mb-1">Next Basic Course</div>
                  <div className="text-tactical-300">May 15-17, 2023</div>
                </div>
                <div className="bg-tactical-700 rounded-lg p-4">
                  <div className="text-lg font-bold text-white mb-1">Limited Spots</div>
                  <div className="text-tactical-300">Small groups for optimal training</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/booking" className="btn-primary">
                  <span>BOOK YOUR TRAINING</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/courses" className="btn-secondary">
                  EXPLORE ALL COURSES
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1604497181015-76590d828b75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tactical Training" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tactical-900 to-transparent"></div>
              
              {/* Overlaid Content */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="text-white font-bold text-lg mb-2">CLIENT TESTIMONIAL</div>
                <p className="text-white italic text-sm mb-4">
                  "The training exceeded all expectations. I now have skills and confidence I never thought possible."
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-medium text-sm">J. Peterson</div>
                    <div className="text-tactical-300 text-xs">Business Executive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
