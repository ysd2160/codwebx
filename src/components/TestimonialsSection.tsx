import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonialsData } from '../data/testimonials'

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1,
    )
  }

  const activeTestimonial = testimonialsData[currentIndex]

  return (
    <section className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>07 / testimonials</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              good work. stronger partnerships.
            </motion.h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-mono">
              testimonial placeholder format
            </span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 bg-neutral-950/80">
          <Quote className="w-10 h-10 md:w-14 md:h-14 text-white/20 mb-8" />

          <div className="min-h-[160px] md:min-h-[180px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-neutral-200 leading-relaxed md:leading-[1.35] tracking-tight">
                  "{activeTestimonial.quote}"
                </p>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-base font-medium text-white">
                      {activeTestimonial.clientName}
                    </p>
                    <p className="text-sm text-neutral-400 font-light mt-0.5">
                      {activeTestimonial.clientRole} ·{' '}
                      {activeTestimonial.companyName}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 border border-white/10 px-3 py-1 rounded-full w-fit">
                    client endorsement placeholder
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/10">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`jump to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Honest Note */}
        <p className="text-center text-xs text-neutral-400 font-light mt-8">
          *note: these testimonials are formatted placeholders pending client approval prior to formal publication.
        </p>
      </div>
    </section>
  )
}
