import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Senior Flutter Developer', 'Mobile App Architect', 'Team Lead', 'Clean Architecture Advocate'];

  useEffect(() => {
    const id = setInterval(() => setCurrentRole((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Editorial text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] animate-pulse"></span>
              <span className="font-mono text-xs text-fg-muted uppercase tracking-widest">
                Open to opportunities
              </span>
            </div>

            <h1 className="font-heading font-bold text-fg leading-[0.95] tracking-tightest animate-fade-in-up animation-delay-100
                           text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Building<br />
              mobile apps<br />
              <span className="relative inline-block">
                <span className="accent-gradient">with intention</span>
                <span className="text-accent animate-blink ml-1">_</span>
              </span>
            </h1>

            <div className="mt-8 flex items-center gap-3 font-mono text-sm text-fg-muted animate-fade-in-up animation-delay-300">
              <span className="text-accent">&gt;</span>
              <span className="text-fg-subtle">role:</span>
              <span className="text-fg transition-all duration-500" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>

            <p className="mt-8 text-base md:text-lg text-fg-muted max-w-xl leading-relaxed animate-fade-in-up animation-delay-400">
              Rahul Verma — Senior Flutter Developer with <span className="text-fg">5+ years</span>
              {' '}delivering high-performance mobile apps. I architect with Bloc and
              clean code, integrate Firebase end-to-end, and ship work that holds up in production.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up animation-delay-500">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-bg font-medium hover:bg-accent-bright transition-all"
              >
                View selected work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/cv.pdf"
                download="Rahul_Verma_CV.pdf"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-strong text-fg hover:border-accent hover:text-accent transition-all"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 animate-fade-in-up animation-delay-600">
              <a href="https://github.com/RahulDev-flutter" target="_blank" rel="noopener noreferrer"
                className="text-fg-muted hover:text-accent transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rvofficials" target="_blank" rel="noopener noreferrer"
                className="text-fg-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rahulverma0549@gmail.com"
                className="text-fg-muted hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <div className="h-px flex-1 bg-border"></div>
            </div>
          </div>

          {/* Right: stat card stack */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/5 blur-3xl rounded-full"></div>

              <div className="relative grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-bg-elev border border-border rounded-2xl p-6 hover-lift hover:border-accent/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-fg-subtle uppercase tracking-widest">Now</span>
                    <span className="flex items-center gap-1.5 text-xs text-accent font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                      shipping
                    </span>
                  </div>
                  <p className="text-fg font-heading text-xl leading-snug">
                    Senior Flutter Developer at <span className="text-accent">OneTick Technology</span>
                  </p>
                  <p className="text-fg-muted text-sm mt-2">Faridabad · Dec 2025 → Present</p>
                </div>

                <div className="bg-bg-elev border border-border rounded-2xl p-5 hover-lift hover:border-accent/40">
                  <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-2">Years</div>
                  <div className="font-heading text-4xl text-fg">5+</div>
                  <div className="text-fg-muted text-xs mt-1">in mobile dev</div>
                </div>
                <div className="bg-bg-elev border border-border rounded-2xl p-5 hover-lift hover:border-accent/40">
                  <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-2">Apps</div>
                  <div className="font-heading text-4xl text-fg">10<span className="text-accent">+</span></div>
                  <div className="text-fg-muted text-xs mt-1">shipped to prod</div>
                </div>
                <div className="bg-bg-elev border border-border rounded-2xl p-5 hover-lift hover:border-accent/40">
                  <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-2">Perf</div>
                  <div className="font-heading text-4xl text-fg">+40<span className="text-accent">%</span></div>
                  <div className="text-fg-muted text-xs mt-1">load-time gains</div>
                </div>
                <div className="bg-bg-elev border border-border rounded-2xl p-5 hover-lift hover:border-accent/40">
                  <div className="font-mono text-xs text-fg-subtle uppercase tracking-widest mb-2">Stack</div>
                  <div className="font-heading text-fg leading-tight">Flutter · Dart<br/>Bloc · Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection('about')}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-xs font-mono text-fg-subtle hover:text-accent transition-colors"
        >
          <span className="uppercase tracking-widest">Scroll</span>
          <span className="w-12 h-px bg-current"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
