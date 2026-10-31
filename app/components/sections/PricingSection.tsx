'use client';

import { useRef, useState } from 'react';
import { AnimatedText } from '@/app/components/interactive/AnimatedText';
import { AnimatedCard } from '@/app/components/interactive/AnimatedCard';
import { AnimatedButton } from '@/app/components/animations/AnimatedButton';

const TIERS = [
  {
    name: 'Starter',
    price: '$900',
    period: '/month',
    description: 'For brands just starting with data-driven video.',
    reels: '4 reels/month',
    includes: [
      'Monthly data audit',
      'Strategic brief (non-binding)',
      'Basic performance tracking',
      'Turnaround: 48 hours',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$1,500',
    period: '/month',
    description: 'The sweet spot. Most clients start here.',
    reels: '6 reels/month',
    includes: [
      'All Starter features',
      'Full strategy + script architecture',
      'Performance analysis & recommendations',
      'Direct access during production',
      'Turnaround: 48 hours',
    ],
    highlight: true,
    cta: 'Most Popular',
  },
];

export function PricingSection() {
  const sectionRef = useRef(null);
  const [scaleReels, setScaleReels] = useState(8);

  // Strategic discount structure: bulk pricing gets better as they add more
  const calculateScalePrice = (reels: number) => {
    const basePrice = 2000;
    const pricePerReel = 250;

    if (reels <= 8) return basePrice;
    if (reels <= 12) return basePrice + (reels - 8) * pricePerReel * 0.9; // 10% discount
    if (reels <= 16) return basePrice + (reels - 8) * pricePerReel * 0.8; // 20% discount
    return basePrice + (reels - 8) * pricePerReel * 0.75; // 25% discount
  };

  const scalePrice = calculateScalePrice(scaleReels);
  const pricePerReel = (scalePrice / scaleReels).toFixed(0);

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <AnimatedText
          text="Pricing that makes sense."
          type="fade"
          className="text-4xl md:text-5xl font-bold mb-4"
        />
        <p className="text-gray-400 text-lg">Not cheap. Not expensive. Worth every rupee.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter & Growth Tiers */}
        {TIERS.map((tier, idx) => (
          <AnimatedCard
            key={idx}
            className={`p-8 flex flex-col ${
              tier.highlight ? 'md:scale-105 border-cyan-400/50 bg-cyan-400/5' : ''
            }`}
            hoverScale={!tier.highlight}
          >
            {tier.highlight && (
              <div className="bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                {tier.cta || 'Most Popular'}
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-400">{tier.period}</span>
              </div>
              <p className="text-cyan-400 font-semibold mt-2">{tier.reels}</p>
            </div>

            <div className="space-y-3 mb-8 flex-1">
              {tier.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <AnimatedButton
              label="Start here"
              className={`w-full font-semibold py-3 rounded-lg ${
                tier.highlight
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-black'
                  : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white'
              }`}
              onClick={() => {
                document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </AnimatedCard>
        ))}

        {/* Scale Tier with Dynamic Slider */}
        <AnimatedCard
          className={`p-8 md:scale-105 border-cyan-400/50 bg-cyan-400/5`}
          hoverScale={false}
        >
          <div className="bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
            Scale Up
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
          <p className="text-gray-400 text-sm mb-6">Customize reels for your needs. Bulk discounts apply.</p>

          {/* Dynamic Price Display */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-white">${scalePrice.toLocaleString()}</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-cyan-400 font-semibold">{scaleReels} reels/month</p>
            <p className="text-gray-500 text-sm mt-2">${pricePerReel} per reel</p>
          </div>

          {/* Slider */}
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-semibold block mb-3">
              How many reels do you need?
            </label>
            <input
              type="range"
              min="8"
              max="24"
              value={scaleReels}
              onChange={(e) => setScaleReels(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>8</span>
              <span>16</span>
              <span>24</span>
            </div>

            {/* Discount Badge */}
            {scaleReels > 8 && (
              <div className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">
                  ✓ Bulk discount applied: {((1 - (scalePrice / (scaleReels * 250))) * 100).toFixed(0)}% savings
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8 flex-1">
            {[
              'All Growth features',
              'Dedicated creative director',
              'Weekly performance calls',
              'Custom sound design',
              'Priority production',
              'Turnaround: 36 hours',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <AnimatedButton
            label="Customize plan"
            className="w-full font-semibold py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black"
            onClick={() => {
              document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </AnimatedCard>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm">
          All prices in USD. Include strategy, production, and first month's content. No setup fees. Cancel anytime (but you won't want to).
        </p>
      </div>
    </section>
  );
}
