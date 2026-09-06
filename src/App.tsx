import React, { useState, useEffect } from 'react';
import { PageView, Project, Service } from './types';
import { PROJECTS, SERVICES } from './data/content';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MaterialsSection } from './components/MaterialsSection';
import { TestimonialSlider } from './components/TestimonialSlider';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InspirationGallery } from './components/InspirationGallery';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';

// Dedicated Page Views
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ProcessPage } from './components/pages/ProcessPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // Scroll to top or target section when page changes
  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openProjectCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#171717] font-sans selection:bg-[#D9A514]/30 selection:text-[#080808]">
      {/* Luxury Custom Cursor (Desktop only, automatic touch disable) */}
      <CustomCursor />

      {/* Floating Transparent Luxury Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Page Routing */}
      <main id="main-content">
        {currentPage === 'home' && (
          <>
            {/* 01: Fullscreen Cinematic Hero Section */}
            <Hero
              onExploreProjects={() => handleNavigate('projects')}
              onBookConsultation={() => setIsConsultationOpen(true)}
            />

            {/* 02: Intro Editorial Brand Statement */}
            <IntroStatement onDiscoverStory={() => handleNavigate('about')} />

            {/* 03: About Section with Asymmetrical Layout & Animated Stats */}
            <AboutSection onLearnMore={() => handleNavigate('about')} />

            {/* 04: Interactive Design Services Showcase */}
            <ServicesSection onSelectService={openServiceModal} />

            {/* 05: Featured Projects (Selected Spaces) */}
            <FeaturedProjects
              onSelectProject={openProjectCaseStudy}
              onViewAllProjects={() => handleNavigate('projects')}
            />

            {/* 06: Interactive Before / After Transformation Slider */}
            <BeforeAfterSlider />

            {/* 07: Dark Luxury Design Philosophy Pillars */}
            <PhilosophySection />

            {/* 08: 6-Step Design Process Timeline with Scroll Progress */}
            <ProcessTimeline />

            {/* 09: Tactile Materials & Details Visual Grid */}
            <MaterialsSection />

            {/* 10: Spaces People Love Living In (Client Testimonial Slider) */}
            <TestimonialSlider />

            {/* 11: Why Choose JS Alpha? (Editorial Cards) */}
            <WhyChooseUs />

            {/* 12: Visual Inspiration Gallery with Lightbox Modal */}
            <InspirationGallery />

            {/* 13: Dramatic Panoramic CTA Banner */}
            <CtaBanner
              onStartProject={() => setIsConsultationOpen(true)}
              onScheduleConsultation={() => setIsConsultationOpen(true)}
            />

            {/* 14: Comprehensive Canadian Consultation Booking Form */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBookConsultation={() => setIsConsultationOpen(true)}
            onExploreProjects={() => handleNavigate('projects')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={openServiceModal}
            onBookConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={openProjectCaseStudy}
            onBookConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage
            onBookConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Large Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Modals */}
      {/* 1. Project Case Study Modal Template */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        onBookConsultation={() => {
          setSelectedProject(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* 2. Service Deep-Dive Inclusions Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={() => {
          setSelectedService(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* 3. Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
