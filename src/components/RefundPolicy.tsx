import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-white mb-8 text-center">
            Refund Policy
          </h1>
          
          <div className="space-y-6 text-tactical-200">
            <div className="bg-tactical-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Payment Structure</h2>
              <div className="space-y-4">
                <p><strong>Two-Day Course:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Initial Deposit: 1000 EUR (non-refundable, due within 10 days of confirmation)</li>
                  <li>Remaining Balance: 1900 EUR (due 15 days before course start)</li>
                  <li>Total Course Fee: 2900 EUR</li>
                </ul>
                <p><strong>Five-Day Course:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Initial Deposit: 1000 EUR (non-refundable, due within 10 days of confirmation)</li>
                  <li>Remaining Balance: 4700 EUR (due 15 days before course start)</li>
                  <li>Total Course Fee: 5700 EUR</li>
                </ul>
                <p><strong>Payment Schedule:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deposit Payment: Within 10 days of registration confirmation</li>
                  <li>Balance Payment: 15 days before course start date</li>
                </ul>
              </div>
            </div>

            <div className="bg-tactical-800 p-6 rounded-lg mt-6">
              <h2 className="text-xl font-bold text-white mb-4">Refund Terms</h2>
              <div className="space-y-4">
                <p><strong>Initial Deposit:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The initial deposit of 1000 EUR is non-refundable under any circumstances.</li>
                  <li>This deposit secures your spot in the seminar and covers initial administrative costs.</li>
                </ul>

                <p><strong>Remaining Balance:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund available if cancellation occurs more than 15 days before the seminar start date.</li>
                  <li>Partial refund (50%) available if cancellation occurs between 7-15 days before the seminar start date.</li>
                  <li>No refund available for cancellations within 7 days of the seminar start date.</li>
                </ul>
              </div>
            </div>

            <div className="bg-tactical-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Special Circumstances</h2>
              <div className="space-y-4">
                <p><strong>Medical Emergencies:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In case of documented medical emergencies preventing attendance, we may consider transferring your registration to a future seminar.</li>
                  <li>Medical documentation must be provided within 7 days of the cancellation.</li>
                </ul>

                <p><strong>Force Majeure:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In the event of natural disasters, political unrest, or other force majeure events, we will work with participants to find suitable alternatives.</li>
                  <li>Such cases will be evaluated on an individual basis.</li>
                </ul>
              </div>
            </div>

            <div className="bg-tactical-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Refund Process</h2>
              <div className="space-y-4">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Submit a written refund request to our administrative team.</li>
                  <li>Include your registration details and reason for cancellation.</li>
                  <li>For medical emergencies, attach relevant documentation.</li>
                  <li>Refund requests will be processed within 5-7 business days.</li>
                  <li>Approved refunds will be issued to the original payment method.</li>
                  <li>Processing time for refunds may vary depending on your payment provider.</li>
                </ol>
              </div>
            </div>

            <div className="bg-tactical-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              <p>For any questions regarding our refund policy or to submit a refund request, please contact our administrative team at:</p>
              <p className="mt-2"><strong>Email:</strong> Menahem@baldeagletactical.com</p>
              <p><strong>Phone:</strong> +44 7982 369701</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 