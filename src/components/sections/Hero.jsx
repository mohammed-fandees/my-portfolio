import { useEffect, useRef } from 'react';
import { gsap } from '../../animation/gsap';
import { EASE, BREAKPOINT } from '../../animation/tokens';
import useScrollTrigger from '../../hooks/useScrollTrigger';
import useMediaQuery from '../../hooks/useMediaQuery';
import hero from '../../assets/hero.avif';
import clientsList from '../../data/clients';
import { projects } from '../../data/projects';
import HeroBackground from './hero/HeroBackground';
import HeroTextColumn from './hero/HeroTextColumn';
import HeroPhoto from './hero/HeroPhoto';
import HeroScrollIndicator from './hero/HeroScrollIndicator';

// Cinematic full-viewport intro. Layout: left text col + right masked photo.
// The photo uses a CSS gradient mask so it bleeds naturally into the dark canvas.
// On desktop, a mild scroll parallax separates photo from text — creates depth.
const Hero = () => {
  const sectionRef = useRef(null);
  const showDesktopVisual = useMediaQuery('(min-width: 1024px)');

  // ── Entrance timeline ──────────────────────────────────────────────────
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add(BREAKPOINT.motionOk, () => {
      const tl = gsap.timeline();

      // ── Text column ──────────────────────────────────────────────────────
      // Eyebrow: clip reveal (element is inside overflow-hidden wrapper in JSX)
      tl.from(q('[data-h="eyebrow"]'), {
        yPercent: 115, duration: 0.65, ease: 'power4.out',
      }, 0.1);

      // Headline lines: clip reveal — the showpiece
      tl.from(q('[data-h="line"]'), {
        yPercent: 115, duration: 1.05, stagger: 0.13, ease: 'power4.out',
      }, 0.28);

      // Sub-heading: clip reveal (inside overflow-hidden wrapper)
      tl.from(q('[data-h="sub"]'), {
        yPercent: 115, duration: 0.72, ease: 'power4.out',
      }, 0.62);

      // CTAs: clip reveal from below + slight rise — same mechanic as title lines
      // clipPath on the element itself (no overflow-hidden wrapper) so hover:scale still works
      tl.fromTo(q('[data-h="cta"]'),
        { clipPath: 'inset(110% 0 0 0)', y: 14 },
        { clipPath: 'inset(0% 0 0 0)',   y: 0, duration: 0.6, stagger: 0.09, ease: 'power4.out' },
        0.80);

      // Divider: extends left → right
      tl.from(q('[data-h="divider"]'), {
        scaleX: 0, transformOrigin: '0% 50%', duration: 0.6, ease: 'power3.out',
      }, 0.98);

      // Stats: clip reveal per item, staggered (each inside overflow-hidden)
      tl.from(q('[data-h="stat"]'), {
        yPercent: 115, duration: 0.52, stagger: 0.08, ease: 'power4.out',
      }, 1.04);

      // ── Photo — decorative, runs in parallel with text ───────────────────
      tl.from(q('[data-h="photo"]'), {
        opacity: 0, x: 28, scale: 0.93, duration: 1.15, ease: 'power3.out',
      }, 0.22);

      // Indicator entrance is CSS (.hero-indicator) — immune to GSAP races.
    });

    mm.add(BREAKPOINT.reducedMotion, () => {
      gsap.set(q('[data-h]'), { clearProps: 'all' });
    });

    return () => mm.revert();
  }, []);

  // ── Scroll depth (desktop only) ────────────────────────────────────────
  // Photo + text drift at different rates, reinforcing the sense that they
  // exist on separate Z-planes. Text moves up faster → pulls the eye downward.
  useScrollTrigger(
    (ctx, { gsap, ScrollTrigger }) => {
      const root = sectionRef.current;
      if (!root) return;
      const q = gsap.utils.selector(root);

      gsap.to(q('[data-h="text-col"]'), {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(q('[data-h="photo"]'), {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(q('[data-h="glow"]'), {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      });
      // Indicator fades out after the first tiny scroll
      gsap.to(q('[data-h="indicator"]'), {
        opacity: 0, y: 8,
        scrollTrigger: { trigger: root, start: 'top top', end: '12% top', scrub: true },
      });

      ScrollTrigger.refresh();
    },
    { media: 'desktopMotion' }
  );

  const avgRating = Math.round(
    clientsList.reduce((s, c) => s + c.rating, 0) / clientsList.length
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]"
      aria-labelledby="hero-title"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20 pt-24 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <HeroTextColumn
            projectsCount={projects.length}
            clientsCount={clientsList.length}
            avgRating={avgRating}
          />
          {showDesktopVisual ? <HeroPhoto hero={hero} /> : null}
        </div>
      </div>
      <HeroScrollIndicator />
    </section>
  );
};

export default Hero;
