import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import PriceText from './PriceText';
import { SparkleStar, MiniSparkle, DotCluster, BubblesIcon, CleaningSprayIcon, StarBurst } from './SparkleIcons';

export default function PricingPlans({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('single'); // 'single' or 'subscription'

  const plans = [
    {
      id: 'plan-small',
      planNum: '01',
      title: 'Kleine Wohnung & Studio',
      subtitle: '1.0 bis 2.5 Zimmer (1.5 Zi ab CHF 480.- / 2.5 Zi ab CHF 590.-)',
      priceSingle: 'ab CHF 480.-',
      priceSub: 'ab CHF 42 / hrs',
      popular: false,
      features: [
        '100% gesetzliche Abnahmegarantie mit persönlicher Begleitung',
        'Eigene Vorabnahme vor dem offiziellen Übergabetermin',
        'Vollmacht Service bei Ferien oder Abwesenheit',
        'Küche intensiv inkl. Backofen, Dampfabzug & Herd',
        'Badezimmer inkl. Entkalkung & Desinfektion',
        'Fenster, Rahmen & Lamellenstoren beidseitig',
        'Alle Schweizer Profi Reinigungsmittel inklusive',
        'Kostenlose und sofortige Nachreinigung vor Ort',
      ],
    },
    {
      id: 'plan-medium',
      planNum: '02',
      title: 'Familienwohnung Bestseller',
      subtitle: '3.0 bis 4.5 Zimmer (3.5 Zi ab CHF 790.- / 4.5 Zi ab CHF 890.-)',
      priceSingle: 'ab CHF 790.-',
      priceSub: 'ab CHF 45 / hrs',
      popular: true,
      features: [
        '100% gesetzliche Abnahmegarantie mit persönlicher Begleitung',
        'Eigene Vorabnahme vor dem offiziellen Übergabetermin',
        'Vollmacht Service bei Ferien oder Abwesenheit',
        'Küche komplett inkl. Backofen, Dampfabzug & Kühlschrank',
        'Alle Nasszellen & Bäder intensiv porentief entkalkt',
        'Grosse Fensterfronten, Rahmen & alle Lamellenstoren',
        'Inklusive Balkon oder Terrasse (Besenrein & nass)',
        'Keller oder Estrichabteil nach Vereinbarung',
        'Persönliche Anwesenheit des Einsatzleiters bei Schlüsselabgabe',
      ],
    },
    {
      id: 'plan-large',
      planNum: '03',
      title: 'Grosswohnung & Einfamilienhaus',
      subtitle: '5.5+ Zimmer & Häuser (5.5 Zi ab CHF 990.- / Haus ab CHF 1\'290.-)',
      priceSingle: 'ab CHF 990.-',
      priceSub: 'ab CHF 52 / hrs',
      popular: false,
      features: [
        '100% gesetzliche Abnahmegarantie mit Begleitung',
        'Eigene Vorabnahme vor dem offiziellen Übergabetermin',
        'Vollmacht Service bei Ferien oder Abwesenheit',
        'Grosszügige Wohnflächen, mehrere Stockwerke & Bäder',
        'Fensterfronten, Wintergärten & Terrassenflächen',
        'Keller, Estrich, Garage & Nebenräume inklusive',
        'Feste Vertretungsgarantie & Haftpflicht bis CHF 5 Mio.',
        'Festpreis Garantie ohne versteckte Zusatzkosten',
      ],
    },
  ];

  return (
    <section id="preise" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Graphic Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pricing-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pricing-dot-grid)" />
      </svg>

      {/* Floating Sparkle Stars & Cleaning Graphics in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-16 left-8 sm:left-16 w-6 h-6 text-[#C90C12]/30" />
        <SparkleStar className="absolute top-24 right-10 sm:right-20 w-7 h-7 text-slate-400/50" />
        <MiniSparkle className="absolute top-44 left-1/3 w-4 h-4 text-emerald-600/40" />
        <BubblesIcon className="absolute top-1/2 -left-2 sm:left-6 w-10 h-10 text-sky-500/30" />
        <StarBurst className="absolute top-1/2 right-6 sm:right-12 w-6 h-6 text-amber-500/35" />
        <CleaningSprayIcon className="absolute bottom-16 right-8 sm:right-16 w-9 h-9 text-slate-400/40" />
        <DotCluster className="absolute bottom-20 left-10 w-8 h-8 text-slate-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            TRANSPARENTE FIXPREISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#162039] tracking-tight">
            Faire Fixpreise ohne <span className="font-italic-accent text-[#C90C12]">versteckte Kosten</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
            Wählen Sie das passende Leistungspaket für Ihre Wohnung oder Ihr Unternehmen im Grossraum Zürich &amp; Winterthur.
          </p>

          {/* Toggle Single vs Subscription */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 gap-1 shadow-xs">
              <button
                type="button"
                onClick={() => setBillingCycle('single')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-display ${
                  billingCycle === 'single'
                    ? 'bg-[#162039] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#162039]'
                }`}
              >
                Einmalig (Umzug &amp; Endreinigung)
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('subscription')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 font-display ${
                  billingCycle === 'subscription'
                    ? 'bg-[#C90C12] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#162039]'
                }`}
              >
                <span>Reinigungs-Abo</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md font-extrabold">
                  -15% Rabatt
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = billingCycle === 'single' ? plan.priceSingle : plan.priceSub;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                  plan.popular
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-[1.03] z-10'
                    : 'bg-white text-[#162039] border-slate-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Top Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-[#C90C12] text-white shadow-md font-display flex items-center gap-1.5 whitespace-nowrap">
                    <MiniSparkle className="w-3.5 h-3.5 text-amber-300" />
                    <span>MEISTGEWÄHLT IM KANTON ZÜRICH</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-display font-extrabold text-sm ${
                      plan.popular ? 'text-red-400' : 'text-slate-400'
                    }`}>
                      PLAN {plan.planNum}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md font-display ${
                      plan.popular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Schweizer Qualität
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight mb-1">
                    {plan.title}
                  </h3>
                  <p className={`text-xs font-sans ${
                    plan.popular ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="my-6 py-4 border-y border-dashed border-slate-200/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-black tracking-tight">
                        <PriceText price={price} />
                      </span>
                    </div>
                    <div className="text-[11px] mt-1 text-slate-400 font-sans">
                      inkl. MwSt. &amp; Anfahrt im Kanton Zürich
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider font-display ${
                      plan.popular ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      Leistungsumfang:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-sans">
                        <div className={`w-4 h-4 rounded-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-600'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <button
                  type="button"
                  onClick={() => onSelectPlan({ plan: plan.title, estimatedPrice: price })}
                  className={`w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold font-display tracking-tight transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 group hover:-translate-y-0.5 active:scale-98 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#C90C12] to-[#B00A0F] hover:from-[#B00A0F] hover:to-[#9E0A0F] text-white shadow-xl shadow-red-600/35 hover:shadow-2xl hover:shadow-red-600/45'
                      : 'bg-[#162039] hover:bg-[#C90C12] text-white shadow-md hover:shadow-xl'
                  }`}
                >
                  <span>Diesen Plan wählen</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white group-hover:text-[#C90C12] flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
