import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Clock, Users, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080808]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#080808] border border-[#D9A514]/40 p-6 md:p-10 text-[#FAF9F6] shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
            aria-label="Close service details"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#D9A514] uppercase tracking-widest mb-2">
            <span>SERVICE {service.number}</span>
            <span>·</span>
            <span>SPECIFICATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF9F6] mb-4">
            {service.title}
          </h2>

          <p className="font-sans text-base text-[#FAF9F6]/85 font-light leading-relaxed mb-8 max-w-2xl">
            {service.fullDesc}
          </p>

          {/* Key Specs Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#171717] border border-[#2D1B0E] mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#D9A514] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] uppercase font-mono text-[#D9A514] tracking-widest">
                  Typical Engagement Timeline
                </div>
                <div className="font-serif text-lg text-[#FAF9F6] font-medium">
                  {service.timeline}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#D9A514] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] uppercase font-mono text-[#D9A514] tracking-widest">
                  Ideal Scope & Clientele
                </div>
                <div className="font-sans text-xs text-[#A7A7A7] font-light mt-0.5">
                  {service.idealFor}
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="mb-8">
            <h3 className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514] mb-4">
              Scope of Deliverables & Inclusions
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#FAF9F6] p-3 bg-[#171717]/50 border border-[#2D1B0E]">
                  <Check className="w-4 h-4 text-[#D9A514] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2D1B0E]">
            <button
              onClick={onClose}
              className="text-xs uppercase font-mono tracking-widest text-[#A7A7A7] hover:text-[#FAF9F6]"
            >
              Back to Services
            </button>

            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="w-full sm:w-auto px-8 py-3 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#F4CA46] hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-2"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
