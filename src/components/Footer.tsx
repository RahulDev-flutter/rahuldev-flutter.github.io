import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RahulDev-flutter', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rvofficials', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rahulverma0549@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: large mark */}
        <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-border">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent text-bg flex items-center justify-center font-mono font-bold">
                rv
              </div>
              <div>
                <div className="font-heading text-fg text-xl">Rahul Verma</div>
                <div className="font-mono text-xs text-fg-subtle">@RahulDev-flutter</div>
              </div>
            </div>
            <p className="text-fg-muted max-w-md leading-relaxed">
              Product Engineer building high-performance mobile apps with
              clean architecture, Bloc, and Firebase.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-6 group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-strong text-fg-muted hover:text-accent hover:border-accent transition-all"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-xs">Back to top</span>
            </button>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-4">Sitemap</div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-fg-muted hover:text-accent transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-4">Get in touch</div>
            <div className="space-y-2 text-sm">
              <a href="mailto:rahulverma0549@gmail.com" className="block text-fg hover:text-accent transition-colors">
                rahulverma0549@gmail.com
              </a>
              <a href="tel:+919315338608" className="block text-fg-muted hover:text-accent transition-colors">
                +91 93153 38608
              </a>
              <div className="text-fg-muted">Faridabad, Haryana · India</div>
            </div>
            <div className="flex gap-2 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-fg-muted hover:text-accent hover:border-accent transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <div className="font-mono text-xs text-fg-subtle">
            © {new Date().getFullYear()} Rahul Verma · Crafted with Flutter mindset & React
          </div>
          <div className="font-mono text-xs text-fg-subtle">
            <span className="text-accent">●</span> Built &amp; designed by RV
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
