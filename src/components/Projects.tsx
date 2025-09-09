import React, { useState } from 'react';
import { ExternalLink, Github, Eye, MapPin, Users, ShoppingCart, Award, FileText, Briefcase, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  icon: React.ElementType;
  color: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'other'>('all');
  
  const projects: Project[] = [
    {
      title: 'Bus Tracking App',
      description: 'A comprehensive school bus tracking application where schools and parents can monitor bus locations in real-time. Features driver tracking, student monitoring, and live location updates for enhanced safety and communication.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'GPS Tracking', 'Real-time Updates', 'Parent Dashboard'],
      featured: true,
      icon: MapPin,
      color: 'blue',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/bus-tracking-app'
    },
    {
      title: 'Vegon Mode',
      description: 'An E-commerce application for purchasing grocery products. Features comprehensive product catalog, shopping cart functionality, order management, and seamless checkout experience for grocery shopping.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'E-commerce', 'Payment Integration', 'Product Catalog'],
      featured: false,
      icon: ShoppingCart,
      color: 'green',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/vegon-mode'
    },
    {
      title: 'Zwolf',
      description: 'A comprehensive social media platform combining features of Facebook, LinkedIn, and Instagram. Users can create personal and business accounts, connect professionally, and share content across different social contexts.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Social Media', 'User Profiles', 'Content Sharing'],
      featured: false,
      icon: Users,
      color: 'purple',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/zwolf'
    },
    {
      title: 'IOA (India Online Award)',
      description: 'Business award distribution platform where users can create business profiles, participate in contests, and vote for other businesses. Features comprehensive business networking and recognition system.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Business Profiles', 'Voting System', 'Contest Management'],
      featured: false,
      icon: Award,
      color: 'yellow',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/ioa-awards'
    },
    {
      title: 'Complygate',
      description: 'A comprehensive passport management system streamlining passport application processes, document management, and status tracking for efficient government service delivery.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Document Management', 'Government Services', 'Status Tracking'],
      featured: false,
      icon: FileText,
      color: 'indigo',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/complygate'
    },
    {
      title: 'Taske App',
      description: 'Government scheme application management system enabling citizens to apply for various government schemes, track application status, and manage documentation efficiently.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Government Schemes', 'Application Management', 'Document Processing'],
      featured: false,
      icon: Briefcase,
      color: 'red',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/RahulDev-flutter/taske-app'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  // Determine which projects to display based on active tab
  const displayProjects = activeTab === 'all' ? projects : 
                         activeTab === 'featured' ? featuredProjects : otherProjects;

  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base">
            A collection of applications I've built, showcasing my expertise in mobile development, UI/UX design, and problem-solving.
          </p>
        </div>
        
        {/* Project Filter Tabs - Scrollable on mobile */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0">
          <div className="inline-flex p-1 rounded-lg bg-slate-800/50 backdrop-blur-sm">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === 'all' ? 'bg-emerald-500 text-text shadow-lg' : 'text-text-light hover:text-emerald-400'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('featured')}
              className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === 'featured' ? 'bg-emerald-500 text-text shadow-lg' : 'text-text-light hover:text-emerald-400'}`}
            >
              Featured
            </button>
            <button 
              onClick={() => setActiveTab('other')}
              className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === 'other' ? 'bg-emerald-500 text-text shadow-lg' : 'text-text-light hover:text-emerald-400'}`}
            >
              Other Work
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header with Gradient Overlay */}
              <div className="relative overflow-hidden h-40 md:h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-${project.color}-400 to-${project.color}-600 rounded-full flex items-center justify-center`}>
                    <project.icon size={16} className="text-text md:hidden" />
                    <project.icon size={20} className="text-text hidden md:block" />
                  </div>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4 flex space-x-2">
                  <a 
                    href={project.liveUrl}
                    className="w-7 h-7 md:w-8 md:h-8 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={12} className="text-text md:hidden" />
                    <ExternalLink size={14} className="text-text hidden md:block" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-7 h-7 md:w-8 md:h-8 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github size={12} className="text-text md:hidden" />
                    <Github size={14} className="text-text hidden md:block" />
                  </a>
                </div>
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h4 className="text-lg md:text-xl font-bold text-text">
                    {project.title}
                  </h4>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <p className="text-text-muted mb-4 md:mb-6 flex-1 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 md:px-3 py-0.5 md:py-1 bg-slate-700 text-${project.color}-400 rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 md:px-2 py-0.5 md:py-1 text-text-muted text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-slate-700">
                    <div className="flex space-x-2 md:space-x-3">
                      <a 
                        href={project.liveUrl}
                        className={`flex items-center space-x-1 text-${project.color}-400 hover:text-${project.color}-300 transition-colors duration-300 text-xs md:text-sm`}
                        aria-label="View demo"
                      >
                        <Eye size={12} className="md:hidden" />
                        <Eye size={14} className="hidden md:block" />
                        <span>Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xs md:text-sm"
                        aria-label="View code"
                      >
                        <Github size={12} className="md:hidden" />
                        <Github size={14} className="hidden md:block" />
                        <span>Code</span>
                      </a>
                    </div>
                    
                    <a 
                      href={project.liveUrl}
                      className="text-xs font-medium text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                      aria-label="View project details"
                    >
                      View Details
                      <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300 md:hidden" />
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300 hidden md:block" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-10 md:mt-16">
          <a 
            href="https://github.com/RahulDev-flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-slate-800/50 hover:bg-emerald-500/10 border border-emerald-400/20 rounded-lg text-xs md:text-sm text-emerald-400 transition-all duration-300 group"
            aria-label="View all projects on GitHub"
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 md:hidden" />
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 hidden md:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;