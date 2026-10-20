import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown, Code2 } from 'lucide-react'
import { TechBackground } from './TechBackground'

interface HeroSectionProps {
  onExploreWork?: () => void
  onStartProject?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
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
    <section className="relative min-h-screen overflow-hidden bg-[hsl(0_0%_7%)] flex flex-col justify-between pt-28 sm:pt-36 pb-8">
      {/* Background Visual Layers */}
      <TechBackground />

      {/* Main Hero Content: Anchored toward bottom-left */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-14 flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6 bg-[hsl(119_99%_46%/0.08)] border border-[hsl(119_99%_46%/0.25)] px-4 py-1.5 rounded-full backdrop-blur-md w-fit"
        >
          <Code2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
          <span className="font-semibold tracking-wider">
            CODEWEBX / DIGITAL ENGINEERING STUDIO
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-extrabold text-white tracking-tighter uppercase max-w-6xl mb-6 select-none"
        >
          WE BUILD <br />
          <span className="text-[hsl(119_99%_46%)] text-glow-green">
            WHAT'S NEXT.
          </span>
        </motion.h1>

        {/* Supporting Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 tracking-tight mb-4"
        >
          Websites. Applications. Custom Software. POS.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-body-fluid text-[hsl(0_0%_70%)] font-light max-w-2xl leading-relaxed mb-10"
        >
          We provide website development, application development, and custom
          software engineering — alongside CodWebX POS, our own dedicated
          in-house product.
        </motion.p>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <button
            onClick={() =>
              onStartProject ? onStartProject() : handleScrollTo('#contact')
            }
            type="button"
            className="flex items-center gap-2 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] text-sm sm:text-base font-semibold px-8 py-4 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() =>
              onExploreWork ? onExploreWork() : handleScrollTo('#work')
            }
            type="button"
            className="flex items-center gap-2 bg-[hsl(0_0%_14%)] text-white border border-[hsl(0_0%_25%)] text-sm sm:text-base font-medium px-7 py-4 rounded-full hover:border-[hsl(119_99%_46%/0.5)] hover:bg-[hsl(0_0%_18%)] transition-all cursor-pointer"
          >
            <span>Explore Our Work</span>
          </button>
        </motion.div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="relative z-10 text-center pb-2">
        <button
          onClick={() => handleScrollTo('#services')}
          className="inline-flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest text-[hsl(0_0%_55%)] uppercase hover:text-[hsl(119_99%_46%)] transition-colors cursor-pointer"
          aria-label="Scroll to services"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
          </motion.div>
        </button>
      </div>
    </section>
  )
}
