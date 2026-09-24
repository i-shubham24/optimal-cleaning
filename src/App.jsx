import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CleanoraHero from './components/CleanoraHero';
import QuickQuoteBar from './components/QuickQuoteBar';
import AboutSplit from './components/AboutSplit';
import ServicesCarousel from './components/ServicesCarousel';
import CleanoraProcessPod from './components/CleanoraProcessPod';
import CostCalculator from './components/CostCalculator';
import PricingPlans from './components/PricingPlans';
import CleanoraTestimonials from './components/CleanoraTestimonials';
import CoverageAreas from './components/CoverageAreas';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import PremierFooter from './components/PremierFooter';
import QuoteModal from './components/QuoteModal';
import { Phone, MessageSquareQuote } from 'lucide-react';
import { companyData } from './data/cleaningData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [calculatorPrefill, setCalculatorPrefill] = useState(null);
  const [modalPrefill, setModalPrefill] = useState(null);

  // When quick quote bar is used
  const handleQuickConfig = (config) => {
    setCalculatorPrefill(config);
  };

  // When a service card is clicked for quote
  const handleSelectServiceForQuote = (service) => {
    setModalPrefill({
      service: service.title,
      estimatedPrice: service.priceStartingAt,
    });
    setIsQuoteModalOpen(true);
  };

  // When price calculator outputs a quote configuration
  const handleOpenQuoteWithConfig = (config) => {
    setModalPrefill(config);
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
        
        {/* Section 1: Cleanora & Premier Cleaning Hero */}
        <CleanoraHero 
          onOpenQuoteModal={() => {
            setModalPrefill(null);
            setIsQuoteModalOpen(true);
          }}
          onOpenCalculator={() => {
            const target = document.getElementById('preisrechner');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Premier Cleaning Quick Booking Pod */}
        <QuickQuoteBar onSelectQuickConfig={handleQuickConfig} />

        {/* Section 3: Cleanora About Us / Quality Meets True Care + 4-Metric Bar */}
        <AboutSplit onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 4: Cleanora Services Carousel with < and > Circle Arrows */}
        <ServicesCarousel onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Section 5: Structured Process Pod in Deep Swiss Navy */}
        <CleanoraProcessPod onOpenQuoteModal={() => {
          setModalPrefill(null);
          setIsQuoteModalOpen(true);
        }} />

        {/* Section 7: Live Interactive Swiss Cost Estimator (CHF) */}
        <CostCalculator 
          initialConfig={calculatorPrefill} 
          onOpenQuoteWithConfig={handleOpenQuoteWithConfig} 
        />

        {/* Section 8: ProCleaning & Premier Cleaning 3-Tier Pricing Matrix */}
        <PricingPlans onSelectPlan={handleSelectPlan} />

        {/* Section 10: Cleanora "Stories From Happy Homes" Photo-Testimonial Grid */}
        <CleanoraTestimonials />

        {/* Section 11: Zürich & Winterthur Coverage Map Chips */}
        <CoverageAreas />

        {/* Section 12: ProCleaning Interactive FAQ Accordion */}
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

      {/* Floating Action Quick Button - Positioned at Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 pointer-events-auto">
        <a
          href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-2xl bg-[#162039] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform border border-slate-700 sm:hidden"
          aria-label="Jetzt anrufen"
        >
          <Phone className="w-5 h-5 text-[#C90C12]" />
        </a>

        <button
          onClick={() => {
            setModalPrefill(null);
            setIsQuoteModalOpen(true);
          }}
          className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#C90C12] hover:bg-[#9E0A0F] text-white font-black text-xs font-display uppercase tracking-wider shadow-2xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-red-500/40"
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span className="hidden sm:inline">Offerte in 2 Min.</span>
          <span className="sm:hidden">Offerte</span>
        </button>
      </div>

    </div>
  );
}
