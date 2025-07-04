
import { Cpu, Terminal } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import SkillBar from '../common/SkillBar';
import TechSlider from '../common/TechSlider';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import { technicalSkills } from '../../data/technicalSkills';
import { developmentSkills } from '../../data/developmentSkills';
import { techStack } from '../../data/techStack';

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section id="skills" className="py-20" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Skills"
          subtitle="Professional skills & technologies I work with"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <ScrollReveal animation="fade-right" delay={200}>
            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              } h-[100%] hover:shadow-lg transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center text-white bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
                  }`}>
                  <Cpu size={20} />
                </span>
                Technical Skills
              </h3>

              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Development Skills */}
          <ScrollReveal animation="fade-left" delay={400}>
            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              } h-[100%] hover:shadow-lg transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className={`w-10 h-10 rounded-lg mr-3 flex items-center justify-center text-white bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-amber-500 to-orange-500'
                  }`}>
                  <Terminal size={20} />
                </span>
                Development Skills
              </h3>

              {developmentSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  index={index}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
          <TechSlider items={techStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;