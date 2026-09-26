import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, Phone, Mail, ArrowUpRight, Check } from 'lucide-react';
import { companyData, servicesData } from '../data/cleaningData';
import { SparkleStar, MiniSparkle, DotCluster, BubblesIcon, StarBurst } from './SparkleIcons';

export default function PremierFooter({ onOpenQuoteModal }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      onOpenQuoteModal();
      setSubscribed(false);
      setEmailInput('');
    }, 800);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-slate-800 relative overflow-hidden pt-16 sm:pt-20 pb-0 border-t border-slate-200/80">
      
      {/* Background Architectural Subtle Grid Pattern (AssignX style) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-assignx-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#162039" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-assignx-grid)" />
      </svg>

      {/* Floating Sparkle Stars & Cleaning Graphics in Footer */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-12 left-16 w-6 h-6 text-slate-400/50" />
        <SparkleStar className="absolute top-20 right-20 w-7 h-7 text-[#C90C12]/20" />
        <MiniSparkle className="absolute top-36 left-1/3 w-4 h-4 text-emerald-600/40" />
        <BubblesIcon className="absolute bottom-36 left-12 w-9 h-9 text-sky-400/30" />
        <StarBurst className="absolute bottom-32 right-16 w-6 h-6 text-amber-500/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Box / 3-Column Layout Matching AssignX Template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">
          
          {/* BOX 1: Left Gradient Brand Card (AssignX Left Card) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#162039] via-[#1D2C52] to-[#253966] text-white p-7 sm:p-9 rounded-[32px] shadow-xl flex flex-col justify-between min-h-[320px] border border-slate-700/40 relative overflow-hidden group">
            {/* Ambient Radial Accent inside card */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C90C12]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[10px] font-bold text-red-200 font-display uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
                <span>Optimal Reinigung Zürich</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-snug">
                Sagen Sie Optimal was Sie brauchen. Fester Übergabetermin. Garantiert makellose Abgabe.
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Seit über 20 Jahren Ihr verlässlicher Schweizer Partner für Sauberkeit, Werterhalt und 100% Abnahmegarantie in Zürich &amp; Winterthur.
              </p>
            </div>

            {/* Bottom Row: Follow us + Social Icon Circles */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 font-sans">
                Follow us
              </span>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-[#162039] hover:bg-[#C90C12] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-[#162039] hover:bg-[#C90C12] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white text-[#162039] hover:bg-[#C90C12] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  aria-label="X / Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                  className="w-9 h-9 rounded-full bg-white text-[#162039] hover:bg-[#C90C12] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                  aria-label="Telefon"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>


          {/* BOX 2: Middle Sitemap Columns & Copyright (AssignX Center Section) */}
          <div className="lg:col-span-4 p-7 sm:p-9 rounded-[32px] bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Column 1: Categories / Dienstleistungen */}
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#C90C12] font-display block">
                  Dienstleistungen
                </span>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <a href="#dienstleistungen" className="hover:text-[#162039] transition-colors">
                      Umzugsreinigung
                    </a>
                  </li>
                  <li>
                    <a href="#dienstleistungen" className="hover:text-[#162039] transition-colors">
                      Büroreinigung
                    </a>
                  </li>
                  <li>
                    <a href="#dienstleistungen" className="hover:text-[#162039] transition-colors">
                      Fensterreinigung
                    </a>
                  </li>
                  <li>
                    <a href="#dienstleistungen" className="hover:text-[#162039] transition-colors">
                      Unterhaltsreinigung
                    </a>
                  </li>
                  <li>
                    <a href="#dienstleistungen" className="hover:text-[#162039] transition-colors">
                      Baureinigung
                    </a>
                  </li>
                  <li>
                    <a href="#preise" className="hover:text-[#C90C12] font-bold transition-colors">
                      Preise &amp; Tarife
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Über uns / Legal */}
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 font-display block">
                  Über Optimal
                </span>
                <ul className="space-y-2 text-xs font-medium text-slate-600 font-sans">
                  <li>
                    <a href="#ueber-uns" className="hover:text-[#162039] transition-colors">
                      Über uns
                    </a>
                  </li>
                  <li>
                    <a href="#bewertungen" className="hover:text-[#162039] transition-colors">
                      Kundenbewertungen
                    </a>
                  </li>
                  <li>
                    <a href="#kontakt" className="hover:text-[#162039] transition-colors">
                      Datenschutz
                    </a>
                  </li>
                  <li>
                    <a href="#kontakt" className="hover:text-[#162039] transition-colors">
                      Impressum &amp; AGB
                    </a>
                  </li>
                  <li>
                    <a href="#kontakt" className="hover:text-[#162039] transition-colors">
                      Standort Zürich
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Middle Divider Line & Copyright */}
            <div className="pt-6 mt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 font-sans">
                &copy; {currentYear} Optimal Reinigung Zürich. All rights reserved.
              </p>
            </div>
          </div>


          {/* BOX 3: Right "Straight To Your Inbox" Form Card (AssignX Right Card) */}
          <div className="lg:col-span-4 p-7 sm:p-9 rounded-[32px] border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#162039] tracking-tight">
                Direkt in Ihr Postfach
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Erhalten Sie unverbindliche Preisinformationen, freie Termine und unseren 10% Neukunden-Vorteil direkt per E-Mail.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="ihre@email.ch"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/80 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C90C12] focus:bg-white transition-all font-sans"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#162039] hover:bg-[#C90C12] text-white text-xs sm:text-sm font-extrabold font-display uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Anfrage wird geöffnet...</span>
                    </>
                  ) : (
                    <span>Offerte jetzt anfordern</span>
                  )}
                </button>
              </form>
            </div>

            <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-4">
              *Kein Spam. Strenger Schweizer Datenschutz nach DSG. Erhalten Sie sofort transparente Preisinformationen und Termine für Zürich &amp; Winterthur.
            </p>
          </div>

        </div>

        {/* GIANT WATERMARK LOGO TEXT AT THE VERY BOTTOM (Matching AssignX watermark) */}
        <div className="w-full overflow-hidden flex justify-center items-end select-none pointer-events-none -mt-2 sm:-mt-4 lg:-mt-6 -mb-2 sm:-mb-4 lg:-mb-6">
          <span 
            className="text-[19vw] xl:text-[20vw] font-black text-slate-300/85 tracking-tighter leading-none block whitespace-nowrap select-none"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              letterSpacing: '-0.045em',
            }}
          >
            Optimal
          </span>
        </div>

      </div>
    </footer>
  );
}
