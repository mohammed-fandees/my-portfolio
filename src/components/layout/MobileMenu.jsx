import React from 'react';
import { navItems } from '../../data/navItems';
import { useTheme } from '../../contexts/ThemeContext';

const MobileMenu = ({ isOpen, activeSection, onClose }) => {
  const { darkMode } = useTheme();
  
  return (
    <div 
      className={`md:hidden ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} transition-all duration-300 overflow-hidden border-t ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map(item => (
          <a
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === item.href.substring(1)
                ? (darkMode ? 'bg-gray-800 text-violet-400' : 'bg-gray-100 text-teal-600')
                : (darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')
            } transition-colors duration-300`}
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className={`block px-3 py-2 rounded-md text-base font-medium text-white ${
            darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
          } transition-colors duration-300`}
          onClick={onClose}
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;