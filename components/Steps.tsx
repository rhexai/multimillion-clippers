"use client";

import { motion } from "framer-motion";

export default function Steps() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center pt-48">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1D20] mb-4">
          Meeting notes in 3 steps
        </h2>
        <p className="text-[#6B6D76] text-xl font-medium">
          The easiest way to get beautiful, shareable<br/>meeting notes.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full"
      >
        {/* Step 1 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center text-center">
          <div className="bg-[#F6F8FA] rounded-3xl w-full aspect-[4/3] flex items-center justify-center relative shadow-inner overflow-hidden border border-[#e8e9ec]">
            <div className="absolute bottom-0 w-[80%] h-[70%] bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex p-4">
              <div className="bg-black text-white px-3 py-1.5 rounded-md text-xs font-medium self-start mt-4 ml-4">Start Cluely</div>
            </div>
          </div>
          <div className="text-left w-full px-2">
            <h3 className="text-xl font-semibold text-[#1C1D20] flex items-center gap-3">
              <span className="text-gray-300 font-normal">1</span> Start Cluely
            </h3>
            <p className="text-[#6B6D76] text-sm mt-2 max-w-[280px]">
              Simply click Start Cluely before your meeting begins.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center text-center">
          <div className="bg-[#F6F8FA] rounded-3xl w-full aspect-[4/3] flex items-center justify-center relative shadow-inner overflow-hidden border border-[#e8e9ec]">
             <div className="absolute w-[80%] h-12 bg-zinc-800 rounded-full flex items-center justify-center gap-4 text-white">
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center"><span className="w-3 h-3 bg-red-500 rounded-sm"></span></div>
             </div>
          </div>
          <div className="text-left w-full px-2">
            <h3 className="text-xl font-semibold text-[#1C1D20] flex items-center gap-3">
              <span className="text-gray-300 font-normal">2</span> End Cluely
            </h3>
            <p className="text-[#6B6D76] text-sm mt-2 max-w-[280px]">
              Click the Stop button to end recording. That's it.
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center text-center">
          <div className="bg-[#F6F8FA] rounded-3xl w-full aspect-[4/3] flex flex-col items-center justify-end relative shadow-inner overflow-hidden border border-[#e8e9ec]">
            <div className="w-[70%] h-[80%] bg-white rounded-t-xl shadow-lg border border-gray-100 p-4">
              <div className="w-1/2 h-3 bg-gray-200 rounded-full mb-3"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-6"></div>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
              <div className="w-4/5 h-2 bg-gray-100 rounded-full mb-2"></div>
            </div>
          </div>
          <div className="text-left w-full px-2">
            <h3 className="text-xl font-semibold text-[#1C1D20] flex items-center gap-3">
              <span className="text-gray-300 font-normal">3</span> Get notes
            </h3>
            <p className="text-[#6B6D76] text-sm mt-2 max-w-[280px]">
              Cluely uses what it heard and what it saw on your screen to generate notes.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

