import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Zap, Clock, Leaf, BadgeCheck, PhoneCall } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function WhyUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      icon: BadgeCheck,
      title: "Geschultes Schweizer Fachpersonal",
      desc: "Unsere Mitarbeiter sind fest angestellt, versichert und werden fortlaufend geschult für lückenlose Resultate.",
    },
    {
      icon: ShieldCheck,
      title: "100% Abnahmegarantie inklusive",
      desc: "Auf Wunsch begleiten wir Sie persönlich bei der Wohnungsübergabe und bessern Beanstandungen sofort kostenlos nach.",
    },
    {
      icon: Zap,
      title: "Faire und transparente Fixpreise",
      desc: "Verbindliche Offerte ohne versteckte Kosten oder böse Überraschungen auf der Endabrechnung.",
    },
    {
      icon: HeartHandshake,
      title: "Diskretion und Höflichkeit",
      desc: "Respektvoller Umgang und absolute Verschwiegenheit in Ihren privaten oder geschäftlichen Räumlichkeiten.",
    },
    {
      icon: Clock,
      title: "Speditiv auch bei kurzfristigen Terminen",
      desc: "Dank starker Teamgrösse können wir kurzfristig zusätzliche Kräfte für Eileinsätze mobilisieren.",
    },
    {
      icon: Leaf,
      title: "Schonende Schweizer Eco Produkte",
      desc: "Konsequenter Einsatz umweltfreundlicher Reinigungsmittel zum Schutz von Familie, Haustieren und Belägen.",
    },
  ];

  return (
    <section id="vorteile" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C90C12] bg-red-50 px-3.5 py-1.5 rounded-xl border border-red-100 inline-block font-display">
            Warum Optimal Reinigung
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E294B] tracking-tight">
            Über 20 Jahre Vertrauen in Zürich &amp; Winterthur
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Als inhabergeführtes Schweizer Unternehmen steht Optimal Reinigung für Verlässlichkeit, Pünktlichkeit und sichtbaren Werterhalt.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C90C12]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C90C12] group-hover:bg-[#C90C12] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#1E294B] mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Banner with Direct Phone & Company details */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#1E294B] to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-3 py-1 rounded-lg border border-red-800/50 inline-block">
                Persönlicher Kundenservice
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Haben Sie spezielle Wünsche oder Fragen zu Ihrer Reinigung?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rufen Sie uns direkt an. Wir stehen Ihnen täglich von 07:00 bis 19:00 Uhr zur Verfügung und vereinbaren gerne eine kostenlose Besichtigung.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#C90C12]" />
                <span>{companyData.phone}</span>
              </a>
              <button
                onClick={() => onOpenQuoteModal()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
              >
                <span>Gratis Offerte anfordern</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
