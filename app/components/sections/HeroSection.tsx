'use client';

import { useRef } from 'react';
import { VantaBackground } from '@/app/components/animations/VantaBackground';
import { AnimatedText } from '@/app/components/interactive/AnimatedText';
import { AnimatedButton } from '@/app/components/animations/AnimatedButton';

export function HeroSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VantaBackground>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <div className="mb-6">
            <AnimatedText
              text="Your reels are losing to competition."
              type="slide"
              className="text-5xl md:text-7xl font-bold mb-4 block"
              delay={0.1}
            />
            <AnimatedText
              text="We engineer them to win."
              type="slide"
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block"
              delay={0.3}
            />
          </div>

          <div className="mb-12">
            <AnimatedText
              text="Data-driven motion graphics that convert. Not agency BS."
              type="fade"
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              delay={0.5}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              label="Book a 20-min audit"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-lg"
              onClick={() => {
                document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <AnimatedButton
              label="See how we work"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg"
              onClick={() => {
                document.getElementById('approach-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          <div className="mt-16 text-gray-400 text-sm">
            <p>Average performance: <span className="text-cyan-400 font-semibold">8.2% engagement</span> vs 2.1% industry average</p>
          </div>
        </div>
      </VantaBackground>
    </section>
  );
}
