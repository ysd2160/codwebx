import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, Phone } from 'lucide-react'

interface NavbarProps {
  onOpenContact?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'POS', href: '#pos' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCtaClick = () => {
    setMobileMenuOpen(false)
    if (onOpenContact) {
      onOpenContact()
    } else {
      const contactEl = document.querySelector('#contact')
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[hsl(0_0%_10%/0.85)] backdrop-blur-xl border-b border-[hsl(0_0%_22%/0.7)] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      } px-4 sm:px-8 lg:px-14`}
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto flex items-center justify-between gap-4"
      >
        {/* Left: CodWebX Typographic Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="CodWebX Home"
        >
          <div className="flex items-center tracking-tight font-extrabold text-xl sm:text-2xl">
            <span className="text-white group-hover:text-white/90 transition-colors">
              Cod
            </span>
            <span className="text-[hsl(119_99%_46%)] text-glow-green group-hover:scale-105 transition-transform">
              WebX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(119_99%_46%)] ml-1 shadow-[0_0_8px_hsl(119_99%_46%)]" />
          </div>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[hsl(0_0%_16%/0.7)] backdrop-blur-md rounded-full px-4 py-1.5 border border-[hsl(0_0%_22%)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[hsl(0_0%_75%)] hover:text-white text-xs lg:text-sm font-medium px-4 py-2 rounded-full transition-colors hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Quick Phone & Primary CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917575097762"
            className="hidden xl:flex items-center gap-1.5 text-xs text-[hsl(0_0%_75%)] hover:text-white transition-colors py-2 px-3 rounded-full hover:bg-white/5 font-mono"
            title="Call CodWebX directly"
          >
            <Phone className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
            <span>+91 7575097762</span>
          </a>

          <button
            onClick={handleCtaClick}
            type="button"
            className="flex items-center gap-1.5 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] text-xs sm:text-sm font-semibold rounded-full px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-[hsl(119_99%_52%)] glow-green-sm hover:glow-green transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(0_0%_22%)] bg-[hsl(0_0%_16%/0.8)] text-white hover:border-[hsl(119_99%_46%/0.5)] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[hsl(119_99%_46%)]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[hsl(0_0%_12%/0.96)] backdrop-blur-2xl border border-[hsl(0_0%_22%)] rounded-3xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-[hsl(119_99%_46%)] text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[hsl(0_0%_22%)] mt-2 space-y-3">
              <a
                href="tel:+917575097762"
                className="flex items-center justify-center gap-2 text-xs text-neutral-300 py-3 px-4 rounded-full border border-white/10 bg-white/5 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
                <span>+91 7575097762</span>
              </a>

              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] font-semibold text-sm py-3.5 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green-sm transition-all cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
