import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2, ShieldCheck, Navigation, Clock, Building2 } from 'lucide-react';
import { regionsCovered, companyData } from '../data/cleaningData';
import { SparkleStar, MiniSparkle, BubblesIcon, StarBurst, DotCluster } from './SparkleIcons';

export default function CoverageAreas() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Graphic Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cov-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cov-dot-grid)" />
      </svg>

      {/* Floating Sparkle Stars & Cleaning Graphics in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-14 left-10 sm:left-20 w-6 h-6 text-[#C90C12]/25" />
        <SparkleStar className="absolute top-20 right-12 sm:right-24 w-7 h-7 text-slate-400/50" />
        <MiniSparkle className="absolute top-36 left-1/3 w-4 h-4 text-emerald-600/40" />
        <BubblesIcon className="absolute bottom-16 left-8 sm:left-14 w-8 h-8 text-sky-400/35" />
        <StarBurst className="absolute bottom-20 right-10 sm:right-20 w-6 h-6 text-amber-500/30" />
        <DotCluster className="absolute top-1/2 right-6 w-8 h-8 text-slate-300/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
            <span>EINSATZGEBIET KANTON ZÜRICH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162039] font-display tracking-tight">
            Ihre Reinigungsfirma für <span className="font-italic-accent text-[#C90C12]">Zürich &amp; Winterthur</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Wir konzentrieren unsere Schweizer Reinigungsteams vollumfänglich auf Zürich und Winterthur. Das garantiert kurze Anfahrtswege, Pünktlichkeit und faire Pauschalpreise ohne versteckte Anfahrtszuschläge.
          </p>
        </div>

        {/* Symmetric 2-Card Layout: Zürich & Winterthur */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Zürich */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/90 flex flex-col justify-between hover:border-red-200 transition-all hover:-translate-y-1.5 duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C90C12] flex items-center justify-center font-bold shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#162039] font-display">
                      Zürich
                    </h3>
                    <div className="text-xs text-slate-500 font-sans">
                      Hauptsitz: {companyData.address}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-display">
                  Hauptsitz
                </span>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Vollständige Abdeckung aller Zürcher Stadtkreise: Zürich-Nord, Oerlikon, Seebach, Schwamendingen, Altstetten, Wiedikon, Enge und Seefeld.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600 font-sans">
                  <div className="font-bold text-[#162039]">Postleitzahlen:</div>
                  <div className="text-slate-500 font-mono text-[11px]">8001 bis 8057 (inkl. Zürich-Nord &amp; Seebach)</div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-700 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Keine Anfahrtskosten im gesamten Stadtgebiet Zürich</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kostenlose Vorabnahme &amp; persönliche Begleitung</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span className="text-slate-500">Reaktionszeit:</span>
              <span className="font-extrabold text-[#C90C12] font-display">Innert 24 Stunden vor Ort</span>
            </div>
          </div>

          {/* Card 2: Winterthur */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/90 flex flex-col justify-between hover:border-red-200 transition-all hover:-translate-y-1.5 duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#162039] flex items-center justify-center font-bold shrink-0">
                    <Navigation className="w-6 h-6 text-[#C90C12]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#162039] font-display">
                      Winterthur
                    </h3>
                    <div className="text-xs text-slate-500 font-sans">
                      Regionaler Stützpunkt Winterthur
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-md bg-blue-50 text-[#162039] border border-blue-200 font-display">
                  Stützpunkt
                </span>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Eigene Reinigungsteams für Winterthur: Altstadt, Töss, Seen, Oberwinterthur, Wülflingen, Mattenbach und Veltheim.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600 font-sans">
                  <div className="font-bold text-[#162039]">Postleitzahlen:</div>
                  <div className="text-slate-500 font-mono text-[11px]">8400 bis 8409 (Winterthur und alle Stadtkreise)</div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-700 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Keine Anfahrtskosten im gesamten Stadtgebiet Winterthur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% gesetzliche Abnahmegarantie inklusive</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span className="text-slate-500">Reaktionszeit:</span>
              <span className="font-extrabold text-[#C90C12] font-display">Innert 24 Stunden vor Ort</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
