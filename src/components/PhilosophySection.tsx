import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_PILLARS } from '../data/content';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#080808] text-[#FAF9F6] relative overflow-hidden">
      {/* Subtle architectural vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#D9A514]/20 flex justify-between">
          <div className="w-[1px] h-full bg-[#D9A514]/20" />
          <div className="w-[1px] h-full bg-[#D9A514]/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">06</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#D9A514]">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-[#FAF9F6] leading-[1.12]">
            Timeless Design.
            <br />
            <span className="text-gold-gradient font-normal">Thoughtful Details.</span>
            <br />
            Meaningful Spaces.
          </h2>
        </div>

        {/* 4 Philosophy Pillars with Thin Gold Separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2D1B0E]">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="lg:px-8 py-8 first:pl-0 last:pr-0 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-2xl text-[#D9A514] font-light">
                    {pillar.number}
                  </span>
                  <span className="w-6 h-[1px] bg-[#2D1B0E] group-hover:bg-[#D9A514] transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-3xl font-normal text-[#FAF9F6] mb-3 group-hover:text-[#F4CA46] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-serif italic text-[#D9A514] text-sm mb-4">
                  {pillar.concept}
                </p>

                <p className="font-sans text-sm text-[#A7A7A7] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Indicator */}
              <div className="mt-8 pt-4 border-t border-[#171717] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#A7A7A7]">
                <span>Pillar {pillar.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A514] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
