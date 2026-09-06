import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeHoverId, setActiveHoverId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeHoverId) || SERVICES[0];

  return (
    <section id="services" className="py-24 md:py-36 bg-[#080808] text-[#FAF9F6] relative overflow-hidden">
      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D9A514]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#171717]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">03</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
                OUR CAPABILITIES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF9F6] leading-tight">
              Design Services
              <br />
              <span className="italic text-gold-gradient font-normal">Built Around You.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-sm text-[#A7A7A7] max-w-md font-light leading-relaxed">
            From initial structural space planning to turnkey installation, our comprehensive services ensure cohesive architectural execution without compromise.
          </p>
        </div>

        {/* Interactive Desktop Layout: Split View with Interactive Service Accordion List & Dynamic Image Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Service Accordion List */}
          <div className="lg:col-span-7 divide-y divide-[#171717]">
            {SERVICES.map((service) => {
              const isSelected = activeHoverId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveHoverId(service.id)}
                  onClick={() => onSelectService(service)}
                  className={`group py-6 transition-all duration-300 cursor-pointer relative ${
                    isSelected ? 'pl-4' : 'hover:pl-2'
                  }`}
                >
                  {/* Left Gold Active Indicator Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D9A514] transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />

                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className={`font-mono text-xs md:text-sm tracking-widest transition-colors duration-300 ${
                        isSelected ? 'text-[#D9A514]' : 'text-[#A7A7A7] group-hover:text-[#D9A514]'
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl font-light transition-all duration-300 ${
                        isSelected ? 'text-[#F4CA46] translate-x-1' : 'text-[#FAF9F6] group-hover:text-[#F4CA46]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] uppercase tracking-widest transition-opacity duration-300 hidden sm:inline-block ${
                        isSelected ? 'text-[#D9A514] opacity-100' : 'text-[#A7A7A7] opacity-0 group-hover:opacity-100'
                      }`}>
                        Explore
                      </span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'border-[#D9A514] bg-[#D9A514] text-[#080808] rotate-45' 
                          : 'border-[#2D1B0E] text-[#A7A7A7] group-hover:border-[#D9A514] group-hover:text-[#FAF9F6]'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded description on hover / active */}
                  <p className={`mt-3 text-sm text-[#A7A7A7] font-sans font-light leading-relaxed max-w-xl transition-all duration-300 ${
                    isSelected ? 'opacity-100 block' : 'opacity-70 group-hover:opacity-100'
                  }`}>
                    {service.shortDesc}
                  </p>

                  {/* Mobile-only embedded image */}
                  <div className="lg:hidden mt-4 overflow-hidden rounded-sm aspect-[16/9] border border-[#2D1B0E]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Luxury Image Showcase (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#171717] border border-[#2D1B0E] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

                  {/* Overlay Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#080808]/90 backdrop-blur-md border border-[#D9A514]/30">
                    <div className="flex items-center justify-between text-xs text-[#D9A514] uppercase tracking-widest font-mono mb-2">
                      <span>Service {activeService.number}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activeService.timeline}
                      </span>
                    </div>
                    <div className="font-serif text-xl text-[#FAF9F6] font-medium mb-3">
                      {activeService.title}
                    </div>
                    <button
                      onClick={() => onSelectService(activeService)}
                      className="w-full py-2 bg-[#D9A514] text-[#080808] text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 hover:bg-[#FAF9F6] transition-colors"
                    >
                      <span>View Specifications & Inclusions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
