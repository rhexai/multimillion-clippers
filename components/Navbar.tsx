"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200" : "glass-nav border-b border-[var(--color-nav-border)]"}`}>
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center">
          <img
            src="/mmclippers.png"
            alt="Multimillion Clippers Logo"
            className={`h-[120px] md:h-[150px] w-auto object-contain transition-all duration-300 ${isScrolled ? "brightness-0 opacity-80" : ""}`}
          />
        </Link>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white/80"}`}>
          <Link href="https://wa.link/tpojam" className={`hover:text-current transition-colors ${isScrolled ? "hover:text-blue-600" : "hover:text-white"}`}>Pricing</Link>
          <Link href="https://whop.com/joined/multimillionclippers/products/clippercommunity/" className={`hover:text-current transition-colors flex items-center gap-2 ${isScrolled ? "hover:text-blue-600" : "hover:text-white"}`}>
            Join Clipper Community <span className={`${isScrolled ? "bg-blue-600 text-white" : "bg-white/20 text-white"} text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider`}>New</span>
          </Link>
          <Link href="#blog" className={`hover:text-current transition-colors ${isScrolled ? "hover:text-blue-600" : "hover:text-white"}`}>Blog</Link>
        </div>
      </div>
      <div className="hidden sm:block">
        <Link 
          href="https://wa.link/tpojam" 
          className="bg-[var(--color-brand-blue)] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(33,107,233,0.5)]"
        >
          <img src="/mmclipperslogo.png" alt="" className="w-9 h-9 object-contain brightness-0 invert" /> Launch Campaign
        </Link>
      </div>
    </nav>
  );
}
