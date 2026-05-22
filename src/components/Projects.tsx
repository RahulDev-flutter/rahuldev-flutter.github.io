import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, MapPin, Users, FileText, Briefcase, Wallet, Terminal, Sparkles, ShoppingCart, Apple, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: 'package' | 'oss' | 'app' | 'enterprise';
  platform: 'github' | 'play' | 'appstore' | 'both';
  featured: boolean;
  icon: React.ElementType;
  liveUrl?: string;
  githubUrl?: string;
  cta?: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'apps' | 'oss'>('all');

  const projects: Project[] = [
    {
      title: 'ComplygateID',
      subtitle: 'iOS · Identity & RTW (UK)',
      description:
        'iOS app for Complygate\'s Right-to-Work identity verification. Secure document scan, KYC flows, and status tracking — shipped to the App Store.',
      technologies: ['Flutter', 'iOS', 'Identity', 'KYC', 'Secure auth'],
      category: 'enterprise',
      platform: 'appstore',
      featured: true,
      icon: Apple,
      liveUrl: 'https://apps.apple.com/in/app/complygateid/id6444381146',
      cta: 'App Store',
    },
    {
      title: 'Complygate — Right to Work',
      subtitle: 'Android · Identity & RTW (UK)',
      description:
        'Android counterpart of the Complygate Right-to-Work platform. Live on Google Play, used by UK employers and applicants for compliant identity checks.',
      technologies: ['Flutter', 'Android', 'Identity', 'Bloc', 'REST'],
      category: 'enterprise',
      platform: 'play',
      featured: true,
      icon: Smartphone,
      liveUrl: 'https://play.google.com/store/apps/details?id=uk.co.complygate.righttowork&hl=en_IN',
      cta: 'Google Play',
    },
    {
      title: 'Takse Service Mall',
      subtitle: 'Gov-tech · Government services',
      description:
        'Government services app with document management, secure auth, and citizen application tracking. Live on Google Play.',
      technologies: ['Flutter', 'Auth', 'Document mgmt', 'REST'],
      category: 'app',
      platform: 'play',
      featured: true,
      icon: FileText,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.taksemall.app&hl=en_IN',
      cta: 'Google Play',
    },
    {
      title: 'Somany — Almonds',
      subtitle: 'Enterprise · Business platform',
      description:
        'Enterprise-grade business app built at Almond AI — live on Google Play. Owned UX-critical flows and Firebase real-time sync.',
      technologies: ['Flutter', 'Firebase', 'Bloc', 'Real-time sync'],
      category: 'enterprise',
      platform: 'play',
      featured: false,
      icon: Briefcase,
      liveUrl: 'https://play.google.com/store/apps/details?id=com.almonds.somany',
      cta: 'Google Play',
    },
    {
      title: 'blocx_cli',
      subtitle: 'Open source · Flutter CLI',
      description:
        'Command-line tool that scaffolds Flutter projects following Bloc + clean architecture conventions. Less boilerplate, more shipping.',
      technologies: ['Dart', 'CLI', 'Bloc', 'Clean Architecture'],
      category: 'package',
      platform: 'github',
      featured: true,
      icon: Terminal,
      githubUrl: 'https://github.com/RahulDev-flutter/blocx_cli',
      cta: 'Repo',
    },
    {
      title: 'dynamic_island',
      subtitle: 'Open source · Flutter package',
      description:
        'A Flutter implementation of the Dynamic Island UI — drop-in widgets that mimic the iOS pill expand/contract behaviour.',
      technologies: ['Flutter', 'Dart', 'Animations', 'UI'],
      category: 'package',
      platform: 'github',
      featured: false,
      icon: Sparkles,
      githubUrl: 'https://github.com/RahulDev-flutter/dynamic_island',
      cta: 'Repo',
    },
    {
      title: 'National Youth Party',
      subtitle: 'Open source · Civic app',
      description:
        'Open-source mobile application for the National Youth Party — member management, events, and content distribution.',
      technologies: ['Flutter', 'Firebase', 'Auth'],
      category: 'oss',
      platform: 'github',
      featured: false,
      icon: Users,
      githubUrl: 'https://github.com/RahulDev-flutter/National_Youth_Party',
      cta: 'Repo',
    },
    {
      title: 'HR Bachat Nidhi',
      subtitle: 'Fintech · Collection app',
      description:
        'Daily collection app with real-time location tracking and offline-first architecture for field-agent financial transactions.',
      technologies: ['Flutter', 'Bloc', 'Offline-first', 'Google Maps'],
      category: 'app',
      platform: 'github',
      featured: false,
      icon: Wallet,
    },
    {
      title: 'School Bus Tracking',
      subtitle: 'Mobility · Real-time GPS',
      description:
        'GPS tracking with push notifications and role-based access for parents, drivers, and school admins.',
      technologies: ['Flutter', 'Google Maps', 'FCM', 'Firebase'],
      category: 'app',
      platform: 'github',
      featured: false,
      icon: MapPin,
    },
    {
      title: 'Vegon Mode',
      subtitle: 'E-commerce · Grocery',
      description:
        'E-commerce grocery app with payment gateway integration, cart, and a smooth checkout flow.',
      technologies: ['Flutter', 'Provider', 'Payment Gateway', 'REST'],
      category: 'app',
      platform: 'github',
      featured: false,
      icon: ShoppingCart,
    },
  ];

  const apps = projects.filter((p) => p.category === 'app' || p.category === 'enterprise');
  const oss = projects.filter((p) => p.category === 'package' || p.category === 'oss');
  const displayProjects =
    activeTab === 'all' ? projects : activeTab === 'apps' ? apps : oss;

  const tabs: { id: typeof activeTab; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'apps', label: 'Apps', count: apps.length },
    { id: 'oss', label: 'Open Source', count: oss.length },
  ];

  const platformBadge = (p: Project['platform']) => {
    if (p === 'play') return 'Google Play';
    if (p === 'appstore') return 'App Store';
    if (p === 'github') return 'GitHub';
    return 'Live';
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-fade-in-up">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              [ 04 ] Selected work
            </div>
            <h2 className="font-heading font-bold text-fg text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-3xl">
              Things I've shipped.
            </h2>
            <p className="text-fg-muted mt-4 max-w-xl">
              Production apps on Google Play and the App Store — plus open-source
              Flutter packages and CLIs.
            </p>
          </div>

          {/* Tabs */}
          <div className="inline-flex p-1 rounded-full bg-bg-elev border border-border self-start md:self-end">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  activeTab === t.id ? 'bg-accent text-bg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {t.label}
                <span className={`font-mono text-[10px] ${activeTab === t.id ? 'opacity-70' : 'text-fg-subtle'}`}>
                  {String(t.count).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayProjects.map((project, index) => {
            const primaryHref = project.liveUrl || project.githubUrl;
            return (
              <article
                key={project.title}
                className="group relative bg-bg-elev border border-border rounded-2xl p-7 md:p-8 hover-lift hover:border-accent/30 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-bg border border-border text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                      <project.icon size={20} />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent px-2 py-1 rounded-full border border-accent/30 bg-accent/5">
                          Featured
                        </span>
                      )}
                      <span className="font-mono text-xs text-fg-subtle">/{platformBadge(project.platform).toLowerCase().replace(' ', '-')}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-fg text-2xl md:text-3xl mb-1 tracking-tight">{project.title}</h3>
                  <div className="font-mono text-xs text-fg-subtle mb-4">{project.subtitle}</div>

                  <p className="text-fg-muted leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 font-mono text-xs bg-bg text-fg-muted border border-border rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
                        >
                          <ExternalLink size={14} />
                          {project.cta || 'Live'}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-accent transition-colors"
                        >
                          <Github size={14} />
                          Source
                        </a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <span className="text-xs font-mono text-fg-subtle">private</span>
                      )}
                    </div>
                    {primaryHref ? (
                      <a
                        href={primaryHref}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-mono text-fg-subtle group-hover:text-accent transition-colors"
                      >
                        Open
                        <ArrowUpRight
                          size={14}
                          className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                        />
                      </a>
                    ) : (
                      <ArrowUpRight size={16} className="text-fg-subtle" />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View more */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a
            href="https://github.com/RahulDev-flutter"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-strong text-fg hover:border-accent hover:text-accent transition-all"
          >
            <Github size={16} />
            More on GitHub
            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
