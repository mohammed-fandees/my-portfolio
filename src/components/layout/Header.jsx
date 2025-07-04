import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { useTheme } from '../../contexts/ThemeContext';

const Header = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} backdrop-blur-lg shadow-sm border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-colors ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'}`}>
                Port
              </span>
              <span>Folio.</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <Navigation activeSection={activeSection} />
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <Sun className="text-yellow-400" size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} hover:scale-110 transition-all duration-300`}
              aria-expanded={mobileMenuOpen}
              aria-label='Toggle mobile menu'
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        activeSection={activeSection} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </nav>
  );
};

export default Header;