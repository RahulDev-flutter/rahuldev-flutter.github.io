import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import FloatingElements from './FloatingElements';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Senior Flutter Developer',
    'Flutter Specialist',
    'Mobile App Developer',
    'Team Lead'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div 
            className="order-2 md:order-1 text-center md:text-left"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs md:text-sm font-medium animate-fade-in-up">
                <span>👋 Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up font-heading">
                <span className="block text-text mb-1 md:mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent">
                  Rahul Verma
                </span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl text-text-light h-10 md:h-12 animate-fade-in-up animation-delay-300 font-heading">
                <span className="inline-block transition-all duration-500 transform">
                  {roles[currentRole]}
                </span>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-text-muted animate-fade-in-up animation-delay-600 max-w-xl mx-auto md:mx-0">
                Senior Flutter Developer with 3+ years of experience leading teams and building
                scalable mobile applications. Specialized in performance optimization and complex UI implementations.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 animate-fade-in-up animation-delay-800">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transform hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>View My Work</span>
                  <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
                </button>

                <a
                  href="/cv.pdf"
                  download="Rahul_Verma_CV.pdf"
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-primary/50 rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
                >
                  <Download size={16} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                  <span>Download CV</span>
                </a>
              </div>
              
              <div className="flex gap-4 pt-4 justify-center md:justify-start animate-fade-in-up animation-delay-1000">
                <a href="https://github.com/RahulDev-flutter" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/rvofficials?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:rahulverma0549@gmail.com" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image/Visual */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end items-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 w-32 sm:w-40 h-32 sm:h-40 bg-primary/10 rounded-full filter blur-xl animate-pulse opacity-70"></div>
              <div className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 w-32 sm:w-40 h-32 sm:h-40 bg-secondary/10 rounded-full filter blur-xl animate-pulse opacity-70 animation-delay-500"></div>
              
              {/* Main profile container */}
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 p-1 animate-pulse-glow shadow-xl">
                <div className="w-full h-full rounded-xl bg-background-light flex items-center justify-center overflow-hidden border border-background-lighter/50">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-accent-light bg-clip-text text-transparent font-heading">
                    RV
                  </div>
                </div>
              </div>
              
              {/* Tech badges */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 px-3 sm:px-4 py-1.5 sm:py-2 bg-background-light rounded-lg border border-primary/20 shadow-lg animate-float text-sm sm:text-base">
                <span className="text-primary font-medium">Flutter</span>
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 px-3 sm:px-4 py-1.5 sm:py-2 bg-background-light rounded-lg border border-secondary/20 shadow-lg animate-float animation-delay-500 text-sm sm:text-base">
                <span className="text-secondary font-medium">Dart</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - hidden on mobile, visible on medium screens and up */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-text-muted flex items-center justify-center">
            <div className="w-1 h-3 bg-text-muted rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mobile-friendly scroll indicator - only visible on small screens */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce block md:hidden">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};






export default Hero;