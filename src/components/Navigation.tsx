import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent font-heading">
            Rahul.dev
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item ? 'text-primary bg-primary/10' : 'text-text-light hover:text-primary hover:bg-background-light'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full ${
                  activeSection === item ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop Only */}
          <div className="hidden md:flex items-center space-x-1 ml-2 pl-2 border-l border-background-lighter">
            <a 
              href="https://github.com/RahulDev-flutter" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-text-light hover:text-primary hover:bg-background-light rounded-md transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rvofficials?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-text-light hover:text-primary hover:bg-background-light rounded-md transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:rahulverma0549@gmail.com" 
              aria-label="Email"
              className="p-2 text-text-light hover:text-primary hover:bg-background-light rounded-md transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative p-2 rounded-md bg-background-light/50 backdrop-blur-sm hover:bg-background-light transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} size={24} />
              <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} size={24} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col h-full justify-center items-center space-y-4 p-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`py-3 px-6 text-lg font-medium rounded-lg w-64 text-center transition-all duration-300 ${
                  activeSection === item ? 'bg-primary/20 text-primary' : 'text-text-light hover:bg-background-light'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
            
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-background-lighter w-64 justify-center">
              <a 
                href="https://github.com/RahulDev-flutter" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-light text-text-light hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rvofficials?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-light text-text-light hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rahulverma0549@gmail.com" 
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background-light text-text-light hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;