export interface Service {
  id: string
  number: string
  title: string
  description: string
  capabilities: string[]
}

export interface Project {
  id: string
  number: string
  name: string
  category: string
  description: string
  challenge: string
  solution: string
  techStack: string[]
  outcome: string
  isConcept: boolean
  image: string
  aspectRatio?: 'wide' | 'tall' | 'square'
}

export interface Principle {
  id: string
  title: string
  description: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export interface ProcessStage {
  step: string
  name: string
  summary: string
  deliverables: string[]
}

export interface Testimonial {
  id: string
  number: string
  quote: string
  clientName: string
  clientRole: string
  companyName: string
  isPlaceholder: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface EngagementModel {
  id: string
  title: string
  bestFor: string
  description: string
  features: string[]
}
