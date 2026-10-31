'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'fade' | 'typewriter' | 'slide';
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'fade'
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (type === 'typewriter') {
      ref.current.style.overflow = 'hidden';
      ref.current.style.whiteSpace = 'nowrap';
      ref.current.style.width = '0';

      gsap.to(ref.current, {
        width: 'auto',
        duration: text.length * 0.05,
        delay,
        ease: 'none',
      });
    } else if (type === 'fade') {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay }
      );
    } else if (type === 'slide') {
      gsap.fromTo(
        ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay }
      );
    }
  }, [text, delay, type]);

  return <span ref={ref} className={className}>{text}</span>;
}
