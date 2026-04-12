"use client";

import { motion } from "framer-motion";

export default function Steps() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const steps = [
    {
      number: "1",
      title: "Define your budget and reward rate",
      description: "Choose exactly how much you'll spend on the campaign and pay per 1,000 views. You're always in control of your budget.",
      side: "right",
    },
    {
      number: "2",
      title: "Provide guidelines and assets",
      description: "Provide your guidelines and rules for creators, what you want, your style, your brand.",
      side: "left",
    },
    {
      number: "3",
      title: "Review and approval",
      description: "Multimillion Clippers will review the submitted clips, setup campaign, you add funds and watch them go viral.",
      side: "right",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1C1D20] mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#6B6D76] text-xl font-medium"
          >
            Get Million Views In Three Simple Steps
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile to save space since cards have numbers */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-100 via-blue-500 to-blue-100 -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10 md:gap-32"
          >
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block w-1/2 pr-20 text-right">
                <motion.div variants={itemVariants} className="inline-block">
                  <span className="text-5xl md:text-7xl font-bold text-blue-500/80 block tracking-tight">15M+ Views</span>
                  <span className="text-blue-400 font-bold tracking-widest text-xs mt-2 block uppercase">Campaign reach is measured on a CPM basis</span>
                  <p className="text-gray-400 text-sm mt-4 max-w-xs ml-auto">You set how much you want to pay per 1,000 views, and we scale from there. No guessing, no wasted spend. You only pay when your content actually gets seen</p>
                </motion.div>
              </div>

              {/* Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />

              <div className="w-full md:w-1/2 md:pl-20">
                <motion.div variants={itemVariants} className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm md:text-base">1</div>
                    <span className="md:hidden text-blue-500 font-bold tracking-widest text-[10px] uppercase">Step 01</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C1D20] mb-3 md:mb-4 tracking-tight">{steps[0].title}</h3>
                  <p className="text-[#6B6D76] text-base md:text-lg leading-relaxed">{steps[0].description}</p>

                  {/* Mobile-only stats */}
                  <div className="mt-8 md:hidden pt-6 border-t border-gray-50 flex flex-col items-center text-center">
                    <span className="text-4xl font-bold text-blue-500/90 block tracking-tight">15M+ Views</span>
                    <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase mt-2 block">Campaign reach is measured on a CPM basis</span>
                    <p className="text-gray-400 text-sm mt-4 max-w-xs">You set how much you want to pay per 1,000 views, and we scale from there. No guessing, no wasted spend. You only pay when your content actually gets seen</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-20 order-2 md:order-1 mt-6 md:mt-0">
                <motion.div variants={itemVariants} className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm md:text-base">2</div>
                    <span className="md:hidden text-blue-500 font-bold tracking-widest text-[10px] uppercase">Step 02</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C1D20] mb-3 md:mb-4 tracking-tight">{steps[1].title}</h3>
                  <p className="text-[#6B6D76] text-base md:text-lg leading-relaxed">{steps[1].description}</p>

                  {/* Mobile-only stats */}
                  <div className="mt-8 md:hidden pt-6 border-t border-gray-50 flex flex-col items-center text-center">
                    <span className="text-4xl font-bold text-blue-500/90 block tracking-tight">8K+ Clippers</span>
                    <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase mt-2 block">Active Creator Community</span>
                    <p className="text-gray-400 text-sm mt-4 max-w-xs">Thousands of creators already posting every day</p>
                  </div>
                </motion.div>
              </div>

              {/* Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />

              <div className="hidden md:block w-1/2 pl-20 order-1 md:order-2">
                <motion.div variants={itemVariants}>
                  <span className="text-5xl md:text-7xl font-bold text-blue-500/80 block tracking-tight">8K+ Clippers</span>
                  <span className="text-blue-400 font-bold tracking-widest text-xs mt-2 block uppercase">Active Creator Community</span>
                  <p className="text-gray-400 text-sm mt-4 max-w-xs">Thousands of creators already posting every day</p>
                </motion.div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block w-1/2 pr-20 text-right">
                <motion.div variants={itemVariants} className="inline-block">
                  <span className="text-5xl md:text-7xl font-bold text-blue-500/80 block tracking-tight">Viral Flow</span>
                  <span className="text-blue-400 font-bold tracking-widest text-xs mt-2 block uppercase">Content that keeps spreading even after launch</span>
                  <p className="text-gray-400 text-sm mt-4 max-w-xs ml-auto">Millions of views from short clips across TikTok, Reels, Shorts, X
                    <br />Videos hitting 500K–50M+ consistently
                    <br />Campaigns blowing up in days, not months</p>
                </motion.div>
              </div>

              {/* Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />

              <div className="w-full md:w-1/2 md:pl-20 mt-6 md:mt-0">
                <motion.div variants={itemVariants} className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm md:text-base">3</div>
                    <span className="md:hidden text-blue-500 font-bold tracking-widest text-[10px] uppercase">Step 03</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C1D20] mb-3 md:mb-4 tracking-tight">{steps[2].title}</h3>
                  <p className="text-[#6B6D76] text-base md:text-lg leading-relaxed">{steps[2].description}</p>

                  {/* Mobile-only stats */}
                  <div className="mt-8 md:hidden pt-6 border-t border-gray-50 flex flex-col items-center text-center">
                    <span className="text-4xl font-bold text-blue-500/90 block tracking-tight">Viral Flow</span>
                    <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase mt-2 block">Content that keeps spreading even after launch</span>
                    <p className="text-gray-400 text-sm mt-4 max-w-xs">Millions of views from short clips across TikTok, Reels, Shorts, X
                      <br />Videos hitting 500K–50M+ consistently
                      <br />Campaigns blowing up in days, not months
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


