import React from 'react';
import { ExternalLink, Github, Eye, MapPin, Users, ShoppingCart, Award, FileText, Briefcase } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'HR Bachat Nidhi',
      description: 'A daily collection app where agents collect money from customers and update through the app. Features real-time location tracking for all agents with database updates. The app requires both internet connectivity and location access for agent operations.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'GPS Tracking', 'Real-time Database', 'Location Services'],
      featured: true,
      icon: MapPin,
      color: 'emerald'
    },
    {
      title: 'Bus Tracking App',
      description: 'A comprehensive school bus tracking application where schools and parents can monitor bus locations in real-time. Features driver tracking, student monitoring, and live location updates for enhanced safety and communication.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'GPS Tracking', 'Real-time Updates', 'Parent Dashboard'],
      featured: true,
      icon: MapPin,
      color: 'blue'
    },
    {
      title: 'Vegon Mode',
      description: 'An E-commerce application for purchasing grocery products. Features comprehensive product catalog, shopping cart functionality, order management, and seamless checkout experience for grocery shopping.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'E-commerce', 'Payment Integration', 'Product Catalog'],
      featured: false,
      icon: ShoppingCart,
      color: 'green'
    },
    {
      title: 'Zwolf',
      description: 'A comprehensive social media platform combining features of Facebook, LinkedIn, and Instagram. Users can create personal and business accounts, connect professionally, and share content across different social contexts.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Social Media', 'User Profiles', 'Content Sharing'],
      featured: false,
      icon: Users,
      color: 'purple'
    },
    {
      title: 'IOA (India Online Award)',
      description: 'Business award distribution platform where users can create business profiles, participate in contests, and vote for other businesses. Features comprehensive business networking and recognition system.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Business Profiles', 'Voting System', 'Contest Management'],
      featured: false,
      icon: Award,
      color: 'yellow'
    },
    {
      title: 'Complygate',
      description: 'A comprehensive passport management system streamlining passport application processes, document management, and status tracking for efficient government service delivery.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Document Management', 'Government Services', 'Status Tracking'],
      featured: false,
      icon: FileText,
      color: 'indigo'
    },
    {
      title: 'Taske App',
      description: 'Government scheme application management system enabling citizens to apply for various government schemes, track application status, and manage documentation efficiently.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Government Schemes', 'Application Management', 'Document Processing'],
      featured: false,
      icon: Briefcase,
      color: 'red'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${project.color}-400 to-${project.color}-600 rounded-full flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={project.liveUrl}
                    className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 bg-slate-700 text-${project.color}-400 rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className={`flex items-center space-x-2 text-${project.color}-400 hover:text-${project.color}-300 transition-colors duration-300`}
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r from-${project.color}-400 to-${project.color}-600 rounded-lg flex items-center justify-center`}>
                    <project.icon size={20} className="text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 bg-slate-700 text-${project.color}-400 rounded text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;