import React from 'react';
import { motion } from 'motion/react';
import { trustHighlights } from '../data/cleaningData';
import { Award, ShieldCheck, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function TrustStats() {
  const icons = [Award, ShieldCheck, CheckCircle2, ThumbsUp];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {trustHighlights.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#C90C12]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1E294B] group-hover:text-[#C90C12] transition-colors shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#C90C12] transition-colors">
                    Schweizer Standard
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#1E294B] tracking-tight group-hover:text-[#C90C12] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-sm font-bold text-slate-500">
                    {item.unit}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-800 mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
