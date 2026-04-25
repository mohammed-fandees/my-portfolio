import { ArrowRight, CheckCircle } from 'lucide-react';
import { EXPERIENCE_TYPE_CFG } from '../../../data/experienceConfig';

const ExperienceChapterContent = ({ item, index }) => {
  const cfg = EXPERIENCE_TYPE_CFG[item.type] ?? EXPERIENCE_TYPE_CFG.work;
  const Icon = cfg.Icon;

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
        <div
          data-reveal
          className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6 lg:pt-1"
        >
          <div
            className="w-12 h-12 lg:w-[3.25rem] lg:h-[3.25rem] rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: cfg.dim, border: `1px solid ${cfg.color}40` }}
          >
            <Icon size={20} style={{ color: cfg.color }} />
          </div>
          <div>
            <p className="eyebrow mb-0.5" style={{ color: cfg.color }}>{cfg.label}</p>
            <p className="font-mono text-xs mb-1.5" style={{ color: 'var(--c-faint)' }}>{item.period}</p>
            <p className="text-sm font-semibold" style={{ color: cfg.color }}>{item.place}</p>
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
              {item.title}
            </h3>
          </div>

          <p
            data-reveal
            className="leading-relaxed mb-4 sm:mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(0.82rem, 1.25vw, 0.94rem)', color: 'var(--c-muted)' }}
          >
            {item.detailed.summary}
          </p>

          <p data-reveal className="eyebrow mb-2 sm:mb-3" style={{ color: 'var(--c-faint)' }}>
            Key Responsibilities
          </p>

          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            {item.detailed.responsibilities.slice(0, 4).map((r) => (
              <div
                key={r}
                data-reveal
                className="flex items-start gap-2 text-xs sm:text-sm"
                style={{ color: 'var(--c-muted)' }}
              >
                <ArrowRight size={11} className="mt-[3px] sm:mt-1 flex-shrink-0" style={{ color: cfg.color }} />
                <span className="leading-snug">{r}</span>
              </div>
            ))}
          </div>

          <div data-reveal className="flex flex-wrap gap-1.5 mb-3 sm:mb-5">
            {item.detailed.techStack.slice(0, 8).map((t) => (
              <span
                key={t}
                className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'var(--c-surface-2)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-faint)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            data-reveal
            className="flex items-center gap-2 pt-3 sm:pt-4 text-xs sm:text-sm"
            style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-muted)' }}
          >
            <CheckCircle size={13} className="flex-shrink-0" style={{ color: '#22c55e' }} />
            <span>{item.detailed.achievements[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceChapterContent;
