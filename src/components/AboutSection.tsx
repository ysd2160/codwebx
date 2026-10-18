import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#process')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>08 / who we are</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-8"
            >
              small details. serious engineering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-neutral-300 text-base md:text-lg leading-relaxed font-light mb-10"
            >
              we bring design thinking and software engineering together to help
              businesses solve practical challenges, improve customer
              experiences, and bring ambitious ideas to life.
            </motion.p>

            {/* Three Principles List */}
            <div className="space-y-4 border-t border-white/10 pt-8 mb-10">
              {[
                {
                  title: 'clarity over complexity',
                  desc: 'we prioritize clean architectures and transparent workflows over unnecessary abstractions.',
                },
                {
                  title: 'quality over shortcuts',
                  desc: 'we write rigorous, tested code designed to withstand production loads and continuous evolution.',
                },
                {
                  title: 'collaboration over guesswork',
                  desc: 'we operate as an extension of your product team with clear milestones and shared accountability.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-xs font-mono text-neutral-500 mt-0.5">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-base font-medium text-white mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#process"
                onClick={handleScrollToProcess}
                className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors group cursor-pointer"
              >
                <span className="border-b border-white/40 group-hover:border-white pb-0.5 transition-colors">
                  get to know our approach
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Atmospheric Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="abstract digital architecture and engineering"
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-mono text-neutral-400 block mb-1">
                  studio philosophy
                </span>
                <p className="text-sm text-neutral-300 font-light">
                  crafting durable digital products engineered to endure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
