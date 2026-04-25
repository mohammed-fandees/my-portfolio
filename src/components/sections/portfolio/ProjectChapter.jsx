import { ExternalLink, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { PROJECT_PALETTES } from '../../../data/projectPalettes';

const ProjectChapter = ({ project, index }) => {
  const Icon = project.icon;
  const palette = PROJECT_PALETTES[index % PROJECT_PALETTES.length];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 select-none pointer-events-none"
        style={{
          fontSize: 'clamp(7rem, 22vw, 18rem)',
          fontWeight: 900,
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-5 lg:gap-14 items-start">
        <div data-reveal className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6 lg:pt-1">
          <div
            className="w-12 h-12 lg:w-[3.25rem] lg:h-[3.25rem] rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${palette.from}1a`, border: `1px solid ${palette.from}66` }}
          >
            <Icon size={20} style={{ color: palette.from }} />
          </div>
          <div>
            <p className="eyebrow mb-0.5" style={{ color: palette.from }}>
              {project.category}
            </p>
            <p className="font-mono text-xs mb-1.5" style={{ color: 'var(--c-faint)' }}>
              Case Study
            </p>
            <p className="text-sm font-semibold" style={{ color: palette.from }}>
              {project.tech.slice(0, 2).join(' + ')}
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <div data-reveal className="mb-3 sm:mb-5 overflow-hidden">
            <h3
              className="font-extrabold tracking-tight"
              style={{
                fontSize: 'clamp(1.55rem, 3.4vw, 3.5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
                color: 'var(--c-text)',
              }}
            >
              {project.title}
            </h3>
          </div>

          <p
            data-reveal
            className="leading-relaxed mb-4 sm:mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(0.82rem, 1.25vw, 0.94rem)', color: 'var(--c-muted)' }}
          >
            {project.description}
          </p>

          <p data-reveal className="eyebrow mb-2 sm:mb-3" style={{ color: 'var(--c-faint)' }}>
            What This Includes
          </p>

          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            {project.tech.slice(0, 4).map((tech) => (
              <div
                key={tech}
                data-reveal
                className="flex items-start gap-2 text-xs sm:text-sm"
                style={{ color: 'var(--c-muted)' }}
              >
                <ArrowRight size={11} className="mt-[3px] sm:mt-1 flex-shrink-0" style={{ color: palette.from }} />
                <span className="leading-snug">Built with {tech}</span>
              </div>
            ))}
          </div>

          <div data-reveal className="flex flex-wrap gap-1.5 mb-3 sm:mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'var(--c-surface-2)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-faint)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            data-reveal
            className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4"
            style={{ borderTop: '1px solid var(--c-border)' }}
          >
            <span className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: 'var(--c-muted)' }}>
              <CheckCircle size={13} className="flex-shrink-0" style={{ color: '#22c55e' }} />
              Ready-to-ship implementation
            </span>

            <a
              href={project.liveUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
              style={{ background: palette.from }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
            <a
              href={project.codeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
              style={{ border: '1px solid var(--c-border)', color: 'var(--c-muted)' }}
            >
              <Code size={13} /> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectChapter;
