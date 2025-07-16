import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500/40 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-500/30 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400/50 rounded-full animate-float animation-delay-300"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-yellow-400/40 rounded-full animate-float animation-delay-1500"></div>
      
      {/* Floating code symbols */}
      <div className="absolute top-1/5 left-1/5 text-cyan-400/20 text-2xl animate-float animation-delay-500 font-mono">{'<>'}</div>
      <div className="absolute bottom-1/5 right-1/6 text-purple-400/20 text-xl animate-float animation-delay-1200 font-mono">{'{}'}</div>
      <div className="absolute top-2/3 left-1/6 text-pink-400/20 text-lg animate-float animation-delay-800 font-mono">[]</div>
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
        </defs>
        <path
          d="M 0,100 Q 150,50 300,100 T 600,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 100,0 Q 200,150 300,50 T 500,150"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse animation-delay-1000"
        />
      </svg>
    </div>
  );
};

export default FloatingElements;