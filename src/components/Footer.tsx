import React from 'react';
import { Logo } from './Logo';
import { PageView } from '../types';
import { ArrowUpRight, ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-[#FAF9F6] pt-24 pb-12 border-t border-[#2D1B0E] relative overflow-hidden">
      {/* Background large typography watermark */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-serif text-[120px] sm:text-[180px] md:text-[240px] text-[#FAF9F6]/[0.015] pointer-events-none select-none font-bold whitespace-nowrap">
        JS ALPHA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Large Editorial Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-[#171717] gap-8">
          <div>
            <Logo variant="light" size="lg" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FAF9F6] leading-[1.12]">
              Let's Design
              <br />
              <span className="italic text-gold-gradient font-normal">Something Remarkable.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#F4CA46] hover:bg-[#FAF9F6] transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-sm border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-16 border-b border-[#171717]">
          {/* Col 1: Studio Info */}
          <div className="col-span-2 md:col-span-4">
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D9A514] mb-4">
              Canadian Head Office
            </div>
            <p className="font-sans text-xs text-[#A7A7A7] font-light leading-relaxed mb-4">
              JS Alpha Interiors is a registered Canadian architectural interior design practice delivering turnkey luxury residences and high-performance commercial spaces nationwide.
            </p>
            <div className="text-xs text-[#FAF9F6] font-mono">
              Toronto · Vancouver · Calgary · Montreal
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D9A514] mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#A7A7A7]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#F4CA46] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'about')} className="hover:text-[#F4CA46] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'services')} className="hover:text-[#F4CA46] transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects', 'projects')} className="hover:text-[#F4CA46] transition-colors">
                  Selected Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process', 'process')} className="hover:text-[#F4CA46] transition-colors">
                  Design Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact', 'contact')} className="hover:text-[#F4CA46] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="col-span-1 md:col-span-3">
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D9A514] mb-4">
              Services
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#A7A7A7]">
              <li>Residential Interior Design</li>
              <li>Commercial Interior Design</li>
              <li>Renovation & Remodeling</li>
              <li>Kitchen Design Architecture</li>
              <li>Ensuite & Bathroom Design</li>
              <li>Space Planning & Millwork</li>
            </ul>
          </div>

          {/* Col 4: Social & Direct */}
          <div className="col-span-2 md:col-span-2">
            <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D9A514] mb-4">
              Connect
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#A7A7A7] mb-6">
              <li>
                <a href="#instagram" className="hover:text-[#F4CA46] transition-colors flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#D9A514]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-[#F4CA46] transition-colors flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#D9A514]" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:text-[#F4CA46] transition-colors flex items-center gap-1.5">
                  <Facebook className="w-3.5 h-3.5 text-[#D9A514]" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>

            <div className="text-[11px] font-mono text-[#D9A514]">
              hello@jsalphainteriors.ca
            </div>
          </div>
        </div>

        {/* Bottom Bar with Subtle Animated Gold Divider */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7A7A7] font-sans gap-4">
          <div>
            © 2026 JS Alpha Interiors. All Rights Reserved. Canadian Interior Design Studio.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#privacy" className="hover:text-[#FAF9F6] transition-colors">Privacy Policy</a>
            <span className="text-[#2D1B0E]">·</span>
            <a href="#terms" className="hover:text-[#FAF9F6] transition-colors">Terms of Engagement</a>
            <span className="text-[#2D1B0E]">·</span>
            <span className="text-[#D9A514]">Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
