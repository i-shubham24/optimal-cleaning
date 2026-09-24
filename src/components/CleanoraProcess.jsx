import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { processSteps } from '../data/cleaningData';

export default function CleanoraProcess({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="ablauf" className="py-20 sm:py-28 bg-[#162039] text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-400 bg-red-950/80 px-3.5 py-1.5 rounded-xl border border-red-800/80 inline-block font-display">
            In 4 einfachen Schritten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Wie Optimal für <span className="font-italic-accent text-red-400">makellosen Glanz</span> sorgt
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Von der unverbindlichen Online-Kalkulation bis zur stressfreien Wohnungsübergabe mit persönlicher Begleitung.
          </p>
        </div>

        {/* ProCleaning Connected Wave Step Numbers */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-16 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-700 -translate-y-1/2 -z-0" />
          
          {processSteps.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(i)}
              className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-sm transition-all duration-300 ${
                activeStep === i
                  ? 'bg-[#C90C12] text-white ring-4 ring-red-500/30 scale-110 shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}>
                {s.step}
              </div>
              <span className={`text-xs font-bold mt-2 transition-colors ${
                activeStep === i ? 'text-white' : 'text-slate-400'
              }`}>
                Schritt {i + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Cleanora-Style Split Block (Left Photo with 98% badge, Right Step Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Photo with 98% Customer Satisfaction Badge (Cleanora) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/4.5] bg-slate-800">
              <img 
                src="/images/hero_cleaner.jpg" 
                alt="Optimal Reinigung Einsatz" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Cleanora 98% Satisfaction Pill */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white text-[#162039] shadow-2xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C90C12] flex items-center justify-center font-black text-lg">
                  98%
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#162039]">Kundenzufriedenheit</div>
                  <div className="text-[10px] text-slate-500">Mängelfreie Abgaben vor Ort</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Cleanora Interactive Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer border ${
                  activeStep === index
                    ? 'bg-white text-[#162039] border-white shadow-xl scale-[1.01]'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${
                    activeStep === index ? 'text-[#C90C12]' : 'text-slate-400'
                  }`}>
                    Schritt {step.step}
                  </span>
                  {activeStep === index && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-100 text-[#C90C12]">
                      Aktiv
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-display font-extrabold tracking-tight mb-1.5">
                  {step.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  activeStep === index ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {step.desc}
                </p>

                {activeStep === index && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Keine Vorauskasse nötig
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal();
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] transition-colors"
                    >
                      <span>Jetzt unverbindlich anfragen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
