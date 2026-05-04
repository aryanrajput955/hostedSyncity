'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
        lerp: 0.12, 
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2
    }}>
      {children}
    </ReactLenis>
  );
}
