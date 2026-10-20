import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Receipt,
  BarChart3,
  QrCode,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  Sparkles,
} from 'lucide-react'

interface PosProductSectionProps {
  onDiscussPos?: () => void
}

export const PosProductSection: React.FC<PosProductSectionProps> = ({
  onDiscussPos,
}) => {
  const handleCta = () => {
    if (onDiscussPos) {
      onDiscussPos()
    } else {
      const el = document.querySelector('#contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const posFeatures = [
    {
      icon: <Layers className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Centralized Product & Inventory Control',
      desc: 'Manage items across multiple categories with made-to-order stock toggles, bulk price updates, and instant low-stock notifications.',
    },
    {
      icon: <Receipt className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Instant PDF Invoicing & Thermal Receipts',
      desc: 'Client-side PDF generation and direct 58mm/80mm thermal printer support for quick counter billing without network delays.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Visual Sales Analytics & Telemetry',
      desc: 'Interactive telemetry charts tracking hourly sales trends, daily revenue, payment methods (Cash, UPI, Card), and peak hours.',
    },
    {
      icon: <QrCode className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Barcode & QR Code Product Scanning',
      desc: 'Integrated camera-based and hardware barcode scanning for rapid item lookup and frictionless counter checkout.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Role-Based Staff Access Permissions',
      desc: 'Protect sensitive sales records and discounting with manager vs cashier permission tiers and secure authentication.',
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-[hsl(119_99%_46%)]" />,
      title: 'Excel & CSV Accounting Export',
      desc: 'One-click export of transactions, sales summaries, and inventory manifests for direct reconciliation with your accountant.',
    },
  ]

  return (
    <section
      id="pos"
      className="relative w-full bg-black py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10 overflow-hidden"
    >
      {/* Anchor for #products as well */}
      <div id="products" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
              <span>PROPRIETARY PRODUCT</span>
              <span className="text-[11px] font-mono text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] px-3 py-0.5 rounded-full">
                Under Active Development
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-section-title font-extrabold tracking-tight text-white leading-tight"
            >
              Meet CodWebX POS.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[hsl(0_0%_65%)] text-sm md:text-base max-w-md font-light leading-relaxed"
          >
            We are building our own dedicated point-of-sale platform to give
            cafes, restaurants, and retail stores centralized control over
            sales, inventory, staff, and daily billing.
          </motion.p>
        </div>

        {/* Feature Grid & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 border border-white/10 hover:border-[hsl(119_99%_46%/0.4)] rounded-3xl p-7 md:p-8 bg-[hsl(0_0%_10%)] flex flex-col justify-between transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[hsl(119_99%_46%)] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CodWebX POS Terminal</span>
                </span>
                <span className="text-xs font-mono text-[hsl(0_0%_55%)] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                  v1.0-alpha
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 aspect-video mb-6 flex items-center justify-center p-4 group">
                <img
                  src="/assets/images/codewebx-full.png"
                  alt="CodWebX POS Application Interface Preview"
                  className="max-h-full max-w-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[hsl(0_0%_70%)] bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span>React 19 · Redux Toolkit · Recharts</span>
                  <span className="text-[hsl(119_99%_46%)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(119_99%_46%)] animate-pulse" />
                    Live Build
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight">
                Engineered for cafes, dining, and retail counters
              </h3>
              <p className="text-sm text-[hsl(0_0%_65%)] font-light leading-relaxed mb-6">
                Born directly out of our real cafe delivery insights,
                eliminating counter latency, split-payment confusion, and costly
                recurring per-terminal licenses.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[hsl(0_0%_55%)] font-mono">
                Custom deployment & pilot testing
              </span>
              <button
                type="button"
                onClick={handleCta}
                className="flex items-center gap-1.5 text-xs text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] hover:bg-[hsl(119_99%_46%)] hover:text-black px-4 py-2 rounded-full transition-all cursor-pointer font-medium"
              >
                <span>Discuss POS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: 6 Core Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {posFeatures.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-white/10 rounded-2xl p-6 bg-[hsl(0_0%_10%)] hover:border-[hsl(119_99%_46%/0.3)] hover:bg-[hsl(0_0%_12%)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.2)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 tracking-tight group-hover:text-[hsl(119_99%_46%)] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[hsl(0_0%_65%)] leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-7 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[hsl(0_0%_10%)] via-[hsl(0_0%_12%)] to-[hsl(0_0%_10%)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1.5">
              Need a specialized point-of-sale system for your business?
            </h4>
            <p className="text-xs md:text-sm text-[hsl(0_0%_65%)] font-light max-w-xl">
              We can deploy our core POS foundation or tailor a custom billing
              system around your exact counter, kitchen, and accounting
              workflows.
            </p>
          </div>
          <button
            onClick={handleCta}
            type="button"
            className="flex-shrink-0 flex items-center gap-2 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] text-xs md:text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer"
          >
            <span>Discuss POS for Your Business</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  )
}
