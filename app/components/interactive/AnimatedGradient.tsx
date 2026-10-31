'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedGradientProps {
  children?: React.ReactNode;
  className?: string;
}

export function AnimatedGradient({ children, className = '' }: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const gradient = containerRef.current;

    gsap.to(gradient, {
      backgroundPosition: '200% 0',
      duration: 8,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto] ${className}`}
      style={{
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </div>
  );
}
