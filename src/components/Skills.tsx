import React from 'react';
import { Code, Server, Database, Palette, Globe, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 85 },
        { name: 'Android Studio', level: 80 },
        { name: 'Xcode', level: 75 }
      ],
      color: 'cyan'
    },
    {
      icon: Smartphone,
      title: 'Mobile Platforms',
      skills: [
        { name: 'Android', level: 90 },
        { name: 'iOS', level: 85 },
        { name: 'Cross-Platform', level: 95 },
        { name: 'Responsive Design', level: 90 }
      ],
      color: 'blue'
    },
    {
      icon: Server,
      title: 'Programming Languages',
      skills: [
        { name: 'Dart', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'Kotlin', level: 80 },
        { name: 'JavaScript', level: 75 }
      ],
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Real-time DB', level: 85 }
      ],
      color: 'emerald'
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;