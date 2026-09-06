import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../../data/content';
import { Service } from '../../types';
import { ArrowUpRight, Clock, Check, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  onBookConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onBookConsultation
}) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Specialty'>('All');

  const filtered = SERVICES.filter(s => {
    if (filter === 'All') return true;
    if (filter === 'Residential') return s.id === 'residential' || s.id === 'kitchen' || s.id === 'bathroom';
    if (filter === 'Commercial') return s.id === 'commercial' || s.id === 'space-planning';
    return s.id === 'renovation' || s.id === 'furniture-styling' || s.id === 'custom-solutions';
  });

  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-20 md:py-32 bg-[#080808] text-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">02</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
              ARCHITECTURAL PRACTICE
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-tight mb-8">
            Comprehensive
            <br />
            <span className="italic text-gold-gradient font-normal">Design Services.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#A7A7A7] font-light max-w-2xl leading-relaxed">
            From single-room sculptural renovations to turnkey architectural commissions, our multidisciplinary team coordinates every phase from concept sketch to white-glove handover.
          </p>

          {/* Service Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-3">
            {(['All', 'Residential', 'Commercial', 'Specialty'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium border transition-all ${
                  filter === tab
                    ? 'bg-[#D9A514] text-[#080808] border-[#D9A514]'
                    : 'bg-transparent text-[#FAF9F6] border-[#2D1B0E] hover:border-[#D9A514]'
                }`}
              >
                {tab} Services
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-[#FAF9F6] border border-[#E6E0D5] p-8 hover:border-[#D9A514] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#080808] border border-[#E6E0D5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#C58A00] tracking-widest mb-2">
                  <span>SERVICE {service.number}</span>
                  <span className="flex items-center gap-1 text-[#70401E]">
                    <Clock className="w-3.5 h-3.5 text-[#D9A514]" />
                    {service.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#080808] mb-3 group-hover:text-[#C58A00] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#171717] font-light leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#70401E]">
                      <Check className="w-3.5 h-3.5 text-[#C58A00] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6E0D5] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs uppercase font-mono tracking-[0.2em] font-semibold text-[#080808] group-hover:text-[#C58A00] flex items-center gap-1.5"
                >
                  <span>Full Inclusions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onBookConsultation}
                  className="px-4 py-2 bg-[#D9A514] text-[#080808] text-[10px] uppercase font-semibold tracking-wider hover:bg-[#080808] hover:text-[#FAF9F6] transition-colors"
                >
                  Consult
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
