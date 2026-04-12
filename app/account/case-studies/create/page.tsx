"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCaseStudy } from "@/app/actions/case-study";
import { ChevronLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

export default function CreateCaseStudyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    metric: "",
    budget: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createCaseStudy(formData);
      if (result.success) {
        router.push("/account");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[1000px] mx-auto p-6 md:p-10 lg:p-12">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/account"
              className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-[#0f172a]">Create Case Study</h1>
              <p className="text-sm text-[#64748b]">Add a new case study to the Feature Grid</p>
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2 shadow-sm disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={18} />}
            {loading ? "Saving..." : "Save Case Study"}
          </button>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#475569]">Case Study Title / Headline</label>
              <input
                required
                type="text"
                placeholder="e.g. 12.4M new viewers in 30 days."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#475569]">Category</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Podcast Agency"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#475569]">Highlight Metric</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 12.4M Views"
                  value={formData.metric}
                  onChange={(e) => setFormData({ ...formData, metric: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#475569]">Budget</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. $10,000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#475569]">Image URL</label>
              <input
                required
                type="text"
                placeholder="https://images.unsplash.com/photo-..."
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <p className="text-[11px] text-gray-400 italic">Enter an absolute URL to an image. Hint: You can use unsplash source links for quick professional images.</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#3b82f6] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-sm transition-all shadow-md flex items-center gap-2 disabled:opacity-70 active:scale-95"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {loading ? "Creating..." : "Create Case Study"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
