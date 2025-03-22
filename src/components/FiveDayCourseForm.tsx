import React, { useEffect } from "react";

const FiveDayCourseForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div data-paperform-id="rsosz3ry" data-takeover="1"></div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCourseForm; 