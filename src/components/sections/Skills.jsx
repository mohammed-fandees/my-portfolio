import { useEffect, useRef } from 'react';
import { gsap } from '../../animation/gsap';
import { EASE, BREAKPOINT } from '../../animation/tokens';
import useReveal from '../../hooks/useReveal';
import { developmentSkills } from '../../data/developmentSkills';
import { technicalSkills } from '../../data/technicalSkills';
import { techStack } from '../../data/techStack';

// One-shot skill track fill. On both desktop and mobile, each row animates to
// its final value once it reaches the viewport.
const SkillRow = ({ skill, index }) => {
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const pct = typeof skill.percentage === 'number' ? skill.percentage : 65;
    const mm = gsap.matchMedia();

    // Desktop: play once to final value when row enters view.
    mm.add(BREAKPOINT.desktopMotion, () => {
      gsap.to(fill, {
        width: `${pct}%`,
        duration: 0.9,
        ease: EASE.out,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: fill,
          start: 'top 90%',
          once: true,
          id: `skill-${index}`,
        },
      });
    });

    // Mobile/tablet: just play to final state once on enter.
    mm.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to(fill, {
        width: `${pct}%`,
        duration: 0.9,
        delay: index * 0.08,
        ease: EASE.out,
        scrollTrigger: {
          trigger: fill,
          start: 'top 90%',
          once: true,
        },
      });
    });

    mm.add(BREAKPOINT.reducedMotion, () => {
      fill.style.width = `${pct}%`;
    });

    return () => mm.revert();
  }, [skill, index]);

  return (
    <div className="py-4 border-b border-[var(--c-border-dim)] last:border-0 group">
      <div className="flex items-center justify-between mb-2.5">
        <span
          className="text-sm font-medium"
          style={{ color: 'var(--c-text)' }}
        >
          {skill.name}
        </span>
        <span
          className="font-mono text-xs tabular-nums"
          style={{ color: 'var(--c-muted)' }}
        >
          {skill.percentage}{typeof skill.percentage === 'number' ? '%' : ''}
        </span>
      </div>
      <div className="skill-track">
        <div ref={fillRef} className="skill-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const eyebrowRef = useReveal('fade', { delay: 0 });
  const headingRef = useReveal('fade-up', { delay: 100 });
  const leftColRef = useReveal('fade-right', { delay: 200 });
  const rightColRef = useReveal('fade-left', { delay: 300 });
  const techRef = useReveal('fade-up', { delay: 200 });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 lg:py-40 bg-[#080808]"
      aria-labelledby="skills-heading"
    >
      {/* Subtle accent glow */}
      <div
        className="absolute top-1/3 right-0 w-[35%] h-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(34,211,238,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20">

        {/* Chapter header */}
        <div ref={eyebrowRef} className="mb-6">
          <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>03 — Capabilities</p>
          <div className="divider w-12" />
        </div>

        <div ref={headingRef} className="mb-16">
          <h2
            id="skills-heading"
            className="display-lg"
            style={{ color: 'var(--c-text)' }}
          >
            What I do well.
          </h2>
        </div>

        {/* Two-column skill groups */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Development */}
          <div ref={leftColRef}>
            <p className="eyebrow mb-6" style={{ color: 'var(--c-cyan)' }}>
              Development
            </p>
            <div>
              {developmentSkills.map((skill, i) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Technical */}
          <div ref={rightColRef}>
            <p className="eyebrow mb-6" style={{ color: 'var(--c-cyan)' }}>
              Technical
            </p>
            <div>
              {technicalSkills.map((skill, i) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  index={i + developmentSkills.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech chip grid ─────────────────────────────────────────── */}
        {/* Replaced the auto-scrolling TechSlider with a static grid.
            Reasons: (1) users can't read moving text comfortably; (2) the
            grid communicates "here's my full stack" more honestly; (3) it
            enables the hover-glow interaction without fighting scroll events. */}
        <div ref={techRef}>
          <div className="divider mb-10" />
          <p
            className="eyebrow mb-6"
            style={{ color: 'var(--c-faint)' }}
          >
            Full Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
