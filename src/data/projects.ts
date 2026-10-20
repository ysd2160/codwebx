import { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'good-vibes-cafe',
    number: '01',
    name: 'Good Vibes Cafe',
    category: 'WEBSITE DEVELOPMENT / POS IMPLEMENTATION',
    title: 'A cafe-focused digital experience & POS solution',
    description:
      'A cafe-focused digital experience combining a business website with a POS solution to support the customer-facing presence and day-to-day operations.',
    challenge:
      'The cafe required a fast counter-billing workflow during rush hours, reliable thermal printing on compact 58mm Bluetooth hardware, quick cash return calculations, split payment options (Cash + UPI), and separate order handling for dine-in and takeaway.',
    solution:
      'We engineered a lightweight, touch-optimized management system with thermal receipt printing, split payment auto-calculation, sequential collision-safe bill numbering (GVC-0001), and a responsive menu and ordering interface.',
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    outcome:
      'Active in production daily service in Ahmedabad, facilitating fast cashier orders, thermal receipt printing, and real-time sales visibility.',
    type: 'client_delivery',
    badge: 'Delivered Client Project',
    image: '/assets/images/modern-cafe-menu1.png',
    aspectRatio: 'wide',
    features: [
      'Bluetooth thermal receipt printing (58mm)',
      'Cash return calculator & split payment auto-fill',
      'Dine-in / Takeaway order management with table numbers',
      'Sequential collision-safe bill numbering (GVC-0001)',
      'Made-to-order stock tracking toggle',
    ],
    ctaText: 'View Project Details',
    ctaHref: '#contact',
  },
  {
    id: 'codwebx-pos',
    number: '02',
    name: 'CodWebX POS',
    category: 'IN-HOUSE PRODUCT',
    title: 'One product. Better operational control.',
    description:
      'Our own POS product brings important sales and business workflows into a centralized interface.',
    challenge:
      'Independent retailers, cafes, and small businesses often rely on disconnected billing machines or expensive per-register subscriptions that complicate basic inventory, staff roles, and daily accounting.',
    solution:
      'We are building an all-in-one modern POS platform with quick item search, barcode and QR code product scanning, instant client-side PDF invoices, visual telemetry analytics (Recharts), and granular staff permission management.',
    techStack: [
      'React 19',
      'Redux Toolkit',
      'Tailwind CSS',
      'Recharts',
      'jsPDF',
      'Barcode / QR Scanner',
    ],
    outcome:
      'Under active development with working core cashier terminal, inventory management, barcode scanning, custom receipt printing, and sales reporting.',
    type: 'internal_product',
    badge: 'Proprietary Product · In Active Development',
    image: '/assets/images/codewebx-full.png',
    aspectRatio: 'tall',
    features: [
      'Centralized product & multi-category inventory control',
      'Instant PDF invoice generation & receipt printing',
      'Visual sales telemetry & analytics charts',
      'Barcode & QR code product scanning',
      'Role-based staff access permissions',
    ],
    ctaText: 'Explore the Product',
    ctaHref: '#products',
  },
]
