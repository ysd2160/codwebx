import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
      className="relative w-full bg-black py-32 md:py-44 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest text-neutral-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>03 / selected work</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              work that moves business forward.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-neutral-400 text-sm md:text-base max-w-md font-light"
          >
            a selection of digital experiences, platforms, and systems built to
            solve meaningful problems.
          </motion.p>
        </div>

        {/* Editorial Project Grid: Asymmetric Composition */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 01: Hero Wide Layout */}
          {projectsData.slice(0, 1).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden bg-neutral-950 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 h-80 sm:h-96 md:h-[500px] relative overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-6 left-6 text-xs text-neutral-400 font-mono bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    {project.number} / {project.category}
                  </span>
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-neutral-400 font-mono border border-white/10 px-2.5 py-0.5 rounded-full">
                        concept exploration
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-medium text-white mb-4 tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light mb-8">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs text-neutral-400 font-light">
                      click to view case study
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Projects 02 & 03: Asymmetric 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projectsData.slice(1, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden bg-neutral-950 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-72 sm:h-80 md:h-96 relative overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-6 left-6 text-xs text-neutral-400 font-mono bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    {project.number} / {project.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs text-neutral-400 font-mono border border-white/10 px-2.5 py-0.5 rounded-full inline-block mb-4">
                      concept exploration
                    </span>
                    <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                    <span className="text-xs text-neutral-400 font-light">
                      view concept details
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project 04: Full width feature */}
          {projectsData.slice(3, 4).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden bg-neutral-950 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 p-8 md:p-12 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-neutral-400 font-mono border border-white/10 px-2.5 py-0.5 rounded-full">
                        concept exploration
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-medium text-white mb-4 tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light mb-8">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs text-neutral-400 font-light">
                      click to view case study
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 h-80 sm:h-96 md:h-[480px] relative overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-6 right-6 text-xs text-neutral-400 font-mono bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    {project.number} / {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-28 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-neutral-400 text-sm font-light text-center sm:text-left">
            these showcase projects represent architectural concepts and studio
            benchmarks.
          </p>
          <button
            onClick={() => handleStartProject('general project')}
            type="button"
            className="flex items-center gap-2 bg-neutral-900 border border-white/20 text-white text-sm px-6 py-3.5 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <span>have a project in mind? let's build it</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={(name) => handleStartProject(`inspired by ${name}`)}
      />
    </section>
  )
}
