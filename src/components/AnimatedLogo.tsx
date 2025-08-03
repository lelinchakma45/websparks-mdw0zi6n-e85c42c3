import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="relative bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-4 shadow-2xl">
        <i className="bi bi-lightning-charge-fill text-white text-4xl animate-bounce"></i>
      </div>
    </div>
  );
};

export default AnimatedLogo;
