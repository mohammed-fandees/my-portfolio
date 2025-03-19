import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    if (window.matchMedia) {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(query.matches);
      
      const onChange = (e) => setPrefersReducedMotion(e.matches);
      query.addEventListener('change', onChange);
      return () => query.removeEventListener('change', onChange);
    }
  }, []);

  return prefersReducedMotion;
};