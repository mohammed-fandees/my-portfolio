import { Download } from 'lucide-react';
import ScrollReveal from '../../common/ScrollReveal';
import { timeline } from '../../../data/timeline';
import { EXPERIENCE_CV_URL, EXPERIENCE_TYPE_CFG } from '../../../data/experienceConfig';

const ExperienceStaticTimeline = () => (
  <div className="max-w-7xl mx-auto px-6 sm:px-12 xl:px-20 py-32">
    <div className="mb-16">
      <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>06 — Journey</p>
      <div className="divider w-12 mb-8" />
      <h2 id="experience-heading" className="display-lg" style={{ color: 'var(--c-text)' }}>
        Experience &amp; Education
      </h2>
    </div>
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'var(--c-border)' }} />
      <div className="space-y-3">
        {timeline.map((item, i) => {
          const cfg = EXPERIENCE_TYPE_CFG[item.type] ?? EXPERIENCE_TYPE_CFG.work;
          const Icon = cfg.Icon;
          return (
            <ScrollReveal key={item.id} animation="fade-up" delay={i * 80}>
              <div className="relative pl-12 pb-8">
                <div
                  className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                >
                  <Icon size={14} style={{ color: cfg.color }} />
                </div>
                <div
                  className="p-5 sm:p-6 rounded-2xl"
                  style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full"
                      style={{ background: cfg.dim, color: cfg.color }}
                    >
                      {item.period}
                    </span>
                    <span className="eyebrow self-center" style={{ color: 'var(--c-faint)' }}>
                      {cfg.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--c-text)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: cfg.color }}>
                    {item.place}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
    <div className="mt-16 flex justify-start">
      <a
        href={EXPERIENCE_CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
        style={{ background: 'var(--c-accent)' }}
      >
        <Download size={15} /> Download Resume
      </a>
    </div>
  </div>
);

export default ExperienceStaticTimeline;
