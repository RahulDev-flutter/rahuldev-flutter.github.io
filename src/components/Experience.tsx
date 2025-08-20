import React from 'react';
import { Calendar, MapPin, Users, Code, Zap, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'Tech Almond AI',
      location: '1214, Tower-A, SPAZE ITECH PARK, Block S, Sector 49, Gurugram, Haryana 122018',
      period: 'March 2024 - Present',
      description: 'Leading development team to deliver high-quality mobile applications with advanced Flutter implementations and performance optimizations.',
      technologies: ['Flutter', 'Dart', 'Team Leadership', 'UI/UX', 'Performance Optimization'],
      achievements: [
        'Lead development team to deliver high-quality mobile applications',
        'Implement complex UI/UX designs with advanced Flutter widgets',
        'Optimize application performance and reduce load times by 40%'
      ],
      color: 'emerald'
    },
    {
      title: 'Senior Flutter Developer',
      company: 'AVC Dotty LLP',
      location: 'C-157, Janak Cinema Community Center Janakpuri Janak Cinema Community Center, 110056, Janakpuri, New Delhi, Delhi, 110056',
      period: 'September 2023 - February 2024',
      description: 'Developed product-based mobile applications using Flutter framework with focus on cross-functional collaboration and feature implementation.',
      technologies: ['Flutter', 'Dart', 'Product Development', 'Cross-functional Teams'],
      achievements: [
        'Developed product-based mobile applications using Flutter framework',
        'Collaborated with cross-functional teams to define and implement features',
        'Delivered scalable mobile solutions for business requirements'
      ],
      color: 'blue'
    },
    {
      title: 'Flutter Developer',
      company: 'Codewire Tech PVT. LTD.',
      location: 'Office No: 7, 3rd floor, Amartex building, Sector-19, Behind Badkhal Mor Metro Station, Faridabad, Haryana 121002',
      period: 'September 2022 - September 2023',
      description: 'Built scalable applications using object-oriented programming principles with focus on code quality and performance improvements.',
      technologies: ['Flutter', 'Dart', 'OOP', 'Code Reviews', 'Testing', 'Bug Fixing'],
      achievements: [
        'Built scalable applications using object-oriented programming principles',
        'Conducted code reviews and testing to ensure application stability',
        'Resolved critical bugs and implemented performance improvements'
      ],
      color: 'purple'
    },
    {
      title: 'Junior Flutter Developer',
      company: 'Soumya Technology',
      location: 'Balaji Vihar, near Tejal College Bheru ji Mod, Reengus, Rajasthan 332404',
      period: 'January 2021 - September 2022',
      description: 'Started as trainee and advanced to junior developer through proven performance, developing foundational skills in Flutter development.',
      technologies: ['Flutter', 'Dart', 'Mobile Architecture', 'Project Deployment'],
      achievements: [
        'Started as trainee and advanced to junior developer through proven performance',
        'Developed foundational skills in Flutter, Dart, and mobile app architecture',
        'Delivered multiple projects from concept to production deployment'
      ],
      color: 'orange'
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r from-${exp.color}-400 to-${exp.color}-600 rounded-full border-4 border-slate-900 hidden md:block group-hover:scale-125 transition-transform duration-300`}></div>
                
                <div className="md:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-4">
                        <span className={`text-${exp.color}-400 font-semibold flex items-center space-x-1`}>
                          <Users size={16} />
                          <span>{exp.company}</span>
                        </span>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Award className={`text-${exp.color}-400`} size={20} />
                      <span>Key Achievements:</span>
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-300">
                          <div className={`w-2 h-2 bg-${exp.color}-400 rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Code className={`text-${exp.color}-400`} size={20} />
                      <span>Technologies Used:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 bg-slate-700 text-${exp.color}-400 rounded-full text-sm font-medium hover:bg-${exp.color}-400 hover:text-slate-900 transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
