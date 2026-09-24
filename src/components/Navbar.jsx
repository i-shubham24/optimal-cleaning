import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dienstleistungen', href: '#dienstleistungen' },
    { name: 'Über uns', href: '#ueber-uns' },
    { name: 'Ablauf', href: '#ablauf' },
    { name: 'Preise', href: '#preise' },
    { name: 'Bewertungen', href: '#bewertungen' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/70 py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo only (no redundant text name next to it as requested) */}
        <a href="#" className="flex items-center group shrink-0" aria-label="Optimal Reinigung Startseite">
          <img 
            src="/images/logo_neu.png" 
            alt="Optimal Reinigung" 
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links (Strictly in one single line, no wrapping) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-bold text-slate-700 hover:text-[#C90C12] transition-colors font-display tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (Strictly aligned in one line, no pills, crisp rounded-xl) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#162039] bg-slate-100/90 hover:bg-slate-200/90 transition-colors font-display border border-slate-200/80"
          >
            <span className="w-2 h-2 rounded-xs bg-emerald-500 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-[#C90C12]" />
            <span>{companyData.phone}</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-md shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer font-display uppercase tracking-wider"
          >
            <span>Offerte anfordern</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#C90C12] rounded-xl focus:outline-none"
          aria-label="Navigation öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-white border border-slate-200 p-5 shadow-2xl space-y-3">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#C90C12] rounded-xl transition-colors font-display"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-[#162039] bg-slate-100 font-display"
            >
              <Phone className="w-4 h-4 text-[#C90C12]" />
              <span>Hotline: {companyData.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-extrabold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 font-display uppercase tracking-wider"
            >
              <span>Kostenlose Offerte sichern</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
