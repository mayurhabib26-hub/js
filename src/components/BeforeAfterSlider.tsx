import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  location?: string;
  standalone?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
  afterImage = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  title = 'Yorkville Penthouse Renovation',
  location = 'Toronto, Ontario',
  standalone = true
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(Math.max((x / width) * 100, 1), 99);
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // fallback if not supported
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }
  };

  // Slider element
  const sliderElement = (
    <div className="relative max-w-5xl mx-auto shadow-2xl border border-[#2D1B0E] overflow-hidden">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden select-none cursor-ew-resize bg-[#080808] touch-none"
      >
        {/* After Image (Full background) */}
        <img
          src={afterImage}
          alt="After: Finished luxury interior design by JS Alpha Interiors"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Clipped overlay) */}
        <div
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          className="absolute inset-0 w-full h-full pointer-events-none transition-none"
        >
          <img
            src={beforeImage}
            alt="Before: Existing outdated condition"
            className="w-full h-full object-cover grayscale brightness-90 contrast-95"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#080808]/20" />
        </div>

        {/* Draggable Divider Line with Gold Handle */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 w-[2px] bg-[#FAF9F6] -translate-x-1/2 z-20 pointer-events-none shadow-2xl"
        >
          {/* Center Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#080808] border-2 border-[#D9A514] flex items-center justify-center text-[#D9A514] shadow-2xl">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>

        {/* Labels: BEFORE and AFTER */}
        <div className="absolute top-5 left-5 z-10 px-3 py-1 bg-[#080808]/85 backdrop-blur-sm border border-[#FAF9F6]/20 text-[10px] font-mono tracking-[0.2em] uppercase text-[#FAF9F6] pointer-events-none">
          BEFORE · ORIGINAL
        </div>
        <div className="absolute top-5 right-5 z-10 px-3 py-1 bg-[#080808]/85 backdrop-blur-sm border border-[#D9A514] text-[10px] font-mono tracking-[0.2em] uppercase text-[#F4CA46] pointer-events-none">
          AFTER · JS ALPHA
        </div>

        {/* Bottom Info Ribbon */}
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none text-xs text-[#FAF9F6]/90 bg-[#080808]/80 backdrop-blur-md px-4 py-2.5 border border-[#2D1B0E]">
          <div>
            <span className="font-serif text-sm text-[#FAF9F6] font-medium mr-2">{title}</span>
            <span className="text-[#A7A7A7] text-xs">{location}</span>
          </div>
          <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-widest text-[#D9A514]">
            Drag to compare
          </span>
        </div>
      </div>
    </div>
  );

  if (!standalone) {
    return sliderElement;
  }

  return (
    <section className="py-24 md:py-36 bg-[#171717] text-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">05</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
              TRANSFORMATION ARCHITECTURE
            </span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF9F6] leading-tight">
            From Existing
            <br />
            <span className="italic text-gold-gradient font-normal">to Exceptional.</span>
          </h2>

          <p className="mt-6 text-base text-[#A7A7A7] font-sans font-light leading-relaxed">
            Every transformation begins with understanding the potential hidden within a space. Drag the slider to witness how thoughtful spatial architecture redefines existing architecture into bespoke luxury.
          </p>
        </div>

        {sliderElement}
      </div>
    </section>
  );
};
