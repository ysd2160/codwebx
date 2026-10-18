# Securify — Premium Cinematic Software Development Agency Website

A complete, premium, cinematic digital product studio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ⚡ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (smooth staggered entrance, scroll reveals, and accessible accordions)
- **Lucide React** (minimalist monochrome interface icons)
- **Google Fonts** (Readex Pro: weights 300, 400, 500, 600, 700)

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

## 🎨 Global Design System

- **Monochrome Palette**:
  - Pure Black (`#000000`)
  - Near-Black (`#080808`)
  - Dark Charcoal (`#111111`)
  - Neutral Gray (`#777777`)
  - Light Gray (`#BDBDBD`)
  - Pure White (`#FFFFFF`)
  - Translucent overlays (`white/5`, `white/10`, `white/20`, `white/40`)
- **Editorial Typography**: Readex Pro, strictly lowercase copy across all headings, navigation, buttons, statistics, and body text.
- **Cinematic Motion**: High-contrast video backgrounds, staggered entrance typography (`we`, `build`, `digital.`), floating pill-shaped navigation, and accessible accordions.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Custom geometric brand mark
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Floating pill navbar with mobile drawer
│   │   ├── Hero.tsx            # Fullscreen cinematic video hero with staggered typography
│   │   ├── IntroSection.tsx    # Studio philosophy & beliefs
│   │   ├── ServicesSection.tsx # 6 core service offerings with interactive states
│   │   ├── PortfolioSection.tsx# Asymmetric case study showcases
│   │   ├── CaseStudyModal.tsx  # Detailed concept case study modal
│   │   ├── BenefitsSection.tsx # Why Choose Us: 4 core principles
│   │   ├── TechStackSection.tsx# Categorized technologies
│   │   ├── ProcessSection.tsx  # 5-stage milestone development timeline
│   │   ├── TestimonialsSection.tsx # Client feedback slider with honest disclosures
│   │   ├── AboutSection.tsx    # Studio ethos & atmospheric visual
│   │   ├── EngagementSection.tsx # 3 engagement models
│   │   ├── FAQSection.tsx      # Accessible keyboard-navigable accordion
│   │   ├── ContactSection.tsx  # Project enquiry form with validation & states
│   │   ├── FinalCTAStrip.tsx   # Bold typographic statement
│   │   ├── Footer.tsx          # Multi-column editorial footer
│   │   └── LegalModal.tsx      # Privacy policy & terms dialogs
│   ├── data/
│   │   ├── services.ts         # Typed service offerings
│   │   ├── projects.ts         # Typed case study concepts
│   │   ├── whyUs.ts            # Studio principles
│   │   ├── techStack.ts        # Categorized technologies
│   │   ├── process.ts          # 5 developmental milestones
│   │   ├── testimonials.ts     # Testimonial placeholders
│   │   ├── faqs.ts             # 6 client questions & answers
│   │   └── engagement.ts       # 3 partnership structures
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root application composition & state
│   ├── main.tsx                # React entrypoint
│   └── index.css               # Global theme & typography rules
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔒 Form Backend Integration

The project enquiry form in `ContactSection.tsx` includes complete client-side validation, accessible error notifications, loading spinners, and success confirmation views. To route form submissions to a live API backend:

1. Create a `.env` file with `VITE_API_CONTACT_ENDPOINT=https://your-api.com/enquiry`.
2. Connect the `handleSubmit` method in `src/components/ContactSection.tsx` to `fetch(import.meta.env.VITE_API_CONTACT_ENDPOINT, { method: 'POST', body: JSON.stringify(formData) })`.
