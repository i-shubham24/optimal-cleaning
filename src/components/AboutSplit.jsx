import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, BadgePercent, Clock, Users, Leaf, ArrowRight, Phone } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function AboutSplit({ onOpenQuoteModal }) {
  const reasons = [
    {
      icon: Award,
      title: 'Geschultes Fachpersonal',
      desc: 'Top ausgebildete Schweizer Reinigungskräfte und permanente Qualitätskontrollen sichern lückenlos makellose Resultate.',
    },
    {
      icon: ShieldCheck,
      title: '100% Abnahmegarantie',
      desc: 'Integrierte Übergabegarantie mit persönlicher Begleitung vor Ort. Allfällige Nachreinigungen sind garantiert kostenlos.',
    },
    {
      icon: BadgePercent,
      title: 'Transparente Fixpreise',
      desc: 'Keine versteckten Zuschläge oder böse Überraschungen. Sie erhalten eine verbindliche Offerte exakt passend zu Ihrem Budget.',
    },
    {
      icon: Clock,
      title: 'Speditive Abwicklung & Express',
      desc: 'Auch wenn es eilt: Dank starker Teamgrösse mobilisieren wir kurzfristig zusätzliche Kräfte für termingerechte Einsätze.',
    },
    {
      icon: Users,
      title: 'Diskret, freundlich & verlässlich',
      desc: 'Höchster Respekt vor Ihrem Eigentum, strikte Pünktlichkeit und absolute Diskretion in privaten wie geschäftlichen Räumen.',
    },
    {
      icon: Leaf,
      title: 'Schweizer Eco-Standards',
      desc: 'Konsequenter Einsatz biologisch abbaubarer Reinigungsmittel und moderner Methoden für Mensch, Tier und Werterhalt.',
    },
  ];

  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Subtle architectural background texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="about-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-dot-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header: Pure Typography, NO pill container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
              WARUM OPTIMAL REINIGUNG
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#162039] tracking-tight">
              Ihr Partner für Sauberkeit mit <span className="font-italic-accent text-[#C90C12]">über 20 Jahren</span> Erfahrung
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Als traditionsreiches Reinigungsunternehmen mit Hauptsitz in Zürich und Stützpunkt in Winterthur garantieren wir kurze Anfahrtswege, speditive Abwicklung und höchste Schweizer Gründlichkeit.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] transition-colors shadow-md shadow-slate-900/10 cursor-pointer font-display uppercase tracking-wider"
            >
              <span>Offerte anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3x2 Grid of Authentic Reasons (Faithfully matching Sparkle Touch & Cleanifty) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, idx) => {
            const IconComponent = r.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] hover:bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#C90C12] text-[#C90C12] group-hover:text-white border border-slate-200/80 group-hover:border-transparent flex items-center justify-center shadow-xs transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#162039] tracking-tight group-hover:text-[#C90C12] transition-colors mb-2.5">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-400 font-display">
                  <span className="uppercase tracking-wider">Schweizer Standard</span>
                  <span className="text-[#C90C12]">Geprüft ✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C90C12] flex items-center justify-center font-bold shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Persönliche Beratung in Zürich &amp; Winterthur</div>
              <div className="text-base sm:text-lg font-black text-[#162039] font-display">Rufen Sie uns direkt an: {companyData.phone}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#162039] bg-white hover:bg-slate-100 border border-slate-300 font-display"
            >
              Jetzt anrufen
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#C90C12] hover:bg-[#9E0A0F] font-display uppercase tracking-wider"
            >
              Kostenlose Offerte
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
