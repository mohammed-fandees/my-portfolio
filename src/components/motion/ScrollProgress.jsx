import { useEffect, useRef } from 'react';
import { ScrollTrigger } from '../../animation/gsap';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => { el.style.transform = `scaleX(${self.progress})`; },
    });
    return () => st.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-px z-50 pointer-events-none">
      <div
        ref={barRef}
        style={{ transformOrigin: '0% 50%', transform: 'scaleX(0)' }}
        className="h-full progress-bar"
      />
    </div>
  );
};

export default ScrollProgress;
