import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Leaf, Users, Clock, Award, Calendar } from 'lucide-react';
import { SparkleStar, MiniSparkle, DotCluster } from './SparkleIcons';

export default function CleanAndBright({ onOpenBooking }) {
  const points = [
    {
      title: "Umweltfreundliche Eco-Lösungen",
      desc: "Schonende, biologisch abbaubare Schweizer Reinigungsmittel ohne aggressive Dämpfe.",
      icon: Leaf,
    },
    {
      title: "100% Schweizer Abnahmegarantie",
      desc: "Persönliche Begleitung bei der Übergabe inklusive sofortiger kostenloser Nachreinigung.",
      icon: ShieldCheck,
    },
    {
      title: "Geschultes Festpersonal",
      desc: "Festangestellte, haftpflichtversicherte und sorgfältig überprüfte Reinigungskräfte.",
      icon: Users,
    },
    {
      title: "Transparente Fixpreise",
      desc: "Klare Pauschalangebote ohne versteckte Anfahrtskosten oder Wochenendzuschläge.",
      icon: Award,
    },
    {
      title: "Flexible Terminplanung",
      desc: "Einsätze pünktlich an Ihrem Wunschtermin, auch früh morgens oder nach Feierabend.",
      icon: Clock,
    },
    {
      title: "Moderne Reinigungstechnik",
      desc: "Osmose-Filter für Fenster, HEPA-Bürstsauger und materialgerechte Pflegebeläge.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="pt-14 sm:pt-20 pb-16 sm:pb-24 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Sparkle Stars from reference */}
      <SparkleStar className="absolute top-12 left-10 w-7 h-7 text-[#C90C12]/20 hidden lg:block pointer-events-none" />
      <SparkleStar className="absolute top-28 right-14 w-6 h-6 text-slate-300 pointer-events-none" />
      <MiniSparkle className="absolute bottom-16 left-1/4 w-4 h-4 text-emerald-600/35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Organic Multi-Photo Collage matching Sparkle Touch */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Graphic Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-50 rounded-full blur-2xl pointer-events-none opacity-60" />
            <div className="absolute -bottom-8 -right-6 pointer-events-none opacity-40">
              <DotCluster className="w-16 h-16 text-slate-300" />
            </div>

            {/* Main Primary Portrait Photo */}
            <div className="relative z-10 bg-white p-3 sm:p-4 rounded-3xl sm:rounded-[36px] shadow-xl border border-slate-100 max-w-md mx-auto hover:-translate-y-1 transition-transform duration-500">
              <div className="relative h-96 sm:h-[430px] rounded-2xl sm:rounded-[28px] overflow-hidden bg-slate-100">
                <img
                  src="/images/hero_cleaner.jpg"
                  alt="Optimal Reinigung Fachkraft bei der Arbeit"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badge on Main Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/80 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C90C12] text-white flex items-center justify-center font-display font-black text-sm shrink-0">
                    20+
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#162039] font-display">
                      Jahre Schweizer Zuverlässigkeit
                    </div>
                    <div className="text-[11px] text-slate-500 font-sans">
                      Zürich &bull; Winterthur &bull; Umland
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Top-Right Floating Card */}
            <div className="hidden sm:block absolute -top-6 -right-4 sm:-right-6 z-20 w-44 h-36 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src="/images/service_sanitaer.jpg"
                  alt="Sanitärreinigung Glanz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white uppercase tracking-wider font-display">
                  Hygienisch rein
                </span>
              </div>
            </div>

            {/* Overlapping Bottom-Left Floating Accent */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#162039] font-display">100% Bio-Reiniger</div>
                <div className="text-[10px] text-slate-500">Ohne Reizstoffe</div>
              </div>
            </div>

          </div>


          {/* RIGHT: Heading, Copy, 6-Point Checklist */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Header: Plain Text Eyebrow (NO pills) */}
            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
                WIR SCHAFFEN WOHLBEFINDEN
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-tight">
                <span className="font-extrabold text-[#162039]">Wir machen Räume </span>
                <span className="font-italic-accent text-[#C90C12]">Sauber &amp; Strahlend</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-xl">
                Wir verwandeln Wohnungen, Büros und Liegenschaften in einladende Wohlfühlorte. Unser kompromissloser Qualitätsanspruch stellt sicher, dass jeder Quadratmeter durch Frische, Hygiene und makellose Sauberkeit überzeugt.
              </p>
            </div>

            {/* 6-Point Bullet Checklist in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-slate-100/90 transition-colors border border-slate-100 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white text-[#C90C12] group-hover:bg-[#C90C12] group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#162039] font-display tracking-tight mb-0.5">
                        {pt.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C90C12] to-[#B00A0F] hover:from-[#B00A0F] hover:to-[#9E0A0F] text-white text-xs sm:text-sm font-bold font-display tracking-tight transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                </span>
                <span>Termin unverbindlich besprechen</span>
                <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Antwort garantiert innerhalb von 2 Stunden</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
