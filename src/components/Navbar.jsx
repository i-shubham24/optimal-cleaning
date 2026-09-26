import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { companyData } from '../data/cleaningData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for navbar indicator
      const sections = ['home', 'dienstleistungen', 'ueber-uns', 'preise', 'kontakt'];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Dienstleistungen', href: '#dienstleistungen', id: 'dienstleistungen' },
    { name: 'Über uns', href: '#ueber-uns', id: 'ueber-uns' },
    { name: 'Preise', href: '#preise', id: 'preise' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/70 py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* LEFT: Capsule Pill Menu (FreshAura reference style) */}
          <div className="hidden lg:flex items-center flex-1 justify-start">
            <nav className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap font-display tracking-tight ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                        : 'text-slate-600 hover:text-[#C90C12] hover:bg-slate-50/80'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* MOBILE LEFT: Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#C90C12] rounded-full focus:outline-none"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* CENTER: Exact Centered Logo */}
          <div className="flex-1 lg:flex-none flex items-center justify-center">
            <a 
              href="#home" 
              className="group inline-flex items-center justify-center shrink-0" 
              aria-label="Optimal Reinigung Startseite"
            >
              <img 
                src="/images/logo_neu.png" 
                alt="Optimal Reinigung" 
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* RIGHT: Capsule Action Pill (Contact / Quote) */}
          <div className="flex-1 flex items-center justify-end gap-3 shrink-0">
            {/* Direct hotline pill for larger screens */}
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#162039] bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors font-display"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-[#C90C12]" />
              <span>{companyData.phone}</span>
            </a>

            {/* Dark capsule quote button matching reference */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] shadow-md shadow-slate-900/10 hover:shadow-red-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer font-display"
            >
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>Offerte anfordern</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 rounded-3xl bg-white/98 backdrop-blur-xl border border-slate-200 p-5 shadow-2xl space-y-4">
          <div className="grid gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#C90C12] rounded-2xl transition-colors font-display"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold text-[#162039] bg-slate-100 font-display"
            >
              <Phone className="w-4 h-4 text-[#C90C12]" />
              <span>Hotline: {companyData.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-xs font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] shadow-lg shadow-slate-900/20 font-display uppercase tracking-wider"
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
