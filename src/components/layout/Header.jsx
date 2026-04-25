import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { useTheme } from '../../contexts/ThemeContext';
import { gsap } from '../../animation/gsap';

// Minimal glass header. Starts fully transparent, gains blur + border when the
// user has scrolled past the hero (≥100px). This creates a smooth materialization
// rather than a jarring fixed nav from the first pixel.
const Header = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Entrance: slide down from -100%. Uses a direct tween (not matchMedia) so
  // React StrictMode's double-invoke and HMR cannot strand the nav at -100%.
  // clearProps on both complete and cleanup guarantees the nav is always visible.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tween = gsap.from(nav, {
      yPercent: -100,
      duration: 0.6,
      delay: 0.3,
      ease: 'power3.out',
      onComplete: () => gsap.set(nav, { clearProps: 'transform' }),
    });

    return () => {
      tween.kill();
      gsap.set(nav, { clearProps: 'transform' });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-white/[0.06] bg-[#080808]/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo — monogram, minimal */}
          <a
            href="#home"
            className="text-sm font-mono tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
          >
            MF<span className="text-[var(--c-accent)]">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden xl:block">
            <Navigation activeSection={activeSection} />
          </div>

          {/* Mobile controls */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/60 hover:text-white transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Header;
