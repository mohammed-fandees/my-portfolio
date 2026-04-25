import { useEffect, useRef } from 'react';
import { gsap } from '../animation/gsap';
import { DURATION, EASE, BREAKPOINT } from '../animation/tokens';

// Animation presets — transform + opacity only, nothing that triggers reflow.
const PRESETS = {
  'fade-up':    { from: { opacity: 0, y: 30 },        to: { opacity: 1, y: 0 } },
  'fade-down':  { from: { opacity: 0, y: -30 },       to: { opacity: 1, y: 0 } },
  'fade-left':  { from: { opacity: 0, x: -30 },       to: { opacity: 1, x: 0 } },
  'fade-right': { from: { opacity: 0, x: 30 },        to: { opacity: 1, x: 0 } },
  'zoom-in':    { from: { opacity: 0, scale: 0.92 }, to: { opacity: 1, scale: 1 } },
  'fade':       { from: { opacity: 0 },               to: { opacity: 1 } },
};

/**
 * One-shot reveal on scroll enter. Replaces the IntersectionObserver-based
 * ScrollReveal: same ergonomics, but driven by ScrollTrigger so it plays nicely
 * with Lenis's virtualized scroll and with any pinned sections further down.
 *
 * @param {keyof typeof PRESETS} animation
 * @param {object}  [opts]
 * @param {number}  [opts.delay=0]      In ms — matches the old ScrollReveal API.
 * @param {number}  [opts.duration]     In seconds.
 * @param {string}  [opts.start='top 85%']  ScrollTrigger start position.
 */
export default function useReveal(animation = 'fade-up', { delay = 0, duration = DURATION.base, start = 'top 78%' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const preset = PRESETS[animation] ?? PRESETS.fade;
    const mm = gsap.matchMedia();

    // Motion-OK path — full reveal animation.
    // fromTo (not set+to): GSAP captures the CSS original state BEFORE applying
    // the "from" values, so mm.revert() correctly restores visibility on cleanup.
    mm.add(BREAKPOINT.motionOk, () => {
      gsap.fromTo(el, preset.from, {
        ...preset.to,
        duration,
        delay: delay / 1000,
        ease: EASE.out,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    });

    // Reduced-motion path — skip animation, guarantee final visible state.
    mm.add(BREAKPOINT.reducedMotion, () => {
      gsap.set(el, { ...preset.to, opacity: 1 });
    });

    return () => mm.revert();
  }, [animation, delay, duration, start]);

  return ref;
}
