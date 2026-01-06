
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Monitor, Cpu, Palette, Code, Zap, Database, Terminal, Layers, Box, MessageCircle, LayoutGrid } from 'lucide-react';

const IDENTITIES = ["QwertyDeveloper.", "a Designer.", "a Coder.", "an Architect.", "an Engineer."];

const TECH_STACK = [
  { name: 'TypeScript', icon: <Code size={14} />, color: 'text-blue-500' },
  { name: 'React', icon: <Layers size={14} />, color: 'text-cyan-500' },
  { name: 'Rust', icon: <Zap size={14} />, color: 'text-orange-500' },
  { name: 'Python', icon: <Cpu size={14} />, color: 'text-yellow-600' },
  { name: 'Node.js', icon: <Terminal size={14} />, color: 'text-green-500' },
  { name: 'Postgres', icon: <Database size={14} />, color: 'text-indigo-500' },
  { name: 'Docker', icon: <Box size={14} />, color: 'text-blue-400' },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Home: React.FC<{ isDark: boolean; onNavigate: (page: string) => void; onContact?: () => void }> = ({ isDark, onNavigate, onContact }) => {
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdentityIndex((prev) => (prev + 1) % IDENTITIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 md:pt-28 pb-20 px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-8 md:mb-10 min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="w-full flex flex-col items-center"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase bg-blue-500/10 text-blue-600 mb-3 md:mb-4 border border-blue-500/20"
          >
            Design & Engineering Excellence
          </motion.span>
          
          <div className={`flex flex-col items-center justify-center w-full ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            <p className="text-base sm:text-lg md:text-3xl font-medium tracking-tight opacity-30 mb-0 select-none">
              Hello, I'm
            </p>
            
            <div className="relative min-h-[70px] sm:min-h-[100px] md:min-h-[130px] lg:min-h-[160px] w-full flex items-center justify-center mb-0 md:mb-1 px-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={IDENTITIES[identityIndex]}
                  initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter whitespace-nowrap leading-none transition-colors duration-1000 ${
                    identityIndex === 0 ? (isDark ? 'text-white' : 'text-black') : 'text-blue-600'
                  }`}
                >
                  {IDENTITIES[identityIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={`font-handwritten text-lg md:text-2xl mb-4 md:mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            aka Ahmed Mahfouz
          </motion.div>

          <p className={`text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-6 md:mb-8 opacity-60 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Crafting minimalist systems that blend high-performance engineering with <span className="hover:text-blue-600 transition-colors cursor-pointer underline decoration-blue-500/30 underline-offset-[6px]">cinematic motion</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('projects')}
              className="relative w-full sm:w-auto px-8 py-3 md:px-11 md:py-4 bg-[#0071e3] text-white rounded-[1rem] md:rounded-[1.6rem] font-bold text-sm md:text-base transition-all flex items-center justify-center gap-3 group shadow-[0_15px_40px_rgba(0,113,227,0.25)] overflow-hidden"
            >
              <motion.div 
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
              />
              <span className="relative z-10 flex items-center gap-3">
                Selected Work <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={onContact}
              className={`relative w-full sm:w-auto px-8 py-3 md:px-11 md:py-4 rounded-[1rem] md:rounded-[1.6rem] font-bold text-sm md:text-base transition-all flex items-center justify-center gap-3 group overflow-hidden liquid-glass ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              <div className="card-inner-light" />
              <MessageCircle size={18} className="opacity-60 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
              <span className="relative z-10">Get in Touch</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Intro */}
      <section className="max-w-7xl mx-auto mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[280px]">
          <motion.div 
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className={`md:col-span-8 md:row-span-2 p-8 md:p-12 rounded-[1.8rem] md:rounded-[2.5rem] border flex flex-col justify-end group cursor-default transition-all duration-700 premium-shadow relative overflow-hidden liquid-glass ${isDark ? 'border-white/5' : 'border-black/5'}`}
          >
            <div className="card-inner-light" />
            
            <div className="mb-4 md:mb-auto">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Palette size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
            <h2 className={`text-xl md:text-4xl font-medium mb-3 md:mb-4 leading-tight tracking-tighter relative z-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Built for depth. <br /> Designed for <span className="text-blue-600">speed.</span>
            </h2>
            <p className={`text-sm md:text-lg leading-relaxed opacity-70 max-w-xl relative z-10 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              I believe software should feel like a physical tool. It should have weight, momentum, and a soul.
            </p>
          </motion.div>

          <motion.div 
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 20, filter: 'blur(5px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { delay: 0.1, duration: 0.6 } }
            }}
            whileHover={{ y: -6 }} 
            className={`md:col-span-4 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border flex flex-col justify-between group transition-all duration-500 premium-shadow liquid-glass relative overflow-hidden ${isDark ? 'border-blue-500/20' : 'border-blue-100'}`}
          >
            <div className="card-inner-light" />
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform mb-2 md:mb-4 relative z-10">
              <Monitor size={20} />
            </div>
            <div className="relative z-10">
              <p className={`text-2xl md:text-3xl font-medium tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>50+</p>
              <p className="opacity-60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">High-end Products</p>
            </div>
          </motion.div>

          <motion.div 
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 20, filter: 'blur(5px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { delay: 0.2, duration: 0.6 } }
            }}
            whileHover={{ y: -6 }}
            className={`md:col-span-4 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border flex flex-col justify-between group transition-all duration-500 premium-shadow liquid-glass relative overflow-hidden ${isDark ? 'border-indigo-500/20' : 'border-indigo-100'}`}
          >
            <div className="card-inner-light" />
             <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform mb-2 md:mb-4 relative z-10">
              <Code size={20} />
            </div>
            <div className="relative z-10">
              <p className={`text-2xl md:text-3xl font-medium tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>12k</p>
              <p className="opacity-60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Hours of Focus</p>
            </div>
          </motion.div>
        </div>

        {/* New Archive Redirect Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('archive')}
            className={`px-12 py-5 rounded-2xl md:rounded-3xl border flex items-center gap-4 transition-all duration-500 font-bold tracking-tight premium-shadow liquid-glass overflow-hidden relative group ${
              isDark ? 'text-white border-white/10' : 'text-zinc-900 border-black/5 bg-white'
            }`}
          >
            <div className="card-inner-light" />
            <div className={`p-2 rounded-xl transition-colors ${isDark ? 'bg-white/10' : 'bg-black/5 group-hover:bg-blue-600 group-hover:text-white'}`}>
              <LayoutGrid size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Visual Database</p>
              <p className="text-lg">Explore Full Archive</p>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <ArrowRight size={20} className="text-blue-500" />
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="max-w-5xl mx-auto py-12 md:py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className="space-y-4 md:space-y-6"
        >
          <div className="mb-2 md:mb-4 inline-block">
            <motion.div 
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-blue-500/30 p-1 mx-auto shadow-2xl relative"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 overflow-hidden relative z-10 group">
                 <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                  alt="Me" 
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110" 
                />
              </div>
            </motion.div>
          </div>
          <h3 className={`text-xl md:text-3xl font-medium tracking-tighter mb-2 md:mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            A lifelong student of <span className="text-blue-600">interface.</span>
          </h3>
          <p className={`text-sm md:text-base leading-relaxed font-medium opacity-60 max-w-lg mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Based in the intersection of engineering and art, I spend my days obsessing over pixel-perfect layouts and sub-millisecond rendering loops.
          </p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.04 } }
            }}
            className="flex flex-wrap justify-center gap-1.5 md:gap-2 pt-2 md:pt-4"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
                  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
                }}
                whileHover={{ y: -3, scale: 1.03 }}
                className={`flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl border transition-all liquid-glass ${
                  isDark ? 'border-white/5' : 'border-black/5'
                }`}
              >
                <div className="card-inner-light" />
                <span className={tech.color + " relative z-10"}>{tech.icon}</span>
                <span className="text-[8px] md:text-xs font-bold tracking-tight relative z-10">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
             <motion.div 
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                transition={{ delay: 0.2 }}
                className="text-center group"
              >
                <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Location</p>
                <p className="font-bold text-xs md:text-base">San Francisco, CA</p>
             </motion.div>
             <motion.div 
                whileInView={{ opacity: [0, 1], y: [10, 0] }}
                transition={{ delay: 0.3 }}
                className="text-center group"
              >
                <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Philosophy</p>
                <p className="font-bold text-xs md:text-base">Minimalist Core</p>
             </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
