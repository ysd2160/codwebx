import { TechCategory } from '../types'

export const techStackData: TechCategory[] = [
  {
    category: 'frontend',
    items: ['react', 'next.js', 'typescript', 'javascript', 'tailwind css'],
  },
  {
    category: 'backend',
    items: ['laravel', 'php', 'node.js', 'express', 'python'],
  },
  {
    category: 'databases',
    items: ['mysql', 'postgresql', 'mongodb'],
  },
  {
    category: 'mobile',
    items: ['react native', 'flutter'],
  },
  {
    category: 'integrations & infrastructure',
    items: [
      'rest apis',
      'authentication systems',
      'cloud deployment',
      'payment integrations',
      'analytics and monitoring',
    ],
  },
]
