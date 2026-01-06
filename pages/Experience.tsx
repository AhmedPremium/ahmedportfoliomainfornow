import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Sparkles, Target, Workflow, Rocket } from 'lucide-react';

const Experience: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const icons = [
    <Sparkles size={24} className="md:w-7 md:h-7" />, 
    <Target size={24} className="md:w-7 md:h-7" />, 
    <Workflow size={24} className="md:w-7 md:h-7" />, 
    <Rocket size={24} className="md:w-7 md:h-7" />
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-6 max-w-6xl mx-auto">
      <div className="mb-24 md:mb-40 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.5em] mb-4 block"
        >
          Evolution
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={`text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter mb-4 md:mb-8 leading-[1.1] md:leading-[0.9] ${isDark ? 'text-white' : 'text-zinc-900'}`}
        >
          The <span className="text-blue-600">Journey.</span>
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block overflow-hidden">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent"
          />
        </div>

        <div className="space-y-32 md:space-y-60 relative">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Trigger earlier
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Information Side */}
              <div className={`flex-1 w-full text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-0">
                  <span className="text-[10px] md:text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">{exp.period}</span>
                  <h3 className={`text-2xl md:text-6xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                  <p className={`text-lg md:text-2xl font-semibold opacity-50 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company}</p>
                </div>
              </div>

              {/* Journey Point - Node */}
              <div className="relative z-10 hidden md:block">
                <motion.div 
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-2xl transition-all border ${
                    isDark ? 'bg-zinc-900 border-zinc-700 text-blue-500' : 'bg-white border-zinc-100 text-blue-600'
                  }`}
                >
                  {icons[idx % icons.length]}
                </motion.div>
              </div>

              {/* Description Side */}
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100 shadow-2xl shadow-black/5'}`}
                >
                  <p className="text-base md:text-xl leading-relaxed opacity-70 font-medium italic">"{exp.description}"</p>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-start mt-6 md:mt-10">
                    {exp.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 md:px-5 md:py-2 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-600 border border-blue-500/20">{s}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;