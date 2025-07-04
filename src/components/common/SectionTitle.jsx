import { useTheme } from "../../contexts/ThemeContext";

const SectionTitle = ({ title, subtitle, centered = true }) => {

  const { darkMode } = useTheme();

  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      <h2 className="text-4xl font-bold mb-4 transition-colors" id={`${title.toLowerCase()}-title`}>{title}</h2>
      <div
        className={`h-1 rounded-full mb-4 ${centered ? 'mx-auto w-24' : 'w-16'} bg-gradient-to-r transition-colors ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
          }`}
        aria-hidden="true"
      ></div>
      {subtitle && <p className={`transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
};

export default SectionTitle;