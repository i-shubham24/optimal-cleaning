import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqData, companyData } from '../data/cleaningData';

export default function FAQSection({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-slate-100 relative overflow-hidden">
      
      {/* Background Graphic Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faq-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-dot-grid)" />
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            HÄUFIG GESTELLTE FRAGEN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162039] tracking-tight font-display">
            Transparente Antworten auf Ihre Fragen
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
            Alles Wissenswerte rund um Abnahmegarantie, Fixpreise, Versicherung und Ablauf in Zürich &amp; Winterthur.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-slate-50/60 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#162039] font-display">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-white border border-slate-200 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C90C12] border-red-200' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-2 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <p className="text-xs sm:text-sm text-slate-600 mb-3 font-sans">
            Haben Sie eine andere Frage zu Ihrer individuellen Reinigungssituation?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-bold text-[#162039] hover:text-[#C90C12] font-display"
            >
              <PhoneCall className="w-4 h-4 text-[#C90C12]" />
              <span>Direkt anrufen: {companyData.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => onOpenQuoteModal()}
              className="text-xs font-bold text-[#C90C12] hover:underline cursor-pointer font-display"
            >
              Unverbindlich online anfragen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
