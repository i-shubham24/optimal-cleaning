import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function SparklingTouch({ onOpenQuoteModal }) {
  const items = [
    {
      num: '01/',
      title: 'Gewerbe & Büroreinigung',
      category: 'Arbeitsplätze & Praxen',
      image: '/images/office_cleaning.jpg',
    },
    {
      num: '02/',
      title: 'Regelmässige Pflege',
      category: 'Wohnungen & Liegenschaften',
      image: '/images/supplies.jpg',
    },
    {
      num: '03/',
      title: 'Umzug & Endreinigung',
      category: '100% Abnahmegarantie',
      image: '/images/kitchen_sparkle.jpg',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Freshaura Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#162039] tracking-tight">
              Unser <span className="font-script text-[#C90C12] text-4xl sm:text-5xl lowercase">glänzender</span> Standard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-lg">
              Makellose Sauberkeit mit Schweizer Präzision und Verlässlichkeit für jede Liegenschaft.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold text-[#C90C12] hover:underline cursor-pointer"
          >
            <span>Alle 20+ Spezialreinigungen ansehen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Row (Freshaura Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.num}
              className="group rounded-3xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <div className="font-display font-bold text-xs text-[#C90C12]">
                  {item.num}
                </div>
                <h3 className="text-base font-extrabold text-[#162039] mt-1 group-hover:text-[#C90C12] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.category}
                </div>
              </div>
            </div>
          ))}

          {/* 4th Card: Freshaura-style Highlight Explore Card */}
          <div 
            onClick={() => onOpenQuoteModal()}
            className="rounded-3xl bg-[#162039] text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#C90C12] transition-colors cursor-pointer group shadow-lg shadow-slate-900/10 min-h-[300px]"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-white/80">
                Massgeschneidert
              </span>
              <h3 className="text-2xl font-display font-extrabold tracking-tight leading-snug">
                20+ Spezialdienste für Sie verfügbar
              </h3>
              <p className="text-xs text-slate-300 group-hover:text-white/90 leading-relaxed pt-2">
                Von Storen und Teppich-Shampoonierung bis zur Bauendreinigung.
              </p>
            </div>

            <div className="self-end w-12 h-12 rounded-2xl bg-white text-[#162039] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
