import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function PromoBanner({ onOpenQuoteModal }) {
  return (
    <section className="py-8 sm:py-12 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panoramic Banner Card matching Sparkle Touch reference (compact sleek height) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 min-h-[220px] sm:min-h-[260px] flex items-center">
          
          {/* Panoramic Background Image: Gleaming polished floor with cleaner */}
          <img
            src="/images/floor_sparkle_banner.jpg"
            alt="Optimal Reinigung Parkett- und Bodenversiegelung Glanz"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Deep Navy Gradient Overlay for high contrast legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#162039]/95 via-[#162039]/80 to-[#162039]/40 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-xl p-5 sm:p-8 lg:p-10 text-white space-y-3 sm:space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-bold text-amber-300 font-display uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Kostenlose Vor-Ort-Besichtigung</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight leading-snug">
              Sichern Sie sich <span className="text-amber-400">10% Neukunden-Rabatt</span> auf Ihre erste Reinigung
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              Ob Umzugsreinigung mit 100% Abnahmegarantie oder Büroreinigung: Wir offerieren Ihnen auf Wunsch eine unverbindliche Offerte zum garantierten Fixpreis.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-slate-100 text-[#162039] text-xs sm:text-sm font-black font-display uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C90C12]" />
                <span>Besichtigungstermin vereinbaren</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% unverbindlich &bull; Innert 24h</span>
              </div>
            </div>

          </div>

        </div>

        {/* Swiss Trust Logos / Associations Strip below banner */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-center">
          <div className="text-slate-600 font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:text-[#162039] transition-colors">
            CH-020.4.035.090-2 &bull; Handelsregister
          </div>
          <div className="text-slate-600 font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:text-[#162039] transition-colors">
            Haftpflicht CHF 5'000'000
          </div>
          <div className="text-slate-600 font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:text-[#162039] transition-colors">
            100% Öko-Reiniger
          </div>
          <div className="text-slate-600 font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:text-[#162039] transition-colors">
            Suva &amp; GAV Konform
          </div>
        </div>

      </div>
    </section>
  );
}
