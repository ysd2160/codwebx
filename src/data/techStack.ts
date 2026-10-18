import { TechCategory } from '../types'

export const techStackData: TechCategory[] = [
  {
    category: 'frontend',
    items: ['react', 'next.js', 'typescript', 'javascript', 'tailwind css'],
  },
  {
    category: 'backend',
    items: ['node.js', 'express', 'laravel', 'php', 'python'],
  },
  {
    category: 'mobile',
    items: ['react native', 'flutter'],
  },
  {
    category: 'databases',
    items: ['postgresql', 'mysql', 'mongodb'],
  },
  {
    category: 'infrastructure & integrations',
    items: [
      'cloud services',
      'rest apis',
      'authentication systems',
      'payment integrations',
      'analytics and monitoring',
    ],
  },
]
