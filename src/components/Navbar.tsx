import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView; sectionId?: string; number: string }[] = [
    { label: 'Home', page: 'home', number: '01' },
    { label: 'About', page: 'about', sectionId: 'about', number: '02' },
    { label: 'Services', page: 'services', sectionId: 'services', number: '03' },
    { label: 'Projects', page: 'projects', sectionId: 'projects', number: '04' },
    { label: 'Process', page: 'process', sectionId: 'process', number: '05' },
    { label: 'Testimonials', page: 'home', sectionId: 'testimonials', number: '06' },
    { label: 'Contact', page: 'contact', sectionId: 'contact', number: '07' },
  ];

  const handleLinkClick = (page: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#080808]/90 backdrop-blur-md border-b border-[#D9A514]/20 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-[#080808]/80 via-[#080808]/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo 
            variant="light" 
            size={isScrolled ? 'sm' : 'md'} 
            onClick={() => handleLinkClick('home')} 
          />

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page && (!item.sectionId || item.sectionId === 'about');
              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.page, item.sectionId)}
                  className="relative group py-1 text-sm tracking-[0.14em] uppercase font-medium text-[#FAF9F6]/80 hover:text-[#FAF9F6] transition-colors duration-200"
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                  </span>
                  {/* Underline hover effect with metallic gold animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D9A514] transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* Right Action: Book Consultation Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden px-5 py-2.5 bg-[#D9A514] text-[#080808] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C58A00] transition-all duration-300 hover:bg-[#080808] hover:text-[#F4CA46] hover:border-[#D9A514] flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-[#D9A514] text-[#080808] text-[10px] tracking-wider uppercase font-semibold"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF9F6] hover:text-[#D9A514] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D9A514]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Premium Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between p-8 pt-28 overflow-y-auto"
          >
            {/* Background luxury watermarks */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[160px] text-[#FAF9F6]/[0.02] pointer-events-none select-none font-bold">
              ALPHA
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="text-[11px] tracking-[0.3em] text-[#D9A514] uppercase border-b border-[#2D1B0E] pb-3">
                Navigation Directory
              </div>

              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleLinkClick(item.page, item.sectionId)}
                    className="flex items-baseline gap-4 group w-full text-left py-2 border-b border-[#171717]"
                  >
                    <span className="font-mono text-xs text-[#D9A514] tracking-widest">{item.number}</span>
                    <span className="font-serif text-3xl text-[#FAF9F6] group-hover:text-[#F4CA46] transition-colors duration-200">
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-auto text-[#A7A7A7] group-hover:text-[#D9A514] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#2D1B0E] flex flex-col gap-6 relative z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs text-center border border-[#F4CA46] hover:bg-[#FAF9F6] transition-colors"
              >
                Book a Consultation
              </button>

              <div className="grid grid-cols-2 gap-4 text-xs text-[#A7A7A7]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D9A514]" />
                  <span>Toronto & Vancouver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D9A514]" />
                  <span>hello@jsalphainteriors.ca</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
