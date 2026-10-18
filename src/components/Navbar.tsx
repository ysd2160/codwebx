import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

interface NavbarProps {
  onOpenContact?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'services', href: '#services' },
    { label: 'work', href: '#work' },
    { label: 'process', href: '#process' },
    { label: 'about', href: '#about' },
    { label: 'contact', href: '#contact' },
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
        isScrolled ? 'pt-3 pb-3' : 'pt-6'
      } px-6 md:px-10`}
    >
      <nav
        aria-label="primary navigation"
        className="max-w-7xl mx-auto flex items-center justify-between gap-4"
      >
        {/* Left pill: Brand logo & name */}
        <a
          href="#"
          className="flex items-center gap-2.5 bg-neutral-900/90 backdrop-blur-md rounded-full pl-4 pr-6 py-3 border border-white/10 hover:border-white/20 transition-colors"
          aria-label="securify home"
        >
          <svg
            viewBox="0 0 256 256"
            className="h-5 w-5 text-white"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
          </svg>
          <span className="text-white text-sm font-normal tracking-tight">
            securify
          </span>
        </a>

        {/* Center pill: Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md rounded-full px-3 py-2 border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA pill + Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCtaClick}
            type="button"
            className="flex items-center gap-1.5 bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>let's talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 bg-neutral-900/90 backdrop-blur-md rounded-full border border-white/10 text-white hover:border-white/30 transition-colors"
            aria-label={mobileMenuOpen ? 'close navigation' : 'open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer / dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-300 hover:text-white text-base py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 bg-white text-black text-sm py-3.5 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <span>let's talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
