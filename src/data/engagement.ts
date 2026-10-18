import { EngagementModel } from '../types'

export const engagementModels: EngagementModel[] = [
  {
    id: 'fixed-scope',
    title: 'fixed-scope project',
    bestFor:
      'best for clearly defined websites, applications, and software requirements.',
    description:
      'a structured model with defined scope, agreed milestones, and clear deliverables tailored to launch timelines.',
    features: [
      'defined project scope',
      'fixed milestone deliverables',
      'predictable timeline',
      'dedicated quality validation',
    ],
  },
  {
    id: 'dedicated-team',
    title: 'dedicated development',
    bestFor: 'best for businesses that need ongoing engineering capacity.',
    description:
      'an adaptable engineering partnership providing continuous momentum, sprint delivery, and deep architectural alignment.',
    features: [
      'agreed sprint capacity',
      'prioritized backlog tasks',
      'direct technical communication',
      'rapid iteration cycles',
    ],
  },
  {
    id: 'ongoing-support',
    title: 'ongoing support',
    bestFor:
      'best for products that need continuous maintenance and improvement.',
    description:
      'reliable post-launch coverage ensuring system health, performance tuning, and timely feature enhancements.',
    features: [
      'agreed support coverage',
      'prompt bug resolution',
      'security & framework updates',
      'planned product improvements',
    ],
  },
]
