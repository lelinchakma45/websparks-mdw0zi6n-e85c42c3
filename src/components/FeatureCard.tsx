import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className={`group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up ${delay}`}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <i className={`${icon} text-white text-xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
