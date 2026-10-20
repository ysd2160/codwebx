# CodWebX — IT Company & Digital Engineering Studio

Official website for **CodWebX**, a modern IT company and digital product development studio based in Ahmedabad, Gujarat, India. CodWebX engineers high-performance websites, custom business software, and its proprietary point-of-sale platform (**CodWebX POS**) for startups, small businesses, cafes, and growing companies.

---

## ⚡ Tech Stack & Design System

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (tasteful reveal animations, staggered entrance, and accessible accordions)
- **Lucide React** (clean minimalist interface icons)
- **Google Fonts** (**Sora**: weights 300, 400, 500, 600, 700, 800)
- **Spline 3D & Vector Geometry** (`@splinetool/react-spline` with SVG isometric fallback)
- **Visual Design**: Dark-only theme (`hsl(0 0% 7%)` to `hsl(0 0% 10%)`) with electric vivid green accents (`hsl(119 99% 46%)` / `#16ea1a`) and subtle glow effects.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🏢 Business Identity & Contact Details

- **Company Name**: CodWebX
- **Business**: IT Company & Digital Product Engineering Studio
- **Email**: [codwebx@gmail.com](mailto:codwebx@gmail.com)
- **Phone**: [+91 7575097762](tel:+917575097762)
- **WhatsApp**: [+91 7575097762](https://wa.me/917575097762)
- **Location**: Ahmedabad, Gujarat, India (Available for local consultations & remote worldwide client collaboration)

---

## 🛠️ Core Offerings

1. **Web Development**: Fast, responsive, conversion-focused websites and web applications built with modern frameworks and clean architecture.
2. **Software Development**: Custom business applications, admin dashboards, workflow automation tools, and internal systems that solve operational bottlenecks.
3. **CodWebX POS**: Dedicated point-of-sale platform for cafes, dining, and retail counters with 58mm/80mm thermal receipt printing, split payments, barcode/QR scanning, instant PDF invoicing, and visual sales telemetry.

---

## 🌟 Verified Projects & Products

- **Good Vibes Cafe**: Verified client delivery of a touch-optimized cafe management & POS system in Ahmedabad featuring 58mm Bluetooth thermal receipt printing, cash return calculator, split payment handling, and concurrent table order routing (`GVC-0001`).
- **CodWebX POS**: Proprietary point-of-sale product under active development built with React 19, Redux Toolkit, Recharts, jsPDF, and barcode/QR scanning.

---

## 📁 Codebase Architecture

```
├── public/
│   ├── assets/images/          # Authentic CodWebX logos and project assets
│   ├── favicon.svg             # CodWebX code brackets SVG mark
│   ├── robots.txt              # Production crawler directives
│   └── sitemap.xml             # Search engine index sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Floating pill navbar with mobile drawer
│   │   ├── HeroSection.tsx     # Hero with 3D tech background, Sora typography & CTAs
│   │   ├── TechBackground.tsx  # Spline 3D loader with graceful SVG fallback
│   │   ├── IntroSection.tsx    # Philosophy & positioning
│   │   ├── ServicesSection.tsx # 3 core service categories with unique mockups
│   │   ├── PosProductSection.tsx # Dedicated CodWebX POS showcase (#pos & #products)
│   │   ├── PortfolioSection.tsx# Selected work (Good Vibes Cafe, CodWebX POS)
│   │   ├── CaseStudyModal.tsx  # In-depth case study inspection dialog
│   │   ├── BenefitsSection.tsx # 4 engineering principles
│   │   ├── TechStackSection.tsx# Categorized technologies
│   │   ├── ProcessSection.tsx  # 5-stage milestone delivery sequence
│   │   ├── RealProofSection.tsx# Verified client delivery social proof
│   │   ├── AboutSection.tsx    # Studio ethos & Ahmedabad headquarters
│   │   ├── EngagementSection.tsx # 3 engagement models
│   │   ├── FAQSection.tsx      # Essential FAQs with animated accordion
│   │   ├── ContactSection.tsx  # Validated project enquiry form with WhatsApp
│   │   ├── FinalCTAStrip.tsx   # Bold closing statement
│   │   ├── Footer.tsx          # Multi-column editorial footer
│   │   └── LegalModal.tsx      # Privacy policy & terms of service
│   ├── data/
│   │   ├── services.ts         # Core service definitions
│   │   ├── projects.ts         # Genuine case studies & products
│   │   ├── whyUs.ts            # Studio principles
│   │   ├── techStack.ts        # Categorized technologies
│   │   ├── process.ts          # 5-stage delivery model
│   │   ├── faqs.ts             # FAQs
│   │   └── engagement.ts       # Partnership models
│   ├── types/
│   │   └── index.ts            # TypeScript data models
│   ├── App.tsx                 # Root application state & composition
│   ├── main.tsx                # React entrypoint
│   └── index.css               # Theme tokens & typography rules
├── index.html                  # SEO, Open Graph & JSON-LD metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```
