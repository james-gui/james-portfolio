'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'USC Quantitative Strategies Club',
    role: 'Member',
    period: '2026 - Present',
    description: 'Learning quantitative trading strategies, market-making algorithms, and statistical arbitrage.',
  },
  {
    title: 'USC Electrical & Computer Engineering',
    role: 'B.S. Student',
    period: '2025 - 2029',
    description: 'Focusing on XR development, computer graphics, and embedded systems.',
  },
  {
    title: 'Independent XR Development',
    role: 'Developer',
    period: '2024 - Present',
    description: 'Building immersive experiences using Unity, OpenXR, and Three.js.',
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-32 px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-cyber-cyan/30 hover:border-cyber-cyan transition-colors"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-cyan" />
              
              <div className="glass rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-cyber-cyan font-mono text-sm">{exp.period}</span>
                </div>
                <p className="text-cyber-purple font-medium mb-3">{exp.role}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
