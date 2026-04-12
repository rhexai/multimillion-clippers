import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-[#D4E0F4] pt-20 md:pt-24 pb-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col pt-10 relative z-10">

        {/* Brand and Links Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20 border-t border-gray-300">
          {/* Logo and Status */}
          <div className="flex flex-col items-start justify-between gap-12">
            <div className="flex items-center">
              <img src="/mmclippers.png" alt="Multimillion Clippers Logo" className="h-[100px] md:h-[120px] w-auto object-contain brightness-0 mix-blend-multiply opacity-80" />
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#1C1D20] text-base">Campaign Types</h4>
            <nav className="flex flex-col gap-4 text-[#6B6D76] text-sm font-bold">
              <a href="#" className="hover:text-black transition-colors">Brand Clipping Campaigns</a>
              <a href="#" className="hover:text-black transition-colors">Music Clipping Campaigns</a>
              <a href="#" className="hover:text-black transition-colors">Podcast Clipping Campaigns</a>
              <a href="#" className="hover:text-black transition-colors">Event Clipping Campaigns</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#1C1D20] text-base">Company</h4>
            <nav className="flex flex-col gap-4 text-[#6B6D76] text-sm font-bold">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
              <a href="#" className="hover:text-black transition-colors">Blog</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#1C1D20] text-base">Support</h4>
            <nav className="flex flex-col gap-4 text-[#6B6D76] text-sm font-bold">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black transition-colors">FAQ</a>
              <a href="https://wa.link/tpojam" className="hover:text-black transition-colors text-blue-600">Book intro call</a>
            </nav>
          </div>
        </div>

        {/* Bottom Social Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-300 gap-6">
          <p className="text-gray-400 text-sm font-semibold">© 2026 Multimillion Clippers (Gablecorp). All rights reserved.</p>
          <div className="flex gap-6 items-center">
            {/* SVGs for brand icons to ensure perfect look without dependency issues */}
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.903 1.28.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.903-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.355-2.617-6.783-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

