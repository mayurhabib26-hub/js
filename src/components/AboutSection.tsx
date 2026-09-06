import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, Compass, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

// Simple animated counter hook
function Counter({ value, suffix = '', duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F3EFE6] text-[#080808] relative overflow-hidden">
      {/* Decorative Gold Watermark Emblem */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-[#D9A514]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Editorial Photography & Gold Accent */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-[#171717] shadow-2xl border border-[#FAF9F6]"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="JS Alpha Interiors signature residential living room design"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="hidden sm:block absolute -bottom-10 -right-6 md:-right-10 w-3/5 aspect-square overflow-hidden shadow-2xl border-4 border-[#F3EFE6] bg-[#080808]"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85"
                alt="Detail of marble, walnut joinery and architectural lighting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gold border accent ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4CA46] to-[#C58A00]" />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -left-4 md:-left-8 bg-[#080808] text-[#FAF9F6] p-5 shadow-2xl border border-[#D9A514]"
            >
              <div className="text-[#D9A514] font-serif text-2xl font-bold">10+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#A7A7A7] mt-0.5">
                Years of Mastery
              </div>
            </motion.div>
          </div>

          {/* Right Column: Heading, Narrative, & Animated Statistics */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">02</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
                ABOUT JS ALPHA
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-[1.12] mb-6">
              Designing Spaces
              <br />
              <span className="italic font-normal text-[#70401E]">With Purpose.</span>
            </h2>

            <div className="space-y-4 text-base text-[#171717] font-light leading-relaxed">
              <p>
                At <strong>JS Alpha Interiors</strong>, our practice is rooted in the belief that great architecture is born at the intersection of discipline and empathy. We reject generic formulas in favor of deeply personalized interiors that respond directly to the natural rhythms of our clients' everyday lives.
              </p>
              <p>
                Whether tailoring a 7,000 sq ft custom estate in Oakville or executing a corporate executive boardroom in Toronto, we curate noble materials—hand-selected Italian marbles, rift-cut Canadian hardwoods, and patinated architectural metals—transforming raw square footage into enduring works of art.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 my-8 pt-4 border-t border-[#D9A514]/20">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D9A514]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C58A00]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#080808]">Master Craftsmanship</h4>
                  <p className="text-xs text-[#70401E] mt-0.5">Vetted Canadian artisans & European joiners.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D9A514]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C58A00]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#080808]">Client Collaboration</h4>
                  <p className="text-xs text-[#70401E] mt-0.5">Seamless white-glove communication.</p>
                </div>
              </div>
            </div>

            {/* Animated Statistics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#D9A514]/30">
              {/* Stat 1 */}
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#080808] flex items-baseline">
                  <Counter value={10} suffix="+" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#70401E] font-medium mt-1">
                  Years of Experience
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#080808] flex items-baseline">
                  <Counter value={150} suffix="+" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#70401E] font-medium mt-1">
                  Spaces Transformed
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#C58A00] flex items-baseline">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#70401E] font-medium mt-1">
                  Design Focus
                </div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#080808]">
                  Canada
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#70401E] font-medium mt-1">
                  Based Studio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
