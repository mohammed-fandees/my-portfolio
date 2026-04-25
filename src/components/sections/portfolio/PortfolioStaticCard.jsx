import { ExternalLink, Code } from 'lucide-react';
import { PROJECT_PALETTES } from '../../../data/projectPalettes';

const PortfolioStaticCard = ({ project, index }) => {
  const Icon = project.icon;
  const palette = PROJECT_PALETTES[index % PROJECT_PALETTES.length];

  return (
    <article
      className="rounded-3xl overflow-hidden"
      style={{ border: '1px solid var(--c-border)', background: 'var(--c-surface)' }}
    >
      <div
        className="relative aspect-[16/9] flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${palette.from}99, ${palette.to}99)` }}
      >
        <Icon size={80} strokeWidth={1.1} className="text-white/90 drop-shadow-lg" />
        <span
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white/80"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}
        >
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--c-text)' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--c-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: 'var(--c-surface-2)',
                color: 'var(--c-muted)',
                border: '1px solid var(--c-border-dim)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-1.5"
            style={{ color: palette.from }}
          >
            <ExternalLink size={13} /> Live
          </a>
          <a
            href={project.codeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium flex items-center gap-1.5"
            style={{ color: 'var(--c-muted)' }}
          >
            <Code size={13} /> Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioStaticCard;
