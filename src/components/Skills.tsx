import React from 'react';
import { Smartphone, Code2, Server, Wrench, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { 
      category: 'Mobile Development', 
      icon: Smartphone,
      items: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'Android', level: 80 },
        { name: 'iOS', level: 75 },
        { name: 'React Native', level: 70 }
      ] 
    },
    { 
      category: 'Frontend', 
      icon: Code2,
      items: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 90 }
      ] 
    },
    { 
      category: 'Backend', 
      icon: Server,
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 70 }
      ] 
    },
    { 
      category: 'Tools & Others', 
      icon: Wrench,
      items: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'Jira', level: 75 }
      ] 
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-light text-xs md:text-sm font-medium mb-3 md:mb-4 animate-fade-in-up">
            <span>My Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading animate-fade-in-up animation-delay-300">
            <span className="bg-gradient-to-r from-secondary-light via-primary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category} 
              className="bg-background-light p-5 md:p-8 rounded-xl border border-background-lighter hover:border-secondary/20 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 rounded-lg bg-secondary/10 text-secondary">
                  <skillGroup.icon size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text font-heading">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-4 md:space-y-5">
                {skillGroup.items.map(skill => (
                  <div key={skill.name} className="space-y-1.5 md:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-text-light font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => {
                          const filled = Math.round(skill.level / 20) > i;
                          return (
                            <Star 
                              key={i} 
                              size={12} 
                              className={`${filled ? 'text-accent fill-accent' : 'text-background-lighter'} ml-0.5 md:ml-1 md:w-3.5 md:h-3.5`} 
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-1000 ease-out animate-scale-in"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                {skillGroup.items.map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-background text-text-muted rounded-full text-xs md:text-sm font-medium hover:bg-secondary/10 hover:text-secondary transition-colors duration-300"
                  >
                    {skill.name}
                  </span>
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