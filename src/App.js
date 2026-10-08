import React from 'react';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';
import HeroSection from './sections/HeroSection';
import {
  AboutSection,
  CompetitionSection,
  VisionSection,
  WhatWeDoSection,
  YouthSection
} from './sections/ClubSections';
import {
  ActivitiesSection,
  BrandExposureSection,
  CommunitySection
} from './sections/ActivitySections';
import {
  ContactSection,
  GrowthSection,
  PartnershipSection,
  WhyPartnerSection
} from './sections/PartnerSections';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <WhatWeDoSection />
        <ActivitiesSection />
        <CompetitionSection />
        <YouthSection />
        <CommunitySection />
        <BrandExposureSection />
        <PartnershipSection />
        <WhyPartnerSection />
        <GrowthSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
