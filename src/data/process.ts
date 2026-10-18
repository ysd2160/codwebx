import { ProcessStage } from '../types'

export const processStages: ProcessStage[] = [
  {
    step: '01',
    name: 'discover',
    summary:
      'we understand your business, users, requirements, and desired outcomes.',
    deliverables: ['discovery notes', 'requirements specification', 'project scope'],
  },
  {
    step: '02',
    name: 'define',
    summary:
      'we establish priorities, technical direction, milestones, and a practical delivery plan.',
    deliverables: [
      'project roadmap',
      'architecture outline',
      'feature priorities',
    ],
  },
  {
    step: '03',
    name: 'design',
    summary:
      'we create wireframes, visual systems, and user experiences before moving into implementation.',
    deliverables: ['wireframes', 'ui design system', 'interactive prototypes'],
  },
  {
    step: '04',
    name: 'develop',
    summary:
      'we build the product in focused iterations, validating functionality and quality along the way.',
    deliverables: [
      'implemented features',
      'backend & api integrations',
      'automated & manual testing',
    ],
  },
  {
    step: '05',
    name: 'launch and evolve',
    summary:
      'we deploy the product, monitor its performance, and support future improvements.',
    deliverables: [
      'cloud deployment',
      'client handover',
      'system documentation',
      'optional maintenance',
    ],
  },
]
