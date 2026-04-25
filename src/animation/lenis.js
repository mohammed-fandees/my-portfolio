import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

// Singleton Lenis instance. Mounted by <LenisProvider/> at the app root and
// reused anywhere we need programmatic scrolling (anchor nav, back-to-top).
let instance = null;

function shouldUseLenis() {
  if (typeof window === "undefined") return false;
  const reducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isDesktopViewport = window.matchMedia?.("(min-width: 1024px)").matches;
  return !reducedMotion && isDesktopViewport;
}

function rafTick(time) {
  // GSAP's ticker gives us a shared rAF loop. We convert the time arg from
  // seconds → ms because Lenis expects ms.
  instance?.raf(time * 1000);
}

export function createLenis() {
  if (instance) return instance;
  if (!shouldUseLenis()) return null;

  instance = new Lenis({
    duration: 1.3,
    // Expo-out — matches Apple's scroll feel: quick start, soft settle.
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // IMPORTANT: keep native touch scrolling on mobile. Smoothing touch scroll
    // destroys battery, introduces judder, and fights with pinned ScrollTrigger
    // sections during swipe. Native inertia is already excellent.
    smoothTouch: false,
    touchMultiplier: 1.5,
  });

  // Keep ScrollTrigger in sync with Lenis's virtualized scroll position.
  instance.on("scroll", ScrollTrigger.update);

  // Drive Lenis from GSAP's ticker — one rAF for the whole app.
  gsap.ticker.add(rafTick);
  gsap.ticker.lagSmoothing(0);

  return instance;
}

export function destroyLenis() {
  if (!instance) return;
  gsap.ticker.remove(rafTick);
  instance.destroy();
  instance = null;
}

export function getLenis() {
  return instance;
}

// Works with a CSS id string ('contact'/'#contact') or a DOM node.
// `offset` is in px from the top of the target; matches our 80px header.
export function scrollToTarget(target, { offset = 0, immediate = false } = {}) {
  const el =
    typeof target === "string"
      ? document.getElementById(target.replace(/^#/, ""))
      : target;
  if (!el) return;

  if (!instance) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
    return;
  }

  instance.scrollTo(el, { offset: -offset, immediate });
}
