"use client";

import { CheckCircle, ArrowRight, Video, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#F6F8FA] rounded-[32px] p-10 flex flex-col items-start gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1D20] leading-tight max-w-sm">
            Viral Audience Intelligence
          </h2>
          <p className="text-[#6B6D76] text-lg max-w-sm font-medium mb-8">
            Understand exactly who is watching your content and what makes them share.
          </p>
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Live Audience Data</span>
              </div>
              <div className="h-6 w-24 bg-blue-50 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600 uppercase">98% Match</div>
            </div>
            <div className="flex items-center gap-3 mt-2 border-b border-gray-50 pb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">Z</div>
              <div>
                <div className="font-semibold text-gray-800">Gen Z • Africa</div>
                <div className="text-sm text-gray-500">85% Engagement • 12.4M Views</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              High hold-rate detected in the first 3 seconds for this demographic.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F6F8FA] rounded-[32px] p-10 flex flex-col items-start gap-4 overflow-hidden relative"
        >
          <div className="w-full bg-white rounded-t-2xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-100 p-6 -mt-4 mb-4 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-blue-600">★</div>
                 <span className="text-sm font-semibold">Viral Moment Found</span>
               </div>
               <div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full">High Potential</div>
            </div>
            <div className="flex flex-col gap-2">
               <div className="w-full h-2 bg-gray-100 rounded-full" />
               <div className="w-3/4 h-2 bg-gray-100 rounded-full" />
            </div>
            <div className="mt-4">
              <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Automated Clip</h4>
              <h3 className="font-bold text-lg text-gray-800">Podcast: Why Content is King in 2026</h3>
              <div className="flex items-center gap-2 mt-3">
                <div className="px-3 py-1 bg-gray-900 text-white text-xs rounded-md">02:45 — 03:15</div>
                <div className="text-xs text-gray-400 font-medium">Auto-extracted by AI</div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1D20] leading-tight">
            AI-Powered Clip Extraction
          </h2>
          <p className="text-[#6B6D76] text-lg font-medium">
            Our AI identifies the top 1% of high-retention moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

