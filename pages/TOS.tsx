
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, ExternalLink } from 'lucide-react';

const TOS: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  // Path to your actual PDF file in the source/public directory
  const pdfPath = "/tos.pdf"; 

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-4 md:px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-20 text-center"
      >
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.5em] mb-4 block">Legal Framework</span>
        <h2 className={`text-4xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Terms of <span className="text-blue-600">Service.</span>
        </h2>
        <p className={`text-sm md:text-xl max-w-xl mx-auto opacity-60 font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          The foundational governance and usage policies for the QwertyDeveloper ecosystem. 
          <br className="hidden md:block" /> Secure Artifact v4.2.0
        </p>
      </motion.div>

      {/* macOS Window Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`rounded-[2rem] md:rounded-[3rem] border overflow-hidden premium-shadow flex flex-col h-[70vh] md:h-[850px] relative ${
          isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-black/5'
        }`}
      >
        <div className="card-inner-light" />

        {/* macOS Toolbar */}
        <div className={`px-4 md:px-8 py-4 md:py-6 flex items-center justify-between border-b relative z-20 ${
          isDark ? 'bg-zinc-800/80 border-white/5' : 'bg-zinc-50/80 border-black/5'
        } apple-blur`}>
          <div className="flex items-center gap-2 md:gap-3 w-1/4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" />
          </div>

          <div className={`hidden sm:flex items-center gap-4 px-6 py-2 rounded-2xl text-[10px] md:text-xs font-bold tracking-tight ${
            isDark ? 'bg-black/40 text-zinc-400 border border-white/5' : 'bg-white text-zinc-500 border border-black/5 shadow-sm'
          }`}>
            <FileText size={14} className="text-blue-500" />
            <span className="truncate max-w-[200px]">governance_protocol.pdf</span>
            <div className="w-px h-3 bg-current opacity-20 mx-1" />
            <span className="text-blue-500">Verified</span>
          </div>

          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/4">
            <a 
              href={pdfPath} 
              download 
              className={`p-2.5 rounded-xl transition-all group ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
              title="Download PDF"
            >
              <Download size={16} className="opacity-40 group-hover:opacity-100 group-hover:text-blue-500" />
            </a>
            <button className={`p-2.5 rounded-xl transition-all group ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}>
              <Printer size={16} className="opacity-40 group-hover:opacity-100" />
            </button>
            <a 
              href={pdfPath} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2.5 rounded-xl transition-all group ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
              title="Open in new tab"
            >
              <ExternalLink size={16} className="opacity-40 group-hover:opacity-100 group-hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* PDF Viewer Interface */}
        <div className={`flex-1 relative overflow-hidden bg-zinc-100 dark:bg-zinc-950`}>
          <iframe
            src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-full border-none relative z-10"
            title="Terms of Service Document"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none z-0">
             <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 animate-pulse border border-blue-500/20">
                <FileText size={32} />
             </div>
             <p className={`text-sm font-bold tracking-[0.2em] uppercase opacity-20 ${isDark ? 'text-white' : 'text-black'}`}>
               Decryption in Progress...
             </p>
          </div>
        </div>

        {/* Status Bar */}
        <div className={`px-6 py-3 flex items-center justify-between border-t text-[9px] font-black uppercase tracking-[0.4em] relative z-20 ${
          isDark ? 'bg-zinc-800/40 border-white/5 text-zinc-500' : 'bg-zinc-50/50 border-black/5 text-zinc-400'
        }`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              Status: Authorised
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="hover:text-blue-500 transition-colors">Audit Logs</button>
            <button className="hover:text-blue-500 transition-colors">Infrastructure</button>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 text-center flex flex-col items-center gap-6">
        <p className={`text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 max-w-sm ${isDark ? 'text-white' : 'text-black'}`}>
          Continued interaction with the platform constitutes automatic acceptance of these governed protocols.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={pdfPath}
          download
          className="text-[11px] font-black uppercase tracking-[0.4em] px-10 py-4 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300"
        >
          Acquire Hard Copy
        </motion.a>
      </div>
    </div>
  );
};

export default TOS;
