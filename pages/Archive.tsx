
import React from 'react';
import { motion } from 'framer-motion';
import { ARCHIVE_PHOTOS } from '../constants';
import { Camera, ArrowLeft, ExternalLink, FolderOpen } from 'lucide-react';

const Archive: React.FC<{ isDark: boolean; onBack: () => void }> = ({ isDark, onBack }) => {
  return (
    <div className="pt-24 md:pt-32 pb-40 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="space-y-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Back to Archives
          </button>
          <h1 className={`text-4xl md:text-8xl font-bold tracking-tighter leading-none ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            The <span className="text-blue-600">Proof.</span>
          </h1>
          <p className={`text-sm md:text-xl max-w-xl opacity-60 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            A dense visual timeline of prototypes, renders, and finished artifacts. Pure output, zero friction.
          </p>
        </div>
        
        <div className={`flex items-center gap-6 p-6 rounded-3xl border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-black/5 shadow-xl'}`}>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Artifact Count</p>
            <p className="text-2xl font-bold tracking-tighter">{ARCHIVE_PHOTOS.length}</p>
          </div>
          <div className="w-px h-10 bg-current opacity-10" />
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Est. 2018-2025</p>
            <p className="text-2xl font-bold tracking-tighter text-blue-500">Verified</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[350px]">
        {ARCHIVE_PHOTOS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
            className={`${item.colSpan} ${item.rowSpan} group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border cursor-default premium-shadow ${
              isDark ? 'border-white/5 bg-zinc-900' : 'border-black/5 bg-white'
            }`}
          >
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 apple-blur flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2 text-blue-400">
                  <Camera size={14} />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">{item.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                  {item.title}
                </h3>
                <div className="w-8 h-[2px] bg-blue-500 mx-auto rounded-full" />
              </motion.div>
            </div>

            {/* Subtle Corner Badge */}
            <div className="absolute top-6 right-6 p-2 rounded-xl bg-black/20 text-white/40 border border-white/10 group-hover:opacity-0 transition-opacity">
              <Camera size={12} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 md:mt-32 flex flex-col items-center gap-8"
      >
        <div className="text-center">
          <p className={`text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            End of Visual Record • Archive v4.2
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com" // Placeholder Google Drive Link
            target="_blank"
            rel="noopener noreferrer"
            className={`px-10 py-5 rounded-3xl border flex items-center gap-4 transition-all duration-500 font-bold tracking-tight premium-shadow liquid-glass group relative overflow-hidden ${
              isDark ? 'text-white border-white/10' : 'text-zinc-900 border-black/5 bg-white'
            }`}
          >
            <div className="card-inner-light" />
            <div className={`p-3 rounded-2xl transition-all duration-500 ${
              isDark ? 'bg-white/10 group-hover:bg-blue-600 group-hover:text-white' : 'bg-black/5 group-hover:bg-blue-600 group-hover:text-white'
            }`}>
              <FolderOpen size={20} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">External Repository</p>
              <p className="text-lg">Access Full Asset Drive</p>
            </div>
            <div className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <ExternalLink size={20} className="text-blue-500" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Archive;
