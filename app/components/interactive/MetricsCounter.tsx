'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MetricsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
}

export function MetricsCounter({
  value,
  label,
  suffix = '',
  className = ''
}: MetricsCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!numberRef.current || hasAnimated) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: counterRef.current,
      onEnter: () => {
        gsap.to(numberRef.current, {
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
        });
        setHasAnimated(true);
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [value, hasAnimated]);

  return (
    <div ref={counterRef} className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-white mb-2">
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
