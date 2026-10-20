import React from 'react'
import { motion } from 'framer-motion'
import { techStackData } from '../data/techStack'

export const TechStackSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
            <span>OUR STACK</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            The right technology for the right problem.
          </motion.h2>
          <p className="text-[hsl(0_0%_65%)] text-sm md:text-base font-light leading-relaxed">
            These represent our core engineering capabilities, not claims that
            every tool is used in every build. We select stable, maintainable
            technologies aligned with actual product performance and operational goals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-7 bg-[hsl(0_0%_10%)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                  <span className="text-xs font-mono text-[hsl(119_99%_46%)]">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs text-[hsl(0_0%_80%)] bg-white/[0.04] border border-white/10 hover:border-[hsl(119_99%_46%/0.4)] hover:text-white px-3 py-1.5 rounded-full transition-all font-light"
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
