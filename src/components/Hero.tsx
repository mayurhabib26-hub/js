import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onBookConsultation
}) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Cinematic Background Image Container with Smooth Scroll Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none overflow-hidden will-change-transform"
      >
        {/* Slow, elegant cinematic breathing zoom - completely isolated from mouse events */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="w-full h-full"
        >
          {/* Luxury modern Canadian architectural interior photography */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury modern Canadian architectural residence interior by JS Alpha Interiors"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Elegant Cinematic Vignette & Readability Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-[#080808]/60 pointer-events-none" />

      {/* Animated Architectural Gold Grid & Subtle Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#D9A514]/30 flex justify-between">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#D9A514]/40 to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#D9A514]/40 to-transparent" />
        </div>
      </div>

      {/* Hero Content Box */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-20 flex flex-col items-center"
      >
        {/* Eyebrow Label with Animated Gold Line */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#D9A514]/30 bg-[#080808]/60 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A514] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-[#FAF9F6]">
            INTERIOR DESIGN · CANADA
          </span>
          <span className="text-[#D9A514] text-xs">|</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9A514]">
            TORONTO · VANCOUVER · CALGARY
          </span>
        </motion.div>

        {/* Main Editorial Headline with Staggered Word Reveal */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-[1.08] tracking-tight max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Spaces Designed
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Around Your{' '}
            <span className="font-normal italic text-gold-gradient relative inline-block">
              Story.
              {/* Subtle underline flourish in metallic gold */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: 'easeInOut' }}
                className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A514] to-transparent origin-left"
              />
            </span>
          </motion.span>
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-base md:text-xl text-[#FAF9F6]/85 font-sans font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Thoughtful interiors where refined aesthetics, intelligent planning and everyday functionality come together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-8 py-4 bg-[#D9A514] text-[#080808] font-sans font-semibold text-xs tracking-[0.2em] uppercase border border-[#F4CA46] shadow-xl hover:bg-[#080808] hover:text-[#F4CA46] hover:border-[#D9A514] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Explore Our Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FAF9F6] font-sans font-medium text-xs tracking-[0.2em] uppercase border border-[#FAF9F6]/30 hover:border-[#D9A514] hover:text-[#D9A514] hover:bg-[#080808]/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Book a Consultation</span>
          </button>
        </motion.div>

        {/* Small Canadian Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 text-xs uppercase tracking-[0.24em] text-[#A7A7A7] font-sans flex items-center gap-2"
        >
          <span>Residential</span>
          <span className="text-[#D9A514]">·</span>
          <span>Commercial</span>
          <span className="text-[#D9A514]">·</span>
          <span>Renovation</span>
        </motion.div>
      </motion.div>

      {/* Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A7A7A7]">SCROLL</span>
        <div className="w-[1px] h-10 bg-[#FAF9F6]/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-4 bg-[#D9A514]"
          />
        </div>
      </motion.div>
    </section>
  );
};
