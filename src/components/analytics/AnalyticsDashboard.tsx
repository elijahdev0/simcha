import React, { useState, useEffect } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';

// This should be a secure, hard-to-guess string
const VALID_SECRET = 'dRx78Kp2wQ9zL';

const AnalyticsDashboard = () => {
  // Simple secret-based access
  const [searchParams] = useSearchParams();
  const secretKey = searchParams.get('key');
  
  // If the secret key doesn't match, redirect to home
  if (secretKey !== VALID_SECRET) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-tactical-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Bald Eagle Tactical - Analytics Dashboard</h1>
      
      <p className="text-tactical-300 mb-6">
        This dashboard provides real-time analytics for your website, powered by Google Analytics.
      </p>
      
      {/* Google Looker Studio Embed */}
      <div className="bg-tactical-800 p-4 rounded-lg mb-8">
        <div className="rounded-lg overflow-hidden w-full h-[800px]">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://lookerstudio.google.com/embed/reporting/1d53638a-56fe-4163-a964-0cd98ecebd32/page/3P7EF" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen 
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </div>
      
      <div className="text-sm text-tactical-400 text-center mt-8">
        <p>This dashboard is powered by Google Looker Studio and connected directly to your Google Analytics account.</p>
        <p className="mt-2">The data updates automatically to provide real-time insights about your website traffic.</p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 