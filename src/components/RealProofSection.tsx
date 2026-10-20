import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react'

interface RealProofSectionProps {
  onStartProject?: (context?: string) => void
}

export const RealProofSection: React.FC<RealProofSectionProps> = ({
  onStartProject,
}) => {
  const handleAction = (context: string) => {
    if (onStartProject) {
      onStartProject(context)
    } else {
      const el = document.querySelector('#contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
              <span>VERIFIED PROOF</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-section-title font-extrabold tracking-tight text-white leading-tight"
            >
              Built around real business needs.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[hsl(0_0%_65%)] text-sm md:text-base max-w-md font-light leading-relaxed"
          >
            We believe trust is earned through working code, stable systems, and
            demonstrated delivery — not artificial reviews or fabricated numbers.
          </motion.p>
        </div>

        {/* Dual Verified Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Proof 01: Good Vibes Cafe Client Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-8 sm:p-10 bg-[hsl(0_0%_10%)] flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[hsl(119_99%_46%)] uppercase tracking-widest">
                  Verified Client Delivery
                </span>
                <span className="text-xs font-mono text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
                  <span>Active in Production</span>
                </span>
              </div>

              {/* Cafe visual / logo */}
              <div className="h-48 sm:h-56 rounded-2xl bg-black/60 overflow-hidden relative mb-6 border border-white/10 flex items-center justify-center p-6">
                <img
                  src="/assets/images/good-vibes-logo.png"
                  alt="Good Vibes Cafe"
                  className="max-h-full max-w-full object-contain filter contrast-125"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-[hsl(0_0%_70%)] bg-black/70 px-3 py-1 rounded-md border border-white/10">
                  Good Vibes Cafe · Website &amp; 58mm POS System
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Counter billing &amp; thermal printing for a busy cafe
              </h3>
              <p className="text-[hsl(0_0%_65%)] text-sm leading-relaxed font-light mb-6">
                Engineered a touch-friendly point-of-sale system solving peak rush
                counter delays, Bluetooth thermal receipt generation on compact 58mm
                hardware, and real-time cash return calculation.
              </p>

              <div className="space-y-2.5 mb-8">
                {[
                  'Thermal Bluetooth receipt printing (58mm)',
                  'Cash return calculator & split payment auto-fill',
                  'Collision-safe concurrent bill numbering (GVC-0001)',
                  'Dine-in and takeaway table order routing',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[hsl(0_0%_55%)] font-mono">
                Food &amp; Beverage Technology
              </span>
              <button
                type="button"
                onClick={() =>
                  handleAction('interested in cafe or restaurant solution')
                }
                className="flex items-center gap-1.5 text-xs text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] hover:bg-[hsl(119_99%_46%)] hover:text-black border border-[hsl(119_99%_46%/0.3)] px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
              >
                <span>Discuss Cafe Software</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Proof 02: CodWebX POS Proprietary Product */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-8 sm:p-10 bg-[hsl(0_0%_10%)] flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[hsl(119_99%_46%)] uppercase tracking-widest">
                  Proprietary Product
                </span>
                <span className="text-xs font-mono text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
                  <span>Active Engineering</span>
                </span>
              </div>

              {/* Product preview */}
              <div className="h-48 sm:h-56 rounded-2xl bg-black/60 overflow-hidden relative mb-6 border border-white/10 flex items-center justify-center p-6">
                <img
                  src="/assets/images/codewebx-full.png"
                  alt="CodWebX POS"
                  className="max-h-full max-w-full object-contain filter contrast-125"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-[hsl(0_0%_70%)] bg-black/70 px-3 py-1 rounded-md border border-white/10">
                  CodWebX POS · Retail &amp; Counter Suite
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Centralized point-of-sale software suite
              </h3>
              <p className="text-[hsl(0_0%_65%)] text-sm leading-relaxed font-light mb-6">
                Architecting our own modular point-of-sale product to give small
                businesses, retail shops, and dining counters complete control
                over sales, inventory, and telemetry without recurring licensing
                penalties.
              </p>

              <div className="space-y-2.5 mb-8">
                {[
                  'Centralized product catalog & inventory levels',
                  'Barcode scanning & QR code generation',
                  'Client-side instant PDF tax invoices (jsPDF)',
                  'Visual sales telemetry & analytics (Recharts)',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[hsl(0_0%_55%)] font-mono">
                Retail &amp; Commercial Software
              </span>
              <button
                type="button"
                onClick={() =>
                  handleAction('interested in codwebx pos solution')
                }
                className="flex items-center gap-1.5 text-xs text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] hover:bg-[hsl(119_99%_46%)] hover:text-black border border-[hsl(119_99%_46%/0.3)] px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
              >
                <span>Explore POS Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Transparent Social Proof Statement */}
        <div className="p-8 rounded-3xl border border-white/10 bg-[hsl(0_0%_10%)] text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-[hsl(0_0%_80%)] font-light leading-relaxed mb-4">
            &ldquo;We prefer demonstrating our capabilities through genuine software
            we have actually coded, launched, and refined. Share your operational
            bottleneck with us and let&apos;s engineer a practical digital solution.&rdquo;
          </p>
          <span className="text-xs font-mono text-[hsl(119_99%_46%)] uppercase tracking-widest block">
            CodWebX Engineering Standard · Ahmedabad, India
          </span>
        </div>
      </div>
    </section>
  )
}
