import { useState } from 'react';

const BookNowPayLater = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-tactical-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Book Now Pay Later</h2>
          <p className="text-tactical-200 mb-6">Reserve your spot today with just your contact information.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-tactical-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tactical-800 border border-tactical-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brandRed"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-tactical-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tactical-800 border border-tactical-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brandRed"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-tactical-200 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tactical-800 border border-tactical-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brandRed"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-brandRed hover:bg-brandRed-hover text-white font-medium rounded-md transition-colors duration-300"
            >
              Reserve Your Spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowPayLater; 