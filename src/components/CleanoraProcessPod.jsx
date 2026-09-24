import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CleanoraProcessPod({ onOpenQuoteModal }) {
  const steps = [
    {
      num: '01',
      title: 'Offerte anfragen & Fixpreis sichern',
      desc: 'Wählen Sie Ihre gewünschte Dienstleistung oder nutzen Sie unseren Preisrechner. Wir erstellen Ihnen umgehend eine transparente, verbindliche Offerte ohne versteckte Nebenkosten.',
    },
    {
      num: '02',
      title: 'Pünktlicher Schweizer Reinigungseinsatz',
      desc: 'Unser festangestelltes, geschultes Fachpersonal rückt mit modernen Profi-Geräten und biologischen Schweizer Reinigungsmitteln pünktlich an und arbeitet nach strengem Pflichtenheft.',
    },
    {
      num: '03',
      title: '100% Abnahmegarantie & Übergabebegleitung',
      desc: 'Bei Umzügen begleiten wir Sie persönlich bei der offiziellen Wohnungsabgabe mit der Verwaltung. Sollte eine Nachreinigung gefordert werden, erfolgt diese sofort und kostenlos vor Ort.',
    },
  ];

  return (
    <section id="ablauf" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-End Deep Swiss Navy Contrast Pod (Cleanifty & Sparkle Touch Inspired) */}
        <div className="rounded-[2.5rem] bg-[#162039] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-slate-800">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header Inside Pod: Pure Typography, NO pill container */}
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-red-400 font-display">
              EINFACHER &amp; TRANSPARENTER ABLAUF
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-tight">
              Wie Optimal für <span className="font-italic-accent text-red-400">makellosen Glanz</span> sorgt
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Von der ersten Kontaktaufnahme bis zur reibungslosen Übergabe: Zuverlässig, pünktlich und mit 100% Garantie.
            </p>
          </div>

          {/* 3 Numbered Steps Grid (Cleanifty 01, 02, 03 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((st, idx) => (
              <div
                key={st.num}
                className="bg-slate-900/90 rounded-3xl p-7 sm:p-8 border border-slate-700/80 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Large architectural background number */}
                <div className="text-5xl sm:text-6xl font-display font-black text-slate-800 group-hover:text-red-950/60 transition-colors mb-6">
                  {st.num}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white tracking-tight group-hover:text-red-300 transition-colors mb-3">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-400 font-display">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Schritt {idx + 1} von 3</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pod Bottom Action Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-sans">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>100% Abnahmegarantie &amp; Begleitung bei der Wohnungsabgabe durch Optimal Reinigung.</span>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-white bg-[#C90C12] hover:bg-[#9E0A0F] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-600/30 cursor-pointer font-display uppercase tracking-wider shrink-0"
            >
              <span>Jetzt Auftrag starten</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
