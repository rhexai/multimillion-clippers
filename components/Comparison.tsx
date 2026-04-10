"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h2 className="text-5xl md:text-7xl font-semibold text-[#1C1D20] mb-6 tracking-tight">
          No meeting bots.<br />100% undetectable.
        </h2>
        <a href="#" className="text-[#4D82F3] border-b border-[#4D82F3]/30 hover:border-[#4D82F3] pb-0.5 text-lg transition-colors">
          How does Cluely stay undetectable?
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full p-2 bg-[#F6F8FA] rounded-[40px]"
      >
        {/* Other Notetakers */}
        <div className="bg-[#EAECEF] rounded-[32px] p-10 flex flex-col items-center pt-16 relative overflow-hidden">
          <h3 className="text-3xl font-semibold text-[#1C1D20] mb-4">Other AI Notetakers</h3>
          <div className="flex items-center gap-2 text-[#6B6D76] font-medium mb-12">
            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs">✕</div>
            Joins as an invasive participant
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[80%] aspect-video bg-[#325AC6] rounded-2xl flex items-center justify-center relative shadow-lg"
          >
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg absolute">
               <div className="text-4xl">🤖</div>
             </div>
             <div className="absolute bottom-4 left-4 text-white text-sm font-medium flex items-center gap-2">
               David's AI Notetaker <span className="text-lg">🤖</span>
             </div>
          </motion.div>
        </div>

        {/* Cluely */}
        <div className="bg-[#606478] rounded-[32px] p-10 flex flex-col items-center pt-16 relative overflow-hidden text-center border-2 border-transparent hover:border-white/10 transition-all">
          <h3 className="text-3xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white text-[#606478] flex items-center justify-center font-bold text-xl leading-none">C</div>
            Cluely
          </h3>
          <div className="flex items-center gap-2 text-white/80 font-medium mb-12">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✓</div>
            Undetectable to screen share, visible to you
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[80%] aspect-video bg-[#4B4E61] rounded-2xl flex relative overflow-hidden shadow-2xl border border-white/10"
          >
             <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-[#3c3f50] p-4 relative">
                   <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">Visible to you</div>
                   <div className="w-3/4 h-3 bg-white/10 rounded-full mt-10 mb-3" />
                   <div className="w-full h-3 bg-white/10 rounded-full mb-3" />
                   <div className="w-5/6 h-3 bg-white/10 rounded-full mb-6" />
                   <div className="w-1/2 h-4 bg-white/20 rounded-full" />
                </div>
                <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 opacity-20" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)"}}></div>
                   <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white/70 px-3 py-1 rounded-full text-xs font-semibold z-10">Invisible to others</div>
                </div>
             </div>
             <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/30 -ml-0.5">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-500 font-bold text-xs shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                 <>{"< >"}</>
               </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

