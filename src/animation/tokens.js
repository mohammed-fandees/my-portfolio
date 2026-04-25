// Centralized animation tokens. All durations/eases live here so sections stay
// visually coherent and performance tuning is a one-file change.

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1.0,
  story: 1.4,
};

export const EASE = {
  out: 'power3.out',
  inOut: 'power3.inOut',
  spring: 'back.out(1.4)',
  expo: 'expo.out',
};

// Named matchMedia queries used by all hooks. Desktop-gated animations reference
// `desktopMotion` so anything heavy is automatically disabled on mobile AND
// when the user has reduced-motion turned on.
export const BREAKPOINT = {
  desktop: '(min-width: 1024px)',
  motionOk: '(prefers-reduced-motion: no-preference)',
  desktopMotion: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
};
