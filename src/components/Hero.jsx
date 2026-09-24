import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F4F8] via-[#F8FAFC] to-[#F8FAFC]">
      
      {/* Giant Typography Brand Cutout Layer inspired by Cleanora & Cleanifity */}
      <div 
        aria-hidden="true" 
        className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center z-0"
      >
        <span className="font-display font-extrabold text-[15vw] sm:text-[14vw] tracking-wider text-slate-200/40 uppercase block leading-none">
          OPTIMAL
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Headline Section (Cleanora & Freshaura style) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-4">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-[#162039]"
          >
            <span className="w-2 h-2 rounded-xs bg-[#C90C12] animate-pulse" />
            <span>Ihre Schweizer Reinigungsfirma in Zürich &amp; Winterthur</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#C90C12]">Seit über 20 Jahren</span>
          </motion.div>

          {/* Main Headline with script/italic accent like Freshaura & Premier Cleaning */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#162039] tracking-tight leading-[1.06]"
          >
            Glänzende Reinheit <span className="font-script text-[#C90C12] text-5xl sm:text-7xl lg:text-8xl lowercase font-normal">mit</span> Schweizer Präzision
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Vom stressfreien Wohnungsumzug mit 100% Abnahmegarantie bis zu repräsentativen Büros. Verlässlich, speditiv und zu fairen Fixpreisen.
          </motion.p>
        </div>

        {/* Central Visual Composition with Floating Interactive Badges (Freshaura + Cleanora) */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Central Model Image Box */}
          <div className="relative mx-auto max-w-2xl h-[420px] sm:h-[500px] lg:h-[540px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
            <img 
              src="/images/hero_cleaner.jpg" 
              alt="Optimal Reinigung Fachkraft in Zürich" 
              className="w-full h-full object-cover object-top filter brightness-105"
            />
            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Inner Label */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C90C12] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#162039]">
                    100% Abnahmegarantie inklusive
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Persönliche Begleitung bei der Wohnungsübergabe
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal()}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] transition-all cursor-pointer"
              >
                <span>Termin buchen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Floating Pill 1 (Top Left): Cleanora-style Gradient Highlight Card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-2 sm:-left-8 lg:-left-12 p-4 rounded-3xl bg-gradient-to-br from-white via-white to-red-50/80 border border-white shadow-xl max-w-[240px] z-20 hidden sm:block"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-[#C90C12] text-white flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              <span className="text-xs font-extrabold text-[#162039]">
                Kein Putzstress
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Wir übernehmen die komplette Endreinigung mit Übergabegarantie.
            </p>
            <button
              onClick={() => onOpenQuoteModal()}
              className="mt-3 flex items-center gap-1 text-[11px] font-extrabold text-[#C90C12] hover:underline cursor-pointer"
            >
              <span>Offerte in 2 Min.</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Floating Pill 2 (Top Right): Freshaura Eco-Friendly Pill */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-14 right-2 sm:-right-6 lg:-right-10 px-4 py-2.5 rounded-2xl glass-pill border border-white shadow-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
              🌿
            </div>
            <div className="text-left">
              <div className="text-xs font-extrabold text-[#162039]">Ökologische Produkte</div>
              <div className="text-[10px] text-slate-500">100% schonend für Material &amp; Umwelt</div>
            </div>
          </motion.div>

          {/* Floating Pill 3 (Bottom Left): Customer Avatar Stack (Freshaura & Cleanora style) */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 -left-4 sm:-left-10 p-3.5 rounded-2xl glass-pill border border-white shadow-xl flex items-center gap-3 z-20 hidden md:flex"
          >
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-lg ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Kunde" />
              <img className="inline-block h-8 w-8 rounded-lg ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Kunde" />
              <img className="inline-block h-8 w-8 rounded-lg ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Kunde" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-extrabold text-[#162039]">4.9 von 5</span>
                <span className="text-amber-400 text-xs">★★★★★</span>
              </div>
              <div className="text-[10px] font-bold text-slate-500">1'200+ Schweizer Kunden</div>
            </div>
          </motion.div>

          {/* Floating Pill 4 (Bottom Right): Insurance & Speed Badge */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-24 -right-4 sm:-right-8 p-3.5 rounded-2xl glass-pill border border-white shadow-xl flex items-center gap-3 z-20 hidden md:flex"
          >
            <div className="w-8 h-8 rounded-xl bg-[#162039] text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#162039]">CHF 5 Mio. Haftpflicht</div>
              <div className="text-[10px] text-slate-500">Voller Schweizer Versicherungsschutz</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
