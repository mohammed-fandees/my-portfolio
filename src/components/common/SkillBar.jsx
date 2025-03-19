import { useTheme } from "../../contexts/ThemeContext";

const SkillBar = ({ skill, percentage, index }) => {
  const { darkMode } = useTheme();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill}</span>
        <span className={`transition-color ${darkMode ? "text-violet-400" : "text-teal-600"}`}>{percentage}%</span>
      </div>
      <div className={`w-full transition-all ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full h-2 overflow-hidden`}>
        <div
          className={`h-full rounded-full transition-all bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
            }`}
          style={{
            width: `${percentage}%`,
            transition: 'width 1s ease-in-out',
            animationDelay: `${index * 150}ms`
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;