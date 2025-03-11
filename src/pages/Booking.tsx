
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen bg-tactical-950">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Book Training</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-tactical-200 text-lg">
            Content coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
