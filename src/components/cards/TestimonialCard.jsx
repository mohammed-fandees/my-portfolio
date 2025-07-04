
import { User } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../contexts/ThemeContext';

const TestimonialCard = ({ testimonial }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <div className="absolute top-6 right-6 text-5xl opacity-10">
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
          }`}>
          "
        </span>
      </div>

      <div className="mb-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>

      <p className={`mb-6 relative z-10 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        "{testimonial.text}"
      </p>

      <div className="flex items-center">
        <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <ImageWithFallback
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            fallbackIcon={User}
          />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;