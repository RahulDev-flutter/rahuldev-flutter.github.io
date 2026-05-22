import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-md bg-accent text-bg flex items-center justify-center font-mono font-bold text-sm group-hover:rotate-3 transition-transform">
              rv
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-heading font-semibold text-fg tracking-tight text-sm sm:text-base">
                Rahul Verma
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-fg-subtle tracking-widest uppercase mt-0.5">
                Flutter Dev<span className="text-accent">.</span>
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === item
                    ? 'text-fg'
                    : 'text-fg-muted hover:text-fg'
                }`}
              >
                <span className="font-mono text-fg-subtle text-[10px] mr-1">0{i + 1}</span>
                {item}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-3 right-3 h-px bg-accent"></span>
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1 pl-4 border-l border-border">
            <a
              href="https://github.com/RahulDev-flutter"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-fg-muted hover:text-accent transition-colors"
            ><Github size={18} /></a>
            <a
              href="https://www.linkedin.com/in/rvofficials"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-fg-muted hover:text-accent transition-colors"
            ><Linkedin size={18} /></a>
            <a
              href="mailto:rahulverma0549@gmail.com"
              aria-label="Email"
              className="p-2 text-fg-muted hover:text-accent transition-colors"
            ><Mail size={18} /></a>
            <ThemeSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1 -mr-2">
            <ThemeSwitcher />
            <button
              className="z-50 p-2 text-fg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 top-16 bg-bg/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-6 gap-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => { scrollToSection(item); setIsMenuOpen(false); }}
                className={`flex items-center gap-3 py-4 px-4 rounded-lg text-left text-lg border-b border-border ${
                  activeSection === item ? 'text-accent' : 'text-fg-muted'
                }`}
              >
                <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                <span className="font-heading">{item}</span>
              </button>
            ))}
            <div className="flex gap-3 mt-8">
              <a href="https://github.com/RahulDev-flutter" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3 border border-border rounded-lg flex items-center justify-center gap-2 text-fg-muted">
                <Github size={18} /><span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/rvofficials" target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3 border border-border rounded-lg flex items-center justify-center gap-2 text-fg-muted hover:text-accent hover:border-accent transition-all">
                <Linkedin size={18} /><span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
