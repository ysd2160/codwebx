import React from 'react'
import { motion } from 'framer-motion'
import { whyUsPrinciples } from '../data/whyUs'

export const BenefitsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>04 / our difference</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
          >
            technology should move you forward.
          </motion.h2>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {whyUsPrinciples.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-8 md:p-14 hover:bg-neutral-950 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 mb-8 block">
                  0{index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                  {principle.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light mt-8">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
