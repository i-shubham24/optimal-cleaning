import React from 'react';
import { motion } from 'motion/react';
import { SparkleStar, MiniSparkle } from './SparkleIcons';

export default function SteppedDedication() {
  const customerAvatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
  ];

  const columns = [
    {
      title: 'Gepflegte Wohnflächen',
      desc: 'Über 120\'000 Quadratmeter Wohn- und Geschäftsfläche im gesamten Kanton Zürich bringen wir jedes Jahr zum Strahlen.',
      stat: '120\'000',
      unit: 'm²',
      stepOffset: 'mt-0',
    },
    {
      title: 'Geleistete Einsatzstunden',
      desc: 'Mehr als 45\'000 Arbeitsstunden mit modernsten Geräten, Schweizer Pünktlichkeit und maximalem Pflichtbewusstsein.',
      stat: '45\'000',
      unit: 'hrs',
      stepOffset: 'lg:mt-12',
    },
    {
      title: 'Eingesparte Kundenzeit',
      desc: 'Wir schenken unseren Kunden wertvolle Freizeit und stressfreie Umzugstage, von der Besichtigung bis zur Schlüsselübergabe.',
      stat: '18\'000',
      unit: 'hrs',
      stepOffset: 'lg:mt-24',
    },
    {
      title: 'Weiterempfehlungsquote',
      desc: 'Über 98% unserer Privat- und Geschäftskunden buchen uns regelmäßig wieder oder empfehlen uns aktiv an Freunde weiter.',
      stat: '98',
      unit: '%',
      stepOffset: 'lg:mt-36',
    },
  ];

  return (
    <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-100">
      
      {/* Floating 4-Pointed Sparkle Stars in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-12 right-20 text-slate-300">
          <SparkleStar className="w-6 h-6 text-slate-400/60" />
        </div>
        <div className="absolute bottom-16 left-12 text-[#C90C12]/40">
          <MiniSparkle className="w-4 h-4 text-[#C90C12]/50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Blue + Cursive Red strictly matching style */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
          {/* Eyebrow tag */}
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            ZAHLEN &amp; LEISTUNGSBILANZ
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-tight">
            <span className="font-extrabold text-[#162039]">Unsere Schweizer </span>
            <span className="font-italic-accent text-[#C90C12]">Leistungsbilanz in Zahlen</span>
          </h2>
        </div>

        {/* 4 Stepped Columns Grid (Progressive vertical stagger + interactive hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          {columns.map((col, idx) => (
            <div
              key={col.title}
              className={`relative ${col.stepOffset} transition-all duration-300 lg:border-l lg:border-slate-200/80 lg:pl-7 pt-2 group hover:-translate-y-1.5`}
            >
              {/* Dot indicator matching reference */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm sm:text-base font-display font-extrabold text-[#162039]">
                  {col.title}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700/80 shrink-0 group-hover:scale-125 transition-transform" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans min-h-[70px]">
                {col.desc}
              </p>

              {/* Big Stepped Number + Cursive Red Unit (hrs in cursive red!) */}
              <div className="mt-8 sm:mt-12 text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#162039] tracking-tight flex items-baseline">
                <span>{col.stat}</span>
                <span className="font-italic-accent text-[#C90C12] text-2xl sm:text-3xl ml-1.5 font-normal select-none">
                  {col.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Left Trust Ribbon matching reference media_1790393230007.png */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
          <span className="text-xs sm:text-sm font-bold text-[#162039] font-display">
            Geprüfte Qualität:
          </span>
          <div className="flex -space-x-2">
            {customerAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Kunde"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white ring-1 ring-slate-200"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-600 font-sans">
            Über 1'200 erfolgreich begleitete Übergaben in Zürich &amp; Winterthur
          </span>
        </div>

      </div>
    </section>
  );
}
