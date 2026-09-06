import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Info, Layers } from 'lucide-react';
import { MATERIALS } from '../data/content';
import { MaterialItem } from '../types';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  return (
    <section className="py-24 md:py-36 bg-[#F3EFE6] text-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E6E0D5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">08</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
                TACTILE ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-tight">
              Beauty Lives
              <br />
              <span className="italic font-normal text-[#70401E]">in the Details.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 font-sans text-sm text-[#70401E] max-w-md font-light leading-relaxed">
            We believe an interior is experienced through touch as much as sight. We travel to quarries and mills to hand-select noble materials that age with grace and integrity.
          </p>
        </div>

        {/* Tactile Material Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS.map((material, idx) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedMaterial(material)}
              data-cursor="explore"
              className="group relative aspect-[4/3] overflow-hidden bg-[#080808] cursor-pointer shadow-lg border border-[#E6E0D5]"
            >
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent group-hover:from-[#080808]/95 transition-all duration-300" />

              {/* Material Category Tag */}
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#080808]/80 backdrop-blur-sm border border-[#D9A514]/40 text-[9px] uppercase tracking-[0.2em] font-mono text-[#F4CA46]">
                {material.category}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-[#FAF9F6]">
                <div className="text-[11px] text-[#D9A514] font-mono uppercase tracking-widest mb-1">
                  {material.origin}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal group-hover:text-[#F4CA46] transition-colors">
                  {material.name}
                </h3>
                <p className="font-sans text-xs text-[#A7A7A7] mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">
                  {material.texture}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Material Detail Modal */}
      <AnimatePresence>
        {selectedMaterial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#080808] border border-[#D9A514]/40 p-6 md:p-8 text-[#FAF9F6] shadow-2xl"
            >
              <button
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-4 right-4 p-2 text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
                aria-label="Close material modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 aspect-square overflow-hidden border border-[#2D1B0E]">
                  <img
                    src={selectedMaterial.image}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7">
                  <span className="text-[10px] uppercase font-mono tracking-[0.24em] text-[#D9A514] block mb-1">
                    {selectedMaterial.category} · {selectedMaterial.origin}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#FAF9F6] font-normal mb-2">
                    {selectedMaterial.name}
                  </h3>
                  <div className="text-xs text-[#A7A7A7] font-mono mb-4 pb-3 border-b border-[#2D1B0E]">
                    Texture: <span className="text-[#FAF9F6]">{selectedMaterial.texture}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#A7A7A7] font-sans font-light leading-relaxed mb-6">
                    {selectedMaterial.description}
                  </p>
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="px-6 py-2.5 bg-[#D9A514] text-[#080808] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF9F6] transition-colors"
                  >
                    Close Specification
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
