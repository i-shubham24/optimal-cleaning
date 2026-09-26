import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqData, companyData } from '../data/cleaningData';
import { SparkleStar, MiniSparkle, DotCluster, BubblesIcon, SqueegeeIcon } from './SparkleIcons';

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

      {/* Floating Sparkle Stars & Cleaning Graphics in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-16 left-8 sm:left-24 w-7 h-7 text-[#C90C12]/20" />
        <SparkleStar className="absolute top-28 right-10 sm:right-24 w-6 h-6 text-slate-300" />
        <MiniSparkle className="absolute top-1/2 left-12 w-4 h-4 text-emerald-500/40" />
        <BubblesIcon className="absolute bottom-24 right-16 w-9 h-9 text-sky-400/30" />
        <SqueegeeIcon className="absolute bottom-20 left-16 w-8 h-8 text-slate-300/40" />
        <DotCluster className="absolute top-1/3 right-8 w-8 h-8 text-slate-200" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
            <span>HÄUFIG GESTELLTE FRAGEN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162039] tracking-tight font-display">
            Transparente Antworten auf <span className="font-italic-accent text-[#C90C12]">Ihre Fragen</span>
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
