import ScrollReveal from '../../common/ScrollReveal';
import { projects } from '../../../data/projects';
import PortfolioStaticCard from './PortfolioStaticCard';

const PortfolioStaticList = () => (
  <div className="max-w-7xl mx-auto px-5 sm:px-12 xl:px-20 py-32">
    <div className="mb-10">
      <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>04 — Work</p>
      <div className="divider w-12 mb-6" />
      <h2 id="portfolio-heading" className="display-lg" style={{ color: 'var(--c-text)' }}>
        Projects that ship.
      </h2>
    </div>
    <div className="space-y-5">
      {projects.map((project, i) => (
        <ScrollReveal key={project.title} animation="fade-up" delay={i * 60}>
          <PortfolioStaticCard project={project} index={i} />
        </ScrollReveal>
      ))}
    </div>
  </div>
);

export default PortfolioStaticList;
