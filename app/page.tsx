'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import BackgroundGradient from '@/components/BackgroundGradient';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-dark"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-16 h-16 border-2 border-cyber-cyan rounded-lg"
              style={{
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative min-h-screen overflow-hidden">
        <BackgroundGradient />
        <ScrollProgress />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </motion.div>
      </main>
    </>
  );
}
