import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, MessageSquare, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC<{ isDark: boolean; onSelectPlan?: (planName: string) => void }> = ({ isDark, onSelectPlan }) => {
  const planIcons = [
    <Zap className="text-blue-500" size={24} />,
    <Crown className="text-purple-500" size={24} />,
    <Sparkles className="text-indigo-500" size={24} />
  ];

  return (
    <div className="pt-24 md:pt-40 pb-24 md:pb-60 px-6 max-w-7xl mx-auto overflow-hidden text-center">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 md:mb-32"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] bg-blue-500/10 text-blue-600 mb-6 border border-blue-500/20"
        >
          Investment Tiers
        </motion.span>
        <h2 className={`text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-[0.9] ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          The <span className="text-blue-600">Investment.</span>
        </h2>
        <p className={`text-lg md:text-2xl max-w-2xl mx-auto opacity-50 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Transparent engagement models for teams building the next generation of digital artifacts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative z-10 text-left">
        {PRICING_PLANS.map((plan, idx) => (
          <motion.div
            key={plan.id}
            whileHover={{ y: -12, scale: 1.01 }}
            className={`group relative p-10 md:p-14 rounded-[3.5rem] md:rounded-[4.5rem] flex flex-col border transition-all duration-700 h-full ${
              plan.isPopular 
                ? isDark 
                  ? 'bg-zinc-900 border-blue-500/40 ring-1 ring-blue-500/20 shadow-[0_0_100px_rgba(0,0,0,0.8),0_30px_60px_-15px_rgba(0,0,0,0.9)]' 
                  : 'bg-white border-blue-500/30 ring-4 ring-blue-500/5 shadow-[0_0_60px_rgba(37,99,235,0.12),0_40px_80px_-20px_rgba(0,0,0,0.1)]'
                : isDark 
                  ? 'bg-zinc-900/50 border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.6),0_20px_50px_-10px_rgba(0,0,0,0.7)]' 
                  : 'bg-white border-black/5 shadow-[0_0_50px_rgba(0,0,0,0.05),0_30px_60px_-20px_rgba(0,0,0,0.08)]'
            }`}
          >
            <div className="card-inner-light" />
            
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  initial={{ rotate: -5, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] whitespace-nowrap border border-white/20"
                >
                  Most Strategic
                </motion.div>
              </div>
            )}
            
            <div className="mb-10 relative z-10">
              <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 duration-500 ${
                isDark ? 'bg-white/5' : 'bg-black/5'
              }`}>
                {planIcons[idx]}
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold tracking-tighter mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{plan.name}</h3>
              <p className={`text-sm opacity-60 font-medium leading-relaxed max-w-[200px] ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.description}</p>
            </div>

            <div className="mb-12 relative z-10">
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl md:text-6xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="opacity-30 text-[11px] font-black uppercase tracking-[0.2em] mb-2">USD</span>
                )}
              </div>
            </div>

            <div className="space-y-6 mb-16 flex-1 relative z-10">
              {plan.features.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-4 group/item"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    plan.isPopular ? 'bg-blue-500/20 text-blue-500' : 'bg-zinc-500/10 text-zinc-500'
                  }`}>
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className={`text-sm md:text-base font-semibold opacity-80 group-hover/item:opacity-100 transition-opacity ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectPlan?.(plan.name)}
              className={`w-full py-5 md:py-6 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 overflow-hidden group shadow-2xl relative z-10 ${
                plan.isPopular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30'
                  : isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-zinc-900 text-white hover:bg-black shadow-zinc-900/20'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>Select {plan.name}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mt-24 md:mt-40 p-10 md:p-20 rounded-[4rem] md:rounded-[5rem] text-center border overflow-hidden relative ${
          isDark 
            ? 'bg-zinc-900/40 border-white/5 shadow-[0_0_120px_rgba(0,0,0,0.9),0_60px_100px_-30px_rgba(0,0,0,0.8)]' 
            : 'bg-white border-black/5 shadow-[0_0_80px_rgba(0,0,0,0.08),0_60px_100px_-30px_rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="card-inner-light" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 pointer-events-none" />
        
        <div className="relative z-10">
          <h3 className={`text-3xl md:text-6xl font-bold tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Have a <span className="text-blue-600">unique objective?</span>
          </h3>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto opacity-50 mb-10 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            I specialize in custom engineering solutions that don't fit into standard tiers. Let's discuss your specific technical requirements.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectPlan?.('Custom')}
            className={`px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.3em] transition-all ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Start a Conversation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;