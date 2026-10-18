import { Service } from '../types'

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'web development',
    description:
      'fast, responsive, conversion-focused websites and web applications engineered around your business goals.',
    capabilities: [
      'business websites',
      'custom web applications',
      'e-commerce platforms',
      'dashboards and admin panels',
      'landing pages',
    ],
  },
  {
    id: 'mobile-dev',
    number: '02',
    title: 'mobile app development',
    description:
      'intuitive mobile experiences designed to connect your customers with your products and services.',
    capabilities: [
      'ios and android applications',
      'cross-platform development',
      'customer applications',
      'booking and delivery apps',
      'app integrations',
    ],
  },
  {
    id: 'custom-software',
    number: '03',
    title: 'custom software',
    description:
      'tailored software that simplifies complex workflows, reduces manual effort, and gives your business more control.',
    capabilities: [
      'business management systems',
      'crm and erp solutions',
      'inventory management',
      'pos systems',
      'workflow automation',
    ],
  },
  {
    id: 'saas-dev',
    number: '04',
    title: 'saas product development',
    description:
      'turn product ideas into scalable subscription-based platforms with thoughtful architecture and reliable functionality.',
    capabilities: [
      'multi-tenant applications',
      'authentication and authorization',
      'subscription workflows',
      'analytics dashboards',
      'scalable backend architecture',
    ],
  },
  {
    id: 'ui-ux',
    number: '05',
    title: 'ui/ux design',
    description:
      'clear, intuitive interfaces that make complex products easier to understand and enjoyable to use.',
    capabilities: [
      'product strategy',
      'wireframes',
      'interactive prototypes',
      'design systems',
      'responsive interface design',
    ],
  },
  {
    id: 'ai-integrations',
    number: '06',
    title: 'ai and integrations',
    description:
      'connect systems, automate repetitive tasks, and introduce intelligent features where they create real value.',
    capabilities: [
      'api integrations',
      'ai-powered workflows',
      'third-party services',
      'reporting automation',
      'data processing',
    ],
  },
]
