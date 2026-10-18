import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

interface HeroProps {
  onExploreWork?: () => void
  onStartProject?: () => void
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onStartProject,
}) => {
  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background video with fallback poster */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Contrast darkening overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Foreground content container */}
      <div className="relative z-10 w-full h-full min-h-[100svh] pointer-events-none">
        {/* Three giant staggered headline words */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[15vw] md:text-[14vw] left-4 md:left-12 top-[16%] md:top-[17%] select-none tracking-tighter"
        >
          we
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[15vw] md:text-[14vw] right-4 md:right-14 top-[36%] md:top-[37%] select-none tracking-tighter"
        >
          build
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title absolute text-white font-medium text-[15vw] md:text-[14vw] left-[10%] md:left-[22%] top-[56%] md:top-[57%] select-none tracking-tighter"
        >
          digital.
        </motion.h1>

        {/* Supporting description & CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="absolute left-6 md:left-14 top-[47%] md:top-[46%] max-w-[280px] md:max-w-[320px] pointer-events-auto"
        >
          <p className="text-[14px] md:text-[15px] leading-snug text-white/90 font-light">
            we turn ambitious ideas into powerful digital products, software,
            and experiences.
          </p>

          <div className="flex items-center gap-3 mt-4 pt-1">
            <button
              onClick={() =>
                onExploreWork ? onExploreWork() : handleScrollTo('#work')
              }
              className="text-xs text-neutral-300 hover:text-white transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white cursor-pointer"
            >
              explore our work
            </button>
            <span className="text-white/30 text-xs">/</span>
            <button
              onClick={() =>
                onStartProject ? onStartProject() : handleScrollTo('#contact')
              }
              className="flex items-center gap-1 text-xs text-white hover:text-neutral-200 transition-colors font-medium cursor-pointer"
            >
              <span>start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Stat block 1: Top Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="absolute right-6 md:right-24 top-[14%] text-right pointer-events-auto"
        >
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-20 bg-white/40 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              50+
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            digital projects delivered
          </p>
        </motion.div>

        {/* Stat block 2: Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="absolute left-6 md:left-20 bottom-24 md:bottom-28 pointer-events-auto"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              12+
            </span>
            <div className="hidden md:block h-px w-20 bg-white/40 rotate-[-20deg]" />
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            industries supported
          </p>
        </motion.div>

        {/* Stat block 3: Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="absolute right-6 md:right-20 bottom-20 md:bottom-24 text-right pointer-events-auto"
        >
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-20 bg-white/40 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              98%
            </span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            client satisfaction target*
          </p>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto cursor-pointer"
          onClick={() => handleScrollTo('#intro')}
          aria-label="scroll down to explore"
        >
          <span className="text-[11px] tracking-widest text-white/50 uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-white/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black z-[2]" />
    </section>
  )
}
