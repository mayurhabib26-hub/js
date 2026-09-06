import React from 'react';
import { motion } from 'motion/react';
import { AboutSection } from '../AboutSection';
import { PhilosophySection } from '../PhilosophySection';
import { WhyChooseUs } from '../WhyChooseUs';
import { MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBookConsultation: () => void;
  onExploreProjects: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBookConsultation,
  onExploreProjects
}) => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="py-20 md:py-32 bg-[#080808] text-[#FAF9F6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">01</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
              OUR CANADIAN HERITAGE
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-[1.08] mb-8">
            Crafting Timeless
            <br />
            <span className="italic text-gold-gradient font-normal">Canadian Sanctuaries.</span>
          </h1>

          <p className="font-sans text-lg md:text-2xl text-[#A7A7A7] font-light max-w-3xl leading-relaxed">
            Founded with a vision to redefine Canadian interior architecture, JS Alpha Interiors bridges European artisanal discipline with the vast, light-filled honesty of Canadian landscapes.
          </p>
        </div>
      </section>

      {/* Main Asymmetrical Narrative */}
      <AboutSection onLearnMore={onBookConsultation} />

      {/* Studio Principals & Design Team Profile */}
      <section className="py-24 bg-[#FAF9F6] text-[#080808] border-b border-[#E6E0D5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">STUDIO LEADERSHIP</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#080808]">
              Led by Architectural Conviction.
            </h2>
            <p className="mt-4 text-base text-[#70401E] font-sans font-light leading-relaxed">
              Our multidisciplinary team combines licensed interior designers, millwork engineers, and project managers working collaboratively across Toronto, Vancouver, and Montreal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F3EFE6] border border-[#E6E0D5]">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#080808]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Principal Interior Architect"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#080808]">Julian S. Alpha</h3>
              <div className="text-xs uppercase font-mono tracking-widest text-[#C58A00] mt-1">
                Founder & Principal Architect
              </div>
              <p className="font-sans text-xs text-[#70401E] mt-3 leading-relaxed">
                Over 15 years guiding bespoke residential transformations in Yorkville, Oakville, and Vancouver.
              </p>
            </div>

            <div className="p-6 bg-[#F3EFE6] border border-[#E6E0D5]">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#080808]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Director of Spatial Architecture"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#080808]">Marcus Laurent</h3>
              <div className="text-xs uppercase font-mono tracking-widest text-[#C58A00] mt-1">
                Director of Commercial Design
              </div>
              <p className="font-sans text-xs text-[#70401E] mt-3 leading-relaxed">
                Specializing in luxury corporate headquarters, boutique retail flagships, and acoustic environments.
              </p>
            </div>

            <div className="p-6 bg-[#F3EFE6] border border-[#E6E0D5]">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#080808]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Lead Material & Curation Director"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#080808]">Elena Chen</h3>
              <div className="text-xs uppercase font-mono tracking-widest text-[#C58A00] mt-1">
                Lead Material & Furniture Curator
              </div>
              <p className="font-sans text-xs text-[#70401E] mt-3 leading-relaxed">
                Coordinates direct trade acquisitions with stone quarries in Carrara and textile ateliers in Belgium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <PhilosophySection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Action Strip */}
      <section className="py-20 bg-[#FAF9F6] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#080808] mb-6">
            Ready to explore your space's true potential?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#C58A00] hover:bg-[#080808] hover:text-[#F4CA46] transition-colors"
            >
              Book a Consultation
            </button>
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 border border-[#080808] text-[#080808] uppercase tracking-[0.2em] font-medium text-xs hover:bg-[#080808] hover:text-[#FAF9F6] transition-colors"
            >
              View Selected Spaces
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
