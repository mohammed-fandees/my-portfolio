import { useEffect, useRef } from 'react';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/common/BackToTop';
import ScrollProgress from './components/motion/ScrollProgress';
import LenisProvider from './animation/LenisProvider';
import useScrollProgress from './hooks/useScrollProgress';
import useActiveSection from './hooks/useActiveSection';
import useMediaQuery from './hooks/useMediaQuery';
import Home from './pages/Home';
import { gsap } from './animation/gsap';
import { ScrollTrigger } from './animation/gsap';

// Thin left-edge line that fills as the user reads the page — a literal
// narrative thread. The fill updates via ref (no React state on scroll).
const NarrativeSpine = () => {
  const fillRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', () => {
      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          fill.style.transform = `scaleY(${self.progress})`;
        },
      });
      return () => st.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="fixed left-6 top-0 bottom-0 z-50 hidden xl:flex flex-col items-center pointer-events-none">
      <div className="spine-track w-px flex-1 my-10 relative overflow-hidden rounded-full">
        <div
          ref={fillRef}
          style={{ transformOrigin: '50% 0%', transform: 'scaleY(0)' }}
          className="spine-fill absolute inset-0"
        />
      </div>
    </div>
  );
};

const App = () => (
  <LenisProvider>
    <AppContent />
  </LenisProvider>
);

const AppContent = () => {
  const { darkMode } = useTheme();
  const { showBackToTop, scrollToTop } = useScrollProgress();
  const { activeSection } = useActiveSection();
  const showDesktopScrollDecor = useMediaQuery('(min-width: 1024px)');

  return (
    // The outer wrapper respects the theme toggle for legacy sections
    // (Experience, Testimonials). New cinematic sections own their own backgrounds.
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? 'bg-[#080808] text-[#ededed]' : 'bg-white text-gray-900'
      }`}
    >
      {showDesktopScrollDecor ? <ScrollProgress /> : null}
      {showDesktopScrollDecor ? <NarrativeSpine /> : null}
      <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      <Header activeSection={activeSection} />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
