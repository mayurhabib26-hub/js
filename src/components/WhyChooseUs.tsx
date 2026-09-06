import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/content';
import { Compass, Sparkles, Gem, Sliders, Users, MapPin } from 'lucide-react';

const ICONS = [Compass, Sliders, Gem, Sparkles, Users, MapPin];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#FAF9F6] text-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">10</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
              THE JS ALPHA ADVANTAGE
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-tight">
            Why JS Alpha?
          </h2>

          <p className="mt-4 text-base text-[#70401E] font-sans font-light leading-relaxed">
            We operate with architectural rigor and boutique personalization, ensuring every Canadian residence or commercial commission exceeds international benchmarks.
          </p>
        </div>

        {/* 6 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-[#FAF9F6] border border-[#E6E0D5] hover:border-[#D9A514] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#F3EFE6] border border-[#E6E0D5] group-hover:border-[#D9A514] group-hover:bg-[#080808] transition-colors duration-300 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#C58A00] group-hover:text-[#F4CA46] transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#080808] mb-3 group-hover:text-[#C58A00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#171717] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E0D5] flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-[#70401E]">
                  <span>Standard 0{idx + 1}</span>
                  <span className="w-4 h-[1px] bg-[#D9A514] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
