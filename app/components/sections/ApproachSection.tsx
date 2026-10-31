'use client';

import { useRef, useState } from 'react';
import { AnimatedText } from '@/app/components/interactive/AnimatedText';
import { AnimatedCard } from '@/app/components/interactive/AnimatedCard';
import gsap from 'gsap';

const STEPS = [
  {
    num: '01',
    title: 'Data Audit',
    description: 'What actually resonates with your audience.',
    details: 'We analyze your past content, audience behavior, and competitive landscape to understand what triggers engagement.',
  },
  {
    num: '02',
    title: 'Script Architecture',
    description: 'Every beat optimized for viewer psychology.',
    details: 'Hook, promise, proof, CTA. Timed to the exact second for maximum retention and conversion.',
  },
  {
    num: '03',
    title: 'Visual Strategy',
    description: 'Colors, pacing, motion timed for conversion.',
    details: 'We choose palette, timing, and transitions based on psychology and your brand. Nothing is accidental.',
  },
  {
    num: '04',
    title: 'Production',
    description: 'Premium motion, not AI slop.',
    details: 'Hand-crafted animation, professional sound design, and meticulous attention to detail. This is premium.',
  },
  {
    num: '05',
    title: 'Performance Tracking',
    description: 'Proof: what worked, what didn\'t.',
    details: 'Every metric matters. We track, analyze, and improve for next month\'s content.',
  },
];

export function ApproachSection() {
  const sectionRef = useRef(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
    } else {
      setExpandedIdx(idx);
    }
  };

  return (
    <section id="approach-section" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedText
          text="The methodology"
          type="fade"
          className="text-4xl md:text-5xl font-bold mb-4"
        />
        <p className="text-gray-400 text-lg">Click to explore. No surprises, just strategy.</p>
      </div>

      <div className="space-y-4">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            onClick={() => toggleExpand(idx)}
            className="cursor-pointer"
          >
            <AnimatedCard className="p-6" hoverShadow={false}>
              <div className="flex items-start gap-6">
                <div className="text-4xl font-bold text-cyan-400 w-16 flex-shrink-0">{step.num}</div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-gray-500">{expandedIdx === idx ? '−' : '+'}</span>
                  </div>
                  <p className="text-gray-400">{step.description}</p>

                  {expandedIdx === idx && (
                    <p className="text-gray-300 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                      {step.details}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 border border-cyan-400/30 rounded-lg p-8 text-center">
        <p className="text-white font-semibold mb-2">This is why we charge what we charge.</p>
        <p className="text-gray-300">Premium strategy. Premium execution. Premium results.</p>
      </div>
    </section>
  );
}
