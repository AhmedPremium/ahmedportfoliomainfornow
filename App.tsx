
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Pricing from './pages/Pricing';
import TOS from './pages/TOS';
import Contact from './pages/Contact';
import Archive from './pages/Archive';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import DiscordRedirectModal from './components/DiscordRedirectModal';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);

  // Load theme preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.body.className = 'bg-black text-[#F5F5F7] transition-colors duration-500 overflow-x-hidden';
    } else {
      document.body.className = 'bg-[#F5F5F7] text-[#1D1D1F] transition-colors duration-500 overflow-x-hidden';
    }
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.className = newTheme 
      ? 'bg-black text-[#F5F5F7] transition-colors duration-500 overflow-x-hidden' 
      : 'bg-[#F5F5F7] text-[#1D1D1F] transition-colors duration-500 overflow-x-hidden';
  };

  const openDiscord = () => setIsDiscordModalOpen(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home isDark={isDark} onNavigate={setCurrentPage} onContact={openDiscord} />;
      case 'projects': return <Projects isDark={isDark} />;
      case 'experience': return <Experience isDark={isDark} />;
      case 'pricing': return <Pricing isDark={isDark} onSelectPlan={openDiscord} />;
      case 'archive': return <Archive isDark={isDark} onBack={() => setCurrentPage('home')} />;
      case 'tos': return <TOS isDark={isDark} />;
      case 'contact': return <Contact isDark={isDark} onContact={openDiscord} />;
      default: return <Home isDark={isDark} onNavigate={setCurrentPage} onContact={openDiscord} />;
    }
  };

  return (
    <div className={`min-h-screen selection:bg-blue-500 selection:text-white ${isDark ? 'dark' : ''}`}>
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        currentPage={currentPage} 
        setPage={setCurrentPage}
        onContact={openDiscord}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer isDark={isDark} onNavigate={setCurrentPage} onContact={openDiscord} />
      <AIChat isDark={isDark} />
      <DiscordRedirectModal 
        isOpen={isDiscordModalOpen} 
        onClose={() => setIsDiscordModalOpen(false)} 
        isDark={isDark} 
      />

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] transition-all duration-1000 ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-500/10'
        }`} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] transition-all duration-1000 ${
          isDark ? 'bg-purple-600/10' : 'bg-purple-500/10'
        }`} />
      </div>
    </div>
  );
};

export default App;
