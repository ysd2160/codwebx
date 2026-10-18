import React from 'react'
import { ArrowUpRight } from 'lucide-react'

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
    <footer className="w-full bg-black text-white pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <svg
                viewBox="0 0 256 256"
                className="h-5 w-5 text-white"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
              </svg>
              <span className="text-xl font-medium tracking-tight">securify</span>
            </div>

            <p className="text-neutral-400 text-sm font-light max-w-sm leading-relaxed mb-6">
              designing and engineering digital products for ambitious
              businesses.
            </p>

            <div className="text-xs text-neutral-500 font-mono">
              studio based in san francisco, ca · operating globally
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
              navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'home', href: '#' },
                { label: 'services', href: '#services' },
                { label: 'work', href: '#work' },
                { label: 'process', href: '#process' },
                { label: 'about', href: '#about' },
                { label: 'contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left font-light"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
              services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'web development',
                'mobile apps',
                'custom software',
                'saas development',
                'ui/ux design',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left font-light"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
              connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@securify.studio"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-light"
                >
                  <span>email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-light"
                >
                  <span>linkedin</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-light"
                >
                  <span>github</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© {currentYear} securify. all rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              privacy policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              terms of service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
