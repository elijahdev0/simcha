import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Calendar, MapPin, Clock, EuroIcon, ShieldCheck, Utensils, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  name: string;
  duration: string;
  dates?: string;
  location?: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  dailyBreakdown?: {
    day: string;
    title: string;
    activities: string[];
  }[];
  inclusions?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const courses: Course[] = [
  {
    id: 1,
    name: "Two-Day Tactical Basics",
    duration: "2 Days",
    dates: "April 21-23, 2025",
    location: "Estonia",
    price: 2900,
    description: "Essential tactical training covering critical skills and firearms handling for beginners and enthusiasts.",
    image: "/images/1.jpeg",
    features: [],
    dailyBreakdown: [
      {
        day: "Day 1",
        title: "Tactical Foundations",
        activities: [
          "Firearm safety, handling, and live-fire basics",
          "Dry fire drills and fundamental tactics",
          "Krav Maga: Essential self-defense moves",
          "First aid: Critical life-saving skills"
        ]
      },
      {
        day: "Day 2",
        title: "Tactical Confidence",
        activities: [
          "Live-fire drills for accuracy and control",
          "Team exercises for tactical awareness",
          "Krav Maga: Disarming and close combat",
          "Final review and Q&A"
        ]
      }
    ],
    inclusions: [
      {
        icon: <ShieldCheck size={20} className="text-brandRed" />,
        title: "Accommodation",
        description: "Comfortable accommodation in a private room for two nights at the Hestia Hotel Strand with premium amenities."
      },
      {
        icon: <Truck size={20} className="text-brandRed" />,
        title: "Transportation",
        description: "All seminar-related transportation included, making travel between locations hassle-free."
      },
      {
        icon: <Utensils size={20} className="text-brandRed" />,
        title: "Meals",
        description: "Daily nutritious and well-balanced meals provided throughout the seminar."
      }
    ]
  },
  {
    id: 2,
    name: "Five-Day Tactical Masterclass",
    duration: "5 Days",
    dates: "April 27-May 1, 2025",
    location: "Estonia",
    price: 5700,
    description: "Expert tactical training focusing on strategy, leadership, and security.",
    image: "/images/20241128_142359.jpg",
    features: ["Advanced firearms training", "Close-quarters combat", "Team tactics", "Night operations", "Scenario-based training"],
    dailyBreakdown: [
      {
        day: "Day 1",
        title: "Tactical Foundations",
        activities: [
          "Firearm safety, discipline, and fundamentals",
          "Dry fire, live-fire drills, and self-defense basics",
          "First aid: Rapid emergency response"
        ]
      },
      {
        day: "Day 2",
        title: "Core Skills",
        activities: [
          "Accuracy-focused live-fire drills",
          "Team coordination and tactical fitness",
          "Krav Maga: Disarming and close combat"
        ]
      },
      {
        day: "Day 3",
        title: "High-Pressure Training",
        activities: [
          "Decision-making under fire",
          "Group tactics and multiple attackers",
          "Tactical first aid techniques"
        ]
      },
      {
        day: "Day 4",
        title: "Advanced Tactics",
        activities: [
          "Moving, shooting, and cover use",
          "Real-world team exercises and leadership",
          "Krav Maga: Offensive and defensive transitions"
        ]
      },
      {
        day: "Day 5",
        title: "Final Challenge",
        activities: [
          "Full-scale tactical simulations",
          "Timed drills and stress-based self-defense",
          "Debrief and key lessons"
        ]
      }
    ],
    inclusions: [
      {
        icon: <ShieldCheck size={20} className="text-brandRed" />,
        title: "Accommodation",
        description: "Comfortable accommodation in a private room for five nights at the Hestia Hotel Strand with premium amenities."
      },
      {
        icon: <Truck size={20} className="text-brandRed" />,
        title: "Transportation",
        description: "All seminar-related transportation included, making travel between locations hassle-free."
      },
      {
        icon: <Utensils size={20} className="text-brandRed" />,
        title: "Meals",
        description: "Daily nutritious and well-balanced meals provided throughout the seminar."
      }
    ]
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
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute top-2 left-2 bg-brandRed px-3 py-1 text-sm font-medium text-white rounded">
                  {course.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.name}</h3>
                
                {course.dates && (
                  <div className="flex items-center text-tactical-100 mb-2">
                    <Calendar size={16} className="mr-2 text-brandRed" />
                    <span>{course.dates}</span>
                  </div>
                )}
                
                {course.location && (
                  <div className="flex items-center text-tactical-100 mb-2">
                    <MapPin size={16} className="mr-2 text-brandRed" />
                    <span>{course.location}</span>
                  </div>
                )}
                
                <p className="text-tactical-200 mb-4">{course.description}</p>
                
                {course.dailyBreakdown ? (
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">Course Breakdown:</h4>
                    <div className="space-y-3">
                      {course.dailyBreakdown.slice(0, 2).map((day, i) => (
                        <div key={i} className="border-l-2 border-brandRed pl-3">
                          <div className="flex items-center mb-1">
                            <Clock size={14} className="text-brandRed mr-2" />
                            <span className="text-white font-medium">{day.day}: {day.title}</span>
                          </div>
                          <ul className="text-tactical-200 text-sm">
                            {day.activities.map((activity, j) => (
                              <li key={j} className="flex items-start">
                                <ChevronRight size={14} className="text-brandRed mr-1 mt-1 flex-shrink-0" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {course.dailyBreakdown.length > 2 && (
                        <Link to="/courses" className="text-sm text-brandRed hover:text-brandRed-hover flex items-center">
                          <span>See full course details</span>
                          <ChevronRight size={14} className="ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-tactical-100">
                        <ChevronRight size={16} className="text-brandRed mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {course.inclusions && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {course.inclusions.map((inclusion, i) => (
                      <div key={i} className="bg-tactical-700/50 p-3 rounded">
                        <div className="flex items-center mb-1">
                          {inclusion.icon}
                          <span className="text-white text-sm font-medium ml-2">{inclusion.title}</span>
                        </div>
                        <p className="text-tactical-200 text-xs">{inclusion.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <EuroIcon size={18} className="text-white mr-1" />
                    <div className="text-2xl font-bold text-white">{course.price.toLocaleString('en-US')}</div>
                  </div>
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
