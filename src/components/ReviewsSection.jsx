import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, MapPin, Quote, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../data/cleaningData';

export default function ReviewsSection() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = reviewsData.filter(r => {
    if (filter === 'umzug') return r.service.toLowerCase().includes('umzug');
    if (filter === 'gewerbe') return r.service.toLowerCase().includes('büro');
    return true;
  });

  return (
    <section id="bewertungen" className="py-20 sm:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C90C12] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
              Verifizierte Kundenstimmen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E294B] tracking-tight">
              Erfahrungen aus Zürich &amp; Winterthur
            </h2>
            <p className="text-sm text-slate-600">
              Über 5'000 erfolgreich gereinigte und abgenommene Objekte im Kanton Zürich.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shrink-0">
            <div className="text-3xl font-black text-[#1E294B]">4.9</div>
            <div>
              <div className="flex text-amber-400 text-sm">
                {'★'.repeat(5)}
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Basierend auf Kundenbewertungen
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-8">
          {[
            { id: 'all', label: 'Alle Bewertungen' },
            { id: 'umzug', label: 'Umzugsreinigungen' },
            { id: 'gewerbe', label: 'Büro & Gewerbe' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#1E294B] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
            >
              <div>
                {/* Star rating and service tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {rev.date}
                  </span>
                </div>

                {/* Quote body (concise, max 3 lines per design-taste-frontend) */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-[#1E294B]">
                      {rev.name}
                    </h3>
                    <div className="text-[11px] text-slate-500">
                      {rev.role}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                    <MapPin className="w-3 h-3 text-[#C90C12]" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] font-bold text-slate-400">
                  {rev.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
