import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { servicesData } from '../data/cleaningData';
import ServiceDetailModal from './ServiceDetailModal';
import { SparkleStar, MiniSparkle } from './SparkleIcons';
import PriceText from './PriceText';
import CleaningHandSticker from './CleaningHandSticker';

export default function ServicesCarousel({ onSelectServiceForQuote }) {
  // Available services for the 4-card stack + default active featured service
  const serviceKeys = ['umzugsreinigung', 'bueroreinigung', 'fensterreinigung', 'unterhaltsreinigung', 'baureinigung'];
  const allServices = serviceKeys
    .map(id => servicesData.find(s => s.id === id))
    .filter(Boolean);

  const [activeServiceId, setActiveServiceId] = useState('umzugsreinigung');
  const [activeModalService, setActiveModalService] = useState(null);

  const activeService = allServices.find(s => s.id === activeServiceId) || allServices[0];
  const sideServices = allServices.filter(s => s.id !== activeServiceId).slice(0, 4);

  // Rotation tilts matching Dribbble template exactly
  const tilts = ['rotate-[-2.5deg]', 'rotate-[2deg]', 'rotate-[-1.5deg]', 'rotate-[2.5deg]'];

  return (
    <section id="dienstleistungen" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Decorative Sparkle Stars matching reference */}
      <SparkleStar className="absolute top-12 right-20 w-7 h-7 text-slate-300 pointer-events-none" />
      <SparkleStar className="absolute bottom-16 left-12 w-6 h-6 text-[#C90C12]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Dribbble template with Blue + Cursive Red */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-[#162039] leading-tight">
              <span className="font-extrabold text-[#162039]">Unsere beliebtesten </span>
              <span className="font-italic-accent text-[#C90C12]">Reinigungsdienste</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-center">
            <div className="hidden sm:block shrink-0">
              <CleaningHandSticker className="w-16 h-16 lg:w-20 lg:h-20" />
            </div>
            <button
              onClick={() => onSelectServiceForQuote(activeService)}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#162039] hover:bg-[#C90C12] text-white text-xs sm:text-sm font-bold font-display tracking-tight transition-all duration-300 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5 active:scale-98 cursor-pointer"
            >
              <span>Offerte anfordern</span>
              <span className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white group-hover:text-[#C90C12] flex items-center justify-center transition-all duration-300 shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
            <MiniSparkle className="w-4 h-4 text-emerald-500 shrink-0" />
          </div>
        </div>

        {/* Main 2-Column Split matching Dribbble template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Large Primary Feature Card (Dribbble Left Hero) */}
          <div className="lg:col-span-8 flex flex-col space-y-5">
            
            {/* Big Rounded Photo */}
            <div className="relative h-80 sm:h-[420px] lg:h-[480px] w-full rounded-3xl sm:rounded-[36px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#C90C12] text-white shadow-md font-display">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{activeService.badge}</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#162039] bg-white/95 backdrop-blur-md shadow-md font-display border border-slate-200">
                  <PriceText price={activeService.priceStartingAt} />
                </span>
              </div>

              {/* Quick Feature Overlay on Bottom of Photo */}
              <div className="absolute bottom-4 left-5 right-5 hidden sm:flex items-center gap-3">
                <span className="text-xs font-semibold text-white/95 bg-[#162039]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
                  100% Abnahmegarantie &bull; Schweizer Stammpersonal
                </span>
              </div>
            </div>

            {/* Clean Info Row Directly Under Photo (Matching Dribbble layout) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#162039] tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1 max-w-xl leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                <button
                  onClick={() => setActiveModalService(activeService)}
                  className="text-xs font-bold text-slate-600 hover:text-[#C90C12] underline underline-offset-4 cursor-pointer font-display"
                >
                  Details ansehen
                </button>
                <button
                  onClick={() => onSelectServiceForQuote(activeService)}
                  className="w-12 h-12 rounded-2xl border border-slate-300 hover:border-[#C90C12] hover:bg-[#C90C12] hover:text-white text-[#162039] flex items-center justify-center transition-all duration-300 shadow-xs active:scale-95 cursor-pointer"
                  aria-label={`${activeService.title} anfragen`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>


          {/* RIGHT: 4 Floating Angled Stacked Photo Cards (Dribbble Right Stack) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 pt-1">
            {sideServices.map((svc, idx) => {
              const tiltClass = tilts[idx % tilts.length];
              return (
                <motion.div
                  key={svc.id}
                  whileHover={{ scale: 1.03, rotate: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveServiceId(svc.id)}
                  className={`h-24 sm:h-28 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-md border-2 border-white relative group cursor-pointer transition-all duration-300 ${tiltClass} hover:shadow-xl hover:z-20`}
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent group-hover:from-slate-950/90 transition-colors" />

                  {/* Service Title & Price Overlay */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold font-display leading-tight">
                        {svc.title}
                      </div>
                      <div className="text-[10px] text-slate-300 font-sans">
                        <PriceText price={svc.priceStartingAt} />
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#C90C12] text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBookService={(svc) => {
            setActiveModalService(null);
            onSelectServiceForQuote(svc);
          }}
        />
      )}
    </section>
  );
}
