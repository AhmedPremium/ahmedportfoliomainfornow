
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

const transition = {
  type: "spring",
  stiffness: 220,
  damping: 28,
  mass: 1
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer z-0"
          />
          
          <motion.div
            layoutId={`image-container-${project.id}`}
            transition={transition}
            className={`relative w-full max-w-6xl h-full max-h-[90vh] liquid-glass rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border flex flex-col lg:flex-row z-10 ${
              isDark ? 'text-white border-white/10' : 'text-zinc-900 border-black/5'
            }`}
          >
            <div className="card-inner-light" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[220] p-3 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all group backdrop-blur-md"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image Section */}
            <div className="w-full lg:w-[50%] h-64 md:h-80 lg:h-full relative overflow-hidden flex-shrink-0">
              <motion.img
                layoutId={`image-${project.id}`}
                src={project.imageUrl}
                alt={project.title}
                transition={transition}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto hide-scrollbar relative z-10 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 block"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-6xl font-bold tracking-tighter leading-none"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-xl leading-relaxed opacity-60 font-medium"
                  >
                    {project.longDescription || project.description}
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-8 border-t border-black/5 dark:border-white/5 pt-8"
                >
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30">Release</p>
                    <p className="text-sm font-bold">{project.date}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 flex flex-col sm:flex-row gap-4"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2"
                  >
                    Launch <ArrowUpRight size={16} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-4 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'
                    }`}
                  >
                    GitHub <Globe size={16} />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
