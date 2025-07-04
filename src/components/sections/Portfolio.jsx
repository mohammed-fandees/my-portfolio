
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../cards/ProjectCard';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import { projects } from '../../data/projects';

const Portfolio = () => {
  const { darkMode } = useTheme();

  return (
    <section id="portfolio" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border-t border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} aria-labelledby="portfolio-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Portfolio"
          subtitle="Showcasing my best work and projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-flex items-center gap-2 px-6 py-3 border ${darkMode ? 'border-violet-500 text-violet-400 hover:bg-violet-500/10' : 'border-teal-600 text-teal-600 hover:bg-teal-500/10'
              } rounded-md font-medium transition-all duration-300 hover:scale-105`}
          >
            View All Projects <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;