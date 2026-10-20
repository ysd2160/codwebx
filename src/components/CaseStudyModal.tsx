import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react'
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
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[hsl(0_0%_10%)] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl text-white"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-[hsl(119_99%_46%)]">
                {project.number}
              </span>
              <span className="text-xs text-[hsl(0_0%_80%)] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-light">
                {project.category}
              </span>
              <span className="text-[11px] text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] px-2.5 py-0.5 rounded-full font-mono">
                {project.badge}
              </span>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            {project.name}
          </h2>

          {/* Project Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 mb-8 bg-black/60 flex items-center justify-center p-4">
            <img
              src={project.image}
              alt={project.name}
              className="max-h-full max-w-full object-contain filter contrast-125"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Grid of Case Study Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Challenge */}
            <div className="border border-white/10 bg-black/40 p-6 rounded-2xl">
              <h3 className="text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-3">
                The Business Challenge
              </h3>
              <p className="text-[hsl(0_0%_75%)] text-sm leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="border border-white/10 bg-black/40 p-6 rounded-2xl">
              <h3 className="text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-3">
                Engineering Solution
              </h3>
              <p className="text-[hsl(0_0%_75%)] text-sm leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Implemented Capabilities */}
          {project.features && project.features.length > 0 && (
            <div className="border border-white/10 bg-black/40 p-6 rounded-2xl mb-8">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-4">
                <Layers className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                <span>Verified System Features</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcome & Tech Stack */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-2">
                <CheckCircle2 className="w-4 h-4 text-[hsl(119_99%_46%)]" />
                <span>Production Outcome</span>
              </div>
              <p className="text-white text-sm font-light max-w-md">
                {project.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[hsl(0_0%_80%)] bg-white/5 border border-white/10 px-3 py-1 rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={() => {
                onClose()
                onStartSimilarProject(project.name)
              }}
              type="button"
              className="flex items-center gap-2 bg-[hsl(119_99%_46%)] text-[hsl(0_0%_4%)] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[hsl(119_99%_52%)] glow-green transition-all cursor-pointer"
            >
              <span>{project.ctaText || 'Discuss a Similar Project'}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
