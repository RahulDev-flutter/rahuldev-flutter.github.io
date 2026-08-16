import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, AlertCircle } from 'lucide-react';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [botcheck, setBotcheck] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — humans never see this field, so anything in it is a bot.
    if (botcheck) {
      setStatus('sent');
      return;
    }

    if (!ACCESS_KEY) {
      setStatus('error');
      setError('The form is not configured yet. Please email me directly for now.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Portfolio contact form',
          subject: `[Portfolio] ${formData.subject}`,
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Request failed (${res.status}).`);
      }

      setStatus('sent');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong while sending.');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rahulverma0549@gmail.com', href: 'mailto:rahulverma0549@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 93153 38608', href: 'tel:+919315338608' },
    { icon: MapPin, label: 'Location', value: 'Faridabad, Haryana · Remote ready', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RahulDev-flutter', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rvofficials', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16 animate-fade-in-up">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              [ 05 ] Contact
            </div>
            <h2 className="font-heading font-bold text-fg text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-3xl">
              Let's build something<br className="hidden md:block" />
              <span className="accent-gradient">good.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in-up">
            <div className="bg-bg-elev border border-border rounded-2xl p-8">
              <p className="text-fg-muted leading-relaxed">
                I'm open to senior Flutter roles, contract work, and ambitious side projects.
                Drop a line — I reply within a day.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center justify-between p-5 bg-bg-elev border border-border rounded-2xl hover:border-accent/40 hover-lift"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-bg border border-border text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                      <info.icon size={16} />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">{info.label}</div>
                      <div className="text-fg text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-fg-subtle group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>

            <div className="bg-bg-elev border border-border rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-3">Find me online</div>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-border rounded-lg text-fg-muted hover:border-accent hover:text-accent transition-all"
                  >
                    <s.icon size={16} />
                    <span className="text-sm">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-bg-elev border border-border rounded-2xl p-8 animate-fade-in-up animation-delay-200"
          >
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
              <h3 className="font-heading text-fg text-xl">Send a message</h3>
              <span className="font-mono text-xs text-fg-subtle">&lt;form/&gt;</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">Name</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-fg-subtle focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">Email</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-fg-subtle focus:border-accent"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">Subject</label>
              <input
                type="text" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-fg-subtle focus:border-accent"
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-4">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">Message</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} required rows={6}
                className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-fg-subtle focus:border-accent resize-none"
                placeholder="Tell me about the project, role, or idea..."
              />
            </div>

            {/* Honeypot — hidden from humans and screen readers, bots fill it in */}
            <input
              type="text" name="botcheck" value={botcheck} onChange={(e) => setBotcheck(e.target.value)}
              tabIndex={-1} autoComplete="off" aria-hidden="true"
              className="hidden"
            />

            {status === 'error' && (
              <div
                role="alert"
                className="mt-6 flex gap-3 p-4 rounded-lg bg-danger/10 border border-danger/30 text-sm"
              >
                <AlertCircle size={16} className="text-danger shrink-0 mt-0.5" />
                <div className="text-fg-muted">
                  <span className="text-danger font-medium">Couldn't send. </span>
                  {error} You can reach me at{' '}
                  <a href="mailto:rahulverma0549@gmail.com" className="text-accent hover:underline">
                    rahulverma0549@gmail.com
                  </a>
                  .
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="mt-6 group w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-accent text-bg font-medium hover:bg-accent-bright transition-all disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : status === 'sent' ? (
                <>Message sent · I'll be in touch</>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
