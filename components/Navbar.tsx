"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

export default function Navbar({ forceSolidBg = false }: { forceSolidBg?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useAuth();
  
  const isSolid = isScrolled || isMenuOpen || forceSolidBg;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pricing", href: "https://wa.link/tpojam" },
    { 
      name: "Join Clipper Community", 
      href: "https://whop.com/joined/multimillionclippers/products/clippercommunity/",
      badge: "New" 
    },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300 ${isSolid ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "glass-nav border-b border-[var(--color-nav-border)]"}`}>
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <img
              src="/mmclippers.png"
              alt="Multimillion Clippers Logo"
              className={`h-[110px] md:h-[150px] w-auto object-contain transition-all duration-300 ${isSolid ? "brightness-0" : ""}`}
            />
          </Link>
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${isScrolled || forceSolidBg ? "text-gray-900" : "text-white/80"}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`hover:text-current transition-colors flex items-center gap-2 ${isScrolled || forceSolidBg ? "hover:text-blue-600" : "hover:text-white"}`}
              >
                {link.name}
                {link.badge && (
                  <span className={`${isScrolled || forceSolidBg ? "bg-blue-600 text-white" : "bg-white/20 text-white"} text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            {userId && (
              <>
                <Link href="/account" className={`text-sm font-semibold transition-colors ${isSolid ? "text-gray-900 hover:text-blue-600" : "text-white/80 hover:text-white"}`}>Dashboard</Link>
                <UserButton />
              </>
            )}

            <Link 
              href="https://wa.link/tpojam" 
              className="bg-[var(--color-brand-blue)] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(33,107,233,0.5)]"
            >
              <img src="/mmclipperslogo.png" alt="" className="w-9 h-9 object-contain brightness-0 invert" /> Launch Campaign
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isSolid ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed inset-x-0 top-0 pt-[80px] z-40 bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out md:hidden overflow-hidden ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col p-8 gap-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-semibold text-[#1C1D20] flex items-center justify-between group transition-all duration-500 delay-[${i * 100}ms] ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
            >
              <span className="flex items-center gap-3">
                {link.name}
                {link.badge && (
                  <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {link.badge}
                  </span>
                )}
              </span>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </Link>
          ))}
          <div className={`pt-4 transition-all duration-500 delay-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Link 
              href="https://wa.link/tpojam"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[var(--color-brand-blue)] text-white text-center py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(33,107,233,0.3)] active:scale-95 transition-transform"
            >
              <img src="/mmclipperslogo.png" alt="" className="w-8 h-8 object-contain brightness-0 invert" />
              Launch Campaign
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
