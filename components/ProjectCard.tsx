import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
  onClick: (project: Project) => void;
  className?: string;
}

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  mass: 0.8
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark, onClick, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer transition-shadow duration-700 premium-shadow ${
        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'
      } border h-full w-full transform-gpu ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* The shared visual anchor */}
        <motion.div 
          layoutId={`image-container-${project.id}`}
          transition={transition}
          className="w-full h-full"
        >
          <motion.img
            layoutId={`image-${project.id}`}
            src={project.imageUrl}
            alt={project.title}
            transition={transition}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Hover Overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 apple-blur bg-black/30 hidden md:flex flex-col items-center justify-center p-8 text-center pointer-events-none z-20"
            >
              <motion.span 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-3"
              >
                {project.date}
              </motion.span>
              <motion.h3 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold text-white tracking-tighter"
              >
                {project.title}
              </motion.h3>
              <div className="h-px w-8 bg-blue-500 mt-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10">
          <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">{project.category}</p>
          <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;