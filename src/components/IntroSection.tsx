import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const IntroSection: React.FC = () => {
  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#process')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="intro"
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span>01 / our philosophy</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl leading-[1.1] mb-12"
        >
          great ideas deserve exceptional execution.
        </motion.h2>

        {/* Large Editorial Paragraph with subtle word emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mb-12"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-white/50 leading-relaxed md:leading-[1.4]">
            <span className="text-white font-normal">we partner with</span>{' '}
            ambitious founders and growing businesses{' '}
            <span className="text-white font-normal">to design, build,</span>{' '}
            and scale digital products that{' '}
            <span className="text-white font-normal">solve real problems.</span>
          </p>
        </motion.div>

        {/* Small Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4"
        >
          <a
            href="#process"
            onClick={handleScrollToProcess}
            className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="border-b border-white/30 group-hover:border-white pb-0.5 transition-colors">
              discover our approach
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
