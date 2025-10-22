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
                src="https://www.durham.ca/en/images/structure/logo.svg"
                alt="Durham Region Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="leading-tight">
                <p className="font-semibold text-base sm:text-lg text-white">Region of<br />Durham</p>
              </div>
            </div>

            {/* Company */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><a href="#about-us" className="hover:text-blue-400">About us</a></li>
              </ul>
            </nav>

            {/* Services */}
            <nav className="md:col-span-3">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><a href="#" className="hover:text-blue-400">For Employers</a></li>
                <li><a href="#" className="hover:text-blue-400">For Professionals</a></li>
              </ul>
            </nav>

            {/* Legal */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-zinc-300">Legal</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="/accessibility" className="hover:text-blue-400">Accessibility Statement</a></li>
              </ul>
            </nav>

          </div>

          {/* Separator line */}
          <div className="border-t border-zinc-600 mx-6 md:mx-10"></div>

          {/* Bottom row */}
          <div className="px-6 py-6 md:px-10">
            <p className="text-sm text-zinc-400">
              © 2025 Region of Durham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}