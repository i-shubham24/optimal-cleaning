import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/cleaningData';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServicesBento({ onSelectServiceForQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="dienstleistungen" className="py-20 sm:py-28 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Stack discipline per design-taste-frontend) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C90C12] bg-red-50 px-3.5 py-1.5 rounded-xl border border-red-100 inline-block font-display">
            Unsere Kernkompetenzen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E294B] tracking-tight">
            Erstklassige Reinigungsdienste für jeden Anspruch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Von der stressfreien Wohnungsübergabe mit Abnahmegarantie bis zu repräsentativen Firmenräumen in Zürich und Winterthur.
          </p>
        </div>

        {/* Bento Grid: 6 varied cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {servicesData.map((service, index) => {
            const isFeatured = index === 0; // Umzugsreinigung as prominent card
            const isNavy = index === 1; // Büroreinigung with Deep Navy luxury styling

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured 
                    ? 'lg:col-span-2 bg-gradient-to-br from-slate-900 to-[#1E294B] text-white shadow-xl min-h-[380px]'
                    : isNavy
                    ? 'bg-white border border-slate-200/90 shadow-lg hover:shadow-xl min-h-[380px]'
                    : 'bg-white border border-slate-200/80 shadow-md hover:shadow-xl min-h-[360px]'
                }`}
              >
                {/* For Featured Card (Umzugsreinigung) */}
                {isFeatured ? (
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    {/* Top tags */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#C90C12] text-white shadow-sm">
                        {service.badge}
                      </span>
                      <span className="text-xs font-bold text-white/90 bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs border border-white/20">
                        {service.priceStartingAt}
                      </span>
                    </div>

                    {/* Center details */}
                    <div className="my-6 max-w-lg space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-200">
                        <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          100% Abnahmegarantie
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Übergabebegleitung inklusive
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Kostenlose Nachreinigung
                        </span>
                      </div>
                    </div>

                    {/* Bottom action row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/15">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer"
                      >
                        Alle Leistungen anzeigen
                      </button>
                      <button
                        onClick={() => onSelectServiceForQuote(service)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#C90C12] hover:bg-[#9E0A0F] text-white shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Offerte berechnen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Standard Bento Cards */
                  <div className="flex flex-col justify-between h-full p-6 sm:p-7">
                    
                    {/* Top image preview & tag */}
                    <div>
                      <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#1E294B] shadow-xs">
                            {service.badge}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                            {service.priceStartingAt}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-extrabold text-[#1E294B] tracking-tight group-hover:text-[#C90C12] transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Features checklist preview */}
                    <div className="my-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="text-xs font-bold text-slate-600 hover:text-[#C90C12] cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onSelectServiceForQuote(service)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#1E294B] bg-slate-100 hover:bg-[#C90C12] hover:text-white transition-all cursor-pointer"
                      >
                        <span>Anfragen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Detail Inspection Modal */}
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
