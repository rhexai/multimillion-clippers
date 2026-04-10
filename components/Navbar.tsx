import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-nav border-b border-[var(--color-nav-border)]">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[var(--color-brand-blue)] flex items-center justify-center text-white font-bold text-xl leading-none">
            C
          </div>
          <span className="font-semibold text-xl tracking-tight text-white mix-blend-difference dark:mix-blend-normal">Cluely</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#mobile" className="hover:text-white transition-colors flex items-center gap-2">
            Mobile <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
          </Link>
          <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
        </div>
      </div>
      <div className="hidden sm:block">
        <button className="bg-[var(--color-brand-blue)] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(33,107,233,0.5)]">
          <span className="text-base leading-none mb-[2px]"></span> Get for Mac
        </button>
      </div>
    </nav>
  );
}
