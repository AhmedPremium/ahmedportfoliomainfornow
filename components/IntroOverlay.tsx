
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),   // Sophisticated Text Reveal
      setTimeout(() => setStep(2), 2200),  // Status Ready
      setTimeout(() => onComplete(), 3400) // Smooth Exit
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(40px)' }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[300] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Atmosphere - Cinematic Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[150px]"
          style={{ backgroundImage: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-6">
        {/* Text Reveal */}
        <div className="overflow-visible mb-6 flex flex-col items-center justify-center min-h-[4rem] md:min-h-[7rem]">
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center px-4"
              >
                <h1 className="text-white text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight leading-tight text-center overflow-visible">
                  <motion.span
                    initial={{ letterSpacing: "-0.05em", opacity: 0 }}
                    animate={{ letterSpacing: "0.02em", opacity: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block whitespace-nowrap"
                  >
                    QwertyDeveloper<span className="text-blue-600">.</span>
                  </motion.span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimalist Status Line */}
        <div className="h-6">
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-white text-[9px] font-black uppercase tracking-[0.5em]">
                  SYSTEM_ARMED
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Cinematic Frame Boundary */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-4 md:inset-16 border border-white rounded-[2rem] md:rounded-[4rem] pointer-events-none"
      />
    </motion.div>
  );
};

export default IntroOverlay;
