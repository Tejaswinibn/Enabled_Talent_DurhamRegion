"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#1e40af', fontFamily: 'Plus Jakarta Sans' }}>
              Enabled Talent
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Durham
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Link href="#why-enabled-durham" className="text-gray-600 hover:text-blue-600 text-base">Why Enabled Talent Durham</Link>
          <Link href="#what-you-get" className="text-gray-600 hover:text-blue-600 text-base">What you get</Link>
          <Link href="#about-us" className="text-gray-600 hover:text-blue-600 text-base">About us</Link>
          <Link href="#our-story" className="text-gray-600 hover:text-blue-600 text-base">Our story</Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
            Login
          </Link>
          <button className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1e40af' }}>
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="#why-enabled-durham" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 text-base">Why Enabled Talent Durham</Link>
            <Link href="#what-you-get" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 text-base">What you get</Link>
            <Link href="#about-us" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 text-base">About us</Link>
            <Link href="#our-story" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-blue-600 text-base">Our story</Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                Login
              </Link>
              <button className="text-white px-4 py-2 rounded-lg text-sm font-medium w-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1e40af' }}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
