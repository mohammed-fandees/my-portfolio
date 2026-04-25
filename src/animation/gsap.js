import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger exactly once. The global-check guards against HMR
// re-running this module and registering the plugin twice in dev.
if (!gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  // Mobile Chrome/Safari shrink the URL bar on scroll, which fires a resize
  // that would otherwise recompute every pinned section and cause jank.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };
