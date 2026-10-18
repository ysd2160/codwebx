import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { servicesData } from '../data/services'
import { Service } from '../types'

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>('web-dev')

  const handleServiceClick = (service: Service) => {
    if (onSelectService) {
      onSelectService(service.title)
    }
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id)
  }

  return (
    <section
      id="services"
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>02 / what we build</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              from first idea to final product.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-neutral-400 text-sm md:text-base max-w-md font-light"
          >
            everything you need to design, develop, launch, and grow your digital
            business.
          </motion.p>
        </div>

        {/* Services List (Desktop & Tablet) */}
        <div className="hidden md:block divide-y divide-white/10 border-y border-white/10">
          {servicesData.map((service, index) => {
            const isHovered = hoveredService === service.id
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service)}
                className={`group py-10 px-4 transition-all duration-300 cursor-pointer flex items-start justify-between gap-8 ${
                  isHovered ? 'bg-white/[0.03]' : ''
                }`}
              >
                {/* Left: Number & Title */}
                <div className="flex items-baseline gap-8 min-w-[340px]">
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                    {service.number}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-medium text-neutral-300 group-hover:text-white transition-colors tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Center: Description & Capabilities */}
                <div className="flex-1 max-w-xl">
                  <p className="text-neutral-400 text-sm lg:text-base leading-relaxed group-hover:text-neutral-200 transition-colors mb-4 font-light">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-neutral-400 bg-white/[0.04] border border-white/10 group-hover:border-white/20 px-3 py-1 rounded-full transition-colors font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action arrow button */}
                <div className="pt-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Services Accordion List (Mobile) */}
        <div className="md:hidden divide-y divide-white/10 border-y border-white/10">
          {servicesData.map((service) => {
            const isExpanded = expandedMobileId === service.id
            return (
              <div key={service.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleMobileExpand(service.id)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-500">
                      {service.number}
                    </span>
                    <h3 className="text-lg font-medium text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">
                    {isExpanded ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2">
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {service.capabilities.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleServiceClick(service)}
                          className="flex items-center gap-1.5 text-xs text-white bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-colors"
                        >
                          <span>enquire about {service.title}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
