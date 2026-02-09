'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import FloatingGeometry from './FloatingGeometry';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [displayText, setDisplayText] = useState('');
  const fullText = 'USC Electrical & Computer Engineering | XR Developer';
  
  useEffect(() => {
    if (isInView) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <FloatingGeometry />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-gradient">James</span>
            </h1>

            <div className="h-16 mb-8">
              <p className="text-xl md:text-2xl text-gray-300 font-mono">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-6 bg-cyber-cyan ml-1 align-middle"
                />
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-4 mb-8"
            >
              {[
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:james@example.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg text-gray-300 hover:text-cyber-cyan transition-colors duration-300 neon-glow-hover"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 border border-cyber-cyan/50 text-cyber-cyan font-medium rounded-lg hover:bg-cyber-cyan/10 transition-all duration-300"
            >
              Explore My Work
            </motion.button>
          </motion.div>

          {/* Right side - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-8 neon-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              
              <div className="font-mono text-sm text-gray-300 space-y-4">
                <p>
                  <span className="text-cyber-purple">const</span>{' '}
                  <span className="text-cyber-cyan">developer</span> = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-green-400">&quot;James&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">school:</span>{' '}
                  <span className="text-green-400">&quot;USC&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">major:</span>{' '}
                  <span className="text-green-400">&quot;Electrical & Computer Engineering&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">passion:</span>{' '}
                  <span className="text-green-400">&quot;Building immersive XR experiences&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-gray-400">status:</span>{' '}
                  <span className="text-yellow-400">&quot;Open to opportunities&quot;</span>
                </p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-cyber-cyan transition-colors"
        >
          <FaChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
