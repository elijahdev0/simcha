import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-tactical-200 mb-6">
              Welcome to Bald Eagle Tactical. By accessing and using our website, you agree to comply with these Terms and Conditions. 
              If you do not agree, please refrain from using our services.
            </p>

            <ul className="list-disc pl-6 text-tactical-200 space-y-4">
              <li>The content on this website is for informational purposes only and may be updated without notice.</li>
              <li>Unauthorized use of this site may result in legal action.</li>
              <li>You agree not to misuse our website, including attempting to gain unauthorized access or transmitting harmful software.</li>
              <li>All services, including tactical training seminars, are subject to availability.</li>
              <li>Payments must be completed before participation. Refund policies are outlined separately.</li>
              <li>We reserve the right to refuse service to anyone for any reason.</li>
              <li>Bald Eagle Tactical is not responsible for any injuries, damages, or losses resulting from participation in our services.</li>
              <li>We do not guarantee that the website will always be error-free or uninterrupted.</li>
              <li>All content, logos, and trademarks on this site are the property of Bald Eagle Tactical and cannot be used without permission.</li>
              <li>Unauthorized reproduction or distribution of materials is prohibited.</li>
              <li>Your use of this website is also governed by our Privacy Policy, which outlines how we handle your personal data.</li>
              <li>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date.</li>
              <li>These terms are governed by the applicable laws of Estonia. Any disputes will be subject to the jurisdiction of local courts.</li>
            </ul>

            <div className="mt-8">
              <p className="text-tactical-200">
                For any inquiries regarding these Terms and Conditions, please contact us at{' '}
                <a href="mailto:Menahem@baldeagletactical.com" className="text-brandRed hover:text-brandRed-hover">
                  Menahem@baldeagletactical.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 