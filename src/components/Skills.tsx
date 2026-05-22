import React from 'react';
import { Smartphone, Layers, Boxes, Cloud, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const groups = [
    {
      category: 'Mobile',
      icon: Smartphone,
      tag: 'mobile',
      items: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 95 },
        { name: 'Android', level: 85 },
        { name: 'iOS', level: 80 },
      ],
    },
    {
      category: 'Architecture',
      icon: Layers,
      tag: 'arch',
      items: [
        { name: 'Clean Architecture', level: 90 },
        { name: 'MVVM', level: 85 },
        { name: 'MVC', level: 85 },
        { name: 'SOLID Principles', level: 90 },
      ],
    },
    {
      category: 'State Management',
      icon: Boxes,
      tag: 'state',
      items: [
        { name: 'Bloc', level: 95 },
        { name: 'GetX', level: 85 },
        { name: 'Provider', level: 85 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: Cloud,
      tag: 'backend',
      items: [
        { name: 'RESTful APIs', level: 90 },
        { name: 'Firebase Auth', level: 90 },
        { name: 'Firestore', level: 90 },
        { name: 'FCM (Push)', level: 85 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: Wrench,
      tag: 'devops',
      items: [
        { name: 'Git', level: 90 },
        { name: 'GoRouter', level: 85 },
        { name: 'Google Maps', level: 85 },
        { name: 'CI/CD (GH Actions, Codemagic)', level: 80 },
      ],
    },
  ];

  const levelLabel = (l: number) =>
    l >= 90 ? 'expert' : l >= 80 ? 'advanced' : l >= 70 ? 'proficient' : 'familiar';

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 animate-fade-in-up">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              [ 02 ] Skills
            </div>
            <h2 className="font-heading font-bold text-fg text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-3xl">
              The stack I build with.
            </h2>
            <p className="text-fg-muted mt-4 max-w-xl">
              Five years of compound practice — the systems I trust to ship
              production-grade mobile apps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group, gi) => (
            <div
              key={group.category}
              className="bg-bg-elev border border-border rounded-2xl p-7 hover-lift hover:border-border-strong animate-fade-in-up"
              style={{ animationDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bg border border-border text-accent">
                    <group.icon size={18} />
                  </div>
                  <h3 className="font-heading text-fg text-xl">{group.category}</h3>
                </div>
                <span className="font-mono text-xs text-fg-subtle">
                  &lt;{group.tag}/&gt;
                </span>
              </div>

              <div className="space-y-4">
                {group.items.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${gi * 100 + i * 60}ms` }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-fg text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                        {levelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="relative h-1 bg-bg rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-deep via-accent to-accent-bright rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies row */}
        <div className="mt-12 bg-bg-elev border border-border rounded-2xl p-7 animate-fade-in-up">
          <div className="flex items-center justify-between mb-5 pb-5 border-b border-border">
            <h3 className="font-heading text-fg text-xl">Core Competencies</h3>
            <span className="font-mono text-xs text-fg-subtle">&lt;soft-skills/&gt;</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Leadership', 'Team Management', 'Problem Solving', 'Agile / Scrum',
              'Cross-functional Collaboration', 'Technical Mentoring',
              'Stakeholder Communication', 'Code Review & QA', 'Performance Optimization',
            ].map((c) => (
              <span key={c} className="px-3 py-1.5 font-mono text-xs bg-bg text-fg-muted border border-border rounded-md hover:text-accent hover:border-accent/40 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
