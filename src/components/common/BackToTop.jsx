import { ArrowUp } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const BackToTop = ({ visible, onClick }) => {

  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full ${
        darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
      } text-white shadow-lg flex items-center justify-center z-40 transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default BackToTop;