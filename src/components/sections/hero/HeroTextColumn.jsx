import { ArrowRight } from 'lucide-react';

const HeroTextColumn = ({ projectsCount, clientsCount, avgRating }) => (
  <div data-h="text-col" className="will-change-transform">

    {/* Eyebrow — overflow-hidden wrapper enables yPercent clip reveal */}
    <div className="overflow-hidden mb-10">
      <div data-h="eyebrow" className="flex items-center gap-3">
        <span
          className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
          style={{ background: 'var(--c-accent)' }}
        />
        <span className="eyebrow" style={{ color: 'var(--c-accent)' }}>
          Available for work
        </span>
      </div>
    </div>

    {/* Title — each line already has its own overflow-hidden clip wrapper */}
    <h1 id="hero-title" className="mb-8">
      <span className="block overflow-hidden pb-2">
        <span data-h="line" className="display-xl block text-outline will-change-transform">
          I build
        </span>
      </span>
      <span className="block overflow-hidden pb-2">
        <span data-h="line" className="display-xl block will-change-transform" style={{ color: 'var(--c-text)' }}>
          the web.
        </span>
      </span>
    </h1>

    {/* Sub-heading — overflow-hidden wrapper for clip reveal */}
    <div className="overflow-hidden mb-10">
      <div data-h="sub" className="space-y-1.5">
        <p className="text-xl font-semibold tracking-tight" style={{ color: 'var(--c-text)' }}>
          Mohammed Fandees
        </p>
        <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--c-muted)' }}>
          MERN Stack Engineer building fast, accessible, and visually exceptional digital products.
        </p>
      </div>
    </div>

    {/* CTAs — no clip wrapper: hover:scale-[1.03] needs overflow visible */}
    <div className="flex flex-wrap gap-3 mb-14">
      <a
        data-h="cta"
        href="#portfolio"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03]"
        style={{ background: 'var(--c-accent)' }}
      >
        Explore Work
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      <a
        data-h="cta"
        href="#contact"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
        style={{ border: '1px solid var(--c-border)', color: 'var(--c-muted)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
          e.currentTarget.style.color = 'var(--c-text)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--c-border)';
          e.currentTarget.style.color = 'var(--c-muted)';
        }}
      >
        Say Hello
      </a>
    </div>

    <div data-h="divider" className="divider mb-8" />

    {/* Stats — each item clipped individually so they stagger-reveal */}
    <div className="flex flex-wrap items-center gap-8">
      {[
        { value: `${projectsCount}+`, label: 'Projects' },
        { value: '2+',                label: 'Years Exp.' },
        { value: `${clientsCount}`,   label: 'Clients' },
      ].map(({ value, label }) => (
        <div key={label} className="overflow-hidden">
          <div data-h="stat">
            <p className="text-2xl font-bold tabular-nums" style={{ color: 'var(--c-text)' }}>
              {value}
            </p>
            <p className="text-xs" style={{ color: 'var(--c-muted)' }}>
              {label}
            </p>
          </div>
        </div>
      ))}

      <div className="overflow-hidden">
        <div data-h="stat" className="flex items-center gap-1.5">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={`w-3.5 h-3.5 fill-current ${i < avgRating ? 'text-yellow-400' : 'text-white/10'}`}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HeroTextColumn;
