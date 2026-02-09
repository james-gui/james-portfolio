'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function BackgroundGradient() {
  const { scrollYProgress } = useScroll();
  
  // Transform colors based on scroll progress
  const hue1 = useTransform(scrollYProgress, [0, 0.5, 1], [180, 280, 180]);
  const hue2 = useTransform(scrollYProgress, [0, 0.5, 1], [280, 180, 280]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-[#111118] to-cyber-dark" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: useTransform(hue1, (h) => `hsla(${h}, 70%, 50%, 0.15)`),
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          background: useTransform(hue2, (h) => `hsla(${h}, 70%, 50%, 0.12)`),
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [
              'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
            ]
          ),
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
