import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl ${isUser ? 'order-2' : 'order-1'}`}>
        <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
            isUser 
              ? 'bg-gradient-to-r from-blue-500 to-teal-500' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            <i className={`${isUser ? 'bi bi-person-fill' : 'bi bi-lightning-charge-fill'} text-white text-sm`}></i>
          </div>
          
          <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
            <div className={`px-4 py-3 rounded-2xl shadow-lg ${
              isUser 
                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                : 'bg-white/10 backdrop-blur-lg border border-white/20 text-white'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
            </div>
            <span className="text-xs text-slate-400 mt-1 px-2">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
