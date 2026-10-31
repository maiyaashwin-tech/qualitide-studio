import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: (element: HTMLElement) => void
) {
  useEffect(() => {
    if (ref.current) {
      animation(ref.current);
    }

    return () => {
      if (ref.current) gsap.killTweensOf(ref.current);
    };
  }, [ref, animation]);
}

export { gsap, ScrollTrigger };
