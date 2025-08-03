import React, { useState, useEffect } from 'react';
import GradientBackground from './components/GradientBackground';
import FeatureCard from './components/FeatureCard';
import AnimatedLogo from './components/AnimatedLogo';
import ChatInterface from './components/ChatInterface';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: 'bi bi-code-slash',
      title: 'Full Stack Development',
      description: 'Expert in React, TypeScript, Node.js, and modern web technologies with 20+ years of experience.',
      delay: 'delay-100'
    },
    {
      icon: 'bi bi-palette-fill',
      title: 'UI/UX Design',
      description: 'Creating stunning, user-centric interfaces with Apple-level polish and attention to detail.',
      delay: 'delay-200'
    },
    {
      icon: 'bi bi-database-fill',
      title: 'Database Integration',
      description: 'Seamless integration with Supabase, Firebase, and other modern database solutions.',
      delay: 'delay-300'
    },
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Groq AI Powered',
      description: 'Lightning-fast AI responses powered by Groq for instant development assistance.',
      delay: 'delay-400'
    }
  ];

  if (showChat) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <GradientBackground />
        
        <div className="relative z-10 min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowChat(false)}
                className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300"
              >
                <i className="bi bi-arrow-left text-xl"></i>
                <span>Back to Home</span>
              </button>
              
              <div className="flex items-center gap-2 text-white">
                <i className="bi bi-lightning-charge-fill text-blue-400"></i>
                <span className="text-sm">Powered by WebSparks AI</span>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 min-h-0">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <AnimatedLogo />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hello! I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              WebSparks AI
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-4 leading-relaxed">
            Expert AI-Powered Full Stack Software Engineer
          </p>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Created by Websparks Corporation to deliver exceptional, production-ready applications 
            with cutting-edge technology and award-winning design.
          </p>

          {/* Chat Button */}
          <div className="mb-12">
            <button
              onClick={() => setShowChat(true)}
              className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <i className="bi bi-chat-dots-fill text-xl group-hover:animate-pulse"></i>
              Start Chatting with Groq AI
              <i className="bi bi-arrow-right text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Just tell me what you'd like to create, and I'll build a fully functional, 
              production-ready application with modern design and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                React & TypeScript
              </span>
              <span className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                Tailwind CSS
              </span>
              <span className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                Groq AI Integration
              </span>
              <span className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-green-400"></i>
                Production Ready
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <i className="bi bi-lightning-charge-fill text-blue-400"></i>
              Powered by WebSparks AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
