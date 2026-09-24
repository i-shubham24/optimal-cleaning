import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/cleaningData';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServicesCarousel({ onSelectServiceForQuote }) {
  const [startIndex, setStartIndex] = useState(0);
  const [activeModalService, setActiveModalService] = useState(null);

  const visibleCards = 3;
  const maxIndex = servicesData.length - visibleCards;

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleServices = servicesData.slice(startIndex, startIndex + visibleCards);
  if (visibleServices.length < visibleCards) {
    visibleServices.push(...servicesData.slice(0, visibleCards - visibleServices.length));
  }

  return (
    <section id="dienstleistungen" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Architectural Graphic Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="svc-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-dot-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Navigation Arrows: NO pill container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
              UNSERE SPEZIALISIERTEN REINIGUNGSDIENSTE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#162039] tracking-tight">
              Frische beginnt mit <span className="font-italic-accent text-[#C90C12]">Optimal</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Von wöchentlicher Pflege bis zur bezugsfertigen Abgabe: Unsere geschulten Schweizer Teams bringen jeden Raum in Zürich &amp; Winterthur zum Strahlen.
            </p>
          </div>

          {/* Squircle Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-[#162039] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Vorherige Dienstleistungen"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-[#162039] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Nächste Dienstleistungen"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleServices.map((service, idx) => (
            <motion.div
              key={service.id + idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Image Preview with Service Button overlay */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Swiss Style Service Button overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <button
                      onClick={() => onSelectServiceForQuote(service)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all cursor-pointer font-display uppercase tracking-wider"
                    >
                      <span>Offerte wählen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-bold text-white bg-[#162039]/90 px-2.5 py-1 rounded-lg backdrop-blur-xs font-display border border-slate-700/50">
                      {service.priceStartingAt}
                    </span>
                  </div>
                </div>

                {/* Card Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#162039] tracking-tight group-hover:text-[#C90C12] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Bottom Feature Snippets */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-slate-600 hover:text-[#C90C12] underline underline-offset-4 cursor-pointer font-display"
                >
                  Details ansehen
                </button>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 font-display">
                  {service.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal on click */}
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
