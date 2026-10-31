'use client';

import { useRef } from 'react';
import { AnimatedText } from '@/app/components/interactive/AnimatedText';
import { AnimatedCard } from '@/app/components/interactive/AnimatedCard';
import { MetricsCounter } from '@/app/components/interactive/MetricsCounter';
import { useGsapAnimation } from '@/app/lib/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SAMPLE_CASES = [
  {
    company: 'Fintech Platform (Series B)',
    metric: 487000,
    label: 'Views in 2 weeks',
    engagement: '8.2%',
    conversion: '12.4%',
    breakdown: 'Hook: "Your bank doesn\'t move fast. Ours does." (1s). Promise: Feature on screen (3s). Proof: Real transaction flow (10s). CTA: Download app.',
  },
  {
    company: 'AI SaaS (Recent Launch)',
    metric: 1240000,
    label: 'Views in 1 month',
    engagement: '9.1%',
    conversion: '15.2%',
    breakdown: 'Hook: Surprising stat "86% of teams waste 4 hrs/week" (0.5s). Promise: Solution visual (2s). Pacing: Cut every 1.2s. Sound: Engineered for scroll-stop.',
  },
  {
    company: 'Health Tech (Funded)',
    metric: 342000,
    label: 'Views in 3 weeks',
    engagement: '7.8%',
    conversion: '11.3%',
    breakdown: 'Hook: Real doctor testimonial (2s). Promise: Time saved per week (4s). Proof: Dashboard before/after (6s). Authority: "FDA cleared, trusted by 500+ clinics."',
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(gridRef, (element: HTMLElement) => {
    gsap.fromTo(
      element.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      }
    );
  });

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedText
          text="How we engineer performance."
          type="fade"
          className="text-4xl md:text-5xl font-bold mb-4"
        />
        <p className="text-gray-400 text-lg">Each reel is built on data. Here's the proof.</p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-3 gap-6 mb-16">
        {SAMPLE_CASES.map((caseStudy, idx) => (
          <AnimatedCard key={idx} hoverScale hoverShadow>
            <div className="mb-6">
              <p className="text-cyan-400 font-semibold text-sm mb-2">{caseStudy.company}</p>
              <MetricsCounter
                value={Math.floor(caseStudy.metric / 1000)}
                label={caseStudy.label.replace(/[0-9]/g, 'K')}
                suffix="K"
                className="mb-4"
              />
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase">Engagement</p>
                <p className="text-white font-semibold">{caseStudy.engagement}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase">Conversion Rate</p>
                <p className="text-white font-semibold">{caseStudy.conversion}</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-xs italic">{caseStudy.breakdown}</p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
        <p className="text-gray-300 mb-4">
          These aren't lucky reels. They're engineered breakdowns built on our 5-step methodology.
        </p>
        <p className="text-cyan-400 font-semibold">Every frame matters. Every second counts.</p>
      </div>
    </section>
  );
}
