"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do you guarantee views?",
      answer: "We leverage a massive network of thousands of active creators who distribute your content simultaneously. Combined with real-time data analysis on viral hooks, we scale the exact segments of your content that are proven to perform. Because all campaigns are run on a strict CPM basis, you only pay for actual tracked views per 1,000 views. You simply allocate your chosen budget to your campaign, and we handle the guaranteed, mathematically scaling reach."
    },
    {
      question: "Who is Multimillion Clippers for?",
      answer: "Our platform is built for brands, podcasters, music artists, and content creators who want to scale their reach rapidly without the overhead of hiring an entire video team. If you have long-form content or core brand messages, we can turn them into a viral engine."
    },
    {
      question: "Are the clippers real people or AI?",
      answer: "Our network consists of thousands of real, active human creators. While we use advanced data tools to identify high-probability viral hooks, the actual editing, refining, and distribution is driven by our massive creator community to ensure organic, authentic engagement."
    },
    {
      question: "How fast is the turnaround for each campaign?",
      answer: "We are built for speed. Once you launch a campaign, our network gets to work immediately, often yielding the first wave of ready-to-post clips within 24 hours, and full campaign liftoff shortly after."
    },
    {
      question: "What platforms do you support?",
      answer: "We actively distribute your short-form content across the big three: TikTok, Instagram Reels, and YouTube Shorts. These platforms provide the highest velocity for organic growth and viral scale."
    },
    {
      question: "How do I get started with my first campaign?",
      answer: "It's simple. Click 'Launch Campaign' anywhere on the site to connect with our team. You define your budget and provide your source material, and we securely deploy it to our creator network to start clipping and posting."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-semibold text-[#1C1D20] text-center mb-12 md:mb-20 tracking-tighter">
        Got questions?<br className="md:hidden" /> We've got answers.
      </h2>

      <div className="flex flex-col gap-3 md:gap-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index}
              onClick={() => toggleFaq(index)}
              className={`group flex flex-col p-5 md:p-8 rounded-[24px] md:rounded-[32px] transition-all cursor-pointer border ${isOpen ? 'bg-white border-blue-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'bg-[#F6F8FA] border-transparent hover:border-gray-200 hover:bg-gray-100'}`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-base md:text-xl font-bold pr-4 transition-colors ${isOpen ? 'text-blue-600' : 'text-[#1C1D20]'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full shadow-sm flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-white border border-gray-100 text-gray-400 group-hover:text-blue-600 group-hover:border-blue-100'}`}>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#6B6D76] text-sm md:text-lg leading-relaxed pt-4 md:pt-6 border-t border-gray-100">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
