import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CleanoraHero from './components/CleanoraHero';
import AboutSplit from './components/AboutSplit';
import SteppedDedication from './components/SteppedDedication';
import CleanAndBright from './components/CleanAndBright';
import ServicesCarousel from './components/ServicesCarousel';
import CleanoraProcessPod from './components/CleanoraProcessPod';
import PricingPlans from './components/PricingPlans';
import CleanoraTestimonials from './components/CleanoraTestimonials';
import CoverageAreas from './components/CoverageAreas';
import PromoBanner from './components/PromoBanner';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import PremierFooter from './components/PremierFooter';
import QuoteModal from './components/QuoteModal';
import { Phone, MessageSquareQuote } from 'lucide-react';
import { companyData } from './data/cleaningData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState(null);

  // When a service card is clicked for quote
  const handleSelectServiceForQuote = (service) => {
    setModalPrefill({
      service: service.title,
      estimatedPrice: service.priceStartingAt,
    });
    setIsQuoteModalOpen(true);
  };

  // When pricing plan button is clicked
  const handleSelectPlan = (planConfig) => {
    setModalPrefill({
      service: planConfig.plan,
      estimatedPrice: planConfig.estimatedPrice,
    });
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#FFFFFF] selection:bg-[#C90C12] selection:text-white">
      
      {/* Floating Capsule Header */}
      <Navbar onOpenQuoteModal={() => {
        setModalPrefill(null);
        setIsQuoteModalOpen(true);
      }} />

      {/* Main Content Sections faithfully matching the references */}
      <main className="flex-1">
        
        {/* Section 1: ProCleaning Blue Theme Hero (100% in one window) */}
        <CleanoraHero 
          onOpenQuoteModal={() => {
            setModalPrefill(null);
            setIsQuoteModalOpen(true);
          }}
          onOpenPricing={() => {
            const target = document.getElementById('preise');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Cleanora About Us / Welcome To Pro-Cleaning */}
        <AboutSplit onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 4: Stepped Metric Dedication Section (Matching reference media_1790393230007.png) */}
        <SteppedDedication />

        {/* Section 5: We Make Places Clean & Bright (Sparkle Touch top-right reference) */}
        <CleanAndBright onOpenBooking={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 6: Popular Cleaning Services (Sparkle Touch middle-right reference) */}
        <ServicesCarousel onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Section 7: Structured Process Pod in Deep Swiss Navy */}
        <CleanoraProcessPod onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 8: ProCleaning & Premier Cleaning 3-Tier Pricing Matrix */}
        <PricingPlans onSelectPlan={handleSelectPlan} />

        {/* Section 10: Client Success Stories and Reviews (Sparkle Touch lower-right reference) */}
        <CleanoraTestimonials />

        {/* Section 11: Zürich & Winterthur Coverage Map Chips */}
        <CoverageAreas />

        {/* Section 12: Panoramic Sparkle Floor Promotional Banner (Sparkle Touch bottom-right reference) */}
        <PromoBanner onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 13: ProCleaning Interactive FAQ Accordion */}
        <FAQSection onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 13: ProCleaning "Keep In Touch" Contact & Inquiry Form */}
        <ContactSection />

      </main>

      {/* Section 14: Premier Cleaning Epic Footer with Giant Cutout Logo & Supplies */}
      <PremierFooter onOpenQuoteModal={() => {
        setModalPrefill(null);
        setIsQuoteModalOpen(true);
      }} />

      {/* Global Interactive Quote Booking Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        prefillData={modalPrefill} 
      />

    </div>
  );
}
