import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState('kitchen');

  const comparisonItems = {
    kitchen: {
      title: 'Küche und Herdplatten nach Auszug',
      subtitle: 'Entfernung hartnäckiger Fett und Kalkablagerungen für die offizielle Wohnungsabgabe.',
      beforeImg: '/images/baureinigung.jpg',
      afterImg: '/images/kitchen_sparkle.jpg',
      stat: '100% Abnahmegarantie',
    },
    office: {
      title: 'Geschäftsräume und Glasfassaden',
      subtitle: 'Streifenfreie Panoramafenster und gepflegte Arbeitsplätze in Zürich.',
      beforeImg: '/images/fuhrpark.jpg',
      afterImg: '/images/office_cleaning.jpg',
      stat: 'Werterhalt & Hygiene',
    },
    windows: {
      title: 'Grossflächige Fensterfronten',
      subtitle: 'Kristallklare Durchsicht ohne Schlieren oder Schmutzreste an Rahmen und Falzen.',
      beforeImg: '/images/wohnungsreinigung_orig.jpg',
      afterImg: '/images/window_cleaner.jpg',
      stat: 'Glasklare Sicht',
    },
  };

  const current = comparisonItems[activeTab];

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section id="vorher-nachher" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C90C12] bg-red-50 px-3.5 py-1.5 rounded-xl border border-red-100 inline-block font-display">
            Sichtbare Schweizer Qualität
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E294B] tracking-tight">
            Vorher und Nachher im direkten Vergleich
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Verschieben Sie den Regler und erleben Sie den Unterschied, den echte Schweizer Gründlichkeit ausmacht.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs gap-1.5">
            {[
              { id: 'kitchen', label: 'Küche & Abgabe' },
              { id: 'office', label: 'Büro & Gewerbe' },
              { id: 'windows', label: 'Fensterfronten' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1E294B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1E294B] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200">
          
          <div 
            className="relative h-[320px] sm:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize group"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <img 
              src={current.afterImg} 
              alt="Nach der Reinigung" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After Label */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nachher: Optimal Sauber</span>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={current.beforeImg} 
                alt="Vor der Reinigung" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-slate-900/30" />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-bold shadow-md pointer-events-none">
                <span>Vorher: Stark verschmutzt</span>
              </div>
            </div>

            {/* Divider Line & Draggable Handle */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-2xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white text-[#1E294B] shadow-2xl border-2 border-[#C90C12] flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-[#C90C12]" />
              </div>
            </div>

          </div>

          {/* Bottom Info Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-2">
            <div>
              <h4 className="text-base font-extrabold text-[#1E294B]">
                {current.title}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {current.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-50 text-[#C90C12] border border-red-100 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{current.stat}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
