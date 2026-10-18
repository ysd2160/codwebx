import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroSection } from './components/IntroSection'
import { ServicesSection } from './components/ServicesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { BenefitsSection } from './components/BenefitsSection'
import { TechStackSection } from './components/TechStackSection'
import { ProcessSection } from './components/ProcessSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { AboutSection } from './components/AboutSection'
import { EngagementSection } from './components/EngagementSection'
import { FAQSection } from './components/FAQSection'
import { ContactSection } from './components/ContactSection'
import { FinalCTAStrip } from './components/FinalCTAStrip'
import { Footer } from './components/Footer'
import { LegalModal } from './components/LegalModal'

export default function App(): React.JSX.Element {
  const [selectedService, setSelectedService] = useState<string | undefined>()
  const [selectedModel, setSelectedModel] = useState<string | undefined>()
  const [legalModalType, setLegalModalType] = useState<
    'privacy' | 'terms' | null
  >(null)

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName)
  }

  const handleSelectModel = (modelTitle: string) => {
    setSelectedModel(modelTitle)
  }

  const handleScrollToContact = () => {
    const contactEl = document.querySelector('#contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToWork = () => {
    const workEl = document.querySelector('#work')
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Floating Pill-shaped Navbar */}
      <Navbar onOpenContact={handleScrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Fullscreen Cinematic Hero Section */}
        <Hero
          onExploreWork={handleScrollToWork}
          onStartProject={handleScrollToContact}
        />

        {/* 02. Introductory Statement / Philosophy */}
        <IntroSection />

        {/* 03. Services: What We Build */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 04. Selected Projects / Portfolio */}
        <PortfolioSection onStartProject={handleScrollToContact} />

        {/* 05. Why Choose Us / Our Difference */}
        <BenefitsSection />

        {/* 06. Technology Stack */}
        <TechStackSection />

        {/* 07. Development Process Timeline */}
        <ProcessSection />

        {/* 08. Client Testimonials */}
        <TestimonialsSection />

        {/* 09. About Us: Studio Ethos */}
        <AboutSection />

        {/* 10. Engagement Models */}
        <EngagementSection onSelectModel={handleSelectModel} />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Project Enquiry Form / Contact */}
        <ContactSection
          initialService={selectedService}
          initialModel={selectedModel}
        />

        {/* 13. Final Typographic Statement */}
        <FinalCTAStrip onStartConversation={handleScrollToContact} />
      </main>

      {/* 14. Global Editorial Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onSelectService={handleSelectService}
      />

      {/* Accessible Legal Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  )
}
