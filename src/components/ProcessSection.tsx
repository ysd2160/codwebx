import React from 'react'
import { motion } from 'framer-motion'
import { processStages } from '../data/process'
import { CheckCircle2 } from 'lucide-react'

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative w-full bg-black py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
              <span>DELIVERY PROCESS</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-section-title font-extrabold tracking-tight text-white leading-tight"
            >
              From first conversation to launch.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[hsl(0_0%_65%)] text-sm md:text-base max-w-md font-light leading-relaxed"
          >
            A transparent, milestone-driven delivery process ensuring clarity,
            reliable technical execution, and zero surprises along the way.
          </motion.p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
          {/* Subtle vertical connection line on larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {processStages.map((stage, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`flex flex-col lg:flex-row items-stretch gap-6 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full lg:w-[calc(50%-2rem)] border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-7 sm:p-9 bg-[hsl(0_0%_10%)] transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.08)] border border-[hsl(119_99%_46%/0.25)] px-3 py-1 rounded-full">
                        Stage {stage.step}
                      </span>
                      <span className="text-xs text-[hsl(0_0%_50%)] font-mono">
                        Milestone {stage.step} of 05
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight">
                      {stage.name}
                    </h3>
                    <p className="text-[hsl(0_0%_65%)] text-sm md:text-base leading-relaxed font-light mb-4">
                      {stage.summary}
                    </p>

                    {/* Optional Deliverables list if defined */}
                    {stage.deliverables && stage.deliverables.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-[hsl(0_0%_50%)] block mb-2.5">
                          Key Deliverables:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {stage.deliverables.map((deliv) => (
                            <span
                              key={deliv}
                              className="text-xs text-[hsl(0_0%_80%)] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-light flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[hsl(119_99%_46%)]" />
                              <span>{deliv}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Node on desktop */}
                  <div className="hidden lg:flex items-center justify-center w-16 relative">
                    <div className="w-4 h-4 rounded-full bg-[hsl(119_99%_46%)] border-4 border-black z-10 glow-green" />
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
