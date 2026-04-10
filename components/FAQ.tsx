import { ChevronRight } from "lucide-react";

export default function FAQ() {
  const faqs = [
    "How do you guarantee multimillion views?",
    "Who is Multimillion Clippers for?",
    "Are the clippers real people or AI?",
    "How fast is the turnaround for each campaign?",
    "What platforms do you support?",
    "How do I get started with my first campaign?"
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-semibold text-[#1C1D20] text-center mb-12 md:mb-20 tracking-tighter">
        Got questions?<br className="md:hidden" /> We've got answers.
      </h2>

      <div className="flex flex-col gap-4 md:gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="group flex items-center justify-between p-6 md:p-8 bg-[#F6F8FA] rounded-[24px] md:rounded-[32px] hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-gray-200"
          >
            <span className="text-base md:text-xl font-bold text-[#1C1D20] pr-4">{faq}</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
