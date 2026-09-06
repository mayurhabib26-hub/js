import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onStartProject: () => void;
  onScheduleConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onStartProject,
  onScheduleConsultation
}) => {
  return (
    <section className="relative py-32 md:py-48 bg-[#080808] text-[#FAF9F6] overflow-hidden">
      {/* High-end Canadian architecture photography background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90"
          alt="Bespoke luxury Canadian residence designed by JS Alpha Interiors"
          className="w-full h-full object-cover filter brightness-[0.3] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
      </div>

      {/* Floating Animated Gold Frame */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-10 md:p-16 border border-[#D9A514]/40 bg-[#080808]/85 backdrop-blur-md relative border-gold-glow"
        >
          {/* Subtle Corner Accents */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F4CA46]" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F4CA46]" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F4CA46]" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F4CA46]" />

          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9A514] animate-ping" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-[#D9A514]">
              COMMENCE YOUR TRANSFORMATION
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF9F6] leading-[1.12] mb-6">
            Your Space Deserves
            <br />
            <span className="text-gold-gradient font-normal italic">Something Extraordinary.</span>
          </h2>

          <p className="font-sans text-base md:text-xl text-[#FAF9F6]/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Tell us about your space and let's explore what it could become. We accept a limited number of residential and commercial commissions per year to ensure white-glove focus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#F4CA46] hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onScheduleConsultation}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FAF9F6] uppercase tracking-[0.2em] font-medium text-xs border border-[#FAF9F6]/40 hover:border-[#D9A514] hover:text-[#D9A514] transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#D9A514]" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
