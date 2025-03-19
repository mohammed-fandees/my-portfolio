import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../cards/TestimonialCard';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border-t border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="What my clients say about working with me"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index}
              animation="fade-up" 
              delay={index * 150}
            >
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;