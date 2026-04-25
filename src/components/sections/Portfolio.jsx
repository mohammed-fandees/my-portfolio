import { useReducedMotion } from '../../hooks/useReducedMotion';
import useMediaQuery from '../../hooks/useMediaQuery';
import PortfolioScrollStory from './portfolio/PortfolioScrollStory';
import PortfolioStaticList from './portfolio/PortfolioStaticList';

// ── Root ──────────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const useStatic = reducedMotion || !isDesktop;

  return (
    <section id="portfolio" className="relative bg-[#080808]" aria-labelledby="portfolio-heading">
      {useStatic ? <PortfolioStaticList /> : <PortfolioScrollStory />}
    </section>
  );
};

export default Portfolio;
