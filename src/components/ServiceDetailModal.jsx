import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { companyData } from '../data/cleaningData';
import PriceText from './PriceText';

export default function ServiceDetailModal({ service, onClose, onBookService }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Schliessen"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#C90C12] text-white mb-2">
              {service.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Leistungsbeschreibung
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.fullDescription || service.description}
            </p>
          </div>

          {/* Price Tiers if available */}
          {service.priceTiers && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 font-display">
                Transparente Richtpreise nach Zimmeranzahl
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {service.priceTiers.map((tier, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[11px] text-slate-500 font-medium">{tier.rooms}</div>
                    <div className="text-xs font-black text-[#162039] font-display mt-0.5">{tier.price}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Included Features Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
              Was ist im Service enthalten?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-snug font-sans">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust notice */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C90C12] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#162039] font-display">Schweizer Qualitätsgarantie</div>
                <div className="text-[11px] text-slate-500 font-sans">Haftpflicht bis CHF 5'000'000 • Inklusive 100% Abnahmegarantie</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 font-display">Richtpreis</div>
              <div className="text-sm font-extrabold text-[#C90C12] font-display"><PriceText price={service.priceStartingAt} /></div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#C90C12]"
          >
            <Phone className="w-4 h-4 text-[#C90C12]" />
            <span>Fragen? {companyData.phone}</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Schliessen
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-md shadow-red-600/20 transition-all cursor-pointer active:scale-95"
            >
              <span>Jetzt Offerte anfordern</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
