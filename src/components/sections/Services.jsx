import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import useReveal from '../../hooks/useReveal';
import { services } from '../../data/services';

// Services redesigned from grid-of-cards to a numbered list — more editorial,
// less "feature comparison table." Each entry is a single row with a large
// index number, so the eye naturally moves down the list like a chapter.
const Services = () => {
  const eyebrowRef = useReveal('fade', { delay: 0 });
  const headingRef = useReveal('fade-up', { delay: 100 });

  return (
    <section
      id="services"
      className="relative py-32 lg:py-40 bg-[#080808]"
      aria-labelledby="services-heading"
    >
      {/* Subtle glow bleed from Portfolio's bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(124,58,237,0.04), transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20">

        <div ref={eyebrowRef} className="mb-6">
          <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>05 — Services</p>
          <div className="divider w-12" />
        </div>

        <div ref={headingRef} className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2
            id="services-heading"
            className="display-lg"
            style={{ color: 'var(--c-text)' }}
          >
            What I offer.
          </h2>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'var(--c-muted)' }}>
            End-to-end digital product work, from design system to deployment.
          </p>
        </div>

        {/* Service list — numbered, editorial */}
        <div className="divider mb-0" />
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.title} animation="fade-up" delay={i * 60}>
              <div
                className="group py-8 border-b flex gap-8 lg:gap-16 items-start cursor-default
                            hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl transition-colors duration-300"
                style={{ borderColor: 'var(--c-border-dim)' }}
              >
                {/* Index */}
                <span
                  className="font-mono text-sm pt-0.5 w-8 shrink-0 tabular-nums"
                  style={{ color: 'var(--c-faint)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--c-accent-dim)' }}
                >
                  <Icon size={18} style={{ color: 'var(--c-accent)' }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-lg font-semibold mb-1.5 tracking-tight transition-colors duration-300 group-hover:text-[var(--c-accent)]"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow — appears on hover */}
                <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 shrink-0">
                  <ArrowRight size={18} style={{ color: 'var(--c-accent)' }} />
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={services.length * 60 + 100}>
          <div
            className="mt-16 p-8 lg:p-12 rounded-3xl"
            style={{ border: '1px solid var(--c-border)', background: 'var(--c-surface)' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="eyebrow mb-2" style={{ color: 'var(--c-accent)' }}>
                  Custom Project?
                </p>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--c-text)' }}>
                  Let's build something specific.
                </h3>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white shrink-0 transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
                style={{ background: 'var(--c-accent)' }}
              >
                Get in Touch <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
