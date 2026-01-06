import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC<{ isDark: boolean; onNavigate?: (page: string) => void }> = ({ isDark, onNavigate }) => {
  const socialLinks = [
    { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
    { icon: <Github size={18} />, label: 'GitHub', href: '#' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className={`mt-40 border-t transition-colors duration-700 ${
      isDark ? 'border-white/5 bg-black' : 'border-black/5 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className={`text-5xl md:text-7xl font-medium tracking-tighter mb-10 leading-[0.9] ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Let's craft the <br /> <span className="text-blue-500">exceptional.</span>
            </h2>
            <p className={`text-xl max-w-sm mb-12 opacity-60 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Available for select freelance engagements and full-time creative partnerships.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="mailto:hello@ahmedmahfouz.com"
              className="inline-flex items-center gap-4 text-3xl font-medium tracking-tighter text-blue-500 group"
            >
              hello@ahmedmahfouz.com <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div>
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>
              Navigation
            </h4>
            <ul className={`space-y-6 text-lg font-bold tracking-tight ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              <li><button onClick={() => onNavigate?.('projects')} className="hover:text-blue-500 transition-colors">Selection</button></li>
              <li><button onClick={() => onNavigate?.('experience')} className="hover:text-blue-500 transition-colors">Manifesto</button></li>
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-blue-500 transition-colors">Archives</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-blue-500 transition-colors">Connect</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, i) => (
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  key={i}
                  href={link.href}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    isDark ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white' : 'bg-black/5 text-zinc-600 hover:bg-black/10 hover:text-black'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5 dark:border-white/5 opacity-40 text-[10px] uppercase font-bold tracking-[0.4em]">
          <p>© 2025 Ahmed Mahfouz</p>
          <div className="flex gap-12">
            <button onClick={() => onNavigate?.('tos')} className="hover:text-blue-500 transition-colors">Legal (TOS)</button>
            <a href="#" className="hover:text-blue-500 transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;