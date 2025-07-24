
import { useTheme } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/common/BackToTop';
import useScrollProgress from './hooks/useScrollProgress';
import useActiveSection from './hooks/useActiveSection';
import Home from './pages/Home';

const App = () => {
  const { scrollProgress, showBackToTop, scrollToTop } = useScrollProgress();
  const { activeSection } = useActiveSection();

  return (
    <AppContent
      scrollProgress={scrollProgress}
      showBackToTop={showBackToTop}
      scrollToTop={scrollToTop}
      activeSection={activeSection}
    />
  );
};

// We separate the content to have access to the theme context
const AppContent = ({ scrollProgress, showBackToTop, scrollToTop, activeSection }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-sans transition-colors duration-300`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div
          className={`h-full bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'} transition-all duration-300`}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <BackToTop visible={showBackToTop} onClick={scrollToTop} />

      <Header activeSection={activeSection} />

      <Home />

      <Footer />
    </div>
  );
};

export default App;