import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Project } from '../types'

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
  onStartSimilarProject: (projectName: string) => void
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

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
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">
                {project.number}
              </span>
              <span className="text-xs text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.isConcept && (
                <span className="text-[11px] text-neutral-400 border border-white/10 px-2.5 py-0.5 rounded-full font-mono">
                  concept exploration
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            {project.name}
          </h2>

          {/* Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 mb-8 bg-neutral-900">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Grid of Case Study Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Challenge */}
            <div className="border border-white/10 bg-white/[0.02] p-6 rounded-2xl">
              <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                the challenge
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="border border-white/10 bg-white/[0.02] p-6 rounded-2xl">
              <h3 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                our solution
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Outcome & Tech Stack */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>outcome benchmark</span>
              </div>
              <p className="text-white text-sm font-light">{project.outcome}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-neutral-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={() => {
                onClose()
                onStartSimilarProject(project.name)
              }}
              type="button"
              className="flex items-center gap-2 bg-white text-black text-sm px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <span>discuss a similar project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
