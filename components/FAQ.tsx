import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    "Why real-time vs. a regular AI notetaker?",
    "Who is Cluely for?",
    "Is Cluely free?",
    "How is it undetectable in meetings?",
    "What languages and apps are supported?",
    "Can I talk to customer support?"
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-semibold text-[#1C1D20] mb-12">
        Frequently asked questions
      </h2>
      <div className="flex flex-col border-t border-gray-200">
        {faqs.map((faq, idx) => (
          <div key={idx} className="w-full flex items-center justify-between py-6 border-b border-gray-200 cursor-pointer group">
            <h3 className="text-lg font-medium text-[#1C1D20] group-hover:text-blue-600 transition-colors">{faq}</h3>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </section>
  );
}
