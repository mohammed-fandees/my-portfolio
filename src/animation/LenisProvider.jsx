import { useEffect } from 'react';
import { createLenis, destroyLenis, scrollToTarget } from './lenis';
import { ScrollTrigger } from './gsap';

// Mounts Lenis once at the app root, wires anchor-link interception, and
// triggers a ScrollTrigger.refresh after first paint so pin positions line up
// with the final laid-out DOM.
const LenisProvider = ({ children }) => {
  useEffect(() => {
    createLenis();

    // Wait one frame so layout is settled before ST measures trigger positions.
    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    // Delegated handler — catches every in-page anchor link without each
    // component needing its own onClick. Keeps Navigation/MobileMenu untouched.
    const onAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      scrollToTarget(href, { offset: 80 });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      cancelAnimationFrame(refreshId);
      document.removeEventListener('click', onAnchorClick);
      destroyLenis();
    };
  }, []);

  return children;
};

export default LenisProvider;
