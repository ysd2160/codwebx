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
  const handleRequestProposal = (modelTitle: string) => {
    if (onSelectModel) {
      onSelectModel(modelTitle)
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>09 / engagement models</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-6"
          >
            the right way to work together.
          </motion.h2>
          <p className="text-neutral-400 text-sm md:text-base font-light">
            flexible partnership structures tailored to your team's operational
            cadence, product stage, and technical needs.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 rounded-3xl p-8 md:p-10 bg-neutral-950/80 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-neutral-500">
                    model 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                  {model.title}
                </h3>
                <p className="text-xs text-neutral-400 mb-4 font-mono">
                  {model.bestFor}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed font-light mb-8">
                  {model.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  {model.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-neutral-300 font-light"
                    >
                      <Check className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleRequestProposal(model.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white text-xs font-medium transition-all cursor-pointer"
                >
                  <span>request a proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing & Timeline Scope Statement */}
        <p className="text-center text-xs text-neutral-400 font-light mt-12 max-w-2xl mx-auto">
          *timelines and pricing depend strictly on verified project scope,
          architectural complexity, and delivery requirements. all proposals are
          tailored following technical discovery.
        </p>
      </div>
    </section>
  )
}
