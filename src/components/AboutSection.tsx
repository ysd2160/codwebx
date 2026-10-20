import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, CheckCircle2, Terminal } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
              <span>ABOUT CODEWEBX</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-8"
            >
              Small details. <br />
              <span className="text-[hsl(119_99%_46%)]">Serious engineering.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[hsl(0_0%_80%)] text-base md:text-lg leading-relaxed font-light mb-6"
            >
              CodWebX is an IT company based in Ahmedabad, Gujarat, India,
              working with clients locally and remotely. We provide website
              development, application development, and custom software
              development services, alongside our own proprietary product,
              CodWebX POS.
            </motion.p>

            <div className="flex items-center gap-2 text-xs font-mono text-[hsl(0_0%_80%)] mb-8 bg-black/60 border border-white/10 px-4 py-2 rounded-full w-fit">
              <MapPin className="w-3.5 h-3.5 text-[hsl(119_99%_46%)]" />
              <span>Ahmedabad, Gujarat, India · Serving clients locally & remotely</span>
            </div>

            {/* Three Studio Standards */}
            <div className="space-y-4 border-t border-white/10 pt-8 mb-10">
              {[
                {
                  title: 'Direct engineer collaboration',
                  desc: 'You communicate directly with the engineers building your solution — no middle layers, account managers, or translation errors.',
                },
                {
                  title: 'Built for actual operations',
                  desc: 'Every feature is shaped around how your team actually works, keeping workflows fast and reducing day-to-day friction.',
                },
                {
                  title: 'Maintainable architecture',
                  desc: 'Clean code, modern tech stacks, and modular systems built to grow as your business scales without requiring full rewrites.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[hsl(0_0%_10%)] border border-white/5 hover:border-[hsl(119_99%_46%/0.3)] transition-colors"
                >
                  <span className="text-xs font-mono text-[hsl(119_99%_46%)] mt-0.5">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-white mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[hsl(0_0%_65%)] font-light leading-relaxed">
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
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 text-sm text-[hsl(119_99%_46%)] hover:underline transition-colors group cursor-pointer"
              >
                <span>Start a conversation with our team</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Architecture Composition */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-[hsl(0_0%_10%)] p-7 sm:p-9 flex flex-col justify-between shadow-xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  </div>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    Cod<span className="text-[hsl(119_99%_46%)]">WebX</span> IT Solutions
                  </span>
                </div>
                <span className="text-xs font-mono text-[hsl(0_0%_55%)]">
                  Ahmedabad, India
                </span>
              </div>

              {/* Codebase & Architecture Graphic */}
              <div className="space-y-3 font-mono text-xs text-[hsl(0_0%_75%)] my-8 p-5 rounded-2xl bg-black/80 border border-white/10 leading-relaxed">
                <div className="text-[hsl(0_0%_50%)]">// CodWebX engineering manifesto</div>
                <div className="text-white">
                  <span className="text-[hsl(119_99%_46%)]">const</span> company = <span className="text-emerald-300">&apos;CodWebX&apos;</span>;
                </div>
                <div className="text-white">
                  <span className="text-[hsl(119_99%_46%)]">const</span> coreOfferings = [
                </div>
                <div className="pl-4 text-emerald-300">
                  &apos;Website Development&apos;,<br />
                  &apos;Application Development&apos;,<br />
                  &apos;Custom Software Development&apos;,<br />
                  &apos;CodWebX POS (Our Own Product)&apos;
                </div>
                <div className="text-white">];</div>
                <div className="text-white">
                  <span className="text-[hsl(119_99%_46%)]">const</span> location = <span className="text-emerald-300">&apos;Ahmedabad, Gujarat, India&apos;</span>;
                </div>
                <div className="text-[hsl(0_0%_50%)] pt-2">
                  // Delivered in production: Good Vibes Cafe website &amp; thermal POS
                </div>
                <div className="text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  <span className="text-[hsl(119_99%_46%)] font-semibold">return buildReliableSoftware();</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[hsl(0_0%_60%)]">
                <span>Clean Code · Practical Engineering</span>
                <span className="text-[hsl(119_99%_46%)]">Direct Developer Access</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
