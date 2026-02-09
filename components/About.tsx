'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '@/lib/data';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get To Know <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 neon-glow-hover transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I&apos;m a passionate <span className="text-cyber-cyan">Electrical & Computer Engineering</span>{' '}
                student at USC with a deep interest in immersive technologies and XR development.
              </p>
              <p>
                My journey in engineering has led me to explore the intersection of hardware and 
                software, where I specialize in creating immersive experiences that bridge the 
                gap between the physical and digital worlds.
              </p>
              <p>
                When I&apos;m not coding or building circuits, you can find me exploring the latest 
                advancements in spatial computing, contributing to open-source projects, or 
                mentoring fellow students in the world of XR development.
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 neon-glow-hover transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Education
            </h3>
            
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-xl font-medium text-cyber-cyan">{education.school}</h4>
                  <p className="text-gray-400">{education.degree}</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">{education.period}</span>
              </div>
              <p className="text-gray-300">GPA: <span className="text-cyber-purple font-semibold">{education.gpa}</span></p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm bg-cyber-cyan/10 text-cyber-cyan rounded-full border border-cyber-cyan/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:col-span-2 neon-glow-hover transition-all duration-500"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Completed' },
                { value: '3.8', label: 'Current GPA' },
                { value: '∞', label: 'Coffee Consumed' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
