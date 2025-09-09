import React from 'react';
import { Code, Palette, Zap, Users, Globe, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code with best practices and patterns.'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'I create intuitive interfaces with attention to visual aesthetics and usability.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'I optimize applications for speed and efficiency across all devices.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'I collaborate effectively, communicate clearly, and share knowledge.'
    },
    {
      icon: Globe,
      title: 'Adaptability',
      description: 'I quickly learn new technologies and adapt to changing requirements.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'I stay updated with the latest trends and best practices in development.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs md:text-sm font-medium mb-3 md:mb-4 animate-fade-in-up">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading animate-fade-in-up animation-delay-300">
            <span className="bg-gradient-to-r from-primary-light via-secondary to-accent bg-clip-text text-transparent">
              Flutter Developer & UI/UX Enthusiast
            </span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            Passionate about creating beautiful, high-performance mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image or Avatar with decorative elements */}
          <div className="relative animate-fade-in-up order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-xl animate-pulse opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full filter blur-xl animate-pulse opacity-70 animation-delay-500"></div>
            
            <div className="relative z-10 w-full h-96 bg-gradient-to-br from-background-light to-background rounded-2xl border border-background-lighter/50 p-6 flex items-center justify-center shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 space-y-6 max-w-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 mx-auto">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-light via-secondary-light to-accent-light bg-clip-text text-transparent font-heading">
                    RV
                  </div>
                </div>
                
                <blockquote className="text-lg text-text-light italic">
                  "I believe that great software combines technical excellence with thoughtful design. My goal is to create applications that not only work flawlessly but also provide a delightful user experience."
                </blockquote>
                
                <div className="flex justify-center pt-4">
                  <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="animate-fade-in-up animation-delay-300 order-1 md:order-2">
            <div className="space-y-6">
              <p className="text-text-light leading-relaxed">
                I'm a passionate Senior Flutter Developer with over 3+ years of experience in creating modern, scalable mobile applications. My journey started as a trainee at Soumya Technology and I've grown to lead development teams at Almond AI, consistently delivering high-quality mobile solutions.
              </p>
              <p className="text-text-light leading-relaxed">
                I specialize in Flutter and Dart, with expertise in building complex mobile applications including location-based services, e-commerce platforms, and social media applications. I've successfully optimized app performance by 40% and led cross-functional teams to deliver production-ready applications.
              </p>
              <p className="text-text-light leading-relaxed">
                My experience spans across various domains including fintech, education, e-commerce, and government services. I'm passionate about creating user-centric mobile experiences and mentoring junior developers.
              </p>
              
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 font-medium">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Qualities/Values Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-text mb-10 text-center font-heading">
            What I Bring to the Table
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <div 
                key={quality.title}
                className="bg-background-light p-6 rounded-xl border border-background-lighter hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <quality.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-2">{quality.title}</h4>
                    <p className="text-text-muted text-sm">{quality.description}</p>
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

export default About;