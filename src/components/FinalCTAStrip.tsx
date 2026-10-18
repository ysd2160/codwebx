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
    <section className="relative w-full bg-black py-28 md:py-36 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight select-none"
        >
          your next idea starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-neutral-400 text-base md:text-xl font-light max-w-xl mx-auto mb-10"
        >
          let's turn the next challenge into your next opportunity.
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
            className="inline-flex items-center gap-2 bg-white text-black text-sm md:text-base font-normal px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span>start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Subtle radial ambient highlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl" />
    </section>
  )
}
