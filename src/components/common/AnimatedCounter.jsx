import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from '../../animation/gsap';

// Drives the counter via a single ScrollTrigger onEnter instead of its own
// IntersectionObserver — consistent with the new animation layer.
const AnimatedCounter = ({ end, duration = 1800, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !end) return;

    let intervalId;
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        let start = 0;
        const step = end / (duration / 16);
        intervalId = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(intervalId);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
    });

    return () => {
      st.kill();
      clearInterval(intervalId);
    };
  }, [end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold tabular-nums" style={{ color: 'var(--c-text)' }}>
      <span style={{ color: 'var(--c-accent)' }}>{prefix}</span>
      {count}
      <span style={{ color: 'var(--c-accent)' }}>{suffix}</span>
    </div>
  );
};

export default AnimatedCounter;
