import React from 'react';
import { ProcessTimeline } from '../ProcessTimeline';
import { DESIGN_STEPS } from '../../data/content';
import { ShieldCheck, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface ProcessPageProps {
  onBookConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onBookConsultation }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-20 md:py-32 bg-[#080808] text-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">04</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
              OUR DESIGN JOURNEY
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-tight mb-8">
            The Design
            <br />
            <span className="italic text-gold-gradient font-normal">Methodology.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#A7A7A7] font-light max-w-2xl leading-relaxed">
            From initial spatial audit to turnkey handover, our structured Canadian workflow eliminates guesswork and guarantees seamless execution.
          </p>
        </div>
      </section>

      {/* Main Process Timeline */}
      <ProcessTimeline />

      {/* Transparent Fees & Financial Clarity Section */}
      <section className="py-24 bg-[#F3EFE6] text-[#080808] border-t border-[#E6E0D5]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#C58A00] block mb-2">
              FINANCIAL RIGOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#080808]">
              Transparent Execution & Trade Protection
            </h2>
            <p className="mt-3 text-sm text-[#70401E] font-sans">
              We operate with 100% transparent trade pricing. All vendor trade discounts across European furniture houses and stone suppliers are fully passed through to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF9F6] border border-[#E6E0D5]">
              <div className="w-10 h-10 rounded-sm bg-[#080808] text-[#D9A514] flex items-center justify-center mb-6">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#080808] mb-2">
                Detailed Plan Sets
              </h3>
              <p className="text-xs text-[#70401E] font-sans leading-relaxed">
                Every electrical socket, tile layout, and cabinetry reveal is drawn to 1/8-inch precision, eliminating costly on-site change orders.
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border border-[#E6E0D5]">
              <div className="w-10 h-10 rounded-sm bg-[#080808] text-[#D9A514] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#080808] mb-2">
                Vetted Trade Network
              </h3>
              <p className="text-xs text-[#70401E] font-sans leading-relaxed">
                We partner with bonded Canadian general contractors, certified millworkers, and master stone fabricators who meet our rigorous standards.
              </p>
            </div>

            <div className="p-8 bg-[#FAF9F6] border border-[#E6E0D5]">
              <div className="w-10 h-10 rounded-sm bg-[#080808] text-[#D9A514] flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#080808] mb-2">
                White-Glove Handover
              </h3>
              <p className="text-xs text-[#70401E] font-sans leading-relaxed">
                On installation day, we inspect every seam, adjust dimmers, style fine accessories, and present you with your completed home sanctuary.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#C58A00] hover:bg-[#080808] hover:text-[#F4CA46] transition-colors"
            >
              Start Your Discovery Phase
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
