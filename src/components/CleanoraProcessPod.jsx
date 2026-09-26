import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SparkleStar, MiniSparkle } from './SparkleIcons';

export default function CleanoraProcessPod({ onOpenQuoteModal }) {
  const steps = [
    {
      num: '01',
      title: 'Service wählen & buchen',
      desc: 'Wählen Sie Ihren gewünschten Reinigungsservice und fordern Sie unkompliziert Ihre verbindliche Offerte zum garantierten Schweizer Fixpreis an.',
      image: '/images/wohnungsreinigung_orig.jpg',
      alt: 'Optimal Reinigung Buchungsservice',
      stagger: 'mt-0',
    },
    {
      num: '02',
      title: 'Gründlich reinigen & pflegen',
      desc: 'Unser geschultes Schweizer Fachpersonal rückt pünktlich an, arbeitet speditiv nach strengem Pflichtenheft und nutzt modernste Eco-Reiniger.',
      image: '/images/kitchen_sparkle.jpg',
      alt: 'Optimal Reinigung gründliche Ausführung',
      stagger: 'lg:-mt-8', // Staggered higher exactly matching reference card 02!
    },
    {
      num: '03',
      title: 'Frische & 100% Garantie',
      desc: 'Freuen Sie sich über perfekt gereinigte Räume. Bei Umzügen begleiten wir Sie persönlich bei der Abgabe mit 100% Abnahmegarantie.',
      image: '/images/office_cleaning.jpg',
      alt: 'Optimal Reinigung saubere Räume',
      stagger: 'mt-0',
    },
  ];

  return (
    <section id="ablauf" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Floating 4-Pointed Sparkle Stars in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-16 right-24 text-slate-300">
          <SparkleStar className="w-6 h-6 text-slate-400/60" />
        </div>
        <div className="absolute bottom-20 left-16 text-[#C90C12]/40">
          <MiniSparkle className="w-4 h-4 text-[#C90C12]/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching reference media_1790393241184.png) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="space-y-3 max-w-xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C90C12] font-display uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
              <span>UNSER ABLAUF</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#162039] tracking-tight leading-[1.15]">
              Wie wir jeden Raum <br className="hidden sm:inline" />
              <span className="font-italic-accent text-[#C90C12]">makellos sauber halten</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-md leading-relaxed font-sans lg:text-right">
            Wir setzen auf strukturierte Schweizer Methoden für kompromisslose Hygiene, Werterhalt und ein garantiert frisches Raumgefühl in Zürich &amp; Winterthur.
          </p>
        </div>

        {/* 3 Tall Rounded Arch Photo Cards matching reference media_1790393241184.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {steps.map((st) => (
            <div 
              key={st.num} 
              className={`flex flex-col group ${st.stagger} transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* Photo Arch Card Container */}
              <div className="relative rounded-t-[3.5rem] rounded-b-2xl overflow-hidden shadow-xl bg-slate-900 aspect-[4/4.8] w-full">
                
                {/* Background Photo */}
                <img 
                  src={st.image} 
                  alt={st.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Big Cutout Number on Top Arch (Strictly matching reference 01, 02, 03 style) */}
                <div className="absolute top-4 left-6 pointer-events-none">
                  <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight drop-shadow-md select-none">
                    {st.num}
                  </span>
                </div>
              </div>

              {/* Title & Description Below Card */}
              <div className="pt-6 px-2 space-y-2">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#162039] tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button matching reference media_1790393241184.png */}
        <div className="mt-14 sm:mt-18 flex justify-center">
          <button
            onClick={() => onOpenQuoteModal()}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#162039] hover:bg-[#C90C12] shadow-xl hover:shadow-2xl hover:shadow-red-600/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-display tracking-tight"
          >
            <span className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-white group-hover:text-[#C90C12] flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span>Jetzt Schritt 1 starten</span>
          </button>
        </div>

      </div>
    </section>
  );
}
