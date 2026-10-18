import React from 'react'
import { motion } from 'framer-motion'
import { processStages } from '../data/process'

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>06 / how we work</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              from concept to launch.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-neutral-400 text-sm md:text-base max-w-md font-light"
          >
            a transparent, milestone-driven execution process engineered for
            predictable outcomes and rapid momentum.
          </motion.p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
          {/* Subtle vertical connection line on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {processStages.map((stage, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-stretch gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full lg:w-[calc(50%-2rem)] border border-white/10 rounded-3xl p-8 md:p-10 bg-neutral-950/80 hover:border-white/25 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-neutral-500">
                        stage {stage.step}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        milestone {stage.step}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                      {stage.name}
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light mb-6">
                      {stage.summary}
                    </p>

                    {/* Deliverables */}
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                        tangible deliverables:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.deliverables.map((deliv) => (
                          <span
                            key={deliv}
                            className="text-xs text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-light"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node on desktop */}
                  <div className="hidden lg:flex items-center justify-center w-16 relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-4 border-black z-10 shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                  </div>

                  {/* Empty Spacer column to balance grid */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
