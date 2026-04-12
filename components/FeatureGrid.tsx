"use client";

export default function FeatureGrid({ caseStudies }: { caseStudies: any[] }) {
  const items = caseStudies && caseStudies.length > 0 ? caseStudies : [];
  
  // Split items into two rows to scroll in opposite directions
  // Row 1: First half or even indexed items
  // Row 2: Second half or odd indexed items
  const row1Items = items.filter((_, i) => i % 2 === 0);
  const row2Items = items.filter((_, i) => i % 2 !== 0);

  // Repeat items exactly twice for seamless -50% animation loop
  const marqueeRow1 = row1Items.length > 0 ? [...row1Items, ...row1Items] : [];
  const marqueeRow2 = row2Items.length > 0 ? [...row2Items, ...row2Items] : [];

  const Card = ({ study, index }: { study: any, index: number }) => (
    <div 
      key={(study.id || index) + "-" + index}
      className="group relative bg-[#F6F8FA] rounded-none overflow-hidden flex flex-col cursor-pointer shrink-0 w-[300px] md:w-[420px] border border-gray-100 hover:border-gray-300 transition-colors shadow-sm hover:shadow-xl"
    >
      <div className="h-48 md:h-64 relative overflow-hidden bg-gray-900">
        <img 
          src={study.image}
          alt={study.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
      </div>
      
      <div className="p-6 flex flex-col gap-4 bg-white relative z-20 grow">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider border border-blue-100">
              {study.category}
            </span>
            {study.budget && (
              <span className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider border border-gray-200">
                Budget: {study.budget}
              </span>
            )}
          </div>
          <span className="text-blue-600 text-sm font-bold tracking-tight">
            {study.metric}
          </span>
        </div>

        <h3 className="text-base md:text-lg font-semibold text-[#1C1D20] leading-snug transition-colors group-hover:text-blue-600 line-clamp-3">
          {study.title}
        </h3>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-32 overflow-hidden flex flex-col gap-10 md:gap-16">
      <div className="text-center px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-semibold text-[#1C1D20] mb-4 md:mb-6 tracking-tight leading-tight">
          Engineered for <span className="text-blue-600">Virality.</span>
        </h2>
        <p className="text-[#6B6D76] text-sm md:text-xl font-medium max-w-2xl mx-auto">
          See how our platform drives unprecedented engagement across every industry through data-backed case studies.
        </p>
      </div>

      <div className="w-full overflow-hidden relative flex flex-col gap-6 md:gap-11">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Row 1: Moves Left */}
        <div className="animate-marquee flex gap-6 md:gap-8 px-4 w-max">
          {marqueeRow1.map((study, index) => (
            <Card key={`r1-${index}`} study={study} index={index} />
          ))}
        </div>

        {/* Row 2: Moves Right */}
        <div className="animate-marquee-reverse flex gap-6 md:gap-8 px-4 w-max">
          {marqueeRow2.map((study, index) => (
            <Card key={`r2-${index}`} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
