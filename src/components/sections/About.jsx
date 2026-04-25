import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { gsap } from '../../animation/gsap';
import { EASE, DURATION, BREAKPOINT } from '../../animation/tokens';
import useReveal from '../../hooks/useReveal';
import useParallax from '../../hooks/useParallax';
import AnimatedCounter from '../common/AnimatedCounter';
import ImageWithFallback from '../common/ImageWithFallback';
import { User } from 'lucide-react';
import { stats } from '../../data/stats';
import { aboutContent } from '../../data/aboutContent';
import about from '../../assets/about.jpg';
import getWakaTime from '../../utils/wakatime';

const localStorageKey = 'codingHoursData';

// Splits a string into groups of N words, each group wrapped so GSAP can
// stagger the clip-reveal per group. Free replacement for GSAP SplitText.
const GroupReveal = ({ text, groupSize = 3, className = '' }) => {
  const words = text.split(' ');
  const groups = [];
  for (let i = 0; i < words.length; i += groupSize) {
    groups.push(words.slice(i, i + groupSize).join(' '));
  }
  return (
    <span className={className}>
      {groups.map((group, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span data-about="word-group" className="inline-block will-change-transform">
            {group}
            {i < groups.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  );
};

const About = () => {
  const [codingHours, setCodingHours] = useState(() => {
    const v = localStorage.getItem(localStorageKey);
    return v ? parseInt(v, 10) : 0;
  });

  useEffect(() => {
    getWakaTime().then((res) => {
      if (res && typeof res === 'number' && !isNaN(res)) {
        setCodingHours(res);
        localStorage.setItem(localStorageKey, res.toString());
      }
    });
  }, []);

  const processedStats = stats.map((s) =>
    s.title === 'Coding Hours' ? { ...s, currentValue: codingHours } : s
  );

  const sectionRef = useRef(null);
  const imageRef = useParallax(0.2, { media: 'desktopMotion' }); // desktop-only parallax
  const eyebrowRef = useReveal('fade', { delay: 0 });
  const statsRef = useReveal('fade-up', { delay: 200 });

  // Word-group reveal on the two paragraphs
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const mm = gsap.matchMedia();

    mm.add(BREAKPOINT.motionOk, () => {
      const groups = root.querySelectorAll('[data-about="word-group"]');
      gsap.from(groups, {
        yPercent: 110,
        duration: 0.75,
        stagger: 0.025,
        ease: EASE.out,
        scrollTrigger: {
          trigger: root,
          start: 'top 70%',
          once: true,
        },
      });

      const labels = root.querySelectorAll('[data-about="info-row"]');
      gsap.from(labels, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.06,
        ease: EASE.out,
        scrollTrigger: {
          trigger: labels[0],
          start: 'top 85%',
          once: true,
        },
      });
    });

    mm.add(BREAKPOINT.reducedMotion, () => {
      root.querySelectorAll('[data-about]').forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-40 bg-[#080808] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Ambient top-left glow — transitions visually from hero's bottom-left glow */}
      <div
        className="absolute top-0 left-0 w-[50%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 10% 10%, rgba(168,85,247,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 xl:pl-20">

        {/* Chapter eyebrow */}
        <div ref={eyebrowRef} className="mb-16">
          <p className="eyebrow mb-4" style={{ color: 'var(--c-accent)' }}>{aboutContent.chapterLabel}</p>
          <div className="divider w-12" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* ── Statement column ──────────────────────────────────────── */}
          <div>
            {/* Large statement — word-group reveal */}
            <p
              id="about-heading"
              className="display-lg mb-8 leading-[1.05]"
              style={{ color: 'var(--c-text)' }}
            >
              <GroupReveal
                text={aboutContent.heading}
                groupSize={3}
              />
            </p>

            {/* Supporting paragraphs */}
            <div className="space-y-5 mb-10 max-w-2xl">
              {aboutContent.paragraphs.map((text, index) => (
              <p key={index} className="text-base leading-[1.8]" style={{ color: 'var(--c-muted)' }}>
                <GroupReveal
                  text={text}
                  groupSize={4}
                />
              </p>
              ))}
            </div>

            {/* Personal info grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
              {aboutContent.personalInfo.map(({ label, value }) => (
                <div key={label} data-about="info-row">
                  <p className="eyebrow mb-1.5" style={{ color: 'var(--c-faint)' }}>{label}</p>
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Specialty cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {aboutContent.specialties.map(({ title, body }) => (
                <div
                  key={title}
                  className="p-5 rounded-2xl"
                  style={{
                    border: '1px solid var(--c-border)',
                    background: 'var(--c-surface)',
                  }}
                >
                  <h4
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={aboutContent.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
              style={{ background: 'var(--c-accent)' }}
            >
              <Download size={15} /> Download CV
            </a>
          </div>

          {/* ── Photo column ─────────────────────────────────────────── */}
          <div ref={imageRef} className="relative will-change-transform">
            <div
              className="aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ border: '1px solid var(--c-border)' }}
            >
              <ImageWithFallback
                src={about}
                alt={aboutContent.imageAlt}
                className="w-full h-full object-cover"
                fallbackIcon={User}
              />
            </div>
            {/* Experience badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl text-sm"
              style={{
                background: 'var(--c-surface-2)',
                border: '1px solid var(--c-border)',
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#22c55e' }}
                />
                <span className="font-medium" style={{ color: 'var(--c-text)' }}>
                  {aboutContent.experienceBadge}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats row ─────────────────────────────────────────────── */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {processedStats.map((stat) => (
            <div
              key={stat.title}
              className="p-6 rounded-2xl text-center group hover:-translate-y-1 transition-transform duration-300"
              style={{
                border: '1px solid var(--c-border)',
                background: 'var(--c-surface)',
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'var(--c-accent-dim)' }}
              >
                <stat.icon
                  size={20}
                  style={{ color: 'var(--c-accent)' }}
                />
              </div>
              <AnimatedCounter
                end={stat.title === 'Coding Hours' ? (codingHours || 980) : stat.count}
                suffix={stat.suffix || ''}
              />
              <p className="text-xs mt-1" style={{ color: 'var(--c-muted)' }}>
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
