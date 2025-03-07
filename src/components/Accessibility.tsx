import React from 'react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-tactical-900 pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-white mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-tactical-200 mb-6">
              Bald Eagle Tactical is committed to providing a website that is accessible to the widest possible audience, 
              regardless of technology or ability. We actively work to ensure our site is in compliance with the Web Content 
              Accessibility Guidelines (WCAG) 2.1.
            </p>

            <p className="text-tactical-200 mb-6">
              We aim to make our website as accessible as possible for all users, including those with disabilities.
            </p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">Compliance and Measures</h2>
            <ul className="list-disc pl-6 text-tactical-200 mb-6">
              <li>We follow the Web Content Accessibility Guidelines (WCAG) 2.1.</li>
              <li>Our efforts include designing user-friendly navigation, ensuring keyboard accessibility, and offering alternative text for images.</li>
            </ul>

            <p className="text-tactical-200 mb-6">
              We are dedicated to continually improving our site's accessibility. Regular audits and updates are conducted 
              to address accessibility issues and enhance user experience.
            </p>

            <p className="text-tactical-200">
              We welcome your feedback on the accessibility of our website. If you encounter any issues or have suggestions 
              for improvement, please contact us at{' '}
              <a href="mailto:Menahem@baldeagletactical.com" className="text-brandRed hover:text-brandRed-hover">
                Menahem@baldeagletactical.com
              </a>. We are here to assist and ensure a seamless experience for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility; 