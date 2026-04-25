// The indicator entrance is pure CSS so it's immune to GSAP/StrictMode races.
// GSAP still controls the scroll-driven fade-out via data-h="indicator".
const HeroScrollIndicator = () => (
  <a
    data-h="indicator"
    href="#about"
    aria-label="Continue reading"
    className="hero-indicator absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-opacity duration-300"
    style={{ color: 'var(--c-faint)' }}
  >
    <span className="eyebrow" style={{ color: 'var(--c-faint)' }}>Scroll</span>
    <div className="w-px h-8 rounded-full overflow-hidden" style={{ background: 'var(--c-border)' }}>
      <div className="w-full h-1/2 rounded-full animate-float" style={{ background: 'var(--c-accent)' }} />
    </div>
  </a>
);

export default HeroScrollIndicator;
