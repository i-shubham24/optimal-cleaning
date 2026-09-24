import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { companyData } from '../data/cleaningData';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, onClose, prefillData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'umzugsreinigung',
    rooms: '3.5 Zimmer',
    postalCode: '',
    date: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        service: prefillData.service || prev.service,
        rooms: prefillData.rooms || prev.rooms,
        notes: prefillData.estimatedPrice ? `Geschätzter Richtpreis: ${prefillData.estimatedPrice}` : prev.notes,
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {}
  };

  const handleClose = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#C90C12] text-white">
              Kostenlose Offerte
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1">
              Reinigungsofferte anfordern
            </h2>
            <p className="text-xs text-slate-300">
              Verbindlicher Fixpreis • 100% Abnahmegarantie • Antwort innert 24h
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Schliessen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#162039]">
                Vielen Dank, {formData.name || 'lieber Kunde'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Ihre Offertanfrage für <strong className="text-[#162039]">{formData.service}</strong> ist erfolgreich bei uns eingegangen. Wir berechnen Ihr persönliches Fixpreis-Angebot und senden es Ihnen umgehend zu.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-md shadow-red-600/20 cursor-pointer"
                >
                  Fenster schliessen
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-100 pb-3">
                <span className={step === 1 ? 'text-[#C90C12]' : 'text-slate-600'}>
                  Schritt 1: Angaben zum Objekt
                </span>
                <span className={step === 2 ? 'text-[#C90C12]' : 'text-slate-600'}>
                  Schritt 2: Kontaktdaten
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  
                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Welche Reinigung wünschen Sie?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] cursor-pointer"
                    >
                      <option value="Umzugsreinigung mit Abnahmegarantie">Umzugsreinigung (mit 100% Abnahmegarantie)</option>
                      <option value="Wohnungsreinigung Unterhalt">Wohnungsreinigung (Unterhalt / Frühlingsputz)</option>
                      <option value="Büroreinigung">Büroreinigung (Gewerbe / Praxen)</option>
                      <option value="Fenster & Storenreinigung">Fenster- &amp; Storenreinigung</option>
                      <option value="Baureinigung">Baureinigung / Bauabnahme</option>
                      <option value="Gebäudereinigung">Gebäudereinigung</option>
                    </select>
                  </div>

                  {/* Rooms / Size */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Objektgrösse
                      </label>
                      <select
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12] cursor-pointer"
                      >
                        <option value="1.5 Zimmer">1.0 bis 1.5 Zimmer</option>
                        <option value="2.5 Zimmer">2.0 bis 2.5 Zimmer</option>
                        <option value="3.5 Zimmer">3.0 bis 3.5 Zimmer</option>
                        <option value="4.5 Zimmer">4.0 bis 4.5 Zimmer</option>
                        <option value="5.5 Zimmer">5.5+ Zimmer / Haus</option>
                        <option value="Gewerbe">Gewerbeobjekt</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Postleitzahl / Ort *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="z.B. 8052 Zürich"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Wunschdatum (oder Zeitraum)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#162039] hover:bg-[#C90C12] transition-colors cursor-pointer"
                    >
                      <span>Weiter zu den Kontaktdaten</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vorname und Nachname"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="079 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="beispiel@mail.ch"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Bemerkungen / Vorab-Kalkulation
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Spezielle Wünsche (z.B. Balkon, Backofen, Abgabetermin)..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#162039] focus:outline-none focus:border-[#C90C12]"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3.5 rounded-2xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                    >
                      <span>Offerte jetzt absenden</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

        {/* Modal Footer with Direct Phone fallback */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Dringender Termin?</span>
          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className="font-extrabold text-[#C90C12] hover:underline"
          >
            Hotline anrufen: {companyData.phone}
          </a>
        </div>

      </div>
    </div>
  );
}
