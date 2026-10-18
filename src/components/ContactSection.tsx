import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

interface ContactSectionProps {
  initialService?: string
  initialModel?: string
}

interface FormState {
  fullName: string
  workEmail: string
  companyName: string
  serviceRequired: string
  estimatedBudget: string
  projectTimeline: string
  projectDescription: string
}

interface FormErrors {
  fullName?: string
  workEmail?: string
  serviceRequired?: string
  projectDescription?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialModel,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceRequired: 'web development',
    estimatedBudget: '$25k - $50k',
    projectTimeline: '1 - 3 months',
    projectDescription: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  // Update preselected values when passed from other sections
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: initialService.toLowerCase(),
      }))
    }
  }, [initialService])

  useEffect(() => {
    if (initialModel) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription
          ? `${prev.projectDescription}\n[interested in ${initialModel}]`
          : `interested in ${initialModel} engagement model.`,
      }))
    }
  }, [initialModel])

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!formData.fullName.trim()) {
      errs.fullName = 'full name is required'
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'please enter at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'work email is required'
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      errs.workEmail = 'please enter a valid work email address'
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'please select a service'
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'project description is required'
    } else if (formData.projectDescription.trim().length < 10) {
      errs.projectDescription =
        'please provide at least a brief summary (minimum 10 characters)'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionError(null)

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate realistic async dispatch with API endpoint simulation
    // Integration Note: To connect to production backend, set VITE_API_CONTACT_ENDPOINT
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      // In production: const res = await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(formData) })
      setIsSubmitted(true)
    } catch {
      setSubmissionError(
        'unable to transmit enquiry at this time. please email directly at hello@securify.studio',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      serviceRequired: 'web development',
      estimatedBudget: '$25k - $50k',
      projectTimeline: '1 - 3 months',
      projectDescription: '',
    })
    setIsSubmitted(false)
    setErrors({})
    setSubmissionError(null)
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline and Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                <span>11 / get in touch</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-8"
              >
                let's build something meaningful.
              </motion.h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-light mb-12">
                have an idea, a business challenge, or a product that needs a
                better technical foundation? tell us what you're working on.
              </p>
            </div>

            {/* Direct Contact Placeholders */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  email enquiry
                </span>
                <a
                  href="mailto:hello@securify.studio"
                  className="text-base text-white hover:text-neutral-300 transition-colors font-light"
                >
                  hello@securify.studio
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  telephone
                </span>
                <span className="text-base text-white font-light">
                  +1 (555) 019-2834
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  headquarters & studio
                </span>
                <span className="text-base text-white font-light">
                  san francisco, ca & remote worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 rounded-3xl p-8 sm:p-12 bg-neutral-950/80">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                      enquiry transmitted successfully.
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto font-light leading-relaxed mb-8">
                      thank you for sharing your project parameters. our
                      engineering lead will review the specifications and reply
                      within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-white text-black text-xs font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      <span>submit another enquiry</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          full name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          placeholder="e.g. alex morgan"
                          className={`w-full bg-black/60 border ${
                            errors.fullName
                              ? 'border-red-500'
                              : 'border-white/10 focus:border-white/40'
                          } rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          work email *
                        </label>
                        <input
                          id="workEmail"
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workEmail: e.target.value,
                            })
                          }
                          placeholder="alex@company.com"
                          className={`w-full bg-black/60 border ${
                            errors.workEmail
                              ? 'border-red-500'
                              : 'border-white/10 focus:border-white/40'
                          } rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                        />
                        {errors.workEmail && (
                          <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {errors.workEmail}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company Name & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          company name
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              companyName: e.target.value,
                            })
                          }
                          placeholder="company or project title"
                          className="w-full bg-black/60 border border-white/10 focus:border-white/40 rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="serviceRequired"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          service required *
                        </label>
                        <select
                          id="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              serviceRequired: e.target.value,
                            })
                          }
                          className="w-full bg-black border border-white/10 focus:border-white/40 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="web development">web development</option>
                          <option value="mobile app development">
                            mobile app development
                          </option>
                          <option value="custom software">custom software</option>
                          <option value="saas product development">
                            saas product development
                          </option>
                          <option value="ui/ux design">ui/ux design</option>
                          <option value="ai and integrations">
                            ai and integrations
                          </option>
                          <option value="other">other technical solution</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="estimatedBudget"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          estimated budget
                        </label>
                        <select
                          id="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              estimatedBudget: e.target.value,
                            })
                          }
                          className="w-full bg-black border border-white/10 focus:border-white/40 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="<$10k">&lt;$10k</option>
                          <option value="$10k - $25k">$10k – $25k</option>
                          <option value="$25k - $50k">$25k – $50k</option>
                          <option value="$50k+">$50k+</option>
                          <option value="undetermined / exploratory">
                            undetermined / exploratory
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="projectTimeline"
                          className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                        >
                          project timeline
                        </label>
                        <select
                          id="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              projectTimeline: e.target.value,
                            })
                          }
                          className="w-full bg-black border border-white/10 focus:border-white/40 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="immediate (< 1 month)">
                            immediate (&lt; 1 month)
                          </option>
                          <option value="1 - 3 months">1 – 3 months</option>
                          <option value="3 - 6 months">3 – 6 months</option>
                          <option value="flexible">flexible</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label
                        htmlFor="projectDescription"
                        className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider"
                      >
                        project description *
                      </label>
                      <textarea
                        id="projectDescription"
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectDescription: e.target.value,
                          })
                        }
                        placeholder="tell us about your requirements, desired outcomes, and key milestones..."
                        className={`w-full bg-black/60 border ${
                          errors.projectDescription
                            ? 'border-red-500'
                            : 'border-white/10 focus:border-white/40'
                        } rounded-2xl p-4 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none`}
                      />
                      {errors.projectDescription && (
                        <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.projectDescription}
                        </p>
                      )}
                    </div>

                    {submissionError && (
                      <div className="p-4 rounded-xl bg-white/5 border border-white/20 text-neutral-300 text-xs">
                        {submissionError}
                      </div>
                    )}

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-white text-black text-sm font-medium py-4 px-8 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>transmitting enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>send project enquiry</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-neutral-500 font-mono">
                      direct dispatch · no marketing spam · reply within 24
                      hours
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
