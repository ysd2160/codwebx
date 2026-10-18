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
    <section className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>10 / questions & answers</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6"
          >
            frequently asked questions.
          </motion.h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-lg mx-auto">
            clear answers about our technical engagement process, pricing
            approach, and delivery milestones.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqsData.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} className="py-6 md:py-8">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-neutral-200 transition-colors tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white flex items-center justify-center text-white transition-colors flex-shrink-0">
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
                      <div className="pt-4 pl-8 md:pl-10 pr-4">
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
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
