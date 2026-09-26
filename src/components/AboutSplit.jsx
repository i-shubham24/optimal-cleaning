import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Award, Headphones, ArrowUpRight } from 'lucide-react';
import { SparkleStar, MiniSparkle } from './SparkleIcons';
import { companyData } from '../data/cleaningData';

export default function AboutSplit({ onOpenQuoteModal }) {
  const bentoItems = [
    {
      type: 'feature',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: '100% Abnahmegarantie',
      desc: 'Wir bürgen für die mängelfreie Übergabe mit persönlicher Begleitung vor Ort. Eventuelle Nacharbeiten sind garantiert kostenlos.',
    },
    {
      type: 'photo',
      src: '/images/kitchen_sparkle.jpg',
      alt: 'Optimal Reinigung saubere Küche',
    },
    {
      type: 'feature',
      icon: Leaf,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: '100% Bio-Reinigungsmittel',
      desc: 'Unsere ökologischen Pflegemittel schützen empfindliche Oberflächen, Parkett, Raumluft und schonen Natur und Haustiere.',
    },
    {
      type: 'photo',
      src: '/images/baureinigung.jpg',
      alt: 'Optimal Reinigung gründliche Arbeitsweise',
    },
    {
      type: 'photo',
      src: '/images/window_cleaner.jpg',
      alt: 'Optimal Reinigung Fensterreinigung',
    },
    {
      type: 'feature',
      icon: Award,
      iconBg: 'bg-amber-50 text-amber-600',
      title: '20+ Jahre Schweizer Erfahrung',
      desc: 'Etablierte Expertise im Kanton Zürich & Winterthur. Unser festangestelltes Stammpersonal arbeitet nach strengsten Qualitätsrichtlinien.',
    },
    {
      type: 'photo',
      src: '/images/office_cleaning.jpg',
      alt: 'Optimal Reinigung Büroreinigung',
    },
    {
      type: 'feature',
      icon: Headphones,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Persönlicher Schweizer Service',
      desc: 'Verbindliche Fixpreis-Offerten ohne Überraschungen, direkte telefonische Erreichbarkeit und flexible Einsatztermine auch kurzfristig.',
    },
  ];

  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Background Graphic Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="why-pattern-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#why-pattern-grid)" />
      </svg>

      {/* Floating 4-Pointed Sparkle Stars in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-16 left-1/4 text-slate-300">
          <SparkleStar className="w-6 h-6 text-slate-400/70" />
        </div>
        <div className="absolute top-28 right-16 text-[#C90C12]/40">
          <MiniSparkle className="w-4 h-4 text-[#C90C12]/50" />
        </div>
        <div className="absolute bottom-16 right-1/4 text-emerald-600/50">
          <SparkleStar className="w-5 h-5 text-emerald-600/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Matching Sparkle Touch "Why Choose Us" */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3 relative">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
            <span>WARUM OPTIMAL REINIGUNG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#162039] tracking-tight">
            Ihre Vorteile bei <span className="font-italic-accent text-[#C90C12]">Schweizer Qualitätsreinigung</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-sans">
            Bei Optimal Reinigung stehen kompromisslose Schweizer Gründlichkeit, persönliche Betreuung und 100% Abnahmegarantie an erster Stelle.
          </p>
        </div>

        {/* 8-Item Bento Grid Alternating Features & Photos (Strictly matching Sparkle Touch reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bentoItems.map((item, idx) => {
            if (item.type === 'feature') {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F5] border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1.5 duration-300"
                >
                  <div className="space-y-4">
                    <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center font-bold group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-black text-[#162039] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] sm:aspect-auto min-h-[180px] sm:min-h-[220px] relative group hover:-translate-y-1.5 transition-transform duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row (Non-repetitive button label) */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] shadow-lg shadow-slate-900/15 hover:shadow-red-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer font-display uppercase tracking-wider"
          >
            <span>Reinigung planen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#162039] bg-slate-100 hover:bg-slate-200 transition-colors font-display"
          >
            <span>Hotline: {companyData.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
