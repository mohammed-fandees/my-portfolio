const HeroPhoto = ({ hero }) => (
  <div data-h="photo" className="relative w-[420px] xl:w-[480px] will-change-transform">
    <div
      className="hero-photo-mask w-full aspect-[3/4] rounded-3xl overflow-hidden"
      style={{ boxShadow: '0 40px 120px -20px rgba(168,85,247,0.25)' }}
    >
      <img
        src={hero}
        alt="Mohammed Fandees - Frontend Engineer"
        className="w-full h-full object-cover object-top"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
    <div
      className="absolute -inset-4 -z-10 rounded-3xl animate-pulse-slow"
      style={{ background: 'radial-gradient(ellipse, var(--c-accent-glow) 0%, transparent 70%)' }}
    />
  </div>
);

export default HeroPhoto;
