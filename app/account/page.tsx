"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { FileText, Plus, Loader2, Edit2, Trash2, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPosts, deletePost } from "@/app/actions/blog";
import { getCaseStudies, deleteCaseStudy } from "@/app/actions/case-study";

export default function AccountDashboard() {
  const { user } = useUser();
  const [posts, setPosts] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"posts" | "cases">("posts");

  const navItems = [
    { id: "posts", name: "Posts", icon: FileText },
    { id: "cases", name: "Case Studies", icon: LayoutGrid },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [postsData, casesData] = await Promise.all([
      getPosts(),
      getCaseStudies()
    ]);
    setPosts(postsData);
    setCaseStudies(casesData);
    setLoading(false);
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    const result = await deletePost(id);
    if (result.success) {
      setPosts(posts.filter(p => p.id !== id));
    } else {
      alert(result.error);
    }
  };

  const handleDeleteCaseStudy = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    const result = await deleteCaseStudy(id);
    if (result.success) {
      setCaseStudies(caseStudies.filter(c => c.id !== id));
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#0f172a] text-white flex flex-col min-h-screen sticky top-0 hidden lg:flex">
        <div className="p-8 pb-6">
          <h1 className="text-[20px] tracking-wide mb-1 text-white/95">Multimillion Clippers</h1>
          <p className="text-[#64748b] text-[13px]">Admin Dashboard</p>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-1.5 w-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => setActiveTab(item.id as any)}
                className={`flex items-center gap-4 px-4 py-3 text-[14px] font-medium rounded-lg transition-colors w-full text-left
                  ${isActive ? "text-white bg-white/5" : "text-[#94a3b8] hover:text-white hover:bg-white/5"}
                `}
              >
                <item.icon size={18} strokeWidth={1.5} className={isActive ? "text-white" : "text-[#64748b]"} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* User Profile Widget */}
        <div className="p-6 border-t border-white/10 flex items-center gap-3 w-full mt-auto">
           <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9" } }} />
           <div className="overflow-hidden w-full">
             <p className="text-[13px] font-medium text-white truncate">{user?.fullName || "Admin User"}</p>
             <p className="text-[11px] text-[#64748b] truncate">{user?.primaryEmailAddress?.emailAddress || "admin@multimillionclippers.com"}</p>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-x-hidden w-full">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-[28px] text-[#0f172a] tracking-tight">
              {activeTab === "posts" ? "Posts" : "Case Studies"}
            </h2>
            <Link 
              href={activeTab === "posts" ? "/account/create" : "/account/case-studies/create"}
              className="bg-[#3b82f6] hover:bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-all shadow-sm active:scale-95 flex items-center gap-2"
            >
              <Plus size={18} /> Create New {activeTab === "posts" ? "Post" : "Case Study"}
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm overflow-hidden w-full">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#e2e8f0] bg-white">
                    <th className="px-6 py-5 text-[13px] font-medium text-[#64748b] w-1/2">
                      {activeTab === "posts" ? "Title" : "Case Study Title"}
                    </th>
                    <th className="px-6 py-5 text-[13px] font-medium text-[#64748b]">Category</th>
                    <th className="px-6 py-5 text-[13px] font-medium text-[#64748b]">
                      {activeTab === "posts" ? "Published" : "Metric / Budget"}
                    </th>
                    <th className="px-6 py-5 text-[13px] font-medium text-[#64748b] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0]">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center gap-3">
                          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                          <p className="text-sm text-gray-500">Loading your data...</p>
                        </div>
                      </td>
                    </tr>
                  ) : activeTab === "posts" ? (
                    posts.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center text-gray-500 text-sm">
                          No posts found. Start by creating your first post!
                        </td>
                      </tr>
                    ) : (
                      posts.map((post) => (
                        <tr key={post.id} className="hover:bg-[#f8fafc] transition-colors group">
                          <td className="px-6 py-5">
                            <p className="text-[14px] text-[#0f172a] mb-1 font-medium">{post.title}</p>
                            <p className="text-[12px] text-[#94a3b8] tracking-wide">/{post.slug}</p>
                          </td>
                          <td className="px-6 py-5 text-[14px] text-[#475569]">{post.category}</td>
                          <td className="px-6 py-5 text-[14px] text-[#475569]">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-5 text-sm text-right space-x-4">
                            <Link 
                              href={`/account/edit/${post.id}`}
                              className="text-[#3b82f6] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
                            >
                              <Edit2 size={14} /> Edit
                            </Link>
                            <button 
                              onClick={() => handleDeletePost(post.id)}
                              className="text-[#ef4444] hover:text-red-700 transition-colors inline-flex items-center gap-1.5"
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )
                  ) : (
                    caseStudies.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center text-gray-500 text-sm">
                          No case studies found. Start by creating your first case study!
                        </td>
                      </tr>
                    ) : (
                      caseStudies.map((study) => (
                        <tr key={study.id} className="hover:bg-[#f8fafc] transition-colors group">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              {study.image && (
                                <img src={study.image} alt="" className="w-10 h-10 object-cover rounded-md bg-gray-100 hidden sm:block" />
                              )}
                              <p className="text-[14px] text-[#0f172a] font-medium">{study.title}</p>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-[14px] text-[#475569]">{study.category}</td>
                          <td className="px-6 py-5 text-[14px]">
                            <p className="font-medium text-blue-600">{study.metric}</p>
                            <p className="text-[12px] text-[#94a3b8]">{study.budget || "No budget specified"}</p>
                          </td>
                          <td className="px-6 py-5 text-sm text-right space-x-4">
                            <Link 
                              href={`/account/case-studies/edit/${study.id}`}
                              className="text-[#3b82f6] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
                            >
                              <Edit2 size={14} /> Edit
                            </Link>
                            <button 
                              onClick={() => handleDeleteCaseStudy(study.id)}
                              className="text-[#ef4444] hover:text-red-700 transition-colors inline-flex items-center gap-1.5"
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
