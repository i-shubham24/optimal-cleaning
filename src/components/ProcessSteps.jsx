import React, { useState } from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/cleaningData';
import { FileText, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessSteps({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const icons = [FileText, Calendar, Sparkles, CheckCircle2];

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute -top-24 left-1/3 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            In 4 einfachen Schritten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E294B] tracking-tight">
            So mühelos funktioniert Ihre Reinigung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Von der ersten unverbindlichen Anfrage bis zur perfekten Abgabe mit Garantie.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {processSteps.map((step, index) => {
            const IconComp = icons[index % icons.length];
            const isLast = index === processSteps.length - 1;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative p-7 rounded-3xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  activeStep === index
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl scale-[1.02]'
                    : 'bg-slate-50/80 hover:bg-white text-slate-800 border-slate-200/80 shadow-xs'
                }`}
              >
                <div>
                  {/* Step Top: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-2xl font-black tracking-tight ${
                      activeStep === index ? 'text-[#C90C12]' : 'text-slate-300'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      activeStep === index
                        ? 'bg-[#C90C12] text-white'
                        : 'bg-white text-[#1E294B] shadow-xs'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`text-base font-extrabold mb-2.5 tracking-tight ${
                    activeStep === index ? 'text-white' : 'text-[#1E294B]'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${
                    activeStep === index ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {step.desc}
                  </p>
                </div>

                {/* Sub label */}
                <div className={`mt-6 pt-4 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 border-t ${
                  activeStep === index ? 'border-white/10 text-[#C90C12]' : 'border-slate-200 text-slate-400'
                }`}>
                  <span>Schritt {index + 1} von 4</span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 max-w-2xl mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-extrabold text-[#1E294B]">Bereit für blitzblanke Räume?</div>
            <div className="text-xs text-slate-500">Unverbindliche Offerte innert 24 Stunden</div>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-md shadow-red-600/20 transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Jetzt Offerte anfordern</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
