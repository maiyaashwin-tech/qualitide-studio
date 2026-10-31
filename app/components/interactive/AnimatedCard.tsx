'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;
  hoverShadow?: boolean;
}

export function AnimatedCard({
  children,
  className = '',
  hoverScale = true,
  hoverShadow = true,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      const timeline = gsap.timeline();

      if (hoverScale) {
        timeline.to(card, { scale: 1.02, duration: 0.3, ease: 'power2.out' }, 0);
      }

      if (hoverShadow) {
        timeline.to(
          card,
          {
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            duration: 0.3,
            ease: 'power2.out',
          },
          0
        );
      }
    };

    const handleMouseLeave = () => {
      const timeline = gsap.timeline();

      if (hoverScale) {
        timeline.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' }, 0);
      }

      if (hoverShadow) {
        timeline.to(
          card,
          {
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            duration: 0.3,
            ease: 'power2.out',
          },
          0
        );
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverScale, hoverShadow]);

  return (
    <div
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all ${className}`}
    >
      {children}
    </div>
  );
}
