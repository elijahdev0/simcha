import { useEffect } from 'react';

const BookNowPayLater = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-tactical-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Book Now Pay Later</h2>
          <p className="text-tactical-200 mb-6">Reserve your spot today with just your contact information.</p>
          <div data-paperform-id="iacalbhz" data-takeover="1"></div>
        </div>
      </div>
    </div>
  );
};

export default BookNowPayLater;