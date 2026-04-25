import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { getLenis } from '../animation/lenis';

// Scaled-down from the old implementation: the progress *bar* is now its own
// self-driven component (ScrollProgress), so this hook no longer tracks
// progress as React state — only the back-to-top visibility threshold, which
// genuinely needs to mount/unmount a DOM node.
const useScrollProgress = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    // Route through Lenis so it matches the rest of the app's scroll feel.
    // Fallback to native for the brief window before Lenis has mounted.
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: prefersReducedMotion });
    } else {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  }, [prefersReducedMotion]);

  return { showBackToTop, scrollToTop };
};

export default useScrollProgress;
