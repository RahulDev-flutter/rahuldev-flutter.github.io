import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fill-opacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className="transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                RV
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Rahul Verma
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 animate-fade-in-up animation-delay-300">
            <span className="inline-block transition-all duration-500 transform">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            Senior Flutter Developer with 3+ years of experience leading teams and building
            scalable mobile applications. Specialized in performance optimization and complex UI implementations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>

            <a
              href="/cv.pdf"
              download="Rahul_Verma_CV.pdf"
              className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-fade-in-up animation-delay-2000">
            <a
              href="https://github.com/RahulDev-flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rvofficials?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rahulverma0549@gmail.com"
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;