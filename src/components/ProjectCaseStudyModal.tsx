import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Layers, ArrowRight, ArrowLeft, Quote, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { PROJECTS } from '../data/content';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onBookConsultation: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onBookConsultation
}) => {
  if (!project) return null;

  // Find next project
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080808]/95 backdrop-blur-md">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#080808]/90 border-b border-[#2D1B0E] backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#D9A514] tracking-widest uppercase">
              CASE STUDY
            </span>
            <span className="text-[#2D1B0E]">|</span>
            <span className="font-serif text-lg text-[#FAF9F6] truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onBookConsultation}
              className="hidden sm:inline-block px-4 py-2 bg-[#D9A514] text-[#080808] text-[11px] uppercase tracking-[0.18em] font-semibold border border-[#C58A00] hover:bg-[#FAF9F6] transition-colors"
            >
              Inquire About Similar Project
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#A7A7A7] hover:text-[#D9A514] transition-colors flex items-center gap-2"
              aria-label="Close case study"
            >
              <span className="text-xs font-mono uppercase tracking-widest hidden md:inline-block">Close</span>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 text-[#FAF9F6]">
          {/* Project Title & Meta Banner */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D9A514] uppercase tracking-widest mb-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>Completed {project.year}</span>
              <span>·</span>
              <span>{project.area}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#FAF9F6] leading-tight mb-4">
              {project.title}
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#A7A7A7] font-light italic max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Immersive Hero Image */}
          <div className="w-full aspect-[16/9] overflow-hidden border border-[#2D1B0E] mb-16 shadow-2xl bg-[#171717]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Case Study Narrative: 3-column breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 pb-16 border-b border-[#2D1B0E]">
            {/* Left: Overview & Scope */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <h3 className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514] mb-2">
                  01 · Overview
                </h3>
                <p className="font-sans text-sm text-[#A7A7A7] font-light leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514] mb-2">
                  02 · Spatial Challenge
                </h3>
                <p className="font-sans text-sm text-[#A7A7A7] font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Middle: Architectural Approach */}
            <div className="md:col-span-5">
              <h3 className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514] mb-2">
                03 · Architectural Approach
              </h3>
              <p className="font-sans text-sm md:text-base text-[#FAF9F6] font-light leading-relaxed mb-6">
                {project.approach}
              </p>

              {/* Client Review Quote if exists */}
              {project.clientReview && (
                <div className="p-6 bg-[#171717] border-l-2 border-[#D9A514] text-xs font-serif italic text-[#FAF9F6] leading-relaxed">
                  “{project.clientReview.quote}”
                  <div className="mt-3 font-sans not-italic font-semibold text-[#D9A514] text-[11px]">
                    — {project.clientReview.author}, {project.clientReview.role}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Materials Palette */}
            <div className="md:col-span-3">
              <h3 className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514] mb-3">
                Material Palette
              </h3>
              <ul className="space-y-2.5">
                {project.materialsUsed.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-sans text-[#FAF9F6] pb-2 border-b border-[#171717]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A514]" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Before & After comparison if available */}
          {project.beforeImage && project.afterImage && (
            <div className="mb-20">
              <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-[0.24em] text-[#D9A514]">
                  Interactive Comparison
                </span>
                <h3 className="font-serif text-3xl text-[#FAF9F6] mt-1">
                  Before & After Transformation
                </h3>
              </div>
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
                location={project.location}
                standalone={false}
              />
            </div>
          )}

          {/* Next Project Navigation */}
          <div className="mt-20 pt-10 border-t border-[#2D1B0E] flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#A7A7A7] hover:text-[#D9A514] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#FAF9F6] hover:text-[#D9A514] transition-colors"
            >
              <span>Next Space: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 text-[#D9A514]" />
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
