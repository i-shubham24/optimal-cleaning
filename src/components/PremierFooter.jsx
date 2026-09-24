import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { companyData, servicesData } from '../data/cleaningData';

export default function PremierFooter({ onOpenQuoteModal }) {
  const [quickInput, setQuickInput] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickInquiry = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      onOpenQuoteModal();
      setInquirySent(false);
      setQuickInput('');
    }, 600);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white relative overflow-hidden pt-16 sm:pt-20 pb-8 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Footer Fast Offerte Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#162039] via-[#11192e] to-[#0d1424] border border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden mb-14 sm:mb-16">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C90C12]/20 rounded-3xl blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-3xl blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-red-400 font-display">
                KOSTENLOSE FIXPREIS-OFFERTE INNERT 24 STUNDEN
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                Bereit für makellose Schweizer Sauberkeit?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-sans">
                Tragen Sie Ihre Telefonnummer oder E-Mail ein. Unser Einsatzleiter in Zürich kontaktiert Sie umgehend mit einer transparenten Fixpreis-Offerte inklusive 100% Abnahmegarantie.
              </p>

              {/* 3 Micro Guarantees */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300 font-sans">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Abnahmegarantie</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CHF 5 Mio. Haftpflicht</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Keine versteckten Kosten</span>
                </div>
              </div>
            </div>

            {/* Right Fast Input Box */}
            <div className="lg:col-span-5">
              <form onSubmit={handleQuickInquiry} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    required
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder="Telefonnummer oder E-Mail"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#C90C12] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-[#C90C12] hover:bg-[#9E0A0F] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider font-display transition-all active:scale-95 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>{inquirySent ? 'Wird geöffnet...' : 'Offerte anfragen'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2 justify-center sm:justify-start">
                  <Clock className="w-3.5 h-3.5 text-[#C90C12]" />
                  <span>Durchschnittliche Reaktionszeit unter 2 Stunden</span>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* Top 4-Column Architectural Sitemap Grid - Single clean bottom padding, NO duplicate border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-8">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo_neu.png" 
                alt="Optimal Reinigung Logo" 
                className="h-10 w-auto object-contain brightness-110"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Ihre traditionsreiche Schweizer Reinigungsfirma mit über 20 Jahren Praxiserfahrung. Spezialisiert auf Umzugsreinigungen mit 100% Abnahmegarantie, Büroreinigungen und Wohnungsreinigungen für Zürich &amp; Winterthur.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C90C12] shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C90C12] shrink-0" />
                <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {companyData.phone} (Täglich 07:00 bis 19:00 Uhr)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C90C12] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>

            {/* Operating Hours & Status */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-emerald-500 animate-pulse" />
                <span className="font-bold text-white">Heute geöffnet</span>
              </div>
              <span className="text-slate-400">07:00 bis 19:00 Uhr</span>
            </div>
          </div>

          {/* Services Links (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-widest text-white">
              Dienstleistungen
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <a href="#dienstleistungen" className="hover:text-white transition-colors flex items-center justify-between group">
                    <span className="group-hover:translate-x-1 transition-transform">{svc.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-[#C90C12] transition-colors font-display">
                      {svc.priceStartingAt}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Regions: Strictly Zürich & Winterthur only */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-widest text-white">
              Einsatzgebiete
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white font-display">Stadt &amp; Region Zürich</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Hauptsitz: Landhusweg 6, 8052 Zürich (PLZ 8001 bis 8057)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="font-bold text-white font-display">Stadt &amp; Region Winterthur</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Stützpunkt Winterthur (PLZ 8400 bis 8409)</div>
              </div>
              <div className="text-[11px] text-slate-400">
                Keine Anfahrtskosten im gesamten Einsatzgebiet Zürich und Winterthur.
              </div>
            </div>
          </div>

          {/* Swiss Trust & Fast Booking (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-widest text-white">
              Sicherheit
            </h4>
            
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-2 font-sans">
              <div className="flex items-center gap-1.5 text-white font-bold font-display">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Schweizer Schutz</span>
              </div>
              <div className="text-slate-400 leading-snug">
                Versicherungsschutz bis CHF 5'000'000 (Mobiliar / Zurich).
              </div>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800 font-mono">
                HR: {companyData.registerNumber}
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider font-display text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Offerte anfordern</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar: Single divider line, clean tight padding, NO double gap */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Optimal Reinigung Zürich. Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#kontakt" className="hover:text-white transition-colors">
              Impressum &amp; Rechtliches
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors">
              AGB
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-colors cursor-pointer"
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
