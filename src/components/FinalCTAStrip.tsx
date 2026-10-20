import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface FinalCTAStripProps {
  onStartConversation?: () => void
}

export const FinalCTAStrip: React.FC<FinalCTAStripProps> = ({
  onStartConversation,
}) => {
  const handleClick = () => {
    if (onStartConversation) {
      onStartConversation()
    } else {
      const contactEl = document.querySelector('#contact')
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight select-none"
        >
          Your next idea <br />
          <span className="text-[hsl(119_99%_46%)] text-glow-green">starts here.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[hsl(0_0%_70%)] text-base md:text-xl font-light max-w-xl mx-auto mb-10"
        >
          Let&apos;s turn your operational challenge into a powerful software advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex items-center gap-2 bg-[hsl(119_99%_46%)] text-black text-sm md:text-base font-semibold px-9 py-4 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </motion.div>
      </div>

      {/* Subtle radial ambient highlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[hsl(119_99%_46%/0.05)] rounded-full blur-3xl" />
    </section>
  )
}
