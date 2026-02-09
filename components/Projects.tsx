'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'XR Memory Palace',
    description: 'An immersive VR application for dementia patients using memory palace techniques to improve memory retention.',
    tech: ['Unity', 'OpenXR', 'C#', 'Meta Quest'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Portal Box Installation',
    description: 'Physical AR box installation featuring eye-tracking and off-axis projection for gallery display in Kuala Lumpur.',
    tech: ['Three.js', 'MediaPipe', 'WebGL', 'Computer Vision'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Quant Trading Bot',
    description: 'Automated trading strategies using statistical arbitrage and market-making algorithms.',
    tech: ['Python', 'Pandas', 'NumPy', 'QuantConnect'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures and training processes.',
    tech: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="projects"
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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            A selection of projects showcasing my work in XR development, 
            quant finance, and interactive web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-glass-light transition-all duration-500 neon-glow-hover">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-cyber-cyan transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-400 hover:text-cyber-cyan transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
