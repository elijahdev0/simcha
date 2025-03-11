
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tactical-950 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-tactical-800 mb-6 text-white text-4xl font-bold">
            404
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-tactical-200 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 px-6 py-3 bg-tactical-800 hover:bg-tactical-700 text-white rounded-md transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
