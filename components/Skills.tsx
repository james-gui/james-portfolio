'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'XR Development',
    skills: ['Unity', 'OpenXR', 'Three.js', 'WebGL', 'Meta Quest', 'C#'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    title: 'Quantitative',
    skills: ['Pandas', 'NumPy', 'Statistical Analysis', 'Algorithmic Trading'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Linux', 'Docker', 'Blender', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-32 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase">
            What I Use
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-cyber-cyan rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-mono bg-cyber-panel border border-glass-border rounded-lg text-gray-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
