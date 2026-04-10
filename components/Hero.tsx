"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 hero-gradient overflow-hidden min-h-[90vh] flex flex-col items-center justify-start text-center">
      {/* Decorative sun/glow behind mountains */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#fff8e7] rounded-full blur-[100px] opacity-70 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] hero-text-gradient drop-shadow-sm"
        >
          #1 Undetectable<br />AI for Meetings
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium mb-8 drop-shadow-sm"
        >
          Cluely takes perfect meeting notes and gives real-time answers,<br className="hidden md:block"/> all while completely undetectable
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-[var(--color-brand-blue)] hover:bg-blue-600 shadow-[0_10px_40px_rgba(33,107,233,0.8)] text-white text-lg font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2 mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-xl leading-none mb-[2px]"></span> Get for Mac
            </span>
          </button>
        </motion.div>
      </div>

      {/* Mockup section */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl mx-auto -mb-32 md:-mb-48 perspective-[1000px]"
      >
        <div className="glass-panel w-full aspect-[16/10] rounded-t-3xl md:rounded-t-[40px] border-b-0 shadow-2xl p-2 md:p-4 flex flex-col relative overflow-hidden bg-white/10">
           {/* Mockup header */}
           <div className="flex items-center gap-2 mb-3 pl-2 opacity-50">
             <div className="w-3 h-3 rounded-full bg-red-400"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-green-400"></div>
           </div>
           
           {/* Mockup content / video call fake view */}
           <div className="flex-1 bg-black rounded-2xl md:rounded-[24px] overflow-hidden relative flex">
              <div className="w-1/2 h-full bg-zinc-800 border-r border-zinc-900 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80')] bg-cover bg-center opacity-80" />
              </div>
              <div className="w-1/2 h-full bg-zinc-800 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80')] bg-cover bg-center opacity-80" />
              </div>

              {/* Cluely float widget over the mockup */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-[600px] glass-panel rounded-2xl p-6 shadow-2xl border border-white/20 bg-[#1C1D20]/80 backdrop-blur-3xl text-left"
              >
                 <div className="flex justify-end mb-4">
                   <div className="bg-[#1E5DE5] text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm font-medium shadow-[0_0_20px_rgba(33,107,233,0.4)]">
                     What should I say?
                   </div>
                 </div>
                 <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-6">
                   "A discounted cash flow model values a company by projecting future free cash flows and discounting them to present value using the weighted average cost of capital."
                 </p>
                 <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 border-t border-zinc-800 pt-4">
                   <span className="flex items-center gap-1"><span className="text-lg leading-none">✨</span> What should I say?</span>
                   <span className="flex items-center gap-1"><span className="text-lg leading-none">💬</span> Follow-up questions</span>
                 </div>
                 <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-zinc-500 text-sm flex items-center">
                   Ask anything about the screen or conversation
                 </div>
              </motion.div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}

