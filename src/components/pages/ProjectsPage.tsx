import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../data/content';
import { Project } from '../../types';
import { FeaturedProjects } from '../FeaturedProjects';
import { BeforeAfterSlider } from '../BeforeAfterSlider';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onBookConsultation: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onBookConsultation
}) => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-20 md:py-32 bg-[#080808] text-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A514]">03</span>
            <span className="w-8 h-[1px] bg-[#D9A514]" />
            <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#A7A7A7]">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FAF9F6] leading-tight mb-8">
            Selected
            <br />
            <span className="italic text-gold-gradient font-normal">Canadian Spaces.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#A7A7A7] font-light max-w-2xl leading-relaxed">
            A curated portfolio spanning Toronto brownstones, West Vancouver villas, Oakville estates, and executive commercial headquarters across Canada.
          </p>
        </div>
      </section>

      {/* Featured Projects with filtering */}
      <FeaturedProjects onSelectProject={onSelectProject} />

      {/* Before & After Interactive Showcase */}
      <BeforeAfterSlider />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#FAF9F6] text-center border-t border-[#E6E0D5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#080808] mb-4">
            Have a project in mind for 2026?
          </h2>
          <p className="text-sm text-[#70401E] mb-8 font-sans">
            We are currently scheduling architectural consultations for spring and summer project launches across Ontario, British Columbia, and Alberta.
          </p>
          <button
            onClick={onBookConsultation}
            className="px-8 py-4 bg-[#D9A514] text-[#080808] uppercase tracking-[0.2em] font-semibold text-xs border border-[#C58A00] hover:bg-[#080808] hover:text-[#F4CA46] transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
