import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Quote } from 'lucide-react';
import { reviewsData } from '../data/cleaningData';

export default function CleanoraTestimonials() {
  return (
    <section id="bewertungen" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Graphic Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="test-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#162039" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#test-dot-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Pure Typography, NO pill container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            VERIFIZIERTE KUNDENERFAHRUNGEN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#162039] tracking-tight">
            Geschichten aus <span className="font-italic-accent text-[#C90C12]">zufriedenen</span> Heimen
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
            Unsere Kunden in Zürich &amp; Winterthur schätzen unsere Schweizer Zuverlässigkeit, transparente Fixpreise und 100% Abnahmegarantie.
          </p>
        </div>

        {/* Cleanora Bento Grid with Center Cleaner Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Review */}
          <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                  alt="Dr. Beat Meier" 
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                />
                <div>
                  <h3 className="text-sm font-display font-extrabold text-[#162039]">
                    Dr. Beat Meier
                  </h3>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans">
                "Die Wohnungsabgabe in Zürich Seefeld verlief absolut reibungslos. Die Verwaltung hatte nicht die geringste Beanstandung. Pünktlich, freundlich und extrem gründlich!"
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-400 font-display">
              Gebucht: Umzugsreinigung 4.5 Zimmer Zürich
            </div>
          </div>

          {/* Card 2: Center Photo of Cleaners at Work */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative min-h-[300px] group">
            <img 
              src="/images/hero_cleaner.jpg" 
              alt="Optimal Reinigung Team bei der Arbeit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-md backdrop-blur-xs font-display">
                Optimal Reinigung Zürich
              </span>
              <p className="text-sm font-display font-bold mt-2">
                Persönlich vor Ort für Ihre Zufriedenheit
              </p>
            </div>
          </div>

          {/* Card 3: Review */}
          <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" 
                  alt="Corinne Schlatter" 
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                />
                <div>
                  <h3 className="text-sm font-display font-extrabold text-[#162039]">
                    Corinne Schlatter
                  </h3>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans">
                "Seit über zwei Jahren reinigt Optimal Reinigung unsere Kanzlei in der Winterthurer Altstadt. Absolute Diskretion, makellose Sauberkeit und stets dasselbe sympathische Team."
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-400 font-display">
              Gebucht: Büroreinigung wöchentlich Winterthur
            </div>
          </div>

          {/* Card 4: Photo of Cleaner */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 relative min-h-[300px] group">
            <img 
              src="/images/kitchen_sparkle.jpg" 
              alt="Saubere Küche Übergabe" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="text-xs font-bold uppercase tracking-widest bg-red-600/90 px-3 py-1 rounded-md font-display">
                100% Abnahmegarantie
              </span>
              <p className="text-sm font-display font-bold mt-2">
                Porentief sauber bis in jeden Winkel
              </p>
            </div>
          </div>

          {/* Card 5: Review */}
          <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" 
                  alt="Markus Frei" 
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                />
                <div>
                  <h3 className="text-sm font-display font-extrabold text-[#162039]">
                    Markus Frei
                  </h3>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans">
                "Hervorragendes Preis-Leistungs-Verhältnis. Der Fixpreis wurde auf den Rappen genau eingehalten und das Team war bei der Abgabe pünktlich anwesend."
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-400 font-display">
              Gebucht: Umzugsreinigung 3.5 Zimmer
            </div>
          </div>

          {/* Card 6: Review */}
          <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" 
                  alt="Elena Rossi" 
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white"
                />
                <div>
                  <h3 className="text-sm font-display font-extrabold text-[#162039]">
                    Elena Rossi
                  </h3>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans">
                "Endlich eine Reinigungsfirma in Zürich, auf die man sich zu 100% verlassen kann. Unser Holzparkett und die Bäder glänzen wie am ersten Tag."
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-400 font-display">
              Gebucht: Wohnungsreinigung alle 2 Wochen
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
