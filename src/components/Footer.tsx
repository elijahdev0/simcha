import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tactical-950 text-tactical-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.png" 
                alt="Bald Eagle Tactical Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  BALD EAGLE
                </span>
                <span className="text-xs uppercase tracking-widest text-tactical-400">
                  TACTICAL
                </span>
              </div>
            </div>
            
            <p className="text-tactical-300 mb-6">
              You are an Axe that needs sharpening. We provide the whetstone for your development, ensuring you're always at your peak performance.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tactical-400" />
                <a href="mailto:Menahem@baldeagletactical.com" className="hover:text-white transition-colors duration-200">
                  Menahem@baldeagletactical.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tactical-400" />
                <a href="tel:+447982369701" className="hover:text-white transition-colors duration-200">
                  +44 7982 369701
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tactical-400 mt-1" />
                <span>
                  S-Arms Shooting Range<br />
                  Tallinn, Estonia
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-white transition-colors duration-200">
                  Book Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/accessories" className="hover:text-white transition-colors duration-200">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/apparel" className="hover:text-white transition-colors duration-200">
                  Apparel
                </Link>
              </li>
              <li>
                <Link to="/category/optics" className="hover:text-white transition-colors duration-200">
                  Optics
                </Link>
              </li>
              <li>
                <Link to="/category/gear" className="hover:text-white transition-colors duration-200">
                  Tactical Gear
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Newsletter</h3>
            <p className="text-tactical-300 mb-4">
              Subscribe to our newsletter to receive updates on new products, special offers, and industry news.
            </p>
            
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-tactical-800 border border-tactical-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-accent text-white"
              />
              <button className="bg-accent hover:bg-accent/80 text-white rounded-r-md px-3 flex items-center justify-center transition-colors duration-200">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/bravosix_631" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tactical-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/baldegltactical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tactical-400 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://youtube.com/@mendel-k1k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tactical-400 hover:text-white transition-colors duration-200"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@baldeagletactical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tactical-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 5.2-2.32V9.39a8.66 8.66 0 0 0 5.52 2.05V7.05a6.83 6.83 0 0 1-3.77-1.36z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-tactical-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bald Eagle Tactical. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="hover:text-white transition-colors duration-200">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
