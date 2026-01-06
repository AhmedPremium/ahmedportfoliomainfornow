
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPage: string;
  setPage: (page: string) => void;
  onContact?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, currentPage, setPage, onContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Legal', id: 'tos' }
  ];

  const handlePageSelect = (id: string) => {
    setPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div className={`apple-blur rounded-full px-4 md:px-6 py-2 border transition-all duration-500 flex items-center justify-between ${
          isDark 
            ? 'bg-black/40 border-white/10 text-white' 
            : 'bg-white/60 border-black/5 text-[#1D1D1F]'
        }`}>
          <div className="flex items-center gap-3 md:gap-8">
            <button 
              onClick={() => handlePageSelect('home')}
              className="flex items-center gap-3 group active:scale-95 transition-transform"
            >
              <span className="font-bold text-base md:text-xl tracking-tighter hover:text-blue-600 transition-colors">
                QwertyDeveloper
              </span>
            </button>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
                    currentPage === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.name}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={onContact}
              className={`hidden sm:flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95 shadow-lg shadow-blue-500/10`}
            >
              Contact <ArrowRight size={14} />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open menu"
              className={`p-2 md:hidden rounded-full transition-all ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`md:hidden absolute top-20 left-4 right-4 rounded-3xl border shadow-2xl overflow-hidden p-6 z-50 pointer-events-auto transition-colors duration-500 ${
              isDark ? 'bg-zinc-900 border-white/10 text-white' : 'bg-white border-black/10 text-zinc-900'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={`text-left text-2xl font-semibold tracking-tight p-4 rounded-2xl transition-all active:scale-[0.97] active:bg-black/5 dark:active:bg-white/5 ${
                    currentPage === item.id ? 'text-blue-500 bg-blue-500/5' : 'opacity-80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-black/5 dark:bg-white/5 my-4" />
              <button 
                onClick={onContact}
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
              >
                Get in Touch <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
