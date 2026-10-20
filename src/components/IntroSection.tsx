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
      className="relative w-full bg-[hsl(0_0%_5%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
          <span>OUR PHILOSOPHY</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-10"
        >
          Great ideas deserve <span className="text-[hsl(119_99%_46%)]">exceptional execution.</span>
        </motion.h2>

        {/* Large Editorial Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mb-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[hsl(0_0%_55%)] leading-relaxed md:leading-[1.4]">
            <span className="text-white font-normal">We partner with</span>{' '}
            ambitious founders, small businesses, cafes, and growing companies{' '}
            <span className="text-white font-normal">to design, build,</span>{' '}
            and scale digital products that{' '}
            <span className="text-[hsl(119_99%_46%)] font-normal">solve real operational problems.</span>
          </p>
        </motion.div>

        {/* Small Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2"
        >
          <a
            href="#process"
            onClick={handleScrollToProcess}
            className="inline-flex items-center gap-2 text-sm text-[hsl(0_0%_80%)] hover:text-[hsl(119_99%_46%)] transition-colors group cursor-pointer"
          >
            <span className="border-b border-white/30 group-hover:border-[hsl(119_99%_46%)] pb-0.5 transition-colors">
              Discover our approach
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
