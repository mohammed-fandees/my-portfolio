/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef(null);
  const sectionsRef = useRef({});

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'experience', 'testimonials', 'contact'];
    
    // Create refs for all sections
    sections.forEach(section => {
      sectionsRef.current[section] = document.getElementById(section);
    });
    
    // Set up IntersectionObserver for section detection
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && sections.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      { rootMargin: "-100px 0px -40% 0px", threshold: 0.1 }
    );
    
    // Observe all sections
    sections.forEach(section => {
      const element = sectionsRef.current[section];
      if (element) observer.current.observe(element);
    });
    
    return () => {
      if (observer.current) {
        sections.forEach(section => {
          const element = sectionsRef.current[section];
          if (element) observer.current.unobserve(element);
        });
      }
    };
  }, []);

  return { activeSection };
};

export default useActiveSection;