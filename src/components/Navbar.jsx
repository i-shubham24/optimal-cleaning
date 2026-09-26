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

      const sections = ['home', 'ueber-uns', 'dienstleistungen', 'ablauf', 'preise', 'kontakt'];
      const scrollPos = window.scrollY + 120;
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
    { name: 'Über uns', href: '#ueber-uns', id: 'ueber-uns' },
    { name: 'Dienstleistungen', href: '#dienstleistungen', id: 'dienstleistungen' },
    { name: 'Ablauf', href: '#ablauf', id: 'ablauf' },
    { name: 'Preise', href: '#preise', id: 'preise' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/70 py-2.5 sm:py-3'
          : 'bg-white/80 backdrop-blur-xs py-3.5 sm:py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* LEFT: Logo + Simple Plain Text Nav Links (NO pills as requested!) */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center shrink-0" 
              aria-label="Optimal Reinigung Startseite"
            >
              <img 
                src="/images/logo_neu.png" 
                alt="Optimal Reinigung" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Simple Nav Items (No pills, crisp text on left side) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs xl:text-sm font-bold transition-colors font-display tracking-tight ${
                      isActive
                        ? 'text-[#C90C12]'
                        : 'text-slate-700 hover:text-[#C90C12]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: Hotline & Clean Quote Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Phone hotline */}
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#162039] hover:text-[#C90C12] transition-colors font-display"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-[#C90C12]" />
              <span>{companyData.phone}</span>
            </a>

            {/* Clean quote button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] shadow-md shadow-slate-900/10 hover:shadow-red-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer font-display tracking-tight"
            >
              <span>Offerte anfordern</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-[#C90C12] rounded-xl focus:outline-none"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
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
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-[#162039] bg-slate-100 font-display"
            >
              <Phone className="w-4 h-4 text-[#C90C12]" />
              <span>Hotline: {companyData.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-extrabold text-white bg-[#162039] hover:bg-[#C90C12] shadow-lg shadow-slate-900/20 font-display uppercase tracking-wider"
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
