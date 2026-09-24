import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { companyData, servicesData } from '../data/cleaningData';

export default function Footer({ onOpenQuoteModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-12 border-t border-slate-900">
      
      {/* Giant subtle watermark backdrop in footer per Cleanora / Premier Cleaning design reference */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 select-none pointer-events-none text-[13vw] font-black text-white/[0.025] tracking-widest uppercase whitespace-nowrap -z-0"
      >
        OPTIMAL
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo_neu.png" 
                alt="Optimal Reinigung Logo" 
                className="h-10 w-auto object-contain brightness-110"
              />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 leading-none">
                  OPTIMAL <span className="text-[#C90C12] text-xs font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800">Reinigung</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-1 block">
                  Zürich &amp; Winterthur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Ihre verlässliche Schweizer Reinigungsfirma mit über 20 Jahren Erfahrung. Spezialisiert auf Umzugsreinigungen mit 100% Abnahmegarantie, Büro- und Wohnungsreinigungen im Kanton Zürich.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C90C12] shrink-0" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C90C12] shrink-0" />
                <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.phone} (07:00 bis 19:00 Uhr)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C90C12] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services Links (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300">
              Dienstleistungen
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <a href="#dienstleistungen" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{svc.title}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-[#C90C12] transition-colors">
                      {svc.priceStartingAt}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Action (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-300">
              Kostenlose Offerte
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verbindliche Offerte innert 24 Stunden, unverbindlich und transparent.
            </p>
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              Jetzt Offerte anfordern
            </button>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="text-white font-bold">Schweizer Schutz</div>
              <div>Haftpflichtversichert bis CHF 5'000'000</div>
              <div>Handelsregister: {companyData.registerNumber}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Optimal Reinigung. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <a href="#kontakt" className="hover:text-slate-300 transition-colors">
              Impressum
            </a>
            <a href="#kontakt" className="hover:text-slate-300 transition-colors">
              Datenschutz
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
