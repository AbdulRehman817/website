'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-logo>
            <Image
              src="/logo.png"
              alt="Capt. Arshad Clinic Logo"
              width={180}
              height={60}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[var(--primary-color)] hover:bg-[var(--primary-button-hover-bg-color)] text-white px-6 py-2.5 rounded-[var(--button-rounded-radius)] font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Directions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3 pt-4 border-t border-[var(--light-border-color)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-[var(--button-rounded-radius)] font-semibold text-center transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Directions
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header