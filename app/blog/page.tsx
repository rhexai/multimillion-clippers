"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ArrowUp, Loader2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { getPosts } from "../actions/blog";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPosts();
      setBlogPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  const latestPosts = blogPosts.slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[200px] md:pt-[280px] pb-24 text-gray-900 hero-gradient">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase bg-blue-50/50 py-2 px-4 rounded-full border border-blue-100">
            <span className="flex h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
            SHOWING 13 RESULTS 
            <span className="mx-3 text-gray-300">|</span> 
            UPDATED APR 6, 2026
            <span className="mx-3 text-gray-300">|</span> 
            Sort by 
            <button className="ml-2 flex items-center gap-1 text-gray-900 capitalize focus:outline-none">
              Newest first <ChevronDown size={14} />
            </button>
          </div>
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white border border-gray-200 rounded-full py-2.5 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
          
          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
            {loading ? (
              <div className="col-span-full py-20 flex flex-col items-center gap-4">
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <p className="text-gray-500 font-medium">Fetching latest articles...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-full py-20 text-center text-gray-400">
                No articles published yet. Check back soon!
              </div>
            ) : (
              blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-t-3xl">
                    <img 
                      src={post.image || "/cover.png"} 
                      alt={post.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                        <ArrowUp size={16} className="rotate-45" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2 py-0.5 bg-blue-50 rounded">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold leading-tight mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Caleb Kpatson" className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Caleb Kpatson</p>
                          <p className="text-[10px] text-gray-500 font-medium">Multimillion Clippers</p>
                        </div>
                      </div>
                      <div className="text-[10px] font-medium text-gray-400 text-right">
                        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sticky top-[100px]">
            
            {/* CTA Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none"></div>
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">NEED A CAMPAIGN PLAN?</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 relative z-10">
                See proof from recent campaigns or bring your goals to a strategy call when you are ready to scope rollout.
              </p>
              <div className="space-y-3 relative z-10">
                <Link href="#" className="flex justify-center items-center w-full bg-[var(--color-brand-blue)] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(30,93,229,0.3)] gap-2">
                   View case studies
                </Link>
                <Link href="#" className="flex justify-center items-center w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm font-semibold py-3 px-4 rounded-xl transition-all gap-2">
                   Book strategy call
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">ALL CATEGORIES</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link href="#" className="flex items-center justify-between px-4 py-3 bg-blue-50 text-blue-600 rounded-xl group transition-all">
                    All
                    <ChevronDown size={16} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl group transition-all">
                    Strategy
                    <ChevronDown size={16} className="-rotate-90 text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl group transition-all">
                    Creator Tips
                    <ChevronDown size={16} className="-rotate-90 text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl group transition-all">
                    Clipping Campaigns
                    <ChevronDown size={16} className="-rotate-90 text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="pl-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">LATEST POSTS</h3>
              <div className="space-y-6">
                {latestPosts.map((post, i) => (
                  <Link href="#" key={i} className="group block">
                    <h4 className="text-sm font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <img src={post.img} alt={post.author} className="w-5 h-5 rounded-full" />
                      <span className="text-xs font-medium text-gray-600">{post.author}</span>
                    </div>
                    <div className="mt-1 text-[10px] text-gray-400 font-medium pl-7">
                      {post.date} | {post.readTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Scroll to Top FAB */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all border border-blue-100 z-50 focus:outline-none"
      >
        <ArrowUp size={20} />
      </button>

      </main>
      <Footer />
    </>
  );
}
