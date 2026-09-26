import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/cleaningData';
import confetti from 'canvas-confetti';
import { SparkleStar, MiniSparkle, DotCluster, BubblesIcon, CleaningSprayIcon, StarBurst } from './SparkleIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'umzugsreinigung',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch (err) {
      // safe fallback
    }
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Graphic Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contact-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-dot-grid)" />
      </svg>

      {/* Floating Sparkle Stars & Cleaning Graphics in Background */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-16 left-12 sm:left-20 w-7 h-7 text-[#C90C12]/20" />
        <SparkleStar className="absolute top-24 right-14 sm:right-28 w-6 h-6 text-slate-300" />
        <MiniSparkle className="absolute top-40 left-1/3 w-4 h-4 text-emerald-500/40" />
        <BubblesIcon className="absolute bottom-20 left-12 w-9 h-9 text-sky-400/30" />
        <CleaningSprayIcon className="absolute bottom-28 right-16 w-8 h-8 text-slate-300/40" />
        <StarBurst className="absolute top-2/3 right-8 w-6 h-6 text-amber-500/30" />
        <DotCluster className="absolute bottom-12 left-1/4 w-8 h-8 text-slate-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            KONTAKT &amp; BERATUNG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162039] tracking-tight font-display">
            Wir freuen uns auf <span className="font-italic-accent text-[#C90C12]">Ihre Anfrage</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
            Holen Sie sich jetzt Ihre kostenlose und unverbindliche Offerte für Zürich &amp; Winterthur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C90C12] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  Telefonische Hotline
                </div>
                <a
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-extrabold text-[#162039] hover:text-[#C90C12] transition-colors block mt-0.5 font-display"
                >
                  {companyData.phone}
                </a>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-sans">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{companyData.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  Schriftliche Offerte per E-Mail
                </div>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-base font-extrabold text-[#162039] hover:text-[#C90C12] transition-colors block mt-0.5 font-display"
                >
                  {companyData.email}
                </a>
                <div className="text-xs text-slate-500 mt-1 font-sans">
                  Antwort in der Regel innert 24 Stunden
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#FAF9F5] border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#162039] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                  Standort &amp; Firmensitz
                </div>
                <div className="text-sm font-extrabold text-[#162039] mt-0.5 font-display">
                  {companyData.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-sans">
                  {companyData.address}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  Handelsregister: {companyData.registerNumber}
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-[#162039] text-white border border-slate-800">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-extrabold text-white font-display">100% Datenschutz &amp; Diskretion</div>
                  <div className="text-[11px] text-slate-300 mt-0.5 font-sans">
                    Ihre Daten werden vertraulich ausschliesslich für das unverbindliche Angebot verwendet.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-slate-200/90 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#162039] font-display">
                    Herzlichen Dank für Ihre Anfrage!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                    Wir haben Ihre Daten erhalten. Unser Kundenteam prüft Ihre Angaben und meldet sich schnellstmöglich mit einem verbindlichen Angebot bei Ihnen.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'umzugsreinigung', date: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#162039] bg-white hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer font-display"
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                        Vor- &amp; Nachname *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="z.B. Beat Meier"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="z.B. 079 123 45 67"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors font-sans"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@beispiel.ch"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                        Gewünschter Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors cursor-pointer font-sans"
                      >
                        <option value="umzugsreinigung">Umzugsreinigung mit Abnahmegarantie</option>
                        <option value="bueroreinigung">Büroreinigung (Gewerbe &amp; Praxen)</option>
                        <option value="wohnungsreinigung">Wohnungsreinigung (Unterhalt)</option>
                        <option value="fensterreinigung">Fenster- &amp; Storenreinigung</option>
                        <option value="baureinigung">Baureinigung / Bauabnahme</option>
                      </select>
                    </div>

                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                      Wunschdatum oder Zeitraum
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block font-display">
                      Zusätzliche Angaben zum Objekt (Zimmer, Stockwerk, Ort)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="z.B. 3.5 Zimmer Wohnung in Zürich Oerlikon, Abgabetermin am 30. des Monats..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer font-display"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kostenlose Offerte jetzt anfordern</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2 font-sans">
                      Keine Vorauszahlung • 100% Zufriedenheits- &amp; Abnahmegarantie
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
