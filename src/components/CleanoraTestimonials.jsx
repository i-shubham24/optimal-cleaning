import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SparkleStar, MiniSparkle, BubblesIcon, SqueegeeIcon, StarBurst, DotCluster } from './SparkleIcons';

export default function CleanoraTestimonials() {
  const reviews = [
    {
      id: 1,
      author: "Dr. Beat Meier",
      role: "Wohnungseigentümer",
      location: "Zürich Seefeld",
      service: "Umzugsreinigung 4.5 Zimmer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote: "Optimal Reinigung hat all unsere Erwartungen übertroffen! Die Wohnungsabgabe in Zürich Seefeld verlief absolut reibungslos. Die Verwaltung hatte nicht die geringste Beanstandung. Pünktlich, freundlich und extrem gründlich!",
    },
    {
      id: 2,
      author: "Corinne Schlatter",
      role: "Partnerin, Kanzlei Schlatter & Partner",
      location: "Winterthur Altstadt",
      service: "Büroreinigung wöchentlich",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      quote: "Seit über zwei Jahren reinigt Optimal Reinigung unsere Kanzlei in der Winterthurer Altstadt. Absolute Diskretion, makellose Sauberkeit und stets dasselbe sympathische Schweizer Reinigungsteam.",
    },
    {
      id: 3,
      author: "Markus Frei",
      role: "Architekt & Bauherr",
      location: "Zürich Oerlikon",
      service: "Bau- & Endreinigung",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      quote: "Hervorragendes Preis-Leistungs-Verhältnis. Der Fixpreis wurde auf den Rappen genau eingehalten und das Team war bei der Bauabnahme pünktlich anwesend. Wir arbeiten seither bei allen Neubauprojekten zusammen.",
    },
    {
      id: 4,
      author: "Elena Rossi",
      role: "Familienmutter & Projektleiterin",
      location: "Uster / Zürich Oberland",
      service: "Regelmässige Wohnungsreinigung",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      quote: "Endlich eine Reinigungsfirma in Zürich, auf die man sich zu 100% verlassen kann. Unser Holzparkett und die Sanitäranlagen glänzen wie am ersten Tag. Eine enorme Entlastung für unseren Familienalltag!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = reviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="bewertungen" className="pt-16 sm:pt-20 pb-0 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/80">
      
      {/* Sparkle Stars & Decorative Accents from reference */}
      <div aria-hidden="true" className="pointer-events-none">
        <SparkleStar className="absolute top-16 right-20 w-7 h-7 text-[#C90C12]/25 hidden md:block" />
        <SparkleStar className="absolute top-32 left-16 w-5 h-5 text-slate-400/60" />
        <MiniSparkle className="absolute top-20 left-1/3 w-4 h-4 text-emerald-600/50" />
        <SqueegeeIcon className="absolute top-28 right-1/3 w-8 h-8 text-slate-300/50" />
        <MiniSparkle className="absolute bottom-24 right-1/4 w-4 h-4 text-emerald-600/40" />
        <StarBurst className="absolute top-12 left-12 w-6 h-6 text-amber-400/40" />
      </div>

      {/* Section Header: Plain Text Eyebrow (NO pills) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#C90C12] font-display">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C90C12]" />
            <span>VERIFIZIERTE KUNDENMEINUNGEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-tight">
            <span className="font-extrabold text-[#162039]">Kundenstimmen &amp; </span>
            <span className="font-italic-accent text-[#C90C12]">Erfolgsgeschichten</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
            Über 5'000 erfolgreich übergebene Wohnungen und Firmengebäude in Zürich &amp; Winterthur sprechen für sich.
          </p>
        </div>
      </div>

      {/* FULL WIDTH SQUARED TESTIMONIAL STAGE (Edge to edge, rounded-none) */}
      <div className="w-full bg-white border-y border-slate-200/90 shadow-sm rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14">
            
            {/* LEFT: Arch Framed Visual of Swiss Cleaner with Mop */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Decorative Arch Background in Soft Swiss Mint/Navy tint */}
                <div className="w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-b from-slate-100 via-slate-50 to-white border border-slate-200/60 p-3 shadow-inner relative overflow-hidden flex items-end justify-center">
                  
                  {/* Subtle rings behind cleaner */}
                  <div className="absolute top-8 w-48 h-48 rounded-full border border-dashed border-slate-300/80 pointer-events-none" />
                  
                  <img
                    src="/images/swiss_cleaner_hero.png"
                    alt="Optimal Reinigung Fachkraft Beat"
                    className="relative z-10 w-auto h-[92%] object-contain object-bottom drop-shadow-md hover:scale-105 transition-transform duration-500"
                  />

                  {/* Guarantee Pill Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 bg-white/95 backdrop-blur-md py-2 px-3 rounded-xl border border-slate-200 shadow-md flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-[#162039] font-display">
                      100% Abnahmegarantie
                    </span>
                  </div>
                </div>

                {/* Overlapping Floating Reviewer Thumbnails */}
                <div className="absolute -top-3 -right-2 flex -space-x-2 bg-white/95 p-1.5 rounded-full shadow-lg border border-slate-100">
                  {reviews.map((r, i) => (
                    <button
                      key={r.id}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-9 h-9 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                        currentIndex === i ? 'border-[#C90C12] scale-110 ring-2 ring-red-200' : 'border-white opacity-70 hover:opacity-100'
                      }`}
                      title={r.author}
                    >
                      <img src={r.avatar} alt={r.author} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

              </div>
            </div>


            {/* RIGHT: Active Testimonial Card with 5 Stars, Quote, Author, Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {/* Rating Stars & Score */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-extrabold text-[#162039] font-display bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                      5.0 Exzellent
                    </span>
                    <span className="text-xs text-slate-500 font-sans hidden sm:inline">
                      &bull; Verifizierte Bewertung
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="text-base sm:text-xl lg:text-2xl text-[#162039] font-display font-medium leading-relaxed">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Details & Service Tag */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100 shadow-sm"
                      />
                      <div>
                        <div className="text-base font-extrabold text-[#162039] font-display">
                          {current.author}
                        </div>
                        <div className="text-xs text-slate-500 font-sans">
                          {current.role} &bull; {current.location}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-[#C90C12] bg-red-50/80 px-3 py-1.5 rounded-xl border border-red-100/60 self-start sm:self-auto font-display">
                      {current.service}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigation Arrows & Dot Indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === i ? 'w-8 bg-[#C90C12]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Zu Bewertung ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-[#162039] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Vorherige Bewertung"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-[#162039] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Nächste Bewertung"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* FULL WIDTH SQUARED DOCKED BOTTOM RIBBON: 3 Key Metrics */}
      <div className="w-full bg-[#162039] text-white border-b border-slate-900 rounded-none shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          <div className="pt-2 sm:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
              5'000+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
              Erfolgreich übergebene Objekte
            </div>
          </div>

          <div className="pt-4 sm:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
              20+ Jahre
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
              Erfahrung in Zürich &amp; Winterthur
            </div>
          </div>

          <div className="pt-4 sm:pt-0">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
              Abnahmegarantie mit persönlicher Begleitung
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
