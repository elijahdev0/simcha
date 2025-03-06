
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
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
              Premium tactical equipment for professionals and enthusiasts. Quality you can trust when it matters most.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tactical-400" />
                <a href="mailto:info@baldeagletactical.com" className="hover:text-white transition-colors duration-200">
                  info@baldeagletactical.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tactical-400" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tactical-400 mt-1" />
                <span>
                  123 Tactical Way<br />
                  Anytown, USA 12345
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
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
                <Link to="/category/firearms" className="hover:text-white transition-colors duration-200">
                  Firearms
                </Link>
              </li>
              <li>
                <Link to="/category/ammunition" className="hover:text-white transition-colors duration-200">
                  Ammunition
                </Link>
              </li>
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
              <a href="#" className="text-tactical-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-tactical-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-tactical-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-tactical-400 hover:text-white transition-colors duration-200">
                <Youtube size={20} />
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
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/refund" className="hover:text-white transition-colors duration-200">
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
