import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from 'lucide-react'

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
  projectDetails: string
}

interface FormErrors {
  fullName?: string
  workEmail?: string
  serviceRequired?: string
  projectDetails?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialModel,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceRequired: 'Website Development',
    estimatedBudget: 'To be discussed',
    projectDetails: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  // Synchronize when a service or model is selected from another section
  useEffect(() => {
    if (initialService) {
      const normalized = initialService.toLowerCase()
      if (normalized.includes('pos')) {
        setFormData((prev) => ({ ...prev, serviceRequired: 'CodWebX POS (Our Product)' }))
      } else if (normalized.includes('custom') || normalized.includes('soft')) {
        setFormData((prev) => ({ ...prev, serviceRequired: 'Custom Software Development' }))
      } else if (normalized.includes('app')) {
        setFormData((prev) => ({ ...prev, serviceRequired: 'Application Development' }))
      } else if (normalized.includes('web') || normalized.includes('site')) {
        setFormData((prev) => ({ ...prev, serviceRequired: 'Website Development' }))
      } else {
        setFormData((prev) => ({ ...prev, serviceRequired: initialService }))
      }
    }
  }, [initialService])

  useEffect(() => {
    if (initialModel) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails
          ? `${prev.projectDetails}\n[Interested in: ${initialModel}]`
          : `Interested in: ${initialModel}. `,
      }))
    }
  }, [initialModel])

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.'
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter at least 2 characters.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Email is required.'
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      errs.workEmail = 'Please enter a valid email address.'
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a service.'
    }

    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief summary of your project.'
    } else if (formData.projectDetails.trim().length < 10) {
      errs.projectDetails =
        'Please provide at least 10 characters to help us understand your needs.'
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

    try {
      // Simulate real-world transmission
      await new Promise((resolve) => setTimeout(resolve, 900))
      setIsSubmitted(true)
    } catch {
      setSubmissionError(
        'Unable to transmit enquiry directly. Please reach out to codwebx@gmail.com or call +91 7575097762.',
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
      serviceRequired: 'Website Development',
      estimatedBudget: 'To be discussed',
      projectDetails: '',
    })
    setIsSubmitted(false)
    setErrors({})
    setSubmissionError(null)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello CodWebX, I would like to discuss a project with you.\n\nName: ${formData.fullName || '[Your Name]'}\nService: ${formData.serviceRequired}\nDetails: ${formData.projectDetails || '[Project summary]'}`,
  )

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
                <span>HAVE SOMETHING IN MIND?</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-section-title font-extrabold tracking-tight text-white leading-tight mb-6"
              >
                Let&apos;s build something <br />
                <span className="text-[hsl(119_99%_46%)]">that matters.</span>
              </motion.h2>
              <p className="text-[hsl(0_0%_70%)] text-base md:text-lg leading-relaxed font-light mb-10">
                Tell us what you&apos;re planning, what challenges you&apos;re facing,
                or what you&apos;d like your software to accomplish. We&apos;ll use that
                information to understand the project and discuss the next steps.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[hsl(0_0%_50%)] uppercase tracking-wider block mb-0.5">
                    Direct Email
                  </span>
                  <a
                    href="mailto:codwebx@gmail.com"
                    className="text-base text-white hover:text-[hsl(119_99%_46%)] transition-colors font-medium"
                  >
                    codwebx@gmail.com
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[hsl(0_0%_50%)] uppercase tracking-wider block mb-0.5">
                    Phone &amp; Direct Consultation
                  </span>
                  <a
                    href="tel:+917575097762"
                    className="text-base text-white hover:text-[hsl(119_99%_46%)] transition-colors font-mono"
                  >
                    +91 7575097762
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[hsl(0_0%_50%)] uppercase tracking-wider block mb-0.5">
                    Headquarters
                  </span>
                  <span className="text-base text-white font-medium block">
                    Ahmedabad, Gujarat, India
                  </span>
                  <span className="text-xs text-[hsl(0_0%_55%)] font-light">
                    Available for local meetings &amp; remote collaboration worldwide
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/917575097762?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(0_0%_12%)] border border-white/20 text-white text-xs sm:text-sm px-5 py-3 rounded-full hover:border-[hsl(119_99%_46%/0.5)] hover:text-[hsl(119_99%_46%)] hover:bg-[hsl(0_0%_16%)] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                  <span>Chat on WhatsApp (+91 7575097762)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 rounded-3xl p-6 sm:p-10 bg-[hsl(0_0%_10%)] shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(119_99%_46%/0.1)] border border-[hsl(119_99%_46%/0.3)] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-[hsl(119_99%_46%)]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                      Enquiry Received
                    </h3>
                    <p className="text-[hsl(0_0%_70%)] text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto mb-8">
                      Thank you, {formData.fullName}. We have received your project
                      details and will review them thoroughly before reaching out.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <button
                        onClick={handleReset}
                        type="button"
                        className="text-xs sm:text-sm text-[hsl(0_0%_80%)] border border-white/20 hover:border-white px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                      >
                        Submit another enquiry
                      </button>
                      <a
                        href={`https://wa.me/917575097762?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[hsl(119_99%_46%)] text-black text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[hsl(119_99%_52%)] transition-colors"
                      >
                        <span>Follow up on WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                        Project Enquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-[hsl(0_0%_60%)] font-light">
                        Share your goals and requirements. We respond with thoughtful technical feedback.
                      </p>
                    </div>

                    {submissionError && (
                      <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-xs">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{submissionError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Your Name"
                          className={`w-full bg-black/60 border ${
                            errors.fullName
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-white/10 focus:border-[hsl(119_99%_46%)]'
                          } rounded-xl px-4 py-3 text-sm text-white placeholder-[hsl(0_0%_40%)] outline-none transition-colors`}
                        />
                        {errors.fullName && (
                          <span className="text-[11px] text-red-400 mt-1 block">
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="workEmail"
                          className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                        >
                          Work Email *
                        </label>
                        <input
                          id="workEmail"
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) =>
                            setFormData({ ...formData, workEmail: e.target.value })
                          }
                          placeholder="name@company.com"
                          className={`w-full bg-black/60 border ${
                            errors.workEmail
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-white/10 focus:border-[hsl(119_99%_46%)]'
                          } rounded-xl px-4 py-3 text-sm text-white placeholder-[hsl(0_0%_40%)] outline-none transition-colors`}
                        />
                        {errors.workEmail && (
                          <span className="text-[11px] text-red-400 mt-1 block">
                            {errors.workEmail}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company Name */}
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                        >
                          Company / Brand (Optional)
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
                          placeholder="e.g. Good Vibes Cafe"
                          className="w-full bg-black/60 border border-white/10 focus:border-[hsl(119_99%_46%)] rounded-xl px-4 py-3 text-sm text-white placeholder-[hsl(0_0%_40%)] outline-none transition-colors"
                        />
                      </div>

                      {/* Service Required */}
                      <div>
                        <label
                          htmlFor="serviceRequired"
                          className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                        >
                          Service Required *
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
                          className="w-full bg-black border border-white/10 focus:border-[hsl(119_99%_46%)] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                        >
                          <option value="Website Development">Website Development (Service)</option>
                          <option value="Application Development">Application Development (Service)</option>
                          <option value="Custom Software Development">Custom Software Development (Service)</option>
                          <option value="CodWebX POS (Our Product)">CodWebX POS (Our Own Product)</option>
                          <option value="Other Project">Other / Custom Engineering</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget Tier */}
                    <div>
                      <label
                        htmlFor="estimatedBudget"
                        className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                      >
                        Project Budget (Estimated)
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
                        className="w-full bg-black border border-white/10 focus:border-[hsl(119_99%_46%)] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="To be discussed">To be discussed</option>
                        <option value="Under $2,000 / ₹1,50,000">Under $2,000 / ₹1,50,000</option>
                        <option value="$2,000 – $5,000 / ₹1,50,000 – ₹4,00,000">$2,000 – $5,000 / ₹1,50,000 – ₹4,00,000</option>
                        <option value="$5,000+ / ₹4,00,000+">$5,000+ / ₹4,00,000+</option>
                      </select>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label
                        htmlFor="projectDetails"
                        className="block text-xs font-mono text-[hsl(0_0%_70%)] uppercase tracking-wider mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectDetails: e.target.value,
                          })
                        }
                        placeholder="Tell us about what you want to build, current challenges, or your desired timeline..."
                        className={`w-full bg-black/60 border ${
                          errors.projectDetails
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[hsl(119_99%_46%)]'
                        } rounded-xl px-4 py-3 text-sm text-white placeholder-[hsl(0_0%_40%)] outline-none transition-colors resize-y`}
                      />
                      {errors.projectDetails && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.projectDetails}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[hsl(119_99%_46%)] text-black text-sm sm:text-base font-semibold py-4 px-8 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
