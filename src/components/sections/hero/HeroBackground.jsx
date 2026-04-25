const HeroBackground = () => (
  <>
    <div
      data-h="glow"
      className="absolute top-0 right-0 w-[55%] h-[70%] -z-0 pointer-events-none will-change-transform"
      style={{
        background: 'radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.18) 0%, transparent 65%)',
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[40%] h-[50%] -z-0 pointer-events-none animate-pulse-slow animation-delay-2000"
      style={{
        background: 'radial-gradient(ellipse at 20% 80%, rgba(34,211,238,0.08) 0%, transparent 65%)',
      }}
    />
  </>
);

export default HeroBackground;
