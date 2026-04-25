import useReveal from '../../hooks/useReveal';

// Thin wrapper kept for backwards compatibility — every existing call site
// (About, Portfolio, Skills, Experience, Testimonials, Contact, Services,
// Hero) keeps working unchanged. Internals moved from IntersectionObserver +
// inline styles → GSAP ScrollTrigger via useReveal.
const ScrollReveal = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
  const ref = useReveal(animation, { delay });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
