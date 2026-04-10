"use client";

import { CheckCircle, ArrowRight, Video, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureGrid() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1C1D20] mb-4 md:mb-6 tracking-tight">
          Engineered for <span className="text-blue-600">Virality.</span>
        </h2>
        <p className="text-[#6B6D76] text-lg md:text-xl font-medium max-w-2xl mx-auto px-4">
          Our specialized team handles everything from platform-specific edits to distributed launch waves.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#F6F8FA] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col items-start gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1C1D20] leading-tight max-w-sm">
              Viral Audience Intelligence
            </h3>
            <p className="text-[#6B6D76] text-base md:text-lg max-w-sm font-medium">
              Understand exactly who is watching your content and what makes them share across TikTok and Reels.
            </p>
          </div>
          
          <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col gap-4 md:gap-6 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-wider">Live Audience Data</span>
              </div>
              <div className="h-6 px-3 bg-blue-50 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 uppercase">98% Match</div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 border-b border-gray-50 pb-4 md:pb-6">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-inner">Z</div>
              <div>
                <div className="font-bold text-gray-800 text-sm md:text-base">Gen Z • Africa</div>
                <div className="text-xs md:text-sm text-gray-500">85% Engagement • 12.4M Views</div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed italic">
              "High hold-rate detected in the first 3 seconds for this demographic. Recommended hook: Action-first intro."
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F6F8FA] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col items-start gap-6 md:gap-8 overflow-hidden relative"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1C1D20] leading-tight max-w-sm">
              AI-Powered Clip Extraction
            </h3>
            <p className="text-[#6B6D76] text-base md:text-lg max-w-sm font-medium">
              Our proprietary engine identifies the top 1% of high-retention moments from your long-form videos.
            </p>
          </div>

          <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col gap-4 md:gap-6 mt-auto">
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
               <div className="flex items-center gap-2">
                 <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-lg flex items-center justify-center text-xs text-blue-600">★</div>
                 <span className="text-xs md:text-sm font-bold text-[#1C1D20]">Viral Moment Found</span>
               </div>
               <div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-wider">High Potential</div>
            </div>
            <div className="flex flex-col gap-3">
               <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-blue-500" 
                  />
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Hold Rate</span>
                  <span className="text-blue-600">92%</span>
               </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
              <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Auto-extracted segment</h4>
              <h3 className="font-bold text-sm md:text-base text-gray-800 leading-tight">Podcast: Why Africa is the next content frontier</h3>
              <div className="flex items-center gap-3 mt-4">
                <div className="px-2.5 py-1 bg-gray-900 text-white text-[10px] md:text-xs rounded-md font-mono">02:45 — 03:15</div>
                <div className="text-[10px] md:text-xs text-gray-400 font-semibold italic text-right flex-1">Processing wave...</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
