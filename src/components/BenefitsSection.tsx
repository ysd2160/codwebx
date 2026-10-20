import React from 'react'
import { motion } from 'framer-motion'
import { whyUsPrinciples } from '../data/whyUs'
import { CheckCircle2 } from 'lucide-react'

export const BenefitsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
            <span>WHY CODEWEBX</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            Good technology starts with understanding.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[hsl(0_0%_65%)] text-sm md:text-base font-light leading-relaxed"
          >
            We don't sell bloated templates or force unnecessary tools onto your
            business. We engineer solutions that fit your real-world workflows.
          </motion.p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUsPrinciples.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[hsl(0_0%_10%)] border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(22,234,26,0.05)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.08)] border border-[hsl(119_99%_46%/0.25)] px-3 py-1 rounded-full">
                    Principle 0{index + 1}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[hsl(119_99%_46%)] opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[hsl(119_99%_46%)] transition-colors">
                  {principle.title}
                </h3>
              </div>
              <p className="text-[hsl(0_0%_65%)] text-sm md:text-base leading-relaxed font-light mt-4">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
