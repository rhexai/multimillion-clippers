"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-44 md:pt-[180px] pb-20 px-6 hero-gradient overflow-hidden min-h-[90vh] flex flex-col items-center justify-start text-center">
      {/* Decorative sun/glow behind mountains */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#fff8e7] rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[70px] font-semibold tracking-tight text-white mb-6 leading-[1.02] hero-text-gradient drop-shadow-sm text-balance"
        >
          #1 Viral<br className="hidden md:block" /> Clipping Campaign Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-xl text-white/90 max-w-2xl mx-auto font-medium mb-10 px-4 drop-shadow-sm"
        >
          We help your brand blow up across Africa. No wasted ads budget, results for every dollar spent. Our creators turn your podcasts, interviews, and promos into viral clips across all platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="https://wa.link/tpojam" 
            className="bg-[var(--color-brand-blue)] hover:bg-blue-600 shadow-[0_10px_40px_rgba(33,107,233,0.8)] text-white text-lg font-medium px-8 py-4 rounded-full transition-all flex items-center gap-2 mb-20 relative overflow-hidden group w-fit mx-auto"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              <img src="/mmclipperslogo.png" alt="" className="w-10 h-10 object-contain brightness-0 invert" /> Launch Campaign
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Mockup section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-20 w-full max-w-5xl mx-auto -mb-24 md:-mb-48 perspective-[1000px] px-4"
      >
        <div className="glass-panel w-full aspect-[16/11] md:aspect-[16/10] rounded-t-3xl md:rounded-t-[40px] border-b-0 shadow-2xl p-2 md:p-4 flex flex-col relative overflow-hidden bg-white/10">
          {/* Mockup header */}
          <div className="hidden md:flex items-center gap-2 mb-3 pl-2 opacity-50">
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

            {/* Floating widget over the mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute inset-x-4 top-1/2 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 md:w-[600px] glass-panel rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20 bg-[#1C1D20]/80 backdrop-blur-3xl text-left z-30"
            >
              <div className="flex justify-end mb-3 md:mb-4">
                <div className="bg-[#1E5DE5] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl rounded-tr-sm text-xs md:text-sm font-medium shadow-[0_0_20px_rgba(33,107,233,0.4)]">
                  Viral Hook Found ✨
                </div>
              </div>
              <p className="text-white text-sm md:text-lg font-medium leading-relaxed mb-4 md:mb-6">
                "This 30-second segment has a 92% viral probability. The creators are already prepping the first distribution wave."
              </p>
              <div className="flex items-center gap-3 text-[10px] md:text-xs text-zinc-400 mb-3 md:mb-4 border-t border-zinc-800 pt-3 md:pt-4">
                <span className="flex items-center gap-1">Audience Sentiment: 📈 High</span>
                <span className="flex items-center gap-1">Platform Fit: Reels • TikTok</span>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-3 py-2 md:px-4 md:py-3 text-zinc-500 text-[10px] md:text-sm flex items-center">
                Reviewing viral metrics...
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

