import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { engagementModels } from '../data/engagement'

interface EngagementSectionProps {
  onSelectModel?: (modelTitle: string) => void
}

export const EngagementSection: React.FC<EngagementSectionProps> = ({
  onSelectModel,
}) => {
  const handleDiscussProject = (modelTitle: string) => {
    if (onSelectModel) {
      onSelectModel(modelTitle)
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-black py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
            <span>ENGAGEMENT MODELS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            The right way to work together.
          </motion.h2>
          <p className="text-[hsl(0_0%_65%)] text-sm md:text-base font-light leading-relaxed">
            Flexible collaboration structures tailored to your project stage,
            team requirements, and operational pace.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-white/10 hover:border-[hsl(119_99%_46%/0.3)] rounded-3xl p-8 bg-[hsl(0_0%_10%)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.08)] border border-[hsl(119_99%_46%/0.25)] px-3 py-1 rounded-full">
                    Model 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-xs text-[hsl(0_0%_55%)] mb-4 font-mono">
                  {model.bestFor}
                </p>
                <p className="text-[hsl(0_0%_70%)] text-sm leading-relaxed font-light mb-6">
                  {model.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  {model.features.map((feature: string) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                    >
                      <Check className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDiscussProject(model.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-white/20 hover:border-[hsl(119_99%_46%)] hover:bg-[hsl(119_99%_46%)] hover:text-black text-white text-xs font-medium transition-all cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scope and Pricing Statement */}
        <p className="text-center text-xs text-[hsl(0_0%_50%)] font-light mt-12 max-w-2xl mx-auto">
          *Timelines and investment depend strictly on verified project scope,
          feature requirements, and integrations. We provide clear proposals
          after initial technical discovery.
        </p>
      </div>
    </section>
  )
}
