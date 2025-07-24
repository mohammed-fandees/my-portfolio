
import { GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const TimelineItem = ({ item, index, onViewDetails }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
      <div className="hidden md:block w-1/2"></div>
      <div className="w-8 flex justify-center relative">
        <div className={`absolute h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'
          } sm:hidden`} aria-hidden="true"></div>
        <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-800 border-violet-500' : 'bg-white border-teal-500'
          } border-2 z-10 flex items-center justify-center`}>
          {item.type === 'education' ? (
            <GraduationCap size={22} className={darkMode ? 'text-violet-400' : 'text-teal-600'} />
          ) : (
            <Briefcase size={18} className={darkMode ? 'text-violet-400' : 'text-teal-600'} />
          )}
        </div>
      </div>
      <div className={`w-full md:w-1/2 `}>
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "ms-[10px]" : "me-[10px]"}`}>
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${darkMode ? 'bg-violet-500/20 text-violet-300' : 'bg-teal-500/20 text-teal-700'
            }`}>
            {item.period}
          </span>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.place}</p>
          <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
         
          {/* View Details Button */}
          {item.detailed && (
            <button
              onClick={() => onViewDetails(item)}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 mt-2 ${
                darkMode 
                  ? 'text-violet-400 hover:text-violet-300' 
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              View Details <ExternalLink size={14} />
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default TimelineItem;