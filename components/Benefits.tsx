export default function Benefits() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1D20] max-w-xl leading-tight">
        Scale your views without scaling your effort
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#4D82F3] rounded-[32px] p-10 flex flex-col overflow-hidden relative min-h-[400px]">
          <div className="glass-panel rounded-2xl p-6 absolute top-8 left-8 right-8 z-10 border border-white/20 bg-black/10 backdrop-blur-3xl shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Viral Predictor</div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                92% Hook Rate
              </div>
            </div>
            <p className="text-white text-base font-medium leading-relaxed mb-6">
              "This segment has a 92% probability of going viral in the Tech-Business niche. The hook transition at 00:15 is perfectly timed for TikTok retention."
            </p>
            <div className="flex gap-2">
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-[92%]" />
              </div>
            </div>
          </div>
          <div className="mt-auto relative z-10 pt-[240px]">
            <h3 className="text-2xl font-semibold text-white mb-2">Viral Sentiment & Hold Rate Analysis</h3>
            <p className="text-white/80">Predict viral potential before you even post with our AI sentiment engine.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F6F8FA] rounded-[32px] p-10 flex flex-col">
          <h3 className="text-2xl font-semibold text-[#1C1D20] mb-2">Instant Multi-Platform Scale</h3>
          <p className="text-[#6B6D76] font-medium mb-8">Launch your distribution wave across TikTok, Reels, and Shorts at once.</p>
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between mt-auto">
             <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">TT</div>
                      <span className="text-sm font-semibold">TikTok Distribution</span>
                   </div>
                   <div className="text-xs text-green-600 font-bold italic">Ready</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">IG</div>
                      <span className="text-sm font-semibold">Instagram Reels</span>
                   </div>
                   <div className="text-xs text-green-600 font-bold italic">Ready</div>
                </div>
             </div>
             <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                   Launch Viral Wave
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
