import { useRef } from 'react';
import { Download } from 'lucide-react';
import useScrollTrigger from '../../../hooks/useScrollTrigger';
import { timeline } from '../../../data/timeline';
import { EXPERIENCE_CV_URL } from '../../../data/experienceConfig';
import ExperienceChapterContent from './ExperienceChapterContent';

const ExperienceScrollStory = () => {
  const stageRef = useRef(null);
  const chaptersRef = useRef([]);
  const chNumRef = useRef(null);
  const spineRef = useRef(null);

  useScrollTrigger(
    (ctx, { gsap }) => {
      const chapters = chaptersRef.current.filter(Boolean);
      if (chapters.length < 2) return;

      gsap.set(chapters, { opacity: 0, y: 70 });
      gsap.set(chapters[0], { opacity: 1, y: 0 });

      chapters.forEach((ch) =>
        gsap.set(ch.querySelectorAll('[data-reveal]'), { opacity: 0, y: 30 })
      );

      let activeIdx = 0;
      const bump = (i) => {
        if (i === activeIdx) return;
        activeIdx = i;
        if (chNumRef.current) {
          chNumRef.current.textContent = String(i + 1).padStart(2, '0');
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: () => `+=${chapters.length * window.innerHeight}`,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (spineRef.current) {
              spineRef.current.style.transform = `scaleY(${self.progress})`;
            }
            bump(
              Math.min(chapters.length - 1, Math.round(self.progress * (chapters.length - 1)))
            );
          },
        },
      });

      tl.to(chapters[0].querySelectorAll('[data-reveal]'), {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        duration: 0.13,
        ease: 'power3.out',
      });
      tl.to({}, { duration: 0.18 });

      for (let i = 1; i < chapters.length; i += 1) {
        const prev = chapters[i - 1];
        const curr = chapters[i];
        const rows = curr.querySelectorAll('[data-reveal]');

        tl.to(prev, { opacity: 0, y: -55, duration: 0.32, ease: 'power2.inOut' });
        tl.to(curr, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '<0.14');
        tl.to(rows, {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.13,
          ease: 'power3.out',
        }, '<0.1');
        tl.to({}, { duration: 0.18 });
      }
    },
    { media: 'motionOk' }
  );

  return (
    <>
      <div ref={stageRef} className="relative h-[100svh] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-30 pt-20 sm:pt-24 px-6 sm:px-12 xl:px-20 flex items-start justify-between pointer-events-none">
          <div>
            <p className="eyebrow mb-1 sm:mb-2" style={{ color: 'var(--c-accent)' }}>
              06 — Journey
            </p>
            <h2 id="experience-heading" className="display-md" style={{ color: 'var(--c-text)' }}>
              Experience &amp; Education
            </h2>
          </div>
          <p className="font-mono text-xs mt-1 tabular-nums" style={{ color: 'var(--c-faint)' }}>
            <span ref={chNumRef}>01</span>
            <span>/{String(timeline.length).padStart(2, '0')}</span>
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
          {timeline.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (chaptersRef.current[i] = el)}
              className="absolute inset-0 flex items-center px-6 sm:px-12 xl:px-20 pt-36 sm:pt-44 pb-12"
            >
              <ExperienceChapterContent item={item} index={i} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-14" style={{ background: 'var(--c-bg)' }}>
        <a
          href={EXPERIENCE_CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.04]"
          style={{ background: 'var(--c-accent)' }}
        >
          <Download size={15} /> Download Resume
        </a>
      </div>
    </>
  );
};

export default ExperienceScrollStory;
