import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen Design', 'Interior Renovation'];

  const filteredProjects = selectedFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#FAF9F6] text-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#E6E0D5]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C58A00]">04</span>
              <span className="w-8 h-[1px] bg-[#D9A514]" />
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#70401E]">
                SELECTED SPACES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#080808] leading-tight">
              Selected Spaces.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#70401E] font-sans font-light">
              A collection of interiors crafted with intention.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 border ${
                  selectedFilter === cat
                    ? 'bg-[#080808] text-[#FAF9F6] border-[#080808] shadow-sm'
                    : 'bg-transparent text-[#70401E] border-[#E6E0D5] hover:border-[#D9A514]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Project Grid with Asymmetric Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic: Alternate full-width feature cards and 2-column cards
            const isFullWidth = index === 0 || index === 3;
            const colSpan = isFullWidth ? 'md:col-span-12' : 'md:col-span-6';
            const aspectClass = isFullWidth ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => onSelectProject(project)}
                data-cursor="view"
                className={`${colSpan} group cursor-pointer flex flex-col`}
              >
                {/* Project Image Frame */}
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#171717] shadow-xl border border-[#E6E0D5]`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Vignette & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Corner Gold Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#080808]/85 backdrop-blur-sm border border-[#D9A514]/40 text-[10px] uppercase tracking-[0.2em] font-mono text-[#F4CA46]">
                    {project.category}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 z-10 text-xs font-mono text-[#FAF9F6]/80 bg-[#080808]/60 backdrop-blur-sm px-2.5 py-1">
                    {project.year}
                  </div>

                  {/* On Hover Quick View Prompter */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-5 py-2.5 bg-[#D9A514] text-[#080808] text-xs font-semibold uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Image Content */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FAF9F6] z-10">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#F4CA46] font-sans tracking-wider mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D9A514]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-normal group-hover:text-[#F4CA46] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[#D9A514]/40 bg-[#080808]/80 flex items-center justify-center text-[#D9A514] group-hover:bg-[#D9A514] group-hover:text-[#080808] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Subtitle & Specs Underneath Card */}
                <div className="mt-4 flex items-baseline justify-between text-xs text-[#70401E]">
                  <p className="font-sans font-light italic truncate pr-4">
                    {project.subtitle}
                  </p>
                  <span className="font-mono text-[11px] text-[#A7A7A7] shrink-0">
                    {project.area}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-4 px-8 py-4 border border-[#080808] text-[#080808] hover:bg-[#080808] hover:text-[#F4CA46] hover:border-[#D9A514] transition-all duration-300 uppercase text-xs tracking-[0.22em] font-semibold group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#D9A514] transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
