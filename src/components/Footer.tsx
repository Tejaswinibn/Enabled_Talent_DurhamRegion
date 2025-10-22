import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white" style={{ borderRadius: '20px 20px 0 0' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Main footer content */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          {/* Top content */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 py-8 sm:py-10 lg:py-12 md:grid-cols-12 md:px-6 lg:px-10">
            {/* Brand */}
            <div className="md:col-span-3 flex items-start gap-3 sm:gap-4">
              <Image
                src="/images/Group 1171276407.png"
                alt="Enabled Talent Durham"
                width={40}
                height={40}
                className="rounded w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="leading-tight">
                <p className="font-semibold text-base sm:text-lg text-white">Enabled Talent<br />Durham</p>
              </div>
            </div>

            {/* Company */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                <li><a href="#about-us" className="hover:text-orange-500">About us</a></li>
              </ul>
            </nav>

            {/* Services */}
            <nav className="md:col-span-3">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><a href="#" className="hover:text-orange-500">For Employers</a></li>
                <li><a href="#" className="hover:text-orange-500">For Professionals</a></li>
              </ul>
            </nav>

            {/* Legal */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Legal</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </nav>

            {/* Social */}
            <div className="md:col-span-2">
              <h3 className="mb-4 text-base font-semibold text-zinc-300">Follow us</h3>
              <div className="flex items-center gap-4">
                {/* LinkedIn (orange circle with shadow) */}
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/enabledtalent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition relative hover:opacity-90"
                  style={{ 
                    backgroundColor: '#F95206',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <span className="text-sm font-bold text-white">in</span>
                </a>

                {/* Instagram (gray circle with shadow) */}
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/enabledtalent?igsh=MW1ib3RhYXRvOTJtbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600 transition relative"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                >
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.26.07 1.64.07 4.85s-.01 3.59-.07 4.85c-.15 3.22-1.67 4.77-4.92 4.92-1.25.06-1.64.07-4.85.07s-3.6-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.2 15.6 2.2 15.2 2.2 12s0-3.59.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.4 2.21 8.8 2.2 12 2.2zm0 3.68a6.12 6.12 0 1 0 0 12.24 6.12 6.12 0 0 0 0-12.24zm6.41-1.36a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88zM12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" />
                  </svg>
                </a>

                {/* Facebook (gray circle with shadow) */}
                <a
                  aria-label="Facebook"
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600 transition relative"
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                >
                  <span className="text-sm font-bold text-white">f</span>
                </a>
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="border-t border-zinc-600 mx-6 md:mx-10"></div>

          {/* Bottom row */}
          <div className="px-6 py-6 md:px-10">
            <p className="text-sm text-zinc-400">
              © 2025 Enabled Talent Durham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}