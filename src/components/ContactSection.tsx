import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityProvince: '',
    projectType: 'Residential Interior',
    propertyType: 'Detached Home',
    budget: '$150,000 – $300,000',
    timeline: '3 – 6 Months',
    message: '',
    agreed: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#080808] text-[#FAF9F6] relative overflow-hidden">
      {/* Subtle architectural background accents */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-[#D9A514]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Canadian Studios */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">12</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
                INITIATE A CONVERSATION
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF9F6] leading-tight mb-6">
              Let's Create
              <br />
              <span className="italic text-gold-gradient font-normal">Something Beautiful.</span>
            </h2>

            <p className="font-sans text-base text-[#A7A7A7] font-light leading-relaxed mb-10">
              Every transformative interior begins with a dialogue. Share your location, architectural scope, and expectations. Our senior design directors review all inquiries within 24 business hours.
            </p>

            {/* Direct Studio Contact Channels */}
            <div className="space-y-6 pt-6 border-t border-[#171717]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#2D1B0E] flex items-center justify-center shrink-0 text-[#D9A514]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#D9A514]">
                    Canadian Studios
                  </div>
                  <div className="font-serif text-base text-[#FAF9F6]">
                    Toronto · Vancouver · Calgary · Montreal
                  </div>
                  <div className="text-xs text-[#A7A7A7] mt-0.5">
                    Operating Nationwide across all Canadian Provinces
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#2D1B0E] flex items-center justify-center shrink-0 text-[#D9A514]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#D9A514]">
                    Direct Telephone
                  </div>
                  <div className="font-mono text-sm text-[#FAF9F6]">
                    +1 (416) 792-8820
                  </div>
                  <div className="text-xs text-[#A7A7A7]">Mon – Fri, 9:00 AM – 6:00 PM EST</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#2D1B0E] flex items-center justify-center shrink-0 text-[#D9A514]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#D9A514]">
                    Electronic Mail
                  </div>
                  <div className="font-mono text-sm text-[#FAF9F6]">
                    hello@jsalphainteriors.ca
                  </div>
                  <div className="text-xs text-[#A7A7A7]">Consultations & Press Inquiries</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-6 border-t border-[#171717]">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#A7A7A7] mb-3">
                Follow Our Canadian Portfolio
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="w-9 h-9 rounded-sm border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-9 h-9 rounded-sm border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-9 h-9 rounded-sm border border-[#2D1B0E] hover:border-[#D9A514] flex items-center justify-center text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Consultation Form */}
          <div className="lg:col-span-7 bg-[#171717] p-8 md:p-12 border border-[#2D1B0E] relative shadow-2xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D9A514]/15 border border-[#D9A514] flex items-center justify-center mx-auto mb-6 text-[#F4CA46]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#FAF9F6] font-normal mb-3">
                    Consultation Request Received
                  </h3>
                  <p className="font-sans text-sm text-[#A7A7A7] max-w-md mx-auto leading-relaxed mb-8">
                    Thank you, <strong className="text-[#FAF9F6]">{formData.fullName}</strong>. A senior principal designer from our studio will review your project parameters in {formData.cityProvince || 'Canada'} and reach out shortly at {formData.email}.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 border border-[#D9A514] text-[#D9A514] hover:bg-[#D9A514] hover:text-[#080808] transition-colors text-xs uppercase tracking-widest"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#2D1B0E] pb-4 mb-6">
                    <span className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514]">
                      Consultation Brief
                    </span>
                    <h3 className="font-serif text-2xl text-[#FAF9F6] font-normal mt-1">
                      Project Specifications
                    </h3>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Katherine & Marcus Vance"
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="katherine@vanceholding.ca"
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (416) 000-0000"
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* City / Province */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        City / Province *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityProvince}
                        onChange={(e) => setFormData({ ...formData, cityProvince: e.target.value })}
                        placeholder="e.g. Oakville, Ontario"
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      >
                        <option value="Residential Interior">Residential Interior</option>
                        <option value="Commercial Interior">Commercial Interior</option>
                        <option value="Kitchen">Kitchen Design</option>
                        <option value="Bathroom">Bathroom Design</option>
                        <option value="Renovation">Renovation & Remodeling</option>
                        <option value="Space Planning">Space Planning</option>
                        <option value="Other">Other Bespoke Solution</option>
                      </select>
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      >
                        <option value="Detached Home">Detached Single-Family Home</option>
                        <option value="Condo / Penthouse">Condo / Luxury Penthouse</option>
                        <option value="Heritage Estate">Heritage / Historic Estate</option>
                        <option value="Commercial Office">Executive Commercial Office</option>
                        <option value="Retail / Boutique">Retail / Hospitality Boutique</option>
                        <option value="New Construction">New Architectural Build</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Approximate Budget */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Approximate Budget (CAD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      >
                        <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                        <option value="$100,000 – $250,000">$100,000 – $250,000</option>
                        <option value="$250,000 – $500,000">$250,000 – $500,000</option>
                        <option value="$500,000 – $1,000,000">$500,000 – $1,000,000</option>
                        <option value="$1,000,000+">$1,000,000+ (Turnkey Custom)</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                        Project Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors"
                      >
                        <option value="Immediate (1–2 Months)">Immediate (1–2 Months)</option>
                        <option value="3 – 6 Months">3 – 6 Months</option>
                        <option value="6 – 12 Months">6 – 12 Months</option>
                        <option value="Pre-construction / Planning">Pre-construction / Architectural Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-mono text-[#A7A7A7] mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe square footage, design aspirations, favorite materials, or specific architectural goals..."
                      className="w-full px-4 py-3 bg-[#080808] border border-[#2D1B0E] focus:border-[#D9A514] text-[#FAF9F6] text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-4 h-4 accent-[#D9A514] rounded-none cursor-pointer"
                    />
                    <label htmlFor="agree" className="text-xs text-[#A7A7A7] cursor-pointer">
                      I agree to be contacted by JS Alpha Interiors regarding my project inquiry.
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#F4CA46] hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-3"
                  >
                    <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Request Consultation'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
