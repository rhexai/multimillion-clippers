"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Calendar, Clock, ChevronRight, Loader2 } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getPostBySlug } from "../../../app/actions/blog";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPostBySlug(slug);
      setPost(data);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#1C1D20]">Post not found</h1>
        <p className="text-gray-500 mb-8">The article you are looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar forceSolidBg={true} />
      <main className="min-h-screen pt-[200px] md:pt-[280px] pb-24 bg-white text-gray-900 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase mb-8">
            <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-300" />
            <Link href="/blog" className="hover:text-blue-800 transition-colors">Blog</Link>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-gray-500">{post.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-24 items-start">
            
            {/* Left Content Area */}
            <article className="w-full max-w-[800px]">
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1C1D20] leading-[1.05] tracking-tight mb-6 text-balance">
                {post.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-2xl">
                {post.excerpt}
              </p>

              {/* Author Meta Bar */}
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 mb-12">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Caleb Kpatson" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Caleb Kpatson</p>
                    <p className="text-[11px] text-gray-500 font-medium">Multimillion Clippers</p>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> Published {new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Body Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1C1D20] prose-headings:tracking-tight prose-a:text-blue-600 prose-li:marker:text-blue-500 mb-16"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio Box Bottom */}
              <div className="bg-[#F8F9FB] rounded-[32px] p-8 md:p-10 my-16 border border-gray-100 flex flex-col sm:flex-row items-start gap-6">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Caleb Kpatson" className="w-20 h-20 rounded-full object-cover shrink-0 ring-4 ring-white shadow-sm" />
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">WRITTEN BY</h4>
                  <h3 className="text-xl font-bold text-[#1C1D20] mb-1">Caleb Kpatson</h3>
                  <p className="text-xs text-blue-600 font-semibold mb-4">HeadOps, Multimillion Clippers</p>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                    Specializing in platform-native content strategy and organic distribution systems for high-growth brands.
                  </p>
                </div>
              </div>

              {/* Continue the Path Bottom Cards */}
              <div className="border-t border-gray-100 pt-16">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-transparent">CONTINUE THE PATH</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1 */}
                  <Link href="#" className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full text-left">
                    <h5 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">SERVICE PATH</h5>
                    <h3 className="text-base font-bold text-[#1C1D20] mb-3 leading-tight">Video Clipping Service</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      See the broad service path for turning long-form content into managed short-form distribution.
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[#1C1D20]">
                      Open resource <ArrowUpRight size={14} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>

                  {/* Card 2 */}
                  <Link href="#" className="bg-[#F8F9FB] border border-transparent rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full text-left">
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">CAMPAIGN PROOF</h5>
                    <h3 className="text-base font-bold text-[#1C1D20] mb-3 leading-tight">Review case studies</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      Compare brand, artist, product, and podcast campaigns by reach, output, and efficiency.
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[#1C1D20]">
                      Open resource <ArrowUpRight size={14} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>

                  {/* Card 3 */}
                  <Link href="#" className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full text-left">
                    <h5 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">GUIDE</h5>
                    <h3 className="text-base font-bold text-[#1C1D20] mb-3 leading-tight">What is clipping?</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      Start with the category explainer before moving into the service and commercial path.
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[#1C1D20]">
                      Open resource <ArrowUpRight size={14} className="text-gray-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>

                </div>
              </div>

            </article>

            {/* Right Sidebar Area */}
            <aside className="w-full relative lg:sticky lg:top-[120px] flex flex-col gap-8 pb-12">
              
              {/* Primary Next Step CTA */}
              <div className="bg-[#EEF2FC] border border-blue-100 rounded-[24px] p-6 md:p-8">
                <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-5 text-left">PRIMARY NEXT STEP</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium text-left text-balance">
                  Use the video clipping service page for scope, launch process, and fit details, then book a strategy call if you want rollout mapped against your source content.
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  <Link href="#" className="bg-blue-600 text-white text-sm font-semibold py-3.5 px-4 rounded-full text-center hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
                    See managed video clipping service
                  </Link>
                  <Link href="#" className="bg-white text-blue-600 text-sm font-semibold py-3.5 px-4 rounded-full text-center hover:bg-blue-50 transition-colors border border-blue-200 shadow-sm">
                    Book Strategy Call
                  </Link>
                </div>
                <div className="text-[11px] text-gray-500 font-medium pb-4 border-b border-blue-100/50 mb-5 text-balance text-left">
                  Over 10B+ Views Generated From Multimillion Clippers
                </div>
                <Link href="#" className="text-xs font-bold text-gray-900 border-b border-gray-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors w-fit block mx-auto lg:mx-0">
                  Review case studies
                </Link>
              </div>

            </aside>
          </div>
        </div>

        {/* Scroll to Top FAB */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 z-50 transition-all focus:outline-none"
        >
          <ArrowUp size={20} />
        </button>
      </main>
      <Footer />
    </>
  );
}
