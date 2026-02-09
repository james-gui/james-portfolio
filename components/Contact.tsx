'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
    alert('Thanks for reaching out! This is a demo form.');
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Open to opportunities in XR development, quant research, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:james@example.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-cyber-cyan transition-colors"
                >
                  <FaEnvelope size={20} />
                  <span>james@example.com</span>
                </a>
              </div>

              <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">Social</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass rounded-lg text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-panel border border-glass-border rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-panel border border-glass-border rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-cyber-panel border border-glass-border rounded-lg text-white focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/50 text-cyber-cyan font-medium rounded-lg hover:bg-cyber-cyan/10 transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-glass-border"
        >
          <p className="text-gray-500 font-mono text-sm">
            Built with Next.js, Three.js & Framer Motion
          </p>
          <p className="text-gray-600 text-sm mt-2">
            © 2026 James. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
