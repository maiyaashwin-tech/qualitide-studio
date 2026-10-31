'use client';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { WorkSection } from '@/app/components/sections/WorkSection';
import { ApproachSection } from '@/app/components/sections/ApproachSection';
import { PricingSection } from '@/app/components/sections/PricingSection';
import { CTASection } from '@/app/components/sections/CTASection';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <HeroSection />
      <WorkSection />
      <ApproachSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
