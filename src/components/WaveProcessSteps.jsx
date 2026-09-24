import React, { useState } from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/cleaningData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WaveProcessSteps({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ProCleaning Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C90C12] bg-red-50 px-3.5 py-1.5 rounded-xl border border-red-200 inline-block font-display">
            ProCleaning Ablauf
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#162039] tracking-tight">
            4 Schritte zur <span className="font-italic-accent text-[#C90C12]">perfekten</span> Übergabe
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Von der Besichtigung bis zur mängelfreien Abgabe: Wir begleiten Sie lückenlos.
          </p>
        </div>

        {/* ProCleaning Sine Wave Track (Desktop) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-16">
          {/* Curved SVG Sine Wave Line */}
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 900 100" fill="none">
            <path
              d="M 50 50 Q 250 10 450 50 T 850 50"
              stroke="#CBD5E1"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          </svg>

          {/* 4 Connected Floating Squircles */}
          <div className="absolute inset-0 flex items-center justify-between px-6">
            {processSteps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-lg transition-all duration-300 shadow-md ${
                  activeStep === idx
                    ? 'bg-[#C90C12] text-white ring-8 ring-red-100 scale-110'
                    : 'bg-white text-[#162039] border-2 border-slate-300 hover:border-[#C90C12]'
                }`}>
                  {step.step}
                </div>
                <span className={`text-xs font-bold mt-3 transition-colors ${
                  activeStep === idx ? 'text-[#C90C12] font-black' : 'text-slate-500'
                }`}>
                  Schritt {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((st, i) => (
            <div
              key={st.step}
              onClick={() => setActiveStep(i)}
              className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                activeStep === i
                  ? 'bg-white border-[#C90C12] shadow-xl scale-[1.02]'
                  : 'bg-white/80 border-slate-200/80 hover:bg-white hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-display font-black ${
                    activeStep === i ? 'text-[#C90C12]' : 'text-slate-300'
                  }`}>
                    {st.step}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                    activeStep === i ? 'bg-red-50 text-[#C90C12]' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-base font-display font-black text-[#162039] mb-2 tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>Phase {i + 1}</span>
                {activeStep === i && (
                  <span className="text-[#C90C12]">Ausgewählt</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
