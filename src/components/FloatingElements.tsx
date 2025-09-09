import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full filter blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full filter blur-3xl animate-float animation-delay-2000 opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full filter blur-3xl animate-float animation-delay-4000 opacity-60"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-[15%] right-[10%] w-10 h-10 md:w-16 md:h-16 border border-primary/20 rounded-lg transform rotate-12 animate-float opacity-80"></div>
      <div className="absolute bottom-[20%] left-[15%] w-8 h-8 md:w-12 md:h-12 border border-secondary/20 rounded-full animate-float animation-delay-2000 opacity-80"></div>
      <div className="absolute top-[60%] right-[20%] w-12 h-12 md:w-20 md:h-20 border border-accent/20 transform rotate-45 animate-float animation-delay-3000 opacity-80"></div>

      {/* Code Symbols */}
      <div className="absolute top-1/4 right-1/4 text-2xl md:text-4xl text-primary/15 font-mono animate-float font-bold">&lt;/&gt;</div>
      <div className="absolute bottom-1/3 left-1/3 text-2xl md:text-4xl text-secondary/15 font-mono animate-float animation-delay-2000 font-bold">{'{}'}</div>
      <div className="absolute top-2/3 right-1/3 text-2xl md:text-4xl text-accent/15 font-mono animate-float animation-delay-4000 font-bold">[]</div>

      {/* Dots Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(var(--primary-rgb),0.03)_1px,_transparent_1px)] bg-[length:16px_16px] md:bg-[length:24px_24px]"></div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full hidden md:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q250,180 500,50 T1000,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          className="animate-pulse-slow"
        />
        <path
          d="M0,150 Q250,280 500,150 T1000,150"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          className="animate-pulse-slow animation-delay-1000"
        />
        <path
          d="M0,250 Q250,380 500,250 T1000,250"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          className="animate-pulse-slow animation-delay-2000"
        />
      </svg>
      
      {/* Animated Particles */}
      <div className="absolute top-1/3 left-1/5 w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary/30 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-accent/30 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/30 rounded-full animate-pulse animation-delay-3000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary/30 rounded-full animate-pulse animation-delay-4000"></div>
    </div>
  );
};

export default FloatingElements;