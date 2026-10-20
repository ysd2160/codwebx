import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { IntroSection } from './components/IntroSection'
import { ServicesSection } from './components/ServicesSection'
import { PosProductSection } from './components/PosProductSection'
import { PortfolioSection } from './components/PortfolioSection'
import { BenefitsSection } from './components/BenefitsSection'
import { TechStackSection } from './components/TechStackSection'
import { ProcessSection } from './components/ProcessSection'
import { RealProofSection } from './components/RealProofSection'
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

  const handleScrollToContact = (context?: string) => {
    if (context) {
      setSelectedModel(context)
    }
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
    <div className="min-h-screen bg-[hsl(0_0%_7%)] text-white selection:bg-[hsl(119_99%_46%)] selection:text-black font-sora">
      {/* Floating Pill-shaped Navigation */}
      <Navbar onOpenContact={() => handleScrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Homepage Hero with 3D/Tech Spline & Fluid Clamp Typography */}
        <HeroSection
          onExploreWork={handleScrollToWork}
          onStartProject={() => handleScrollToContact()}
        />

        {/* 02. Introductory Philosophy Statement */}
        <IntroSection />

        {/* 03. Services: What We Build */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 04. Dedicated POS Product Showcase (Anchor #pos & #products) */}
        <PosProductSection
          onDiscussPos={() =>
            handleScrollToContact('inquiry regarding CodWebX POS product')
          }
        />

        {/* 05. Featured Work & Selected Projects */}
        <PortfolioSection onStartProject={handleScrollToContact} />

        {/* 06. Why CodWebX / 4 Principles */}
        <BenefitsSection />

        {/* 07. Technology Stack */}
        <TechStackSection />

        {/* 08. 5-Stage Delivery Process */}
        <ProcessSection />

        {/* 09. Verified Social Proof & Real Business Deliveries */}
        <RealProofSection onStartProject={handleScrollToContact} />

        {/* 10. About Us / Ahmedabad Studio Ethos */}
        <AboutSection />

        {/* 11. Engagement Models */}
        <EngagementSection onSelectModel={handleSelectModel} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Project Enquiry & Contact Section */}
        <ContactSection
          initialService={selectedService}
          initialModel={selectedModel}
        />

        {/* 14. Final Typographic Statement */}
        <FinalCTAStrip onStartConversation={() => handleScrollToContact()} />
      </main>

      {/* 15. Global Editorial Footer */}
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
