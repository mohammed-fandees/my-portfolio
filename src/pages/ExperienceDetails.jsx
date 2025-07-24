import { ArrowLeft, Calendar, MapPin, Award, Code, Target, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ScrollReveal from '../components/common/ScrollReveal';

const ExperienceDetail = ({ experience, onBack }) => {
  const { darkMode } = useTheme();

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Experience not found</p>
      </div>
    );
  }

  const { detailed } = experience;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <ScrollReveal animation="fade-right">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            } shadow-md hover:shadow-lg`}
          >
            <ArrowLeft size={18} />
            Back to Experience
          </button>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className={`rounded-2xl p-8 mb-8 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  experience.type === 'work' 
                    ? darkMode ? 'bg-violet-900 text-violet-300' : 'bg-violet-100 text-violet-800'
                    : darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {experience.type === 'work' ? 'Work Experience' : 'Education'}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{experience.title}</h1>
                <div className="flex items-center gap-4 text-lg">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{experience.place}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{experience.period}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {detailed?.summary || experience.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Responsibilities */}
          <ScrollReveal animation="fade-right" delay={200}>
            <div className={`rounded-2xl p-6 h-fit ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <Target className={darkMode ? 'text-violet-400' : 'text-teal-600'} size={24} />
                <h2 className="text-xl font-bold">Key Responsibilities</h2>
              </div>
              <ul className="space-y-3">
                {detailed?.responsibilities?.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className={`${darkMode ? 'text-violet-400' : 'text-teal-600'} mt-0.5 flex-shrink-0`} size={16} />
                    <span className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal animation="fade-left" delay={300}>
            <div className={`rounded-2xl p-6 h-fit ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <Code className={darkMode ? 'text-violet-400' : 'text-teal-600'} size={24} />
                <h2 className="text-xl font-bold">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {detailed?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Achievements */}
        {detailed?.achievements && detailed.achievements.length > 0 && (
          <ScrollReveal animation="fade-up" delay={400}>
            <div className={`rounded-2xl p-6 mt-8 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <Award className={darkMode ? 'text-violet-400' : 'text-teal-600'} size={24} />
                <h2 className="text-xl font-bold">Key Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {detailed.achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  } transition-all duration-300 hover:scale-102`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;
