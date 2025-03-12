import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

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
              <a href="https://wa.me/447982369701" className="flex items-center space-x-2 hover:text-white transition-colors">
                <MessageCircle size={14} />
                <span>📞 Chat with Us on WhatsApp</span>
              </a>
              <a href="tel:+447982369701" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone size={14} />
                <span>+44 7982 369701</span>
              </a>
              <a href="mailto:Menahem@baldeagletactical.com" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail size={14} />
                <span>Menahem@baldeagletactical.com</span>
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
              <div className="flex items-center justify-center h-14">
                <img 
                  src="/images/logo.png" 
                  alt="Bald Eagle Tactical" 
                  className="h-12 w-auto object-contain"
                />
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
              
              <div 
                className="absolute top-full left-0"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                {isCoursesDropdownOpen && (
                  <div className="w-56 bg-tactical-900 border border-tactical-800 rounded shadow-lg py-2 z-50">
                    <Link to="/courses#tactical-seminars" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                      Tactical Seminars
                    </Link>
                    <Link to="/courses#private-security" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                      Private Security
                    </Link>
                    <Link to="/accessibility" className="block px-4 py-2 text-sm text-tactical-200 hover:bg-tactical-800 hover:text-white transition-colors duration-200">
                      Accessibility Statement
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide ${
                location.pathname === '/about' ? 'text-white' : 'text-tactical-200 hover:text-white'
              } transition-colors duration-200`}
            >
              ABOUT US
            </Link>

            {isLoggedIn ? (
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium tracking-wide ${
                  location.pathname === '/dashboard' ? 'text-white' : 'text-tactical-200 hover:text-white'
                } transition-colors duration-200`}
              >
                DASHBOARD
              </Link>
            ) : (
              <Link 
                to="/login" 
                className={`text-sm font-medium tracking-wide ${
                  location.pathname === '/login' ? 'text-white' : 'text-tactical-200 hover:text-white'
                } transition-colors duration-200`}
              >
                LOGIN
              </Link>
            )}
            
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
                    to="/courses#tactical-seminars" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tactical Seminars
                  </Link>
                  <Link 
                    to="/courses#private-security" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Private Security
                  </Link>
                  <Link 
                    to="/accessibility" 
                    className="text-sm text-tactical-300 hover:text-white transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accessibility Statement
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

              {isLoggedIn ? (
                <Link 
                  to="/dashboard" 
                  className={`py-2 text-sm font-medium tracking-wide ${
                    location.pathname === '/dashboard' ? 'text-white' : 'text-tactical-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  DASHBOARD
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className={`py-2 text-sm font-medium tracking-wide ${
                    location.pathname === '/login' ? 'text-white' : 'text-tactical-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOGIN
                </Link>
              )}
              
              <Link 
                to="/booking" 
                className="mt-2 px-4 py-2 bg-brandRed hover:bg-brandRed-hover text-white text-sm font-medium rounded transition-colors duration-300 inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK TRAINING
              </Link>
              
              <div className="pt-4 border-t border-tactical-800 mt-2 space-y-2">
                <a href="https://wa.me/447982369701" className="flex items-center space-x-2 text-sm text-tactical-300 hover:text-white transition-colors">
                  <MessageCircle size={14} />
                  <span>📞 Chat with Us on WhatsApp</span>
                </a>
                <a href="tel:+447982369701" className="flex items-center space-x-2 text-sm text-tactical-300 hover:text-white transition-colors">
                  <Phone size={14} />
                  <span>+44 7982 369701</span>
                </a>
                <a href="mailto:Menahem@baldeagletactical.com" className="flex items-center space-x-2 text-sm text-tactical-300 hover:text-white transition-colors">
                  <Mail size={14} />
                  <span>Menahem@baldeagletactical.com</span>
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
