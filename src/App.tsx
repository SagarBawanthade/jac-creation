import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import Stats from './components/Stats';
import Framework from './components/Framework';
import SelectedWork from './components/SelectedWork';
import FeaturedProjects from './components/FeaturedProjects';
import BrandStatement from './components/BrandStatement';
import ContactFooter from './components/ContactFooter';
import AppointmentModal from './components/ui/AppointmentModal';

import ProjectModal, { type ProjectDetail } from './components/ui/ProjectModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const openAppointment = () => setIsAppointmentModalOpen(true);
  const closeAppointment = () => setIsAppointmentModalOpen(false);

  const openProject = (project: ProjectDetail) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grain-overlay min-h-screen bg-[#070706] text-[#F5F2EB] selection:bg-[#C5A059]/30 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenAppointment={openAppointment} />

      {/* 1. Hero Section */}
      <Hero
        onExploreWork={() => scrollToSection('projects')}
        onOpenAppointment={openAppointment}
      />

      {/* Luxury Discipline Marquee */}
      <Marquee />

      {/* 2. Philosophy Section */}
      <Philosophy />

      {/* Studio Distinctions & Scale Metrics */}
      <Stats />

      {/* 3. The Framework (Methodology & Scale Continuum) */}
      <Framework />

      {/* 4. Selected Work / Portfolio Categories */}
      <SelectedWork onSelectProject={openProject} />

      {/* 5. Featured Projects Gallery */}
      <FeaturedProjects onSelectProject={openProject} />

      {/* 6. Brand Statement ("Architecture as a quiet act.") */}
      <BrandStatement />

      {/* 7. Call to Action / Footer */}
      <ContactFooter onOpenAppointment={openAppointment} />

      {/* Interactive Monograph Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
        onBookConsultation={() => {
          closeProject();
          openAppointment();
        }}
      />

      {/* Interactive Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={closeAppointment}
      />
    </div>
  );
}