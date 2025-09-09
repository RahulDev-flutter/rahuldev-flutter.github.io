import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
  ];

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="pt-12 md:pt-20 pb-6 md:pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to top button */}
        <div className="flex justify-center mb-8 md:mb-12">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="md:size-20" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12 border-b border-background-lighter pb-8 md:pb-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl md:text-2xl font-bold font-heading text-text mb-3 md:mb-4">Rahul Vishwakarma</div>
            <p className="text-sm md:text-base text-text-muted text-center md:text-left mb-4 md:mb-6 max-w-xs">
              A passionate Flutter developer creating beautiful, high-performance mobile applications.  
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="md:size-18" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-semibold text-text mb-4 md:mb-6 font-heading">Quick Links</h3>
            <nav className="flex flex-col space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-sm md:text-base text-text-muted hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg font-semibold text-text mb-4 md:mb-6 font-heading">Contact Info</h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-text-muted">
              <p>Bangalore, India</p>
              <p>contact@example.com</p>
              <p>+1 (234) 567-890</p>
            </div>
          </div>
        </div>
        
        {/* Copyright and Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 md:pt-6">
          <div className="text-text-muted text-xs md:text-sm mb-3 md:mb-0">
            © {new Date().getFullYear()} Rahul Vishwakarma. All rights reserved.
          </div>
          <div className="text-text-muted text-xs md:text-sm">
            Designed with <span className="text-accent">♥</span> by Rahul Vishwakarma
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;