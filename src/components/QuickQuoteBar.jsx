import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function QuickQuoteBar({ onSelectQuickConfig }) {
  const [service, setService] = useState('umzug');
  const [rooms, setRooms] = useState('3.5');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSelectQuickConfig) {
      onSelectQuickConfig({ service, rooms: parseFloat(rooms) || 3.5, date });
    }
    const target = document.getElementById('preisrechner');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
      {/* Premier Cleaning Inspired Quick Bar */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/90 p-4 sm:p-5">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          
          {/* Label Tag */}
          <div className="lg:col-span-3 px-2 py-1">
            <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#162039] block">
              DIENSTLEISTUNG WÄHLEN
            </span>
            <span className="text-[11px] text-slate-400">
              Unverbindlich &amp; Fixpreis
            </span>
          </div>

          {/* Service Dropdown */}
          <div className="lg:col-span-3">
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors appearance-none cursor-pointer font-sans"
              >
                <option value="umzug">Umzugsreinigung (100% Garantie)</option>
                <option value="buero">Büro- &amp; Gewerbereinigung</option>
                <option value="unterhalt">Wohnungsreinigung (Unterhalt)</option>
                <option value="fenster">Fenster- &amp; Storenreinigung</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Rooms / Object Size */}
          <div className="lg:col-span-3">
            <div className="relative">
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold text-[#162039] focus:outline-none focus:border-[#C90C12] transition-colors appearance-none cursor-pointer font-sans"
              >
                <option value="1.5">1.0 bis 1.5 Zimmer (bis 45 m²)</option>
                <option value="2.5">2.0 bis 2.5 Zimmer (bis 65 m²)</option>
                <option value="3.5">3.0 bis 3.5 Zimmer (bis 85 m²)</option>
                <option value="4.5">4.0 bis 4.5 Zimmer (bis 110 m²)</option>
                <option value="5.5">5.5 Zimmer (bis 140 m²)</option>
                <option value="6.5">6.5+ Zimmer / Einfamilienhaus</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="lg:col-span-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer uppercase tracking-wider font-display"
            >
              <span>PREIS BERECHNEN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
