import React from 'react'
import { motion } from 'framer-motion'
import { techStackData } from '../data/techStack'

export const TechStackSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>05 / our stack</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-6"
          >
            the right tools for the right problem.
          </motion.h2>
          <p className="text-neutral-400 text-sm md:text-base font-light">
            we build with modern, stable, industry-proven technologies selected
            specifically for project performance, security, and long-term maintainability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border border-white/10 rounded-3xl p-8 bg-neutral-950/60 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-base font-medium text-white tracking-tight">
                    {category.category}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-300 bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:text-white px-3.5 py-1.5 rounded-full transition-all font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
