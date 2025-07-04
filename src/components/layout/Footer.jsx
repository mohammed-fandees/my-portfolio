
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { navItems } from '../../data/navItems';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
                }`}>
                Port
              </span>
              <span>Folio.</span>
            </a>
            <p className="mt-4 text-gray-400">
              Building exceptional digital experiences with modern technologies and creative design solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href={["https://github.com/mohammed-fandees", "https://linkedin.com/in/mohammed-fandees", "mailto:mohammed.fandees@gmail.com"][i]}
                  target='_blank'
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-125 transform"
                  aria-label='Social media link'
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                    <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Mail size={18} className="text-gray-500 mt-1 mr-3 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">mohammed.fandees@gmail.com</span>
              </li>
              <li className="flex items-start group">
                <Linkedin size={18} className="text-gray-500 mt-1 mr-3 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">linkedin.com/in/mohammed-fandees</span>
              </li>
              <li className="flex items-start group">
                <Github size={18} className="text-gray-500 mt-1 mr-3 group-hover:text-white transition-colors duration-300" />
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">github.com/mohammed-fandees</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="mb-1">© {new Date().getFullYear()} Mohammed Fandees. All rights reserved.</p>
          <p className="text-sm">Designed and developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;