import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Code2,
  Receipt,
  CheckCircle2,
  Monitor,
  Shield,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  Wifi,
  Activity,
} from 'lucide-react'
import { servicesData } from '../data/services'

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const handleServiceClick = (serviceTitle: string, href: string) => {
    if (href === '#products' || href === '#pos') {
      const posEl = document.querySelector('#pos') || document.querySelector('#products')
      if (posEl) {
        posEl.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    if (onSelectService) {
      onSelectService(serviceTitle)
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const websiteService = servicesData[0] // Website Development
  const appService = servicesData[1] // Application Development
  const customSoftwareService = servicesData[2] // Custom Software Development
  const posProduct = servicesData[3] // CodWebX POS (Our Product)

  return (
    <section
      id="services"
      className="relative w-full bg-[hsl(0_0%_10%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-[hsl(0_0%_20%)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-4 bg-[hsl(119_99%_46%/0.08)] border border-[hsl(119_99%_46%/0.25)] px-3.5 py-1 rounded-full">
            <span>WHAT WE DO</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-section-title font-extrabold text-white tracking-tight mb-6"
          >
            Engineering services &amp; our own product.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-body-fluid text-[hsl(0_0%_70%)] font-light max-w-2xl leading-relaxed mb-8"
          >
            We provide three specialized digital engineering services alongside our
            flagship proprietary in-house product, CodWebX POS.
          </motion.p>

          {/* Offerings Summary Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono text-[hsl(0_0%_60%)] mr-2 uppercase tracking-wider">
              Offerings:
            </span>
            <span className="text-xs font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Website Development
            </span>
            <span className="text-xs font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Application Development
            </span>
            <span className="text-xs font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Custom Software Development
            </span>
            <span className="text-xs font-mono text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] px-3 py-1 rounded-full font-semibold">
              ★ Our Product: CodWebX POS
            </span>
          </div>
        </div>

        {/* Four Distinct Visual Compositions */}
        <div className="space-y-16 md:space-y-24">
          {/* ============================================================== */}
          {/* 01 — WEBSITE DEVELOPMENT: Browser Mockup Composition           */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[hsl(0_0%_22%)] rounded-3xl p-6 sm:p-10 lg:p-12 bg-[hsl(0_0%_12%)] hover:border-[hsl(0_0%_30%)] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[hsl(119_99%_46%)] mb-4">
                    <Globe className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                    <span>01 / SERVICE · {websiteService.title.toUpperCase()}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                    {websiteService.heading}
                  </h3>

                  <p className="text-[hsl(0_0%_70%)] text-sm sm:text-base leading-relaxed font-light mb-8">
                    {websiteService.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    {websiteService.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[hsl(0_0%_80%)] font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() =>
                      handleServiceClick(websiteService.title, websiteService.ctaHref)
                    }
                    type="button"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-[hsl(119_99%_46%)] hover:text-black transition-all cursor-pointer shadow-md"
                  >
                    <span>{websiteService.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Browser Mockup */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[hsl(0_0%_25%)] bg-[hsl(0_0%_8%)] overflow-hidden shadow-2xl">
                  {/* Browser Bar */}
                  <div className="bg-[hsl(0_0%_14%)] px-4 py-3 flex items-center justify-between border-b border-[hsl(0_0%_22%)]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-[hsl(119_99%_46%/0.8)]" />
                    </div>
                    <div className="bg-[hsl(0_0%_10%)] border border-white/10 rounded-md px-3 py-1 text-[11px] font-mono text-[hsl(0_0%_60%)] flex items-center gap-2">
                      <span className="text-[hsl(119_99%_46%)]">https://</span>
                      <span>yourbusiness.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Monitor className="w-4 h-4" />
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Browser Canvas Content */}
                  <div className="p-6 bg-gradient-to-b from-[hsl(0_0%_10%)] to-[hsl(0_0%_7%)] min-h-[260px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-4 w-28 bg-white/20 rounded-md" />
                        <div className="flex gap-3">
                          <div className="h-3 w-12 bg-white/10 rounded-sm" />
                          <div className="h-3 w-12 bg-white/10 rounded-sm" />
                          <div className="h-3 w-12 bg-[hsl(119_99%_46%/0.4)] rounded-sm" />
                        </div>
                      </div>

                      <div className="pt-6 space-y-3">
                        <div className="h-8 w-4/5 bg-gradient-to-r from-white/90 to-white/40 rounded-lg" />
                        <div className="h-4 w-3/5 bg-white/20 rounded-md" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="text-[10px] font-mono text-[hsl(119_99%_46%)]">
                          PERFORMANCE
                        </div>
                        <div className="text-sm font-semibold text-white">
                          99 / 100
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="text-[10px] font-mono text-neutral-400">
                          STACK
                        </div>
                        <div className="text-sm font-semibold text-white">
                          React &amp; Vite
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="text-[10px] font-mono text-neutral-400">
                          UI/UX
                        </div>
                        <div className="text-sm font-semibold text-white">
                          Responsive
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 02 — APPLICATION DEVELOPMENT: Mobile & Web App Mockup          */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[hsl(0_0%_22%)] rounded-3xl p-6 sm:p-10 lg:p-12 bg-[hsl(0_0%_12%)] hover:border-[hsl(0_0%_30%)] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Interactive App Interface Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl border border-[hsl(0_0%_25%)] bg-[hsl(0_0%_8%)] p-6 shadow-2xl relative overflow-hidden">
                  {/* App Status Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[hsl(0_0%_20%)] mb-6">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                      <span className="text-xs font-mono text-white">
                        WEB &amp; MOBILE APP ENGINE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] animate-pulse" />
                      <span className="text-[11px] font-mono text-[hsl(119_99%_46%)]">
                        LIVE SYNC
                      </span>
                    </div>
                  </div>

                  {/* Dual Device Preview Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    {/* Mobile App Viewport */}
                    <div className="sm:col-span-6 rounded-2xl border border-[hsl(0_0%_25%)] bg-[hsl(0_0%_11%)] p-4 flex flex-col justify-between shadow-inner">
                      <div>
                        {/* Device Notch & Status */}
                        <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[hsl(0_0%_60%)]">
                          <span>09:41</span>
                          <div className="flex items-center gap-1.5">
                            <Wifi className="w-3 h-3 text-white/70" />
                            <Activity className="w-3 h-3 text-[hsl(119_99%_46%)]" />
                          </div>
                        </div>

                        {/* App Header */}
                        <div className="flex items-center gap-2.5 pb-3 border-b border-white/5 mb-3">
                          <div className="w-7 h-7 rounded-full bg-[hsl(119_99%_46%/0.15)] border border-[hsl(119_99%_46%/0.4)] flex items-center justify-center text-[10px] font-bold text-[hsl(119_99%_46%)]">
                            CW
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Customer App</div>
                            <div className="text-[10px] text-[hsl(0_0%_55%)] font-mono">React Native · iOS/Android</div>
                          </div>
                        </div>

                        {/* Interactive App Cards */}
                        <div className="space-y-2 mb-3">
                          <div className="p-2.5 rounded-lg bg-[hsl(0_0%_15%)] border border-white/5 flex items-center justify-between">
                            <span className="text-[11px] text-white font-medium">Real-Time State</span>
                            <span className="text-[10px] font-mono text-[hsl(119_99%_46%)]">Connected</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[hsl(0_0%_15%)] border border-white/5 flex items-center justify-between">
                            <span className="text-[11px] text-white font-medium">Auth &amp; Session</span>
                            <span className="text-[10px] font-mono text-white/70">JWT Secure</span>
                          </div>
                        </div>
                      </div>

                      {/* Mock Bottom App Bar */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-around text-white/40 text-[10px]">
                        <span className="text-[hsl(119_99%_46%)] font-bold">Home</span>
                        <span>Orders</span>
                        <span>Profile</span>
                      </div>
                    </div>

                    {/* Web App Dashboard Panel */}
                    <div className="sm:col-span-6 rounded-2xl border border-[hsl(0_0%_25%)] bg-[hsl(0_0%_11%)] p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-mono text-neutral-400 mb-2 uppercase">
                          Web App Portal
                        </div>
                        <div className="text-sm font-bold text-white mb-1">
                          Interactive Dashboard
                        </div>
                        <div className="text-[11px] text-[hsl(0_0%_65%)] font-light mb-3">
                          Client portals, admin consoles &amp; responsive PWAs.
                        </div>

                        <div className="space-y-1.5 font-mono text-[11px] text-[hsl(0_0%_75%)] bg-black/60 p-2.5 rounded-lg border border-white/5">
                          <div className="text-[hsl(119_99%_46%)]">// API Pipeline</div>
                          <div>GET /api/v1/stream</div>
                          <div className="text-white">HTTP 200 OK (16ms)</div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>PWA Ready</span>
                        <span className="text-[hsl(119_99%_46%)]">Cloud Synced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Information */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[hsl(119_99%_46%)] mb-4">
                    <Smartphone className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                    <span>02 / SERVICE · {appService.title.toUpperCase()}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                    {appService.heading}
                  </h3>

                  <p className="text-[hsl(0_0%_70%)] text-sm sm:text-base leading-relaxed font-light mb-8">
                    {appService.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    {appService.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[hsl(0_0%_80%)] font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() =>
                      handleServiceClick(appService.title, appService.ctaHref)
                    }
                    type="button"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-[hsl(119_99%_46%)] hover:text-black transition-all cursor-pointer shadow-md"
                  >
                    <span>{appService.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 03 — CUSTOM SOFTWARE: System Architecture & Workflow Engine    */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[hsl(0_0%_22%)] rounded-3xl p-6 sm:p-10 lg:p-12 bg-[hsl(0_0%_12%)] hover:border-[hsl(0_0%_30%)] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[hsl(119_99%_46%)] mb-4">
                    <Code2 className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                    <span>03 / SERVICE · {customSoftwareService.title.toUpperCase()}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                    {customSoftwareService.heading}
                  </h3>

                  <p className="text-[hsl(0_0%_70%)] text-sm sm:text-base leading-relaxed font-light mb-8">
                    {customSoftwareService.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    {customSoftwareService.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[hsl(0_0%_80%)] font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() =>
                      handleServiceClick(
                        customSoftwareService.title,
                        customSoftwareService.ctaHref,
                      )
                    }
                    type="button"
                    className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-[hsl(119_99%_46%)] hover:text-black transition-all cursor-pointer shadow-md"
                  >
                    <span>{customSoftwareService.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Architecture & Operations Mockup */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[hsl(0_0%_25%)] bg-[hsl(0_0%_8%)] p-6 shadow-2xl">
                  {/* Top Bar with System Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-[hsl(0_0%_20%)] mb-6">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                      <span className="text-xs font-mono text-white">
                        CORE BUSINESS LOGIC ENGINE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] px-2.5 py-0.5 rounded-full border border-[hsl(119_99%_46%/0.3)]">
                      ACTIVE PIPELINE
                    </span>
                  </div>

                  {/* Operational Telemetry Matrix */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-4 rounded-xl bg-[hsl(0_0%_12%)] border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-neutral-400">
                          INVENTORY &amp; BILLING
                        </span>
                        <BarChart3 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
                      </div>
                      <div className="text-lg font-bold text-white">
                        Real-time Sync
                      </div>
                      <div className="text-[11px] text-[hsl(119_99%_46%)] font-mono mt-1">
                        Zero data lag
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[hsl(0_0%_12%)] border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-neutral-400">
                          PERMISSIONS
                        </span>
                        <Shield className="w-3.5 h-3.5 text-white/70" />
                      </div>
                      <div className="text-lg font-bold text-white">
                        Role-Based
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-1">
                        Admin / Staff / Auditor
                      </div>
                    </div>
                  </div>

                  {/* Architecture Flow Block */}
                  <div className="p-4 rounded-xl bg-[hsl(0_0%_10%)] border border-white/5 font-mono text-xs text-neutral-300 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-neutral-500">
                      <span>AUTOMATED DISPATCH ENGINE</span>
                      <span>LATENCY: 38MS</span>
                    </div>
                    <div className="text-white">
                      dispatchOrder() &rarr; updateInventory() &rarr; emitInvoicePDF()
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 04 — OUR OWN PRODUCT: CODEWEBX POS Signature Showcase          */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-[hsl(119_99%_46%/0.4)] rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[hsl(0_0%_14%)] to-[hsl(0_0%_10%)] hover:border-[hsl(119_99%_46%/0.7)] transition-all glow-green-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Signature Product Highlights */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[hsl(119_99%_46%)] uppercase bg-[hsl(119_99%_46%/0.12)] border border-[hsl(119_99%_46%/0.3)] px-3 py-1 rounded-full">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>OUR OWN PRODUCT</span>
                    </span>
                    <span className="text-xs font-mono text-[hsl(0_0%_60%)]">
                      04 / IN-HOUSE PLATFORM
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                    {posProduct.heading}
                  </h3>

                  <p className="text-[hsl(0_0%_75%)] text-sm sm:text-base leading-relaxed font-light mb-8">
                    {posProduct.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
                    {posProduct.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 text-xs text-[hsl(0_0%_85%)] font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() =>
                      handleServiceClick(posProduct.title, posProduct.ctaHref)
                    }
                    type="button"
                    className="flex items-center gap-2 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer"
                  >
                    <span>{posProduct.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <span className="text-xs font-mono text-[hsl(0_0%_60%)]">
                    In active development · Pilot testing available
                  </span>
                </div>
              </div>

              {/* Right Column: Layered POS Preview */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/80 aspect-video flex items-center justify-center p-4 group">
                  <img
                    src="/assets/images/codewebx-full.png"
                    alt="CodWebX POS In-House Product Interface"
                    className="max-h-full max-w-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[hsl(0_0%_60%)] bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="flex items-center gap-1.5 text-white">
                      <Receipt className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
                      <span>CodWebX POS Terminal</span>
                    </span>
                    <span className="text-[hsl(119_99%_46%)]">Our In-House Product</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
