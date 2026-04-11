"use client";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#F6F8FA] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative"
        >
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#4D8AF0] flex items-center justify-center">
                 <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold text-[#1C1D20] mb-4 md:mb-6 tracking-tight leading-[1.1]">
              Viral Sentiment & Hold Rate Analysis
            </h3>
            <p className="text-[#6B6D76] text-base md:text-xl font-medium mb-10 md:mb-12 max-w-md">
              Our hooks are crafted using real-time audience data, ensuring maximum viewer retention and shareability.
            </p>
          </div>
          
          <div className="relative h-40 md:h-64 mt-4">
             <div className="absolute inset-0 bg-white/40 rounded-2xl md:rounded-3xl border border-white/60 p-4 md:p-6 shadow-sm overflow-hidden backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                   <div className="flex items-center gap-2">
                      <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-blue-500" />
                      <div className="w-16 md:w-24 h-2 md:h-3 bg-gray-200 rounded-full" />
                   </div>
                   <div className="text-[10px] md:text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">94% HOLD RATE</div>
                </div>
                <div className="flex gap-1 items-end h-20 md:h-32">
                   {[40, 70, 45, 90, 65, 80, 55, 95, 40, 60, 85].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-blue-500/20 rounded-t-sm md:rounded-t-md" 
                      />
                   ))}
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#1C1D20] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-[#4D8AF0] flex items-center justify-center">
                 <div className="w-3 md:w-4 h-3 md:h-4 border-2 border-white rounded-full" />
              </div>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Scale</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
              Instant Multi-Platform Scale
            </h3>
            <p className="text-zinc-400 text-base md:text-xl font-medium mb-10 md:mb-12 max-w-sm">
              One piece of content, distributed across TikTok, Reels, and Shorts by our massive creator network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 h-40 md:h-64 mt-4">
             <div className="bg-zinc-800/50 rounded-2xl md:rounded-3xl border border-zinc-700/50 p-4 md:p-6 flex flex-col items-center justify-center text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-2 md:mb-3">📱</div>
                <div className="text-white text-xl md:text-2xl font-bold">TikTok</div>
                <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1">Primed</div>
             </div>
             <div className="bg-zinc-800/50 rounded-2xl md:rounded-3xl border border-zinc-700/50 p-4 md:p-6 flex flex-col items-center justify-center text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-2 md:mb-3">🎬</div>
                <div className="text-white text-xl md:text-2xl font-bold">Reels</div>
                <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1">Scaling</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
