'use client';
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
  
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white backdrop-blur-md shadow-lg' 
          : 'bg-white backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://assets.ls-assets.com/uploads/198cb3d4-0184-4a4b-8f8c-6a6ae48e3c1c/a8daf82f-5211-4885-b1df-453fba86e6c1.png?w=200" 
              alt="Capt. Arshad Clinic Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+923312102592" 
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+92 331 2102592</span>
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100 bg-white">
            <nav className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a 
                href="tel:+923312102592" 
                className="flex items-center gap-3 text-slate-600 hover:text-teal-600 font-medium px-4 py-2"
              >
                <Phone className="w-5 h-5" />
                +92 331 2102592
              </a>
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}