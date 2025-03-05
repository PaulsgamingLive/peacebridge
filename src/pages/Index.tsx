
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StoriesSection from '@/components/StoriesSection';
import TimelineSection from '@/components/TimelineSection';
import DialogueSection from '@/components/DialogueSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AccessibilityFloatingButton from '@/components/AccessibilityFloatingButton';
import { setupScrollAnimations } from '@/utils/animation';

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <TimelineSection />
      <DialogueSection />
      <Footer />
      <ScrollToTop />
      <AccessibilityFloatingButton />
    </main>
  );
};

export default Index;
