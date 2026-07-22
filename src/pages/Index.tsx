import { useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import IntroSearchOverlay from '@/components/IntroSearchOverlay';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import BackToTopButton from '@/components/BackToTopButton';

const Index = () => {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const { pathname, search, hash } = window.location;
    if (hash) {
      window.history.replaceState(null, '', `${pathname}${search}`);
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <IntroSearchOverlay query="Chandrabhan portfolio" totalDurationMs={1800} />
      <Navbar />
      <FloatingNav />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
