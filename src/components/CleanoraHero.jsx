import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function CleanoraHero({ onOpenQuoteModal, onOpenCalculator }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#FAF8F5] overflow-hidden">
      
      {/* Background Architectural Graphic Elements (Cleanifty & Sparkle Touch style) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
      </svg>

      {/* Decorative architectural organic shapes */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-red-100/40 via-amber-50/30 to-transparent blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-slate-200/50 via-slate-100/30 to-transparent blur-3xl pointer-events-none" 
      />

      {/* Subtle luxury brand watermark in background */}
      <div 
        aria-hidden="true" 
        className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center z-0"
      >
        <span className="font-serif-brand font-bold text-[18vw] tracking-tight text-slate-200/35 block leading-none">
          Optimal
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Balanced Architectural Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clear Value Proposition & Actions (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Plain Text Eyebrow: No lines, no pills */}
            <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
              REINIGUNGSFIRMA FÜR ZÜRICH &amp; WINTERTHUR (SEIT ÜBER 20 JAHREN)
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#162039] tracking-tight leading-[1.08] uppercase">
              Erstklassige <span className="font-italic-accent text-[#C90C12] lowercase font-normal">sauberkeit</span> für Wohnung &amp; Büro
            </h1>

            {/* Subtext with precise Swiss positioning */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
              Professionelle Umzugsreinigung mit 100% Abnahmegarantie, Unterhaltsreinigung und Büroreinigung im gesamten Kanton Zürich. Speditiv, verlässlich und zu transparenten Fixpreisen ohne versteckte Kosten.
            </p>

            {/* Aligned Action Buttons (Symmetrical, no pills, rounded-xl) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenQuoteModal()}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer font-display uppercase tracking-wider"
              >
                <span>Kostenlose Offerte anfordern</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold text-[#162039] bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all hover:scale-[1.02] active:scale-95 cursor-pointer font-display"
              >
                <Calculator className="w-4 h-4 text-[#C90C12]" />
                <span>Preis online berechnen</span>
              </button>
            </div>

            {/* 3 Horizontal Swiss Guarantees */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">100% Abnahmegarantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">CHF 5 Mio. Haftpflicht</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Keine Vorabzahlung</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Clean Integrated Floating Badges (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-tr-[5rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/4.8]">
              <img 
                src="/images/hero_cleaner.jpg" 
                alt="Optimal Reinigung Fachkraft in Zürich" 
                className="w-full h-full object-cover object-top filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Left Badge: Eco Product Promise */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 flex items-center gap-2.5">
                <span className="text-base">🌿</span>
                <div>
                  <div className="text-xs font-black text-[#162039] font-display">100% Bio-Reiniger</div>
                  <div className="text-[10px] text-slate-500 font-sans">Schonend für Beläge &amp; Umwelt</div>
                </div>
              </div>

              {/* Floating Bottom Left Badge: Certified Rating */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#162039] font-display">4.9 / 5.0 Sterne</div>
                    <div className="text-[10px] text-slate-500 font-sans">Über 1'200 geprüfte Kundenstimmen</div>
                  </div>
                </div>
                <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-display">
                  Verifiziert
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Docked High-Contrast Dark Navy Metrics Ribbon (Strictly matching Sparkle Touch & Cleanifty) */}
        <div className="mt-14 sm:mt-20 rounded-2xl bg-[#162039] text-white p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center sm:text-left">
            
            <div className="sm:pr-6 pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                20+ Jahre
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1 font-display">
                Erfahrung im Kanton Zürich
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Gegründet und geführt in Zürich
              </div>
            </div>

            <div className="sm:px-6 pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                100%
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1 font-display">
                Gesetzliche Abnahmegarantie
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Mit persönlicher Übergabebegleitung
              </div>
            </div>

            <div className="sm:px-6 pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                CHF 5 Mio.
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1 font-display">
                Schweizer Haftpflichtdeckung
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Versichert bei Mobiliar und Zurich
              </div>
            </div>

            <div className="sm:pl-6 pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                1'200+
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1 font-display">
                Zufriedene Schweizer Kunden
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Privathaushalte und Liegenschaften
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
