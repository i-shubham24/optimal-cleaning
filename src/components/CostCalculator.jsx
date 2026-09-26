import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function CostCalculator({ initialConfig, onOpenQuoteWithConfig }) {
  const [serviceType, setServiceType] = useState('umzug');
  const [rooms, setRooms] = useState(3.5);
  const [area, setArea] = useState(85);
  const [officeArea, setOfficeArea] = useState(120);
  const [windowTier, setWindowTier] = useState('3.5');
  const [frequency, setFrequency] = useState('weekly');
  const [officeFrequency, setOfficeFrequency] = useState('weekly');
  
  // Umzug Addons
  const [hasBalcony, setHasBalcony] = useState(true);
  const [hasOvenDeepClean, setHasOvenDeepClean] = useState(true);
  const [hasCarpet, setHasCarpet] = useState(false);
  const [hasCellar, setHasCellar] = useState(false);

  // Fenster Addons
  const [hasShutters, setHasShutters] = useState(true);
  const [hasConservatory, setHasConservatory] = useState(false);

  // Büro Addons
  const [hasKitchenette, setHasKitchenette] = useState(true);
  const [hasSanitaryDeep, setHasSanitaryDeep] = useState(false);
  const [hasOfficeCarpet, setHasOfficeCarpet] = useState(false);

  // Sync when prefilled from QuickQuoteBar
  useEffect(() => {
    if (initialConfig) {
      if (initialConfig.service) {
        const s = initialConfig.service.toLowerCase();
        if (s.includes('umzug')) setServiceType('umzug');
        else if (s.includes('unterhalt') || s.includes('wohn')) setServiceType('unterhalt');
        else if (s.includes('buer') || s.includes('büro')) setServiceType('buero');
        else if (s.includes('fenster')) setServiceType('fenster');
      }
      if (initialConfig.rooms !== undefined) {
        const parsed = typeof initialConfig.rooms === 'number' 
          ? initialConfig.rooms 
          : parseFloat(initialConfig.rooms);
        if (!isNaN(parsed) && parsed > 0) {
          setRooms(parsed);
          setArea(Math.round(parsed * 24));
        }
      }
    }
  }, [initialConfig]);

  // Authentic service guarantees dynamically matching the selected service
  const serviceGuarantees = {
    umzug: [
      '100% gesetzliche Abnahmegarantie mit Begleitung',
      'Eigene Vorabnahme vor dem offiziellen Übergabetermin',
      'Kostenlose und sofortige Nachreinigung vor Ort',
      'Haftpflichtversicherung bis CHF 5\'000\'000',
    ],
    unterhalt: [
      'Feste Schweizer Stammpersonal-Zuteilung',
      'Regelmässige Pflege oder gründlicher Frühlingsputz',
      'Umweltschonende Schweizer Profi-Reinigungsmittel',
      'Haftpflichtversicherung bis CHF 5\'000\'000',
    ],
    buero: [
      'Reinigung flexibel am frühen Morgen oder nach Feierabend',
      'Hygienische Desinfektion aller Arbeitsplätze & Sanitär',
      'Feste Schlüsselverwaltung & Vertretungsgarantie',
      'Haftpflichtversicherung bis CHF 5\'000\'000',
    ],
    fenster: [
      'Streifenfreier Durchblick für Innen- und Aussenglas',
      'Sorgfältige Pflege von Rahmen, Falzen & Fensterbänken',
      'Moderne Osmose-Ausrüstung & Leitern inklusive',
      'Transparenter Pauschalpreis ohne Anfahrtszuschlag',
    ],
  };

  // Dynamic, reactive pricing calculation in Swiss Francs (CHF)
  const calculation = useMemo(() => {
    const numRooms = typeof rooms === 'number' ? rooms : parseFloat(rooms) || 3.5;
    const numArea = typeof area === 'number' ? area : parseInt(area, 10) || 85;
    let basePrice = 790;
    let subtitleText = 'inkl. Abnahmegarantie & Anfahrt';
    const breakdown = [];

    if (serviceType === 'umzug') {
      // Room tier base rates (faithful to old site tiers)
      const roomPrices = {
        1.0: 440,
        1.5: 480,
        2.0: 540,
        2.5: 590,
        3.0: 720,
        3.5: 790,
        4.0: 840,
        4.5: 890,
        5.0: 940,
        5.5: 990,
        6.0: 1180,
        6.5: 1290,
      };
      
      const matchedTier = Object.keys(roomPrices).reduce((prev, curr) => {
        return Math.abs(parseFloat(curr) - numRooms) < Math.abs(parseFloat(prev) - numRooms) ? curr : prev;
      });
      basePrice = roomPrices[matchedTier] || 790;
      breakdown.push(`Basispreis für ${numRooms} Zimmer: CHF ${basePrice}.-`);

      // Area modifier: standard benchmark is rooms * 24 m²
      const standardArea = Math.round(numRooms * 24);
      const areaDiff = numArea - standardArea;
      if (areaDiff > 10) {
        const areaSurcharge = Math.round((areaDiff * 2) / 10) * 10;
        basePrice += areaSurcharge;
        breakdown.push(`Zusatzfläche (${numArea} m² vs. Standard ${standardArea} m²): +CHF ${areaSurcharge}.-`);
      } else if (areaDiff < -15) {
        const areaDiscount = Math.round((Math.abs(areaDiff) * 1.5) / 10) * 10;
        basePrice = Math.max(400, basePrice - areaDiscount);
        breakdown.push(`Kompakte Fläche (${numArea} m²): -CHF ${areaDiscount}.-`);
      }

      // Addons
      if (hasBalcony) {
        basePrice += 50;
        breakdown.push('Balkon / Terrasse: +CHF 50.-');
      }
      if (hasOvenDeepClean) {
        basePrice += 40;
        breakdown.push('Backofen Entfettung Spezial: +CHF 40.-');
      }
      if (hasCarpet) {
        basePrice += 110;
        breakdown.push('Teppich Shampoonieren: +CHF 110.-');
      }
      if (hasCellar) {
        basePrice += 60;
        breakdown.push('Keller / Estrichabteil: +CHF 60.-');
      }

      subtitleText = 'inkl. 100% Abnahmegarantie & Übergabebegleitung';

    } else if (serviceType === 'unterhalt') {
      // Wohnungsreinigung Unterhalt ab CHF 42 / Std.
      const roomHours = {
        1.0: 120,
        1.5: 150,
        2.0: 180,
        2.5: 210,
        3.0: 240,
        3.5: 270,
        4.0: 300,
        4.5: 330,
        5.0: 360,
        5.5: 390,
        6.0: 420,
        6.5: 460,
      };
      const matchedTier = Object.keys(roomHours).reduce((prev, curr) => {
        return Math.abs(parseFloat(curr) - numRooms) < Math.abs(parseFloat(prev) - numRooms) ? curr : prev;
      });
      basePrice = roomHours[matchedTier] || 270;
      breakdown.push(`Basis für ${numRooms} Zimmer: CHF ${basePrice}.-`);

      // Area modifier
      const standardArea = Math.round(numRooms * 24);
      const areaDiff = numArea - standardArea;
      if (areaDiff > 10) {
        const areaSurcharge = Math.round((areaDiff * 1.2) / 10) * 10;
        basePrice += areaSurcharge;
        breakdown.push(`Fläche ${numArea} m²: +CHF ${areaSurcharge}.-`);
      }

      // Frequency discount
      if (frequency === 'weekly') {
        const disc = Math.round(basePrice * 0.15);
        basePrice -= disc;
        breakdown.push('Wöchentliches Abo (-15% Rabatt): -CHF ' + disc + '.-');
      } else if (frequency === 'biweekly') {
        const disc = Math.round(basePrice * 0.10);
        basePrice -= disc;
        breakdown.push('14-tägliches Abo (-10% Rabatt): -CHF ' + disc + '.-');
      }

      if (hasOvenDeepClean) {
        basePrice += 40;
        breakdown.push('Backofen Spezialreinigung: +CHF 40.-');
      }
      if (hasCarpet) {
        basePrice += 90;
        breakdown.push('Teppich Tiefenreinigung: +CHF 90.-');
      }

      subtitleText = 'pro Reinigungseinsatz, inkl. Schweizer Eco-Mitteln';

    } else if (serviceType === 'buero') {
      // Büroreinigung ab CHF 45 / Std.
      const currentArea = typeof officeArea === 'number' ? officeArea : parseInt(officeArea, 10) || 120;
      // Approx 35 m² cleaned per hour in standard commercial layout
      const hoursNeeded = Math.max(2, Math.round((currentArea / 35) * 10) / 10);
      basePrice = Math.round(hoursNeeded * 45 / 5) * 5;
      breakdown.push(`Bürofläche ${currentArea} m² (~${hoursNeeded} Std.): CHF ${basePrice}.-`);

      if (officeFrequency === 'daily') {
        const disc = Math.round(basePrice * 0.20);
        basePrice -= disc;
        breakdown.push('Täglicher Einsatz (-20% Rabatt): -CHF ' + disc + '.-');
      } else if (officeFrequency === 'multiple') {
        const disc = Math.round(basePrice * 0.15);
        basePrice -= disc;
        breakdown.push('2-3x pro Woche (-15% Rabatt): -CHF ' + disc + '.-');
      } else if (officeFrequency === 'weekly') {
        const disc = Math.round(basePrice * 0.10);
        basePrice -= disc;
        breakdown.push('Wöchentlicher Einsatz (-10% Rabatt): -CHF ' + disc + '.-');
      }

      if (hasKitchenette) {
        basePrice += 35;
        breakdown.push('Teeküche & Aufenthaltsbereich: +CHF 35.-');
      }
      if (hasSanitaryDeep) {
        basePrice += 45;
        breakdown.push('Sanitär-Intensivdesinfektion: +CHF 45.-');
      }
      if (hasOfficeCarpet) {
        basePrice += 80;
        breakdown.push('Teppichboden Spezialpflege: +CHF 80.-');
      }

      subtitleText = 'pro Reinigungseinsatz nach individuellem Pflichtenheft';

    } else if (serviceType === 'fenster') {
      // Fensterreinigung ab CHF 160.-
      const windowTiers = {
        '1.5': { label: '1.0 bis 2.0 Zimmer', price: 160 },
        '3.5': { label: '2.5 bis 3.5 Zimmer', price: 240 },
        '4.5': { label: '4.0 bis 4.5 Zimmer', price: 320 },
        '5.5': { label: '5.0 bis 5.5 Zimmer', price: 420 },
        'haus': { label: 'Einfamilienhaus / Villa', price: 540 },
      };

      const selectedObj = windowTiers[windowTier] || windowTiers['3.5'];
      basePrice = selectedObj.price;
      breakdown.push(`${selectedObj.label}: CHF ${basePrice}.-`);

      if (hasShutters) {
        basePrice += 70;
        breakdown.push('Lamellenstoren & Rahmen gründlich: +CHF 70.-');
      }
      if (hasConservatory) {
        basePrice += 120;
        breakdown.push('Wintergarten / Glasdach Spezial: +CHF 120.-');
      }

      subtitleText = 'Pauschalpreis inkl. Glas, Rahmen & Osmosewasser';
    }

    const rounded = Math.round(basePrice / 10) * 10;
    const minPrice = Math.round((rounded * 0.96) / 10) * 10;
    const maxPrice = Math.round((rounded * 1.05) / 10) * 10;

    return {
      min: minPrice,
      max: maxPrice,
      avg: rounded,
      subtitle: subtitleText,
      breakdown,
    };
  }, [
    serviceType, rooms, area, officeArea, windowTier, frequency, officeFrequency,
    hasBalcony, hasOvenDeepClean, hasCarpet, hasCellar, hasShutters, hasConservatory,
    hasKitchenette, hasSanitaryDeep, hasOfficeCarpet
  ]);

  const handleRequestQuote = () => {
    let details = `${rooms} Zimmer (${area} m²)`;
    if (serviceType === 'buero') {
      details = `Bürofläche ${officeArea} m² (${officeFrequency})`;
    } else if (serviceType === 'fenster') {
      details = `Fensterreinigung für Kategorie ${windowTier}`;
    }

    const configData = {
      service: serviceType === 'umzug' ? 'Umzugsreinigung' : serviceType === 'buero' ? 'Büroreinigung' : serviceType === 'fenster' ? 'Fensterreinigung' : 'Wohnungsreinigung',
      rooms: details,
      estimatedPrice: `CHF ${calculation.min} bis ${calculation.max}`,
      addons: calculation.breakdown,
    };
    onOpenQuoteWithConfig(configData);
  };

  return (
    <section id="preisrechner" className="scroll-mt-28 py-16 sm:py-24 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Background Graphic Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="calc-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#calc-dot-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Plain Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            TRANSPARENTE RICHTPREISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162039] tracking-tight font-display">
            Interaktiver Preisrechner für <span className="font-italic-accent text-[#C90C12]">Ihre Reinigung</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
            Kalkulieren Sie in wenigen Klicks einen verlässlichen Richtpreis in Schweizer Franken für Zürich und Winterthur. Keine versteckten Kosten.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Interactive Inputs (Col 7) */}
            <div className="lg:col-span-7 p-6 sm:p-9 space-y-7">
              
              {/* Step 1: Service Type Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                  1. Gewünschte Dienstleistung
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'umzug', name: 'Umzugsreinigung', note: '100% Abnahmegarantie' },
                    { id: 'unterhalt', name: 'Wohnungsreinigung', note: 'Unterhalt & Frühlingsputz' },
                    { id: 'buero', name: 'Büroreinigung', note: 'Gewerbe & Praxen' },
                    { id: 'fenster', name: 'Fensterreinigung', note: 'Glas, Rahmen, Storen' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        serviceType === s.id
                          ? 'border-[#C90C12] bg-red-50/50 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-extrabold font-display ${
                        serviceType === s.id ? 'text-[#C90C12]' : 'text-[#162039]'
                      }`}>
                        {s.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-sans">
                        {s.note}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Dynamic Controls based on chosen service */}

              {/* Service A: Umzugsreinigung */}
              {serviceType === 'umzug' && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                        2. Zimmeranzahl
                      </label>
                      <span className="text-sm font-extrabold text-[#162039] px-3 py-1 bg-slate-100 rounded-lg font-display">
                        {rooms >= 6.5 ? '6.5+ Zimmer / Haus' : `${rooms} Zimmer`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="6.5"
                      step="0.5"
                      value={rooms}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setRooms(val);
                        setArea(Math.round(val * 24));
                      }}
                      className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer accent-[#C90C12]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium font-sans">
                      <span>1.0 Zi.</span>
                      <span>2.5 Zi.</span>
                      <span>3.5 Zi.</span>
                      <span>4.5 Zi.</span>
                      <span>5.5 Zi.</span>
                      <span>6.5+ Zi.</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                        3. Wohnfläche in m²
                      </label>
                      <span className="text-sm font-extrabold text-[#162039] px-3 py-1 bg-slate-100 rounded-lg font-display">
                        ca. {area} m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="220"
                      step="5"
                      value={area}
                      onChange={(e) => setArea(parseInt(e.target.value, 10))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer accent-[#C90C12]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium font-sans">
                      <span>30 m²</span>
                      <span>85 m²</span>
                      <span>140 m²</span>
                      <span>220 m²</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      4. Zusatzoptionen (optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasBalcony}
                          onChange={(e) => setHasBalcony(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Balkon oder Terrasse (+CHF 50)</span>
                      </label>

                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasOvenDeepClean}
                          onChange={(e) => setHasOvenDeepClean(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Backofen Entfettung (+CHF 40)</span>
                      </label>

                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasCarpet}
                          onChange={(e) => setHasCarpet(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Teppich Shampoonieren (+CHF 110)</span>
                      </label>

                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasCellar}
                          onChange={(e) => setHasCellar(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Keller oder Estrich (+CHF 60)</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Service B: Wohnungsreinigung Unterhalt */}
              {serviceType === 'unterhalt' && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                        2. Zimmeranzahl
                      </label>
                      <span className="text-sm font-extrabold text-[#162039] px-3 py-1 bg-slate-100 rounded-lg font-display">
                        {rooms} Zimmer
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="6.5"
                      step="0.5"
                      value={rooms}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setRooms(val);
                        setArea(Math.round(val * 24));
                      }}
                      className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer accent-[#C90C12]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium font-sans">
                      <span>1.0 Zi.</span>
                      <span>2.5 Zi.</span>
                      <span>3.5 Zi.</span>
                      <span>4.5 Zi.</span>
                      <span>6.5+ Zi.</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                        3. Wohnfläche in m²
                      </label>
                      <span className="text-sm font-extrabold text-[#162039] px-3 py-1 bg-slate-100 rounded-lg font-display">
                        ca. {area} m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="220"
                      step="5"
                      value={area}
                      onChange={(e) => setArea(parseInt(e.target.value, 10))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer accent-[#C90C12]"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      4. Reinigungsintervall
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'weekly', label: 'Wöchentlich', desc: '-15% Rabatt' },
                        { id: 'biweekly', label: 'Alle 14 Tage', desc: '-10% Rabatt' },
                        { id: 'single', label: 'Einmalig', desc: 'Frühlingsputz' },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id)}
                          className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer font-display ${
                            frequency === f.id
                              ? 'border-[#C90C12] bg-red-50/50 text-[#C90C12]'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div>{f.label}</div>
                          <div className="text-[10px] text-slate-400 font-normal font-sans mt-0.5">{f.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Service C: Büroreinigung */}
              {serviceType === 'buero' && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                        2. Bürofläche in m²
                      </label>
                      <span className="text-sm font-extrabold text-[#162039] px-3 py-1 bg-slate-100 rounded-lg font-display">
                        ca. {officeArea} m²
                      </span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="400"
                      step="10"
                      value={officeArea}
                      onChange={(e) => setOfficeArea(parseInt(e.target.value, 10))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer accent-[#C90C12]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium font-sans">
                      <span>40 m²</span>
                      <span>120 m²</span>
                      <span>200 m²</span>
                      <span>300 m²</span>
                      <span>400 m²</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      3. Reinigungszyklus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'weekly', label: '1x wöchentlich', desc: '-10%' },
                        { id: 'multiple', label: '2-3x / Woche', desc: '-15%' },
                        { id: 'daily', label: 'Täglich', desc: '-20%' },
                        { id: 'monthly', label: 'Monatlich', desc: 'Standard' },
                      ].map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          onClick={() => setOfficeFrequency(o.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer font-display ${
                            officeFrequency === o.id
                              ? 'border-[#C90C12] bg-red-50/50 text-[#C90C12]'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div>{o.label}</div>
                          <div className="text-[10px] text-slate-400 font-normal font-sans">{o.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      4. Gewerbliche Zusatzleistungen
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasKitchenette}
                          onChange={(e) => setHasKitchenette(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Teeküche &amp; Kaffeemaschine (+CHF 35)</span>
                      </label>

                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasSanitaryDeep}
                          onChange={(e) => setHasSanitaryDeep(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Sanitär-Intensivdesinfektion (+CHF 45)</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* Service D: Fensterreinigung */}
              {serviceType === 'fenster' && (
                <>
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      2. Objektgrösse für Fensterreinigung
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: '1.5', label: '1.0 bis 2.0 Zimmer', price: 'ab CHF 160.-' },
                        { id: '3.5', label: '2.5 bis 3.5 Zimmer', price: 'ab CHF 240.-' },
                        { id: '4.5', label: '4.0 bis 4.5 Zimmer', price: 'ab CHF 320.-' },
                        { id: '5.5', label: '5.0 bis 5.5 Zimmer', price: 'ab CHF 420.-' },
                        { id: 'haus', label: 'Einfamilienhaus / Attika', price: 'ab CHF 540.-' },
                      ].map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setWindowTier(tier.id)}
                          className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer font-display ${
                            windowTier === tier.id
                              ? 'border-[#C90C12] bg-red-50/50 text-[#C90C12]'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div>{tier.label}</div>
                          <div className="text-[11px] text-slate-500 font-normal font-sans mt-0.5">{tier.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-display">
                      3. Fenster Zusatzleistungen
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasShutters}
                          onChange={(e) => setHasShutters(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Lamellenstoren &amp; Fensterläden gründlich reinigen (+CHF 70)</span>
                      </label>

                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasConservatory}
                          onChange={(e) => setHasConservatory(e.target.checked)}
                          className="rounded text-[#C90C12] focus:ring-[#C90C12] w-4 h-4"
                        />
                        <span>Wintergarten / Glasüberdachung / hohe Glasfronten (+CHF 120)</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Right Column: Live Price Summary & Action (Col 5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#162039] text-white p-6 sm:p-9 flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/10 text-white text-xs font-semibold backdrop-blur-xs mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Unverbindlicher Schweizer Richtpreis</span>
                </div>

                <div className="text-xs text-slate-300 uppercase tracking-widest font-bold font-display">
                  Geschätzter Fixpreis
                </div>

                <div className="my-2.5">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                    CHF {calculation.min}
                    <span className="text-xl sm:text-2xl text-slate-300 font-bold ml-1 font-sans">
                      bis {calculation.max}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-sans">
                    {calculation.subtitle}
                  </div>
                </div>

                {/* Live Breakdown Box */}
                <div className="my-5 p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300 font-sans">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                    Aktuelle Konfiguration:
                  </div>
                  {calculation.breakdown.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Dynamic Guarantees list per service */}
                <div className="my-5 pt-4 border-t border-white/10 space-y-2.5">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-display">
                    Immer inbegriffen:
                  </div>
                  {(serviceGuarantees[serviceType] || serviceGuarantees.umzug).map((guarantee, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#C90C12] hover:bg-[#9E0A0F] shadow-lg shadow-red-600/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer font-display"
                >
                  <span>Offerte mit diesen Angaben sichern</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2 font-sans">
                  100% kostenlos und unverbindlich • Antwort innert 24h
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
