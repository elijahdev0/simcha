import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  name: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: 1,
    name: "2-Day Tactical Training Course",
    duration: "2 Days",
    price: 899.99,
    description: "Intensive 2-day course covering essential tactical skills and firearms handling.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    features: ["Basic firearms handling", "Tactical movement", "Situational awareness", "Safety protocols"]
  },
  {
    id: 2,
    name: "5-Day Advanced Operations Course",
    duration: "5 Days",
    price: 2499.99,
    description: "Comprehensive 5-day program for advanced tactical operations and security procedures.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    features: ["Advanced firearms training", "Close-quarters combat", "Team tactics", "Night operations", "Scenario-based training"]
  }
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-tactical-900 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02YzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMThoNnptMCAxMmg2YzAgOS45NC04LjA2IDE4LTE4IDE4djZoMzB2LTZjLTYuNjMgMC0xMi01LjM3LTEyLTEyeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div className={`max-w-lg transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-tactical-200">
              Premium tactical training courses designed for professionals and enthusiasts seeking elite-level instruction.
            </p>
          </div>
          
          <div className={`mt-6 md:mt-0 transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <Link to="/courses" className="inline-flex items-center text-tactical-100 hover:text-white transition-colors duration-300">
              <span>View All Courses</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`bg-tactical-800 rounded-lg overflow-hidden border border-tactical-700 transition-all duration-700 delay-${index * 100} ${
                isInView ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-48 bg-tactical-950">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-brandRed px-3 py-1 text-sm font-medium text-white rounded">
                  {course.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                <p className="text-tactical-200 mb-4">{course.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-tactical-100">
                      <ChevronRight size={16} className="text-brandRed mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">${course.price.toFixed(2)}</div>
                  <Link 
                    to="/booking" 
                    className="bg-brandRed hover:bg-brandRed-hover text-white px-6 py-2 rounded transition-colors duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
