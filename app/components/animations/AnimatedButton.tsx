'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({ label, onClick, className }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleHover = () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleHoverOut = () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    btn.addEventListener('mouseenter', handleHover);
    btn.addEventListener('mouseleave', handleHoverOut);

    return () => {
      btn.removeEventListener('mouseenter', handleHover);
      btn.removeEventListener('mouseleave', handleHoverOut);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${className}`}
    >
      {label}
    </button>
  );
}
