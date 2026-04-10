export default function Benefits() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1D20] max-w-xl leading-tight">
        Four ways we make your meetings better
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#4D82F3] rounded-[32px] p-10 flex flex-col overflow-hidden relative min-h-[400px]">
          <div className="glass-panel rounded-2xl p-6 absolute top-8 left-8 right-8 z-10 border border-white/20 bg-black/10 backdrop-blur-3xl shadow-2xl">
            <div className="flex justify-end mb-4">
              <div className="bg-blue-600/80 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm font-medium">
                What do I say next?
              </div>
            </div>
            <p className="text-white text-base font-medium leading-relaxed mb-6">
              "I hear you on the integration concerns - that's usually the first thing that comes up. We've actually built direct connectors for the tools you mentioned, and our average setup time is only half a day."
            </p>
          </div>
          <div className="mt-auto relative z-10 pt-[240px]">
            <h3 className="text-2xl font-semibold text-white mb-2">AI that answers questions for you, real-time</h3>
            <p className="text-white/80">Cluely uses the screen, transcript, and AI to answer questions for you, live.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F6F8FA] rounded-[32px] p-10 flex flex-col">
          <h3 className="text-2xl font-semibold text-[#1C1D20] mb-2">Instant follow-up emails</h3>
          <p className="text-[#6B6D76] font-medium mb-8">Send perfectly drafted follow-up emails within seconds after every call.</p>
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between mt-auto">
             <div>
               <h4 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h4>
               <p className="text-gray-500 mb-6">Technical Interview</p>
               <div className="w-1/3 h-4 bg-gray-100 rounded-full mb-8"></div>
             </div>
             <div>
                <button className="bg-blue-600 text-white w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                  <span className="text-lg">✉️</span> Follow-up email
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
