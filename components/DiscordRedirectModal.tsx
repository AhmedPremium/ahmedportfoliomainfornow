import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';

interface DiscordRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  discordLink?: string;
}

const DiscordRedirectModal: React.FC<DiscordRedirectModalProps> = ({ 
  isOpen, 
  onClose, 
  isDark, 
  discordLink = "https://discord.gg/qwertydeveloper" // Placeholder link
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 apple-blur backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`relative w-full max-w-md p-8 md:p-10 rounded-[3rem] border shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden liquid-glass ${
              isDark ? 'text-white border-white/10' : 'text-zinc-900 border-black/5'
            }`}
          >
            <div className="card-inner-light" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-20"
            >
              <X size={20} className="opacity-40" />
            </button>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-[2rem] bg-indigo-500/10 flex items-center justify-center text-indigo-500 mx-auto mb-8 shadow-inner">
                <MessageSquare size={36} className="stroke-[1.5]" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Join the <span className="text-blue-600">Studio.</span>
              </h3>
              
              <p className="text-base md:text-lg opacity-60 font-medium leading-relaxed mb-10">
                To initiate a project or discuss pricing tiers, join our private Discord server for direct access to QwertyDeveloper.
              </p>

              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-[#5865F2] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(88,101,242,0.3)]"
                >
                  Enter Discord <ExternalLink size={20} />
                </motion.a>
                
                <button 
                  onClick={onClose}
                  className={`w-full py-4 rounded-full font-bold text-sm opacity-40 hover:opacity-100 transition-opacity flex items-center justify-center gap-2`}
                >
                  Maybe later <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DiscordRedirectModal;