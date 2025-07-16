import React from 'react';
import { Code, Globe, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+', color: 'cyan' },
    { icon: Globe, label: 'Projects Completed', value: '25+', color: 'purple' },
    { icon: Award, label: 'Technologies', value: '15+', color: 'pink' },
    { icon: Users, label: 'Happy Clients', value: '10+', color: 'green' }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate Senior Flutter Developer with over 3+ years of experience 
                in creating modern, scalable mobile applications. My journey started as a trainee 
                at Soumya Technology and I've grown to lead development teams at Almond AI, 
                consistently delivering high-quality mobile solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in Flutter and Dart, with expertise in building complex mobile 
                applications including location-based services, e-commerce platforms, and 
                social media applications. I've successfully optimized app performance by 40% 
                and led cross-functional teams to deliver production-ready applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                My experience spans across various domains including fintech, education, 
                e-commerce, and government services. I'm passionate about creating 
                user-centric mobile experiences and mentoring junior developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                Senior Flutter Developer
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                Team Leader
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">
                Performance Expert
              </span>
              <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                Mobile Architecture
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;