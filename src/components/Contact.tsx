import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahulverma0549@gmail.com',
      href: 'mailto:rahulverma0549@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 (Available on request)',
      href: '#'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India / Remote Available',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RahulDev-flutter', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rvofficials?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 md:mb-6">Let's Work Together</h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to discuss a project, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <info.icon size={18} className="text-text md:text-lg" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-text-muted">{info.label}</div>
                    <div className="text-sm md:text-base text-text font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-text mb-3 md:mb-4">Follow Me</h4>
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.label} profile`}
                    className="w-10 h-10 md:w-12 md:h-12 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon size={18} className="md:text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-slate-700 space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-text-light mb-1.5 md:mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-text placeholder-text-muted text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-text-light mb-1.5 md:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-text placeholder-text-muted text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs md:text-sm font-medium text-text-light mb-1.5 md:mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-text placeholder-text-muted text-sm md:text-base"
                placeholder="Project discussion"
              />
            </div>
            
            <div>
              <label className="block text-xs md:text-sm font-medium text-text-light mb-1.5 md:mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-text placeholder-text-muted resize-none text-sm md:text-base"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-text border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={18} className="md:text-lg" />
                  <span>Send Message</span>
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