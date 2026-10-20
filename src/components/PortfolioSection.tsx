import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/projects'
import { Project } from '../types'
import { CaseStudyModal } from './CaseStudyModal'

interface PortfolioSectionProps {
  onStartProject?: (context?: string) => void
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onStartProject,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleStartProject = (context?: string) => {
    if (onStartProject) {
      onStartProject(context)
    } else {
      const contactEl = document.querySelector('#contact')
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      id="work"
      className="relative w-full bg-[hsl(0_0%_7%)] py-28 md:py-36 px-5 sm:px-8 lg:px-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[hsl(119_99%_46%)] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] glow-green" />
              <span>SELECTED WORK</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-section-title font-extrabold tracking-tight text-white leading-tight"
            >
              Built to solve real problems.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[hsl(0_0%_65%)] text-sm md:text-base max-w-md font-light leading-relaxed"
          >
            A selection of verified client deliveries and digital systems
            engineered around actual business workflows and operational demands.
          </motion.p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-10 md:space-y-14">
          {/* Project 01: Good Vibes Cafe (Wide Feature) */}
          {projectsData.slice(0, 1).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-white/10 hover:border-[hsl(119_99%_46%/0.4)] rounded-3xl overflow-hidden bg-[hsl(0_0%_10%)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,234,26,0.06)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 h-72 sm:h-96 md:h-[440px] relative overflow-hidden bg-black/60 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />

                  {/* Logo overlay badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
                    <img
                      src="/assets/images/good-vibes-logo.png"
                      alt="Good Vibes Cafe Logo"
                      className="w-4 h-4 object-contain rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <span className="text-xs text-[hsl(0_0%_80%)] font-mono">
                      {project.number} / {project.category}
                    </span>
                  </div>

                  <span className="absolute bottom-5 left-5 text-xs font-mono text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] backdrop-blur-md px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[hsl(119_99%_46%)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[hsl(0_0%_65%)] text-sm md:text-base leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Quick Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {project.features?.slice(0, 3).map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs text-[hsl(0_0%_55%)] font-mono uppercase tracking-wider">
                      click to view case study
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[hsl(119_99%_46%)] group-hover:bg-[hsl(119_99%_46%)] group-hover:text-black text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Project 02: CodWebX POS (Featured Product Preview) */}
          {projectsData.slice(1, 2).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-white/10 hover:border-[hsl(119_99%_46%/0.4)] rounded-3xl overflow-hidden bg-[hsl(0_0%_10%)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,234,26,0.06)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 h-72 sm:h-96 md:h-[440px] relative overflow-hidden bg-black/60 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/10 order-1 lg:order-2">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_10%)] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[hsl(119_99%_46%)] animate-pulse" />
                    <span className="text-xs text-[hsl(0_0%_80%)] font-mono">
                      {project.number} / {project.category}
                    </span>
                  </div>

                  <span className="absolute bottom-5 left-5 text-xs font-mono text-[hsl(119_99%_46%)] border border-[hsl(119_99%_46%/0.3)] bg-[hsl(119_99%_46%/0.08)] backdrop-blur-md px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[hsl(119_99%_46%)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[hsl(0_0%_65%)] text-sm md:text-base leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Quick Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {project.features?.slice(0, 3).map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 text-xs text-[hsl(0_0%_80%)] font-light"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(119_99%_46%)] flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs text-[hsl(0_0%_55%)] font-mono uppercase tracking-wider">
                      click to view architecture & details
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[hsl(119_99%_46%)] group-hover:bg-[hsl(119_99%_46%)] group-hover:text-black text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-[hsl(0_0%_60%)] text-xs sm:text-sm font-light text-center sm:text-left">
            These projects represent verified client deliveries and ongoing
            proprietary engineering.
          </p>
          <button
            onClick={() => handleStartProject('general project enquiry')}
            type="button"
            className="flex items-center gap-2 bg-[hsl(0_0%_14%)] border border-white/20 text-white text-xs sm:text-sm px-6 py-3 rounded-full hover:border-[hsl(119_99%_46%/0.5)] hover:bg-[hsl(0_0%_18%)] hover:text-[hsl(119_99%_46%)] transition-all cursor-pointer"
          >
            <span>Have a project in mind? Let's build it</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={(name) =>
          handleStartProject(`interested in a solution like ${name}`)
        }
      />
    </section>
  )
}
