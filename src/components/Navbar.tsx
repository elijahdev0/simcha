
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

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
          : 'bg-tactical-950/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Bald Eagle Tactical Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  BALD EAGLE
                </span>
                <span className="text-xs uppercase tracking-widest text-tactical-200">
                  TACTICAL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-white hover:text-accent transition-colors duration-200"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <span>Shop</span>
                <ChevronDown size={16} />
              </button>
              
              {isShopDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-tactical-900 border border-tactical-800 rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                >
                  <Link to="/category/firearms" className="block px-4 py-2 text-sm text-white hover:bg-tactical-800 transition-colors duration-200">
                    Firearms
                  </Link>
                  <Link to="/category/ammunition" className="block px-4 py-2 text-sm text-white hover:bg-tactical-800 transition-colors duration-200">
                    Ammunition
                  </Link>
                  <Link to="/category/accessories" className="block px-4 py-2 text-sm text-white hover:bg-tactical-800 transition-colors duration-200">
                    Accessories
                  </Link>
                  <Link to="/category/apparel" className="block px-4 py-2 text-sm text-white hover:bg-tactical-800 transition-colors duration-200">
                    Apparel
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-white hover:text-accent transition-colors duration-200">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-accent transition-colors duration-200">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-accent transition-colors duration-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-accent transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-white hover:text-accent transition-colors duration-200">
              <ShoppingCart size={20} />
            </Link>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tactical-900 border-t border-tactical-800 mt-2">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                className="flex items-center justify-between text-white w-full py-2"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                <span>Shop</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isShopDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-tactical-700">
                  <Link to="/category/firearms" className="text-tactical-200 hover:text-white transition-colors duration-200 py-1">
                    Firearms
                  </Link>
                  <Link to="/category/ammunition" className="text-tactical-200 hover:text-white transition-colors duration-200 py-1">
                    Ammunition
                  </Link>
                  <Link to="/category/accessories" className="text-tactical-200 hover:text-white transition-colors duration-200 py-1">
                    Accessories
                  </Link>
                  <Link to="/category/apparel" className="text-tactical-200 hover:text-white transition-colors duration-200 py-1">
                    Apparel
                  </Link>
                </div>
              )}
              
              <Link to="/about" className="text-white py-2">
                About
              </Link>
              <Link to="/services" className="text-white py-2">
                Services
              </Link>
              <Link to="/contact" className="text-white py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
