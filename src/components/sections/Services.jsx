
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../cards/ServiceCard';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import { services } from '../../data/services';

const Services = () => {
  const { darkMode } = useTheme();

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border-t border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Services"
          subtitle="Specialized services I offer to my clients"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
          } border shadow-lg text-center`}>
          <h3 className="text-2xl font-bold mb-4">Need a custom service?</h3>
          <p className={`mb-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't see exactly what you're looking for? I offer customized solutions tailored to your specific needs and goals.
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 ${darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
              } text-white rounded-md font-medium transition-all duration-300 hover:scale-105`}
          >
            Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;