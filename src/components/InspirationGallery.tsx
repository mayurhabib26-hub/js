import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

export const InspirationGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Living Rooms',
    'Kitchens',
    'Bedrooms',
    'Bathrooms',
    'Offices',
    'Commercial',
    'Details'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 md:py-36 bg-[#F3EFE6] text-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E6E0D5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">11</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
                INSPIRATION ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-tight">
              Visual Gallery.
            </h2>
            <p className="mt-2 text-base text-[#70401E] font-sans font-light">
              Explore bespoke architectural vignettes across residential and commercial commissions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-[#080808] text-[#FAF9F6] border-[#080808]'
                    : 'bg-transparent text-[#70401E] border-[#E6E0D5] hover:border-[#D9A514]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = index === 0 || index === 7;
            const colSpan = isWide ? 'sm:col-span-2' : 'col-span-1';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setActiveLightboxItem(item)}
                data-cursor="explore"
                className={`${colSpan} group relative aspect-[4/3] sm:aspect-auto sm:h-72 overflow-hidden bg-[#080808] cursor-pointer shadow-md border border-[#E6E0D5]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FAF9F6]" />

                {/* Always-Visible Category Tag */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#080808]/80 backdrop-blur-sm border border-[#D9A514]/30 text-[9px] uppercase tracking-[0.2em] font-mono text-[#F4CA46]">
                  {item.category}
                </div>

                {/* Bottom Reveal Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-[#FAF9F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#D9A514] font-mono mb-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#080808]/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            >
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute -top-12 right-0 p-2 text-[#FAF9F6] hover:text-[#D9A514] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="w-full max-h-[75vh] overflow-hidden border border-[#D9A514]/40 bg-[#080808] flex items-center justify-center">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 w-full flex items-center justify-between text-xs text-[#FAF9F6] px-2">
                <div>
                  <h3 className="font-serif text-xl text-[#F4CA46]">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-[#A7A7A7]">{activeLightboxItem.category} · {activeLightboxItem.location}</p>
                </div>
                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="px-4 py-2 border border-[#D9A514] text-[#D9A514] hover:bg-[#D9A514] hover:text-[#080808] transition-colors uppercase font-mono text-[10px] tracking-widest"
                >
                  Close Lightbox
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
