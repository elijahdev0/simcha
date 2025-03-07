import React from 'react';

const OneDayCourseForm = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Bald Eagle Tactical 1-Day Course Registration Form
          </h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p><strong>Location:</strong> S-Arms Shooting Range, Estonia</p>
              <p><strong>Duration:</strong> 1 day (8 hours)</p>
              <p><strong>Course Price:</strong> 1500 EUR per participant</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Participant Information</h2>
              <div className="space-y-4">
                <p>Full Name: _______________________________</p>
                <p>Date of Birth (DD/MM/YYYY): _______________________________</p>
                <p>Gender: _______________________________</p>
                <p>Nationality: _______________________________</p>
                <p>Address: _______________________________</p>
                <p>City/State: _______________________________</p>
                <p>Country: _______________________________</p>
                <p>Phone Number: _______________________________</p>
                <p>Email Address: _______________________________</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Emergency Contact Details</h2>
              <div className="space-y-4">
                <p>Full Name: _______________________________</p>
                <p>Relationship: _____________________________</p>
                <p>Phone Number: ___________________________</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Medical Information</h2>
              <div className="space-y-4">
                <p>Do you have any medical conditions or allergies we should be aware of? Yes/No</p>
                <p>If yes, please specify: _________________________________________</p>
                <p>Are you currently taking any medications? Yes/No</p>
                <p>If yes, please list them: ________________________________________</p>
                <p>Do you have any dietary restrictions or food allergies? Yes/No</p>
                <p>If yes, please specify: _________________________________________</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Criminal Background Check</h2>
              <p>Participants must submit a criminal background check from their country of residence.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h2>
              <div className="space-y-2">
                <p><strong>Course Price:</strong> 1500 EUR per participant</p>
                <p><strong>Payment Terms:</strong></p>
                <ul className="list-disc pl-6">
                  <li>A non-refundable deposit of 500 EUR is required to secure your spot.</li>
                  <li>The remaining balance is due 14 days prior to the course start date.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Terms & Conditions</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Photography & Media Release: I grant Bald Eagle Tactical permission to use my image in promotional materials.</li>
                <li>Code of Conduct: Participants are expected to follow all safety protocols and instructions.</li>
                <li>Force Majeure: Bald Eagle Tactical is not liable for course disruptions beyond its control.</li>
                <li>Personal Equipment: Participants are responsible for their personal equipment.</li>
                <li>Refund Policy: All deposits are non-refundable. Cancellations within 14 days are not eligible for refunds.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Liability Waiver and Release of Claims</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Acknowledgment of Risk: Participation involves live-fire exercises and physical activities.</li>
                <li>Release of Liability: I release Bald Eagle Tactical from any liability for injuries or incidents during the course.</li>
                <li>Insurance: Platinum-level insurance is included.</li>
                <li>Criminal Background Check: I confirm I will provide a valid background check before attending.</li>
              </ol>
            </div>

            <div className="mt-8">
              <p>By signing below, I confirm that I have read, understood, and agreed to the terms outlined above.</p>
              <div className="mt-8 space-y-4">
                <p>Participant Signature: ____________________________</p>
                <p>Date: ___________________________</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>For any questions regarding the course or registration process, please contact:</p>
              <p className="mt-2"><strong>Email:</strong> Menahem@baldeagletactical.com</p>
              <p><strong>Phone:</strong> +44 7982 369701</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneDayCourseForm; 