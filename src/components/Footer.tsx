import React from 'react'
import { ArrowUpRight, Phone, Mail, MessageSquare } from 'lucide-react'

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void
  onSelectService?: (serviceName: string) => void
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onSelectService,
}) => {
  const currentYear = new Date().getFullYear()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServiceClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName)
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[hsl(0_0%_5%)] text-white pt-20 pb-12 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-extrabold text-2xl tracking-tighter uppercase select-none">
                Cod<span className="text-[hsl(119_99%_46%)]">WebX</span>
              </span>
            </div>

            <p className="text-[hsl(0_0%_65%)] text-sm font-light max-w-sm leading-relaxed mb-6">
              Website development, application development, and custom software engineering, plus our proprietary CodWebX POS platform.
            </p>

            <div className="text-xs text-[hsl(0_0%_55%)] font-mono space-y-1">
              <div>Ahmedabad, Gujarat, India</div>
              <div>Available for local meetings &amp; remote collaboration worldwide</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[hsl(119_99%_46%)] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Selected Work', href: '#work' },
                { label: 'CodWebX POS', href: '#pos' },
                { label: 'Delivery Process', href: '#process' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-[hsl(0_0%_65%)] hover:text-white transition-colors cursor-pointer text-left font-light"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Offerings */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[hsl(119_99%_46%)] mb-6">
              What We Build
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Website Development',
                'Application Development',
                'Custom Software Development',
                'CodWebX POS',
                'Restaurant & Cafe Tech',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-[hsl(0_0%_65%)] hover:text-white transition-colors cursor-pointer text-left font-light"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[hsl(119_99%_46%)] mb-6">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="mailto:codwebx@gmail.com"
                  className="inline-flex items-center gap-2.5 text-[hsl(0_0%_80%)] hover:text-[hsl(119_99%_46%)] transition-colors font-light"
                >
                  <Mail className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  <span>codwebx@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917575097762"
                  className="inline-flex items-center gap-2.5 text-[hsl(0_0%_80%)] hover:text-[hsl(119_99%_46%)] transition-colors font-mono"
                >
                  <Phone className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  <span>+91 7575097762</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917575097762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[hsl(0_0%_80%)] hover:text-[hsl(119_99%_46%)] transition-colors font-light"
                >
                  <MessageSquare className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(0_0%_55%)] font-light">
          <p>© {currentYear} CodWebX. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
