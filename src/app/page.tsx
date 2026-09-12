import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import ConceptSection from '@/app/components/ConceptSection';
import ArchivesSection from '@/app/components/ArchivesSection';
import NextEventSection from '@/app/components/NextEventSection';
import CTASection from '@/app/components/CTASection';

export default function Page() {
  return (
    <body>
      <HeroSection />
      <ConceptSection />
      <ArchivesSection />
      <NextEventSection />
      <CTASection />
    </body>
  );
}