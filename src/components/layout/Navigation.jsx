import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { navItems } from '../../data/navItems';

// Minimal dark-first navigation — no colored underlines, just a subtle
// accent dot on the active item.
const Navigation = ({ activeSection }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        return (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${
              isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.name}
            {isActive && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--c-accent)] rounded-full" />
            )}
          </a>
        );
      })}

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full text-white/40 hover:text-white/80 transition-colors"
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <a
        href="#contact"
        className="text-sm font-medium px-4 py-2 rounded-full border border-[var(--c-border)] text-white/70 hover:text-white hover:border-[var(--c-accent)] hover:bg-[var(--c-accent-dim)] transition-all duration-300"
      >
        Hire Me
      </a>
    </div>
  );
};

export default Navigation;
