import { useReducedMotion } from '../../hooks/useReducedMotion';
import useMediaQuery from '../../hooks/useMediaQuery';
import ExperienceScrollStory from './experience/ExperienceScrollStory';
import ExperienceStaticTimeline from './experience/ExperienceStaticTimeline';

// ── Root export ───────────────────────────────────────────────────────────────
const Experience = () => {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  // Pinned scrollytelling is GPU-heavy — use static timeline on mobile
  const useStatic = reducedMotion || !isDesktop;

  return (
    <section
      id="experience"
      className="relative bg-[#080808]"
      aria-labelledby="experience-heading"
    >
      {useStatic ? <ExperienceStaticTimeline /> : <ExperienceScrollStory />}
    </section>
  );
};

export default Experience;
