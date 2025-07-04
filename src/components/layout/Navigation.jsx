
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { navItems } from '../../data/navItems';

const Navigation = ({ activeSection }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="ml-10 flex items-center space-x-6">
      {navItems.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative hover:scale-105 ${activeSection === item.href.substring(1)
              ? (darkMode ? 'text-violet-400' : 'text-teal-600')
              : (darkMode ? 'text-gray-300' : 'text-gray-600')
            }`}
          aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
        >
          {item.name}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'} rounded-full transform ${activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0'
              } transition-transform duration-300`}
          ></span>
        </a>
      ))}

      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon size={20} />}
      </button>

      <a
        href="#contact"
        className={`${darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
          } text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105`}
      >
        Hire Me
      </a>
    </div>
  );
};

export default Navigation;