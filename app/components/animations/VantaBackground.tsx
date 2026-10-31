'use client';

import { useEffect, useRef } from 'react';
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';
// @ts-ignore
import * as THREE from 'three';

interface VantaBackgroundProps {
  children?: React.ReactNode;
}

export function VantaBackground({ children }: VantaBackgroundProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    let vantaEffect: any;
    if (containerRef.current) {
      vantaEffect = FOG({
        THREE,
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x0,
        midtoneColor: 0x0,
        lowlightColor: 0x0,
        baseColor: 0x1a1a1a,
        speed: 3.5,
        zoom: 1.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      {children}
    </div>
  );
}
