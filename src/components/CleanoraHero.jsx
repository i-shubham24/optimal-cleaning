import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calculator, CheckCircle2, Calendar } from 'lucide-react';
import { SparkleStar, MiniSparkle, DotCluster } from './SparkleIcons';
import { companyData } from '../data/cleaningData';

export default function CleanoraHero({ onOpenQuoteModal, onOpenPricing }) {
  const customerAvatars = [
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      alt: 'Kunde Beat',
    },
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      alt: 'Kundin Sandra',
    },
    {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      alt: 'Kunde Marco',
    },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-16 sm:pt-20 lg:pt-20 pb-8 sm:pb-12 bg-gradient-to-b from-[#FAF8F5] via-[#FFFFFF] to-[#F8FAFC] overflow-hidden min-h-[580px] lg:min-h-[640px] lg:max-h-[780px] flex items-center"
    >
      {/* Background Graphic Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sparkle-pattern-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sparkle-pattern-grid)" />
      </svg>

      {/* Floating 4-Pointed Sparkle Stars in Background (Sparkle Touch inspired) */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-20 left-12 lg:left-24 text-slate-300">
          <SparkleStar className="w-6 h-6 text-slate-400/80 animate-pulse" />
        </div>
        <div className="absolute top-36 left-1/2 -translate-x-32 text-emerald-600/70">
          <MiniSparkle className="w-4 h-4 text-emerald-600/70" />
        </div>
        <div className="absolute top-24 right-1/4 text-[#C90C12]/50">
          <SparkleStar className="w-5 h-5 text-[#C90C12]/60" />
        </div>
        <div className="absolute bottom-28 left-16 text-slate-300">
          <DotCluster className="w-8 h-8 text-slate-300/80" />
        </div>
        <div className="absolute bottom-16 right-16 text-slate-400">
          <SparkleStar className="w-7 h-7 text-slate-400/70" />
        </div>
      </div>

      {/* Brand Color Ambient Radial Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 -right-24 w-96 h-96 rounded-full bg-[#C90C12]/5 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-28 w-96 h-96 rounded-full bg-[#162039]/5 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Value Proposition & Sparkle Touch Elements (Col 7) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Plain text eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#C90C12] font-display">
              <span className="w-2 h-2 rounded-full bg-[#C90C12] animate-pulse" />
              <span>REINIGUNGSFIRMA FÜR ZÜRICH &amp; WINTERTHUR</span>
            </div>

            {/* Headline matching Sparkle Touch & Swiss Quality */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-display font-black text-[#162039] tracking-tight leading-[1.12]">
              Erstklassige Sauberkeit, <br />
              <span className="font-italic-accent text-[#C90C12]">garantierte</span> Zufriedenheit.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl leading-relaxed font-sans">
              Erleben Sie den Unterschied mit Schweizer Sorgfalt. Professionelle Umzugsreinigung mit 100% Abnahmegarantie, Unterhalts- und Büroreinigung im gesamten Kanton Zürich &amp; Winterthur. Transparent, pünktlich und zum garantierten Fixpreis.
            </p>

            {/* Dual Action Buttons (Diversified non-repetitive copy) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#162039] hover:bg-[#C90C12] shadow-lg shadow-slate-900/15 hover:shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer font-display tracking-tight"
              >
                <span>Kostenlos anfragen</span>
                <span className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white group-hover:text-[#C90C12] flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={onOpenPricing}
                className="group flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#162039] hover:text-[#C90C12] bg-white hover:bg-slate-50 border border-slate-300/90 hover:border-red-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer font-display tracking-tight"
              >
                <ArrowUpRight className="w-4 h-4 text-[#C90C12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Preise &amp; Tarife ansehen</span>
              </button>
            </div>

            {/* Bottom-Left Feature Strip: Micro Photos + 3 Guarantees (Sparkle Touch inspired) */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/80">
              {/* Micro photos showing real results */}
              <div className="flex items-center gap-2">
                <img 
                  src="/images/kitchen_sparkle.jpg" 
                  alt="Saubere Küche" 
                  className="w-10 h-10 rounded-xl object-cover border border-white shadow-sm"
                />
                <img 
                  src="/images/wohnungsreinigung_orig.jpg" 
                  alt="Wohnungsreinigung" 
                  className="w-10 h-10 rounded-xl object-cover border border-white shadow-sm"
                />
                <div className="text-left font-display">
                  <div className="text-xs font-black text-[#162039]">100% Abnahme</div>
                  <div className="text-[10px] text-slate-500">Ohne Nachreinigungskosten</div>
                </div>
              </div>

              {/* Swiss checks */}
              <div className="flex items-center gap-4 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">CHF 5 Mio. Haftpflicht</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">Keine Vorabzahlung</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Beat + Moon Background + Concentric Rings + Pills + Red Lines (Col 5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 sm:pt-10 lg:pt-0">
            
            {/* 1. Outermost Concentric Ring Stroke */}
            <div 
              aria-hidden="true" 
              className="absolute w-[360px] sm:w-[440px] lg:w-[480px] h-[360px] sm:h-[440px] lg:h-[480px] rounded-full border border-slate-200 pointer-events-none" 
            />

            {/* 2. Inner Concentric Ring Accent in Swiss Red */}
            <div 
              aria-hidden="true" 
              className="absolute w-[320px] sm:w-[390px] lg:w-[430px] h-[320px] sm:h-[390px] lg:h-[430px] rounded-full border border-[#C90C12]/25 pointer-events-none" 
            />

            {/* 3. The "Round Moon" Background (Fully round disc in Swiss Navy with Swiss Red rim) */}
            <div 
              aria-hidden="true" 
              className="absolute w-[280px] sm:w-[340px] lg:w-[380px] h-[280px] sm:h-[340px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#162039] via-[#1B2748] to-[#253966] shadow-2xl border-2 border-[#C90C12]/35 overflow-hidden pointer-events-none"
            >
              {/* Radial brand luster inside moon */}
              <div className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#C90C12]/20 blur-2xl pointer-events-none" />
            </div>

            {/* 4. Swiss Cleaner Beat Cutout (Standing naturally with no bottom wave crop) */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Red Lines / Doodle Sparks Above Cap (///) */}
              <div className="mb-0.5 pointer-events-none flex justify-center">
                <svg 
                  className="w-8 h-6 sm:w-10 sm:h-7 text-[#C90C12]" 
                  viewBox="0 0 40 28" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                >
                  <line x1="10" y1="24" x2="5" y2="5" />
                  <line x1="20" y1="24" x2="20" y2="2" />
                  <line x1="30" y1="24" x2="35" y2="5" />
                </svg>
              </div>

              {/* Character Image */}
              <div className="relative">
                <img 
                  src="/images/swiss_cleaner_hero.png" 
                  alt="Beat, Ihr Schweizer Reinigungsexperte von Optimal Reinigung" 
                  className="h-[300px] sm:h-[380px] lg:h-[420px] xl:h-[460px] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(22,32,57,0.35)] select-none pointer-events-none"
                />

                {/* PILL COVERING THE "BEAT" CHEST BADGE (As marked by user with blue arrow) */}
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute top-[50.5%] sm:top-[51%] lg:top-[51.5%] left-[54%] sm:left-[56%] lg:left-[55%] z-20 rounded-full bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 shadow-md border border-slate-200/90 text-[10px] sm:text-[11px] font-bold text-slate-800 flex items-center gap-1.5 whitespace-nowrap hover:shadow-lg transition-all pointer-events-auto"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12] shrink-0 shadow-xs shadow-red-400" />
                  <span>Geschultes Personal</span>
                </motion.div>

                {/* Floating Bottom Center Capsule Button (RED appointment button as requested) */}
                <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#C90C12] to-[#B00A0F] hover:from-[#B00A0F] hover:to-[#9E0A0F] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-red-600/35 hover:shadow-2xl hover:shadow-red-600/45 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-display tracking-tight border border-white/25"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Calendar className="w-3 h-3 text-white" />
                    </span>
                    <span>Termin vereinbaren</span>
                  </button>
                </div>
              </div>

            </div>

            {/* 5. Left Floating Customer Badge + Curved Doodle Arrow */}
            <div className="absolute -left-3 sm:left-0 lg:-left-6 bottom-24 sm:bottom-32 z-30">
              <div className="relative">
                {/* Curved doodle arrow pointing to Beat */}
                <div className="absolute -top-10 -right-6 pointer-events-none hidden sm:block">
                  <svg 
                    className="w-14 h-10 text-[#C90C12]/80" 
                    viewBox="0 0 120 70" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M15 65 C 10 20, 75 5, 105 35" />
                    <path d="M92 36 L 105 35 L 104 22" />
                  </svg>
                </div>

                {/* Customer Pill Card (Reduced size & floating gently) */}
                <motion.div 
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="rounded-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 shadow-[0_12px_28px_rgba(22,32,57,0.12)] border border-slate-200/90 flex items-center gap-2 hover:shadow-xl transition-all"
                >
                  <div className="flex -space-x-1.5 shrink-0">
                    {customerAvatars.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white ring-1 ring-slate-200"
                      />
                    ))}
                  </div>
                  <div className="text-left font-display">
                    <div className="text-xs sm:text-sm font-black text-[#162039] leading-tight">
                      1'200+
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-sans whitespace-nowrap">
                      Zufriedene Kunden
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 6. TOP-LEFT PILL (Repositioned to the upper-left of Beat as drawn by user) */}
            <div className="absolute top-2 sm:top-6 -left-3 sm:-left-6 lg:-left-8 z-30">
              <motion.div 
                animate={{ y: [3, -3, 3] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="rounded-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-[0_10px_24px_rgba(22,32,57,0.10)] border border-slate-200/80 text-[10px] sm:text-xs font-bold text-slate-800 flex items-center gap-1.5 hover:shadow-md transition-all whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-xs shadow-emerald-400" />
                <span>100% Bio-Reinigungsmittel</span>
              </motion.div>
            </div>

            {/* 7. TOP-RIGHT PILL (Above character background / broom on right side as drawn by user) */}
            <div className="absolute top-2 sm:top-4 lg:top-6 right-0 sm:right-2 lg:-right-2 z-30">
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="rounded-full bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-[0_10px_24px_rgba(22,32,57,0.10)] border border-slate-200/80 text-[10px] sm:text-xs font-bold text-slate-800 flex items-center gap-1.5 hover:shadow-md transition-all whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#162039] shrink-0 shadow-xs shadow-slate-400" />
                <span>20+ Jahre Erfahrung</span>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
