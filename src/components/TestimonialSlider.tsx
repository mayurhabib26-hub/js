import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#080808] text-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#D9A514]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">09</span>
          <span className="w-8 h-[1px] bg-[#D9A514]" />
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
            CLIENT TESTIMONIALS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#171717]">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF9F6] leading-tight">
            Spaces People
            <br />
            <span className="italic text-gold-gradient font-normal">Love Living In.</span>
          </h2>

          {/* Navigation Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#FAF9F6] hover:text-[#D9A514] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#FAF9F6] hover:text-[#D9A514] transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel View */}
        <div className="relative min-h-[380px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left: Oversized Quotation & Body */}
              <div className="lg:col-span-8 relative">
                {/* Oversized Gold Quotation Mark */}
                <div className="font-serif text-7xl md:text-9xl text-[#D9A514]/20 select-none leading-none absolute -top-8 md:-top-14 -left-4 pointer-events-none">
                  “
                </div>

                <p className="relative z-10 font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#FAF9F6] leading-relaxed italic mb-8">
                  {current.quote}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                  <div>
                    <h4 className="font-sans font-semibold text-base text-[#FAF9F6] tracking-wide">
                      {current.client}
                    </h4>
                    <p className="text-xs text-[#D9A514] font-mono tracking-wider mt-0.5">
                      {current.role} · {current.projectType}
                    </p>
                  </div>

                  <span className="hidden sm:inline text-[#2D1B0E]">|</span>

                  <div className="flex items-center gap-1.5 text-xs text-[#A7A7A7] font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#D9A514]" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>

              {/* Right: Client / Project Vignette */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative aspect-[3/4] overflow-hidden border border-[#2D1B0E] p-2 bg-[#171717]">
                  <img
                    src={current.image}
                    alt={current.client}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-center text-[10px] font-mono tracking-widest text-[#F4CA46] uppercase">
                    Verified Client · {current.year}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="mt-12 flex items-center justify-between border-t border-[#171717] pt-6">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  currentIndex === idx ? 'w-12 bg-[#D9A514]' : 'w-4 bg-[#2D1B0E] hover:bg-[#A7A7A7]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="font-mono text-xs text-[#A7A7A7]">
            <span className="text-[#D9A514]">0{currentIndex + 1}</span> / 0{TESTIMONIALS.length}
          </div>
        </div>
      </div>
    </section>
  );
};
