
import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Tactical Assault Rifle",
    category: "Firearms",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    isBestseller: true
  },
  {
    id: 2,
    name: "Premium Holster",
    category: "Accessories",
    price: 89.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    name: "Tactical Vest",
    category: "Apparel",
    price: 249.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    isNew: true
  },
  {
    id: 4,
    name: "Precision Ammunition",
    category: "Ammunition",
    price: 49.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const categories = ["All", "Firearms", "Ammunition", "Accessories", "Apparel"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
              Featured Products
            </h2>
            <p className="text-tactical-200">
              Browse our selection of premium tactical equipment designed for professionals and enthusiasts alike.
            </p>
          </div>
          
          <div className={`mt-6 md:mt-0 transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <Link to="/shop" className="inline-flex items-center text-tactical-100 hover:text-white transition-colors duration-300">
              <span>View All Products</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className={`flex items-center space-x-2 mb-8 overflow-x-auto pb-2 transition-all duration-700 delay-150 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-tactical-800 text-tactical-100 hover:bg-tactical-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-tactical-800 rounded-lg overflow-hidden border border-tactical-700 product-card-hover transition-all duration-700 delay-${index * 100} ${
                isInView ? 'opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-48 bg-tactical-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-accent px-2 py-1 text-xs font-medium text-white rounded">
                    New
                  </div>
                )}
                {product.isBestseller && (
                  <div className="absolute top-2 left-2 bg-redAccent px-2 py-1 text-xs font-medium text-white rounded">
                    Best Seller
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="text-xs text-tactical-300 mb-1">{product.category}</div>
                <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-tactical-600"}
                      />
                    ))}
                  </div>
                  <span className="text-tactical-300 text-xs ml-1">{product.rating}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-medium text-white">${product.price.toFixed(2)}</div>
                  <button className="bg-tactical-700 hover:bg-tactical-600 text-white p-2 rounded transition-colors duration-200">
                    Add to Cart
                  </button>
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
