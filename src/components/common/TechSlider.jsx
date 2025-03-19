import { useTheme } from "../../contexts/ThemeContext";

const TechSlider = ({ items }) => {
  const { darkMode } = useTheme();
  // Double the items for seamless infinite loop
  const sliderItems = [...items, ...items];
  
  return (
    <div className="relative overflow-hidden w-full py-4">
      <div 
        className="flex items-center sm:space-x-8 space-x-4 animate-infinite-scroll"
        style={{
          animationDuration: '30s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
      >
        {sliderItems.map((item, index) => (
          <div 
            key={`${item}-${index}`}
            className={`flex-shrink-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
          >
            <span className="font-medium whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;