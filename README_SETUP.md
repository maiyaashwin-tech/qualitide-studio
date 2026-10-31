# Qualitide Studio — Next.js Setup

## ✅ Installed & Configured

### Core Libraries
- **GSAP 3.15.0** — Scroll animations, tweens, timelines
- **Lenis 1.3.27** — Smooth scrolling
- **Vanta 0.5.24** — Animated backgrounds (fog, waves, etc.)
- **Three.js 0.187.0** — 3D rendering for Vanta

### Folder Structure
```
app/
  ├─ components/
  │  ├─ animations/      (GSAP-powered animated components)
  │  ├─ interactive/     (React Bits style: buttons, cards, effects)
  │  ├─ sections/        (Homepage sections: hero, case studies, etc.)
  │  └─ shared/          (Providers, layouts, utilities)
  ├─ lib/
  │  ├─ hooks/           (useLenis, useGsap animation hooks)
  │  └─ utils/           (Helper functions)
  └─ styles/             (Tailwind config, custom CSS)
```

### Created Components
1. **LenisProvider** — Wraps app for smooth scroll
2. **useLenis Hook** — Initialize Lenis in any component
3. **useGsap Hook** — Scroll-triggered animations
4. **AnimatedButton** — Hover effects with GSAP
5. **VantaBackground** — Animated background (fog)

## 📋 Next Steps

### Still to Set Up
- **React Bits Components** (animated text, backgrounds, cards)
- **agency-agents** (AI personas for Claude Code)
- **Graphify Skill** (codebase knowledge graph for Claude Code)
- **dqnamo Kitchen** (component reference library)
- **Think Macro Guides** (free tools reference)

### To Build
1. **Homepage sections:**
   - Hero (with Vanta background + GSAP animations)
   - Work/Samples (video grid with metrics overlay)
   - The Approach (progressive disclosure)
   - Pricing (tier-1 justified)
   - Case Studies (video breakdowns)

2. **Sample Reels** (create with video-breakdown-skill analysis)

3. **Website Mockups** (show previews before final build)

## 🔧 How to Use

### Import and wrap app:
```tsx
import { LenisProvider } from '@/app/components/shared/LenisProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
```

### Use animations:
```tsx
import { useGsapAnimation } from '@/app/lib/hooks/useGsap';
import { useRef } from 'react';

export function MyComponent() {
  const ref = useRef(null);

  useGsapAnimation(ref, (element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        onEnter: () => console.log('in view'),
      },
    });
  });

  return <div ref={ref}>Content</div>;
}
```

## 📦 Ready to Deploy
Project is in: `/tmp/qualitide-studio`

Next: Create samples, build website sections, wire agency positioning.
