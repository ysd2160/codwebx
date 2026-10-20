import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface LegalModalProps {
  type: 'privacy' | 'terms' | null
  onClose: () => void
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (type) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [type, onClose])

  if (!type) return null

  const isPrivacy = type === 'privacy'

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-neutral-950 border border-white/10 rounded-3xl p-6 md:p-10 text-white shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
            <h2 className="text-2xl font-medium tracking-tight">
              {isPrivacy ? 'privacy policy' : 'terms of service'}
            </h2>
            <button
              onClick={onClose}
              type="button"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-sm text-neutral-300 font-light leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  at codwebx, we respect your personal privacy. this policy
                  outlines how we handle information shared through our agency
                  website and digital channels.
                </p>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    data collection
                  </h3>
                  <p>
                    we only collect details explicitly submitted by you through
                    our project enquiry form (such as your name, work email,
                    business name, and project description) solely to assess and
                    reply to your technical requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    use of information
                  </h3>
                  <p>
                    we do not sell, rent, or trade your contact information.
                    details provided are used exclusively for direct technical
                    communication regarding your project.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    security standards
                  </h3>
                  <p>
                    we employ industry-standard protocols and secure digital
                    practices to safeguard all submitted project inquiries.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  these terms of service govern your use of the codwebx website
                  and related digital advisory communications.
                </p>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    intellectual property
                  </h3>
                  <p>
                    all brand assets, visual design layouts, bespoke software
                    demonstrations, and editorial compositions on this website
                    are the intellectual property of codwebx.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    project proposals
                  </h3>
                  <p>
                    information presented across project previews and engagement
                    models is illustrative. formal engineering scopes, deliverables,
                    milestones, and financial terms are codified exclusively in
                    agreed client statements of work.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="bg-white text-black text-xs font-medium px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
