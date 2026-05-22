import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'OneTick Technology Pvt. Ltd.',
      location: 'Faridabad, India',
      period: 'Dec 2025 — Present',
      year: '2025',
      current: true,
      description:
        'Architecting a modular Flutter codebase with Bloc + clean architecture, and leading a small team to ship a high-traffic financial product.',
      technologies: ['Flutter', 'Bloc', 'Clean Architecture', 'Leadership'],
      achievements: [
        'Architected a modular Flutter app using Bloc + clean architecture — 30% drop in state-related bugs',
        'Led a team of 3 developers shipping a high-traffic financial app',
        'Drove 40% reduction in load times and 25% increase in user retention',
      ],
    },
    {
      title: 'Senior Flutter Developer',
      company: 'Almond AI',
      location: 'Gurugram, India',
      period: 'Mar 2024 — Nov 2025',
      year: '2024',
      description:
        'Refactored legacy mobile codebases for performance and maintainability, and wired up real-time sync for the social platform.',
      technologies: ['Flutter', 'Firebase', 'Refactoring', 'Real-time Sync'],
      achievements: [
        'Refactored legacy codebases to improve performance and maintainability',
        'Implemented real-time data sync via Firebase for social features',
        'Owned UX-critical screens end-to-end across iOS and Android',
      ],
    },
    {
      title: 'Senior Flutter Developer',
      company: 'Codewire Tech Pvt. Ltd.',
      location: 'Faridabad, India',
      period: 'Sep 2022 — Feb 2024',
      year: '2022',
      description:
        'Spearheaded a school bus tracking platform with Google Maps and shipped CI/CD pipelines that compressed dev cycles.',
      technologies: ['Flutter', 'Google Maps', 'GitHub Actions', 'Codemagic'],
      achievements: [
        'Spearheaded a school bus tracking system with real-time Google Maps integration',
        'Reduced development cycle time by 20% via CI/CD on GitHub Actions + Codemagic',
        'Owned code reviews and raised the codebase quality bar',
      ],
    },
    {
      title: 'Junior Flutter Developer',
      company: 'Soumya Technology',
      location: 'Rajasthan, India',
      period: 'Jan 2021 — Sep 2022',
      year: '2021',
      description:
        'Started as a trainee and grew into a junior dev role, delivering Flutter apps end-to-end across multiple verticals.',
      technologies: ['Flutter', 'Dart', 'Google Maps', 'Firebase'],
      achievements: [
        'Delivered 8+ projects from concept to production',
        'Built real-time location tracking using Google Maps + Firebase',
        'Established foundational skills in Flutter, Dart, and mobile architecture',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 animate-fade-in-up">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              [ 03 ] Experience
            </div>
            <h2 className="font-heading font-bold text-fg text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-3xl">
              Five years.<br className="hidden md:block" />
              Four teams. One craft.
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border"></div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${i}`}
                className="relative pl-8 md:pl-14 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* node */}
                <div className="absolute left-0 top-3 flex items-center">
                  <div className={`w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 ${
                    exp.current ? 'border-accent bg-accent/20' : 'border-border-strong bg-bg-elev'
                  } flex items-center justify-center`}>
                    {exp.current && <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse"></span>}
                  </div>
                </div>

                <div className="group bg-bg-elev border border-border rounded-2xl p-6 md:p-8 hover-lift hover:border-border-strong transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-accent">{exp.year}</span>
                        <span className="font-mono text-xs text-fg-subtle">·</span>
                        <span className="font-mono text-xs text-fg-subtle">{exp.period}</span>
                        {exp.current && (
                          <span className="ml-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-widest">
                            current
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-fg text-xl md:text-2xl mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-fg-muted">
                        <span className="text-fg font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1 text-fg-subtle">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="hidden md:block text-fg-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>

                  <p className="text-fg-muted leading-relaxed mb-5">{exp.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm text-fg-muted">
                        <span className="text-accent font-mono mt-1">+</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 font-mono text-xs bg-bg text-fg-muted border border-border rounded-md">
                        {t}
                      </span>
                    ))}
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
