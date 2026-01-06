import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';

const Contact: React.FC<{ isDark: boolean; onContact?: () => void }> = ({ isDark, onContact }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      // After successfully "sending", prompt to join Discord for real-time chat
      if (onContact) onContact();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-40 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 md:mb-24 text-center md:text-left"
      >
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em] mb-4 block">Connection</span>
        <h2 className={`text-4xl md:text-8xl font-medium tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Let's build <br /> <span className="text-blue-600">something real.</span>
        </h2>
        <p className={`text-lg md:text-xl max-w-xl opacity-60 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Whether it's a revolutionary product idea or a strategic design partnership, I'm here to translate vision into interface.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-black/5 shadow-xl shadow-black/5'}`}>
            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-8">Direct Channels</h4>
            <div className="space-y-6">
              <div onClick={onContact} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Instant Access</p>
                  <p className="font-semibold text-lg">Join Discord Studio</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Location</p>
                  <p className="font-semibold text-lg">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Availability</p>
                  <p className="font-semibold text-lg">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7"
        >
          <div className={`p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-black/5 shadow-2xl shadow-black/5'}`}>
            {formState === 'sent' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">Message Transmitted.</h3>
                <p className="opacity-60">I'll be in touch within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-blue-500 font-bold uppercase text-[10px] tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className={`w-full px-6 py-4 rounded-2xl border outline-none transition-all ${
                        isDark ? 'bg-white/5 border-white/5 focus:border-blue-500/50' : 'bg-black/5 border-black/5 focus:border-blue-500/50'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className={`w-full px-6 py-4 rounded-2xl border outline-none transition-all ${
                        isDark ? 'bg-white/5 border-white/5 focus:border-blue-500/50' : 'bg-black/5 border-black/5 focus:border-blue-500/50'
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-1">The Objective</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full px-6 py-4 rounded-3xl border outline-none transition-all resize-none ${
                      isDark ? 'bg-white/5 border-white/5 focus:border-blue-500/50' : 'bg-black/5 border-black/5 focus:border-blue-500/50'
                    }`}
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formState === 'sending'}
                  className={`relative w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 overflow-hidden ${
                    formState === 'sending' 
                      ? 'bg-zinc-500 cursor-not-allowed text-white' 
                      : 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-[0_20px_50px_rgba(0,113,227,0.3)]'
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none"
                  />
                  {formState === 'sending' ? 'Transmitting...' : <><Send size={20} /> Initiate Connection</>}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;