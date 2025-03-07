import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-tactical-200 mb-6">
              Bald Eagle Tactical values your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-tactical-200 mb-6">
              <li>Personal Information: Name, email, phone number, and any details provided when you sign up for our services.</li>
              <li>Technical Data: IP address, browser type, and cookies to enhance website functionality.</li>
              <li>Payment Information: When applicable, payment processing is securely handled by third-party providers.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-tactical-200 mb-6">
              <li>To provide and improve our services.</li>
              <li>To communicate with you regarding inquiries or services.</li>
              <li>To ensure website security and prevent fraudulent activities.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Data Protection and Security</h2>
            <p className="text-tactical-200 mb-6">
              We implement security measures to protect your personal data from unauthorized access, loss, or disclosure. 
              However, no method of transmission over the internet is entirely secure.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Sharing Your Information</h2>
            <p className="text-tactical-200 mb-4">
              We do not sell or rent your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-tactical-200 mb-6">
              <li>Service Providers: Third parties that assist in website operations or payment processing.</li>
              <li>Legal Authorities: When required by law or to protect our rights.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 text-tactical-200 mb-6">
              <li>You may request access, modification, or deletion of your personal data.</li>
              <li>You can opt out of certain communications at any time.</li>
            </ul>

            <p className="text-tactical-200 mb-6">
              We use cookies to improve user experience. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Contact Information</h2>
            <p className="text-tactical-200 mb-6">
              For privacy-related inquiries, please contact us at{' '}
              <a href="mailto:Menahem@baldeagletactical.com" className="text-brandRed hover:text-brandRed-hover">
                Menahem@baldeagletactical.com
              </a>.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-tactical-200">
              We may update this policy periodically. Changes will be posted on this page with an updated revision date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 