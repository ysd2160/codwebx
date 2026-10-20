import { EngagementModel } from '../types'

export const engagementModels: EngagementModel[] = [
  {
    id: 'fixed-scope',
    title: 'fixed-scope project',
    bestFor:
      'for websites, applications, and software with clearly defined requirements.',
    description:
      'a structured model with agreed milestones, transparent deliverables, and a defined delivery timeline tailored to your target launch date.',
    features: [
      'clearly defined project scope',
      'agreed milestone deliverables',
      'transparent timeline estimate',
      'dedicated quality validation & handover',
    ],
  },
  {
    id: 'ongoing-development',
    title: 'ongoing development',
    bestFor:
      'for businesses that need continuous feature development and engineering support.',
    description:
      'an adaptable engineering partnership providing continuous momentum, sprint delivery, and technical expertise as your product grows.',
    features: [
      'agreed development capacity',
      'prioritized sprint backlog',
      'direct engineer communication',
      'rapid iteration & feature shipping',
    ],
  },
  {
    id: 'maintenance-improvements',
    title: 'maintenance and improvements',
    bestFor:
      'for existing websites and applications that need updates, bug fixes, optimization, or new functionality.',
    description:
      'reliable technical assistance to assess existing codebases, resolve bugs, enhance speed, and implement necessary modern features.',
    features: [
      'technical assessment of existing systems',
      'bug fixes & performance tuning',
      'security & framework updates',
      'planned feature iterations',
    ],
  },
]
