import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DESIGN_STEPS } from '../data/content';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-24 md:py-36 bg-[#FAF9F6] text-[#080808] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">07</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
              METHODOLOGY & ROADMAP
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-tight">
            From Vision
            <br />
            <span className="italic font-normal text-[#70401E]">to Reality.</span>
          </h2>

          <p className="mt-4 text-base text-[#70401E] font-sans font-light leading-relaxed">
            Our structured 6-phase Canadian design process eliminates uncertainty. We guide you seamlessly from initial spatial discovery through to final turnkey styling.
          </p>
        </div>

        {/* Timeline Container with Animated Center Line */}
        <div ref={containerRef} className="relative mt-16">
          {/* Static Background Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E6E0D5] -translate-x-1/2" />

          {/* Animated Scroll Progress Line in Metallic Gold */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D9A514] via-[#C58A00] to-[#F4CA46] -translate-x-1/2 origin-top z-10"
          />

          {/* Steps List */}
          <div className="space-y-12 md:space-y-20 relative z-20">
            {DESIGN_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-16 pl-12 md:pl-0`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="p-8 bg-[#FAF9F6] border border-[#E6E0D5] shadow-md hover:border-[#D9A514] transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                        <span className="font-mono text-sm font-semibold text-[#D9A514]">
                          PHASE {step.number}
                        </span>
                        <span className="text-xs text-[#A7A7A7] font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D9A514]" />
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#080808] mb-3 group-hover:text-[#C58A00] transition-colors">
                        {step.title}
                      </h3>

                      <p className="font-sans text-sm text-[#171717] font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF9F6] border-2 border-[#D9A514] flex items-center justify-center shadow-lg z-30">
                    <span className="w-2 h-2 rounded-full bg-[#080808]" />
                  </div>

                  {/* Empty Spacer on other side for balance on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
