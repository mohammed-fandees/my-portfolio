import React, { useState } from 'react';
import { Download } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../cards/TimelineItem';
import ScrollReveal from '../common/ScrollReveal';
import ExperienceDetail from '../../pages/ExperienceDetails';
import { useTheme } from '../../contexts/ThemeContext';
import { timeline } from '../../data/timeline';

const Experience = () => {
  const { darkMode } = useTheme();
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleViewDetails = (experience) => {
    setSelectedExperience(experience);
  };

  const handleBackToTimeline = () => {
    setSelectedExperience(null);
  };

  if (selectedExperience) {
    return (
      <ExperienceDetail 
        experience={selectedExperience} 
        onBack={handleBackToTimeline} 
      />
    );
  }

  return (
    <section id="experience" className="py-20" aria-labelledby="experience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="relative">
          {/* Center line for desktop */}
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`} aria-hidden="true"></div>

          <div className="relative max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={index * 150}
              >
                <TimelineItem
                  item={item}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mohammed-fandees/overlay/1728608354322/single-media-viewer?type=DOCUMENT&profileId=ACoAADRPS4UBLtMr3VH5CKpK8VfDxpxLvFkOEeU&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BX3z3tMZ%2FSFaGdDYC1YQ9Pw%3D%3D"
            target='_blank'
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 ${
              darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
            } text-white rounded-md font-medium transition-all duration-300 hover:scale-105`}
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;