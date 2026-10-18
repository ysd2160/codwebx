import { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'commerce-reimagined',
    number: '01',
    name: 'commerce, reimagined',
    category: 'e-commerce platform',
    description:
      'a streamlined shopping experience with a custom storefront, inventory workflows, and a conversion-focused interface.',
    challenge:
      'legacy checkout bottlenecks and fragmented inventory synchronization across multi-channel warehouses.',
    solution:
      'engineered a headless commerce platform with instant catalog queries, optimistic UI states, and a sub-second checkout experience.',
    techStack: ['react', 'node.js', 'postgresql', 'tailwind css', 'stripe'],
    outcome: 'concept benchmark: modeled 42% reduction in checkout drop-off and instant inventory parity.',
    isConcept: true,
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
  },
  {
    id: 'operations-simplified',
    number: '02',
    name: 'operations, simplified',
    category: 'business management software',
    description:
      'a centralized dashboard that brings orders, products, reporting, and daily operations into one place.',
    challenge:
      'multiple disconnected third-party tools causing reconciliation errors and heavy manual spreadsheet tracking.',
    solution:
      'unified all order fulfillment, inventory thresholds, and operational telemetry into a single responsive control plane.',
    techStack: ['next.js', 'typescript', 'express', 'postgresql', 'redis'],
    outcome: 'concept benchmark: projected 60% reduction in daily administrative reconciliation effort.',
    isConcept: true,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
  },
  {
    id: 'connect-on-the-go',
    number: '03',
    name: 'connect on the go',
    category: 'mobile application',
    description:
      'a customer-focused mobile experience designed around convenience, speed, and seamless interactions.',
    challenge:
      'sluggish interactions, high battery drain, and poor performance under intermittent connectivity.',
    solution:
      'developed a native-feel cross-platform mobile client with background caching, biometric authentication, and haptic feedback.',
    techStack: ['react native', 'typescript', 'node.js', 'mongodb', 'rest apis'],
    outcome: 'concept benchmark: sub-100ms response targets with resilient offline synchronization.',
    isConcept: true,
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
  },
  {
    id: 'intelligence-at-scale',
    number: '04',
    name: 'intelligence at scale',
    category: 'saas platform',
    description:
      'a scalable digital platform with user management, analytics, and integrated business workflows.',
    challenge:
      'multi-tenant scaling bottlenecks, disparate authorization models, and slow reporting aggregates.',
    solution:
      'architected row-level secure multitenancy with event-driven background workers and automated report generation.',
    techStack: ['react', 'python', 'fastapi', 'postgresql', 'cloud services'],
    outcome: 'concept benchmark: high-throughput architecture verified for horizontal scaling.',
    isConcept: true,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
  },
]
