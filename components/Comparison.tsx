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
          No manual clipping.<br />Just pure performance.
        </h2>
        <p className="text-[#6B6D76] text-xl font-medium max-w-2xl mx-auto">
          We combine data-backed hook research with a global creator network to out-pace traditional agencies.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full p-2 bg-[#F6F8FA] rounded-[40px]"
      >
        {/* Traditional Agencies */}
        <div className="bg-[#EAECEF] rounded-[32px] p-10 flex flex-col items-center pt-16 relative overflow-hidden">
          <h3 className="text-3xl font-semibold text-[#1C1D20] mb-4">Traditional Video Agencies</h3>
          <div className="flex items-center gap-2 text-[#6B6D76] font-medium mb-12">
            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs">✕</div>
            Slow delivery, high overhead costs
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[80%] aspect-video bg-[#325AC6] rounded-2xl flex flex-col items-center justify-center relative shadow-lg p-6"
          >
             <div className="w-16 h-1 bg-white/20 rounded-full mb-2" />
             <div className="w-24 h-1 bg-white/20 rounded-full mb-8" />
             <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Editor Backlog</div>
             <div className="w-full h-8 bg-white/10 rounded-lg flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-1/2 h-1 bg-white/20 rounded-full" />
             </div>
             <div className="absolute bottom-4 left-4 text-white/60 text-xs font-medium">Delivery: 7-14 Days</div>
          </motion.div>
        </div>

        {/* Multimillion Clippers */}
        <div className="bg-[#606478] rounded-[32px] p-10 flex flex-col items-center pt-16 relative overflow-hidden text-center border-2 border-transparent hover:border-white/10 transition-all">
          <h3 className="text-3xl font-semibold text-white mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white text-[#606478] flex items-center justify-center font-bold text-xl leading-none">M</div>
            Multimillion Clippers
          </h3>
          <div className="flex items-center gap-2 text-white/80 font-medium mb-12">
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✓</div>
            24-hour turnaround, data-backed hooks
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[80%] aspect-video bg-[#4B4E61] rounded-2xl flex relative overflow-hidden shadow-2xl border border-white/10"
          >
             <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-[#3c3f50] p-4 relative text-left">
                   <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-extrabold shadow-lg z-10">VIRAL POTENTIAL</div>
                   <div className="w-3/4 h-3 bg-white/10 rounded-full mt-10 mb-3" />
                   <div className="w-full h-3 bg-white/10 rounded-full mb-3" />
                   <div className="w-1/2 h-4 bg-blue-500/50 rounded-full mt-6" />
                </div>
                <div className="w-1/2 h-full relative overflow-hidden flex flex-col items-center justify-center p-4">
                   <div className="text-4xl font-bold text-white mb-1">24h</div>
                   <div className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">Turnaround Time</div>
                   <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-full animate-pulse" />
                   </div>
                </div>
             </div>
             <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/10 -ml-0.5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

