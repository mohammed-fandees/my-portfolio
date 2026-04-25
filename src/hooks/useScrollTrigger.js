import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animation/gsap';
import { BREAKPOINT } from '../animation/tokens';

/**
 * Declarative ScrollTrigger wrapper. Handles cleanup and matchMedia gating
 * so callers never touch gsap.context() or ST.kill() directly.
 *
 * @param {(ctx: object, api: { gsap, ScrollTrigger }) => void} setup
 *   Register tweens + ScrollTriggers inside. Anything created here is
 *   automatically reverted when the media query stops matching OR the hook
 *   unmounts — this is the core safety guarantee.
 *
 * @param {object}   [opts]
 * @param {string}   [opts.media='desktopMotion']  A key in BREAKPOINT or a raw media query.
 * @param {any[]}    [opts.deps=[]]                Re-run when these change.
 */
export default function useScrollTrigger(setup, { media = 'desktopMotion', deps = [] } = {}) {
  // Always read the latest setup — callers often pass an inline closure that
  // captures props. Without the ref, we'd bind to a stale closure.
  const setupRef = useRef(setup);
  setupRef.current = setup;

  useEffect(() => {
    const query = BREAKPOINT[media] ?? media;
    const mm = gsap.matchMedia();
    mm.add(query, (context) => {
      setupRef.current?.(context, { gsap, ScrollTrigger });
    });
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
