import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function CleanoraHero({ onOpenQuoteModal, onOpenCalculator }) {
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
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-0 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/50"
    >
      {/* Background Graphic Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-pattern-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern-grid)" />
      </svg>

      {/* Brand Color Ambient Radial Glows (Swiss Red & Swiss Navy) */}
      <div 
        aria-hidden="true" 
        className="absolute top-16 -right-24 w-96 h-96 rounded-full bg-[#C90C12]/5 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -left-28 w-96 h-96 rounded-full bg-[#162039]/5 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CENTERED TYPOGRAPHY (Faithfully matching FreshAura reference) */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-black text-[#162039] tracking-tight leading-[1.12]">
            <span className="block">
              Wohlfühlen durch{' '}
              <span className="font-script text-[#C90C12] text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] lowercase font-bold inline-block mx-1">
                makellose
              </span>
            </span>
            <span className="block mt-0.5 sm:mt-1">
              Sauberkeit
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-sans pt-1">
            Von privaten Wohnungen bis zu Firmengebäuden: Wir bringen makellose Perfektion und Schweizer Sorgfalt durch zertifizierte Reinigungsservices in Zürich &amp; Winterthur.
          </p>

          {/* Compact Trust Indicator on Mobile Only */}
          <div className="flex sm:hidden items-center justify-center gap-2 pt-1">
            <div className="flex -space-x-1.5 shrink-0">
              {customerAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="w-5 h-5 rounded-full object-cover border border-white"
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-700 font-sans">
              1'200+ zufriedene Kunden in ZH &amp; Winterthur
            </span>
          </div>

        </div>

        {/* HERO VISUAL STAGE: Centered Character + Concentric Arches + Floating Badges */}
        <div className="relative mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center justify-end">
          
          {/* 1. Concentric Arches & Halo Rings (Positioned strictly below the subtitle) */}
          <div 
            aria-hidden="true" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none flex items-end justify-center w-full overflow-hidden h-[360px] sm:h-[440px] lg:h-[500px]"
          >
            {/* Outermost ring line (confined within the visual stage) */}
            <div className="absolute -bottom-20 sm:-bottom-28 lg:-bottom-32 w-[540px] sm:w-[720px] lg:w-[860px] h-[540px] sm:h-[720px] lg:h-[860px] rounded-full border border-slate-200/90" />
            
            {/* Second concentric accent ring */}
            <div className="absolute -bottom-16 sm:-bottom-24 lg:-bottom-28 w-[460px] sm:w-[620px] lg:w-[740px] h-[460px] sm:h-[620px] lg:h-[740px] rounded-full border border-[#C90C12]/20" />

            {/* Outer soft halo band */}
            <div className="absolute bottom-0 w-[380px] sm:w-[520px] lg:w-[660px] h-[200px] sm:h-[280px] lg:h-[350px] rounded-t-full bg-[#162039]/6 backdrop-blur-xs flex items-end justify-center" />

            {/* Core Solid Arch matching reference teal dome, rendered in high-end Swiss Navy */}
            <div className="absolute bottom-0 w-[340px] sm:w-[460px] lg:w-[580px] h-[180px] sm:h-[260px] lg:h-[320px] rounded-t-full bg-gradient-to-t from-[#162039] via-[#1A2643] to-[#24355E] shadow-2xl overflow-hidden border-t-2 border-x-2 border-[#C90C12]/40">
              {/* Subtle radiant brand glow from bottom */}
              <div className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#C90C12]/20 blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* 2. Character Image (Swiss cleaner Beat) */}
          <div className="relative z-20 flex flex-col items-center">
            
            {/* Playful Hand-Drawn Doodle Sparks above Cap (///) */}
            <div className="mb-0.5 pointer-events-none flex justify-center">
              <svg 
                className="w-7 h-5 sm:w-9 sm:h-6 text-[#C90C12]" 
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

            {/* Swiss Character Visual */}
            <div className="relative">
              <img 
                src="/images/swiss_cleaner_hero.png" 
                alt="Beat, Ihr Schweizer Reinigungsexperte von Optimal Reinigung" 
                className="h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(22,32,57,0.35)]"
              />

              {/* Floating Bottom Center Capsule Button (Directly pinned over lower torso / bucket matching reference) */}
              <div className="absolute bottom-10 sm:bottom-14 lg:bottom-16 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#162039] hover:bg-[#C90C12] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm shadow-2xl hover:shadow-red-600/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer font-display tracking-wide uppercase border border-white/20"
                >
                  <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Offerte in 2 Min. anfordern</span>
                </button>
              </div>
            </div>

          </div>

          {/* 3. Left Floating Customer Badge + Curved Doodle Arrow (Visible on sm and up) */}
          <div className="hidden sm:block absolute left-4 md:left-8 lg:left-14 xl:left-24 bottom-20 sm:bottom-28 lg:bottom-32 z-30">
            <div className="relative">
              
              {/* Playful curved doodle arrow pointing towards Beat */}
              <div className="absolute -top-12 sm:-top-16 -right-8 sm:-right-12 pointer-events-none">
                <svg 
                  className="w-16 h-12 sm:w-22 sm:h-16 text-[#C90C12]/80" 
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

              {/* Pill Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_14px_36px_rgba(22,32,57,0.12)] border border-slate-200/90 flex items-center gap-3 sm:gap-3.5 hover:shadow-xl transition-all"
              >
                {/* 3 Avatar portraits overlapping */}
                <div className="flex -space-x-2.5 shrink-0">
                  {customerAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white ring-1 ring-slate-200"
                    />
                  ))}
                </div>

                {/* Counter text */}
                <div className="text-left font-display">
                  <div className="text-xs sm:text-sm font-black text-[#162039] leading-tight">
                    1'200+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 font-sans whitespace-nowrap">
                    Zufriedene Kunden
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* 4. Right Floating Stacked Benefit Badges (Staggered matching reference, visible on sm and up) */}
          <div className="hidden sm:flex absolute right-4 md:right-8 lg:right-12 xl:right-20 bottom-24 sm:bottom-32 lg:bottom-36 z-30 flex-col items-start gap-2 sm:gap-3">
            
            {/* Badge 1: 100% Bio-Reinigungsmittel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_10px_28px_rgba(22,32,57,0.08)] border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-800 flex items-center gap-2.5 hover:shadow-md transition-all whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-xs shadow-emerald-400" />
              <span>100% Bio-Reinigungsmittel</span>
            </motion.div>

            {/* Badge 2: Geschultes Schweizer Personal (Offset slightly to the right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_10px_28px_rgba(22,32,57,0.08)] border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-800 flex items-center gap-2.5 hover:shadow-md transition-all whitespace-nowrap ml-2 sm:ml-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#C90C12] shrink-0 shadow-xs shadow-red-400" />
              <span>Geschultes Schweizer Personal</span>
            </motion.div>

            {/* Badge 3: 100% Abnahmegarantie & Fixpreis */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_10px_28px_rgba(22,32,57,0.08)] border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-800 flex items-center gap-2.5 hover:shadow-md transition-all whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#162039] shrink-0 shadow-xs shadow-slate-400" />
              <span>100% Abnahmegarantie &amp; Fixpreis</span>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Clean bottom spacer */}
      <div className="h-6 sm:h-8 w-full bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
