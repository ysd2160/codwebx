import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqsData } from '../data/faqs'

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            Clear answers to common questions.
          </motion.h2>
          <p className="text-[hsl(0_0%_65%)] text-sm md:text-base font-light max-w-lg mx-auto">
            Everything you need to know about our technical delivery process, POS
            solutions, and how we work with clients.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(119_99%_46%)] rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[hsl(119_99%_46%)]">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[hsl(119_99%_46%)] transition-colors tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full border ${isOpen ? 'border-[hsl(119_99%_46%)] bg-[hsl(119_99%_46%/0.1)] text-[hsl(119_99%_46%)]' : 'border-white/20 text-white group-hover:border-white'} flex items-center justify-center transition-colors flex-shrink-0`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pl-8 md:pl-10 pr-4">
                        <p className="text-[hsl(0_0%_70%)] text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
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
