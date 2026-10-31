'use client';

import { useRef } from 'react';
import { AnimatedText } from '@/app/components/interactive/AnimatedText';
import { AnimatedButton } from '@/app/components/animations/AnimatedButton';

export function CTASection() {
  const sectionRef = useRef(null);

  return (
    <section id="cta-section" ref={sectionRef} className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <AnimatedText
          text="Ready to engineer your reels?"
          type="fade"
          className="text-4xl md:text-5xl font-bold mb-4"
        />
        <p className="text-gray-400 text-lg">
          Book a 20-minute audit. No commitment. We'll show you exactly what's costing you views.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <AnimatedButton
          label="Book your audit"
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-lg"
          onClick={() => {
            window.open('https://calendar.app.google/6aXCjzP3VbN91VLi9', '_blank');
          }}
        />
        <AnimatedButton
          label="Send a brief"
          className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg"
          onClick={() => {
            window.location.href = 'mailto:team@qualitidestudio.com';
          }}
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-gray-300">
        <p className="mb-4">Questions? We're here.</p>
        <p className="font-semibold text-white">team@qualitidestudio.com</p>
        <p className="text-sm text-gray-500 mt-4">Reply within 2 hours on weekdays.</p>
      </div>
    </section>
  );
}
