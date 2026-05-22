import React from 'react';
import { Code2, Layers, Zap, Users, Gauge, GraduationCap, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    { icon: Layers, title: 'Clean Architecture', description: 'MVC, MVVM, SOLID — separation that survives change.' },
    { icon: Code2, title: 'State Discipline', description: 'Bloc, GetX, Provider — chosen for the shape of the problem.' },
    { icon: Zap, title: 'Performance', description: '40% faster load times. Frame budgets honoured.' },
    { icon: Users, title: 'Team Leadership', description: 'Led teams of 3+; mentored, reviewed, and shipped.' },
    { icon: Gauge, title: 'CI/CD', description: 'GitHub Actions + Codemagic. 20% shorter dev cycles.' },
    { icon: GraduationCap, title: 'Always Learning', description: 'New tools the moment they earn their place.' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-end justify-between mb-16 animate-fade-in-up">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              [ 01 ] About
            </div>
            <h2 className="font-heading font-bold text-fg text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-3xl">
              I architect and ship Flutter apps<br className="hidden md:block" />
              that <span className="accent-gradient">scale in production</span>.
            </h2>
          </div>
          <div className="hidden lg:block font-mono text-xs text-fg-subtle text-right">
            <div>scroll ↓</div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-20">
          {/* Big intro card */}
          <div className="md:col-span-4 bg-bg-elev border border-border rounded-2xl p-8 md:p-10 hover-lift hover:border-border-strong animate-fade-in-up">
            <div className="space-y-5 text-fg-muted leading-relaxed">
              <p className="text-fg text-lg">
                Senior Flutter Developer with 5+ years delivering high-performance
                mobile applications across iOS and Android.
              </p>
              <p>
                I'm fluent in API integration, state management (Bloc, GetX, Provider),
                Firebase (Auth, Firestore, FCM), and clean architecture. I've shipped
                production work for fintech, e-commerce, social, gov-tech and edtech.
              </p>
              <p>
                Track record: 40% faster load times, 30% fewer state-related bugs via
                Bloc + clean architecture, and 25% retention gains on a high-traffic
                financial app I led with a team of 3.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-accent font-medium group"
            >
              Get in touch
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quote card */}
          <div className="md:col-span-2 bg-bg-elev border border-border rounded-2xl p-8 flex flex-col justify-between hover-lift hover:border-accent/30 animate-fade-in-up animation-delay-100">
            <div className="font-heading text-6xl text-accent leading-none">"</div>
            <p className="font-heading text-fg text-lg leading-snug">
              Architecture isn't decoration — it's the reason features ship next quarter, not next year.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-9 h-9 rounded-full bg-accent text-bg font-mono font-bold flex items-center justify-center text-sm">
                rv
              </div>
              <div>
                <div className="text-fg text-sm font-medium">Rahul Verma</div>
                <div className="text-fg-subtle text-xs font-mono">@RahulDev-flutter</div>
              </div>
            </div>
          </div>

          {/* Domains */}
          <div className="md:col-span-2 bg-bg-elev border border-border rounded-2xl p-6 hover-lift hover:border-accent/30 animate-fade-in-up animation-delay-200">
            <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-3">Domains</div>
            <div className="flex flex-wrap gap-1.5">
              {['fintech', 'e-commerce', 'social', 'edtech', 'gov-tech', 'logistics'].map((d) => (
                <span key={d} className="px-2.5 py-1 font-mono text-xs bg-bg-elev-2 text-fg-muted border border-border rounded-md">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="md:col-span-2 bg-bg-elev border border-border rounded-2xl p-6 hover-lift hover:border-accent/30 animate-fade-in-up animation-delay-300">
            <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-3">Education</div>
            <div className="text-fg font-medium text-sm leading-snug">BCA — Computer Application</div>
            <div className="text-fg-muted text-xs mt-1">UEM, Jaipur</div>
            <div className="text-fg-subtle text-xs font-mono mt-2">Jul 2019 – May 2022</div>
          </div>

          {/* Location */}
          <div className="md:col-span-2 bg-bg-elev border border-border rounded-2xl p-6 hover-lift hover:border-accent/30 animate-fade-in-up animation-delay-400">
            <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-3">Based in</div>
            <div className="font-heading text-fg text-2xl">Faridabad</div>
            <div className="text-fg-muted text-xs mt-1">Haryana, India · GMT+5:30</div>
          </div>
        </div>

        {/* Competencies */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">[ core competencies ]</div>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {qualities.map((q, i) => (
              <div
                key={q.title}
                className="group bg-bg-elev p-7 hover:bg-bg-elev-2 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-bg transition-colors">
                    <q.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-fg text-lg mb-1">{q.title}</h4>
                    <p className="text-fg-muted text-sm leading-relaxed">{q.description}</p>
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
