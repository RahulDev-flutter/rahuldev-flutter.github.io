import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>and</span>
            <Code className="text-cyan-400" size={16} />
            <span>by Rahul Verma</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rahul Verma. All rights reserved.
          </p>
          
          <div className="mt-4 text-xs text-gray-600">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;