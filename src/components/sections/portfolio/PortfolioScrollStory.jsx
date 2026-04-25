import { useRef } from 'react';
import useScrollTrigger from '../../../hooks/useScrollTrigger';
import { projects } from '../../../data/projects';
import { PROJECT_PALETTES } from '../../../data/projectPalettes';
import ProjectChapter from './ProjectChapter';

const PortfolioScrollStory = () => {
  const stageRef = useRef(null);
  const chaptersRef = useRef([]);
  const overlaysRef = useRef([]);
  const chapterNumberRef = useRef(null);
  const spineRef = useRef(null);

  useScrollTrigger(
    (ctx, { gsap }) => {
      const chapters = chaptersRef.current.filter(Boolean);
      const overlays = overlaysRef.current.filter(Boolean);
      if (chapters.length < 2) return;

      gsap.set(chapters, { opacity: 0, y: 70 });
      gsap.set(chapters[0], { opacity: 1, y: 0 });
      gsap.set(overlays, { opacity: 0 });
      gsap.set(overlays[0], { opacity: 1 });

      chapters.forEach((chapter) => {
        gsap.set(chapter.querySelectorAll('[data-reveal]'), { opacity: 0, y: 26 });
      });

      let activeIndex = 0;
      const bumpChapter = (index) => {
        if (index === activeIndex) return;
        activeIndex = index;
        if (chapterNumberRef.current) {
          chapterNumberRef.current.textContent = String(index + 1).padStart(2, '0');
        }
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: () => `+=${chapters.length * window.innerHeight}`,
          pin: true,
          scrub: 1.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (spineRef.current) {
              spineRef.current.style.transform = `scaleY(${self.progress})`;
            }
            const index = Math.min(
              chapters.length - 1,
              Math.round(self.progress * (chapters.length - 1))
            );
            bumpChapter(index);
          },
        },
      });

      timeline.to(chapters[0].querySelectorAll('[data-reveal]'), {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.13,
        ease: 'power3.out',
      });
      timeline.to({}, { duration: 0.18 });

      for (let i = 1; i < chapters.length; i += 1) {
        const previous = chapters[i - 1];
        const current = chapters[i];
        const reveals = current.querySelectorAll('[data-reveal]');

        timeline.to(previous, { opacity: 0, y: -55, duration: 0.32, ease: 'power2.inOut' });
        timeline.to(current, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '<0.14');
        timeline.to(overlays[i - 1], { opacity: 0, duration: 0.4, ease: 'power1.out' }, '<0.1');
        timeline.to(overlays[i], { opacity: 1, duration: 0.4, ease: 'power1.out' }, '<');
        timeline.to(reveals, {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.13,
          ease: 'power3.out',
        }, '<0.08');
        timeline.to({}, { duration: 0.18 });
      }
    },
    { media: 'motionOk' }
  );

  return (
    <div ref={stageRef} className="relative h-[100svh] overflow-hidden">
      {projects.map((_, index) => (
        <div
          key={index}
          ref={(el) => (overlaysRef.current[index] = el)}
          className="absolute inset-0 pointer-events-none"
          style={{ background: PROJECT_PALETTES[index % PROJECT_PALETTES.length].overlay }}
        />
      ))}

      <div className="absolute top-0 left-0 right-0 z-30 pt-20 sm:pt-24 px-6 sm:px-12 xl:px-20 flex items-start justify-between pointer-events-none">
        <div>
          <p className="eyebrow mb-1 sm:mb-2" style={{ color: 'var(--c-accent)' }}>
            04 — Work
          </p>
          <h2 id="portfolio-heading" className="display-md" style={{ color: 'var(--c-text)' }}>
            Projects that ship.
          </h2>
        </div>
        <p className="font-mono text-xs mt-1 tabular-nums" style={{ color: 'var(--c-faint)' }}>
          <span ref={chapterNumberRef}>01</span>
          <span>/{String(projects.length).padStart(2, '0')}</span>
        </p>
      </div>

      <div
        className="absolute hidden sm:block z-20 pointer-events-none"
        style={{ left: 24, top: 158, bottom: 44, width: 1, background: 'var(--c-border)' }}
      >
        <div
          ref={spineRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, var(--c-accent), var(--c-cyan))',
            transformOrigin: '50% 0%',
            transform: 'scaleY(0)',
          }}
        />
      </div>

      <div className="absolute inset-0">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => (chaptersRef.current[index] = el)}
            className="absolute inset-0 flex items-center px-6 sm:px-12 xl:px-20 pt-36 sm:pt-44 pb-12"
          >
            <ProjectChapter project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioScrollStory;
