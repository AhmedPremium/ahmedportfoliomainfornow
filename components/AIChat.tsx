import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { chatWithAssistant } from '../services/geminiService';
import { Message } from '../types';

const liquidSpring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
  mass: 1
};

const AIChat: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello. I am QwertyDeveloper AI. How can I assist you with your project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await chatWithAssistant(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60]">
        <motion.button
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative overflow-hidden group ${
            isDark ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
           <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          {isOpen ? <X size={24} className="relative z-10" /> : <MessageCircle size={26} className="relative z-10" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            transition={liquidSpring}
            className={`fixed bottom-24 right-6 md:right-8 w-[calc(100vw-3rem)] md:w-96 h-[500px] liquid-glass rounded-3xl border shadow-2xl z-[60] overflow-hidden flex flex-col ${
              isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'
            }`}
          >
            <div className="card-inner-light" />
            {/* Header */}
            <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center gap-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className={`font-bold text-sm tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>QwertyDeveloper Assistant</h3>
                <p className="text-[10px] opacity-60 uppercase tracking-widest font-black">AI Orchestrator</p>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar relative z-10"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#0071e3] text-white rounded-tr-none'
                      : isDark ? 'bg-white/10 text-white rounded-tl-none border border-white/5' : 'bg-black/5 text-black rounded-tl-none border border-black/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`px-4 py-2.5 rounded-2xl rounded-tl-none flex gap-1 ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                    <motion.span animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <motion.span animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <motion.span animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-black/5 dark:border-white/5 relative z-10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className={`w-full pl-4 pr-12 py-3 rounded-xl text-sm outline-none transition-all ${
                    isDark ? 'bg-white/5 text-white focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50' : 'bg-black/5 text-black focus:bg-black/10 focus:ring-1 focus:ring-blue-500/50'
                  }`}
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 p-1.5 rounded-lg text-blue-500 hover:bg-blue-500/10 disabled:opacity-30 transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;