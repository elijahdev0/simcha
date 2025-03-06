
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-tactical-900/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-tactical-950/80 backdrop-blur-sm py-3'
      }`}
    >
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:block bg-tactical-900 border-b border-tactical-800 py-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-tactical-300">
              <a href="tel:+3725555555" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone size={14} />
                <span>+372 5555 5555</span>
              </a>
              <a href="mailto:info@tactical-elite.ee" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail size={14} />
                <span>info@tactical-elite.ee</span>
              </a>
            </div>
            <div className="text-sm text-tactical-300">
              <span>Estonia's Premier Tactical Training Facility</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center space-x-3"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-brandRed rounded">
                <span className="font-military font-bold text-white text-lg">TE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-military font-bold text-xl tracking-wider text-white">
                  TACTICAL ELITE
                </span>
                <span className="text-xs uppercase tracking-widest text-tactical-300">
                  ESTONIA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide ${
                location.pathname === '/' ? 'text-white' : 'text-tactical-200 hover:text-white'
              } transition-colors duration-200`}
            >
              HOME
            </Link>
            
            <div className="relative">
              <button 
                className={`flex items-center space-x-1 text-sm font-medium tracking-wide ${
                  location.pathname.includes('/courses') ? 'text-white' : 'text-tactical-200 hover:text-white'
                } transition-colors duration-200`}
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <span>COURSES</span>
                <ChevronDown size={14} />
              </button>
              
              {isCoursesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-tactical-900 border border-tactical-800 rounded shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                >
                  <Link to="/courses#basic" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                    Basic Combat Training
                  </Link>
                  <Link to="/courses#advanced" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                    Advanced Firearms Handling
                  </Link>
                  <Link to="/courses#executive" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                    Executive Protection
                  </Link>
                  <Link to="/courses#vip" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                    VIP Close Protection
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide ${
                location.pathname === '/about' ? 'text-white' : 'text-tactical-200 hover:text-white'
              } transition-colors duration-200`}
            >
              ABOUT US
            </Link>
            
            <Link 
              to="/facilities" 
              className={`text-sm font-medium tracking-wide ${
                location.pathname === '/facilities' ? 'text-white' : 'text-tactical-200 hover:text-white'
              } transition-colors duration-200`}
            >
              FACILITIES
            </Link>
            
            <Link 
              to="/booking" 
              className="px-5 py-2 bg-brandRed hover:bg-brandRed-hover text-white text-sm font-medium rounded transition-colors duration-300"
            >
              BOOK TRAINING
            </Link>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tactical-900 border-t border-tactical-800 mt-2">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`py-2 text-sm font-medium tracking-wide ${
                  location.pathname === '/' ? 'text-white' : 'text-tactical-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              
              <button 
                className={`flex items-center justify-between w-full py-2 text-sm font-medium tracking-wide ${
                  location.pathname.includes('/courses') ? 'text-white' : 'text-tactical-200'
                }`}
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
              >
                <span>COURSES</span>
                <ChevronDown size={14} className={`transform transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCoursesDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-tactical-700">
                  <Link 
                    to="/courses#basic" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Basic Combat Training
                  </Link>
                  <Link 
                    to="/courses#advanced" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Advanced Firearms Handling
                  </Link>
                  <Link 
                    to="/courses#executive" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Executive Protection
                  </Link>
                  <Link 
                    to="/courses#vip" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    VIP Close Protection
                  </Link>
                </div>
              )}
              
              <Link 
                to="/about" 
                className={`py-2 text-sm font-medium tracking-wide ${
                  location.pathname === '/about' ? 'text-white' : 'text-tactical-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              
              <Link 
                to="/facilities" 
                className={`py-2 text-sm font-medium tracking-wide ${
                  location.pathname === '/facilities' ? 'text-white' : 'text-tactical-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FACILITIES
              </Link>
              
              <Link 
                to="/booking" 
                className="mt-2 px-4 py-2 bg-brandRed hover:bg-brandRed-hover text-white text-sm font-medium rounded transition-colors duration-300 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK TRAINING
              </Link>
              
              <div className="pt-4 border-t border-tactical-800 mt-2 space-y-2">
                <a href="tel:+3725555555" className="flex items-center space-x-2 text-sm text-tactical-300 hover:text-white transition-colors">
                  <Phone size={14} />
                  <span>+372 5555 5555</span>
                </a>
                <a href="mailto:info@tactical-elite.ee" className="flex items-center space-x-2 text-sm text-tactical-300 hover:text-white transition-colors">
                  <Mail size={14} />
                  <span>info@tactical-elite.ee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
