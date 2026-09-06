import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface IntroStatementProps {
  onDiscoverStory: () => void;
}

export const IntroStatement: React.FC<IntroStatementProps> = ({ onDiscoverStory }) => {
  return (
    <section className="relative py-28 md:py-40 bg-[#FAF9F6] text-[#080808] overflow-hidden border-b border-[#F3EFE6]">
      {/* Background Architectural Grid Lines in subtle tone */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-[#E6E0D5] flex justify-between">
          <div className="w-[1px] h-full bg-[#E6E0D5]" />
          <div className="w-[1px] h-full bg-[#E6E0D5]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">01</span>
          <span className="w-8 h-[1px] bg-[#D9A514]" />
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
            WHO WE ARE
          </span>
        </div>

        {/* Large Statement spanning screen width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.14] text-[#080808] tracking-tight">
            “We don't simply design rooms.
            <br />
            We create environments that
            <br />
            <span className="italic font-light text-[#70401E] relative inline-block">
              shape how you live
              <span className="absolute bottom-1 left-0 right-0 h-[1.5px] bg-[#D9A514]" />
            </span>
            .”
          </h2>
        </motion.div>

        {/* Architectural Gold Divider Line */}
        <div className="my-12 md:my-16 h-[1px] w-full bg-gradient-to-r from-[#D9A514] via-[#D9A514]/40 to-transparent" />

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <p className="font-sans text-lg md:text-xl text-[#171717] font-light leading-relaxed">
              <strong className="font-medium text-[#080808]">JS Alpha Interiors</strong> is an esteemed Canadian interior design and architecture studio. We design with an uncompromising commitment to timeless aesthetics, tactile materiality, and spatial clarity. From Toronto penthouses and lakeside Oakville estates to Vancouver coastal villas, our work translates personal aspiration into bespoke, physical architecture.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between h-full gap-6">
            <p className="font-sans text-sm text-[#70401E] font-normal leading-relaxed border-l-2 border-[#D9A514] pl-4">
              Headquartered in Canada, operating nationwide across Ontario, British Columbia, Alberta, and Quebec. Every square foot is engineered for living art.
            </p>

            <div>
              <button
                onClick={onDiscoverStory}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] font-semibold text-[#080808] hover:text-[#C58A00] transition-colors group py-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#D9A514] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
