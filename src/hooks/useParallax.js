import { useEffect, useRef } from 'react';
import { gsap } from '../animation/gsap';
import { BREAKPOINT } from '../animation/tokens';

/**
 * Translate-Y parallax driven by scroll progress. Transform-only, so there's
 * no layout cost.
 *
 * Desktop-only by default: on mobile the touch-scroll inertia + 120hz displays
 * make subtle parallax feel wrong and cost battery. `media` override lets you
 * opt in per-case.
 *
 * @param {number}  [strength=0.3]   Positive ⇒ element drifts slower than scroll (appears further away).
 * @param {object}  [opts]
 * @param {string}  [opts.media='desktopMotion']
 */
export default function useParallax(strength = 0.3, { media = 'desktopMotion' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const query = BREAKPOINT[media] ?? media;
    const mm = gsap.matchMedia();

    mm.add(query, () => {
      // Functional y values so values recompute on resize (invalidateOnRefresh).
      gsap.fromTo(
        el,
        { y: () => -strength * 100 },
        {
          y: () => strength * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, [strength, media]);

  return ref;
}
