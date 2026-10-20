export interface Service {
  id: string
  number: string
  title: string
  heading: string
  description: string
  capabilities: string[]
  ctaText: string
  ctaHref: string
  visualType: 'web_mockup' | 'app_mockup' | 'software_architecture' | 'pos_showcase'
  tag?: string
  isProduct?: boolean
}

export interface Project {
  id: string
  number: string
  name: string
  category: string
  title: string
  description: string
  challenge: string
  solution: string
  techStack: string[]
  outcome: string
  type: 'client_delivery' | 'internal_product'
  badge: string
  image: string
  aspectRatio?: 'wide' | 'tall' | 'square'
  features?: string[]
  ctaText?: string
  ctaHref?: string
}

export interface Principle {
  id: string
  title: string
  description: string
}

export interface ProcessStage {
  step: string
  name: string
  summary: string
  deliverables?: string[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export interface EngagementModel {
  id: string
  title: string
  bestFor: string
  description: string
  features: string[]
}
