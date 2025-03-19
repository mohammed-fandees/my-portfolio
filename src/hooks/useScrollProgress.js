import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    // Calculate scroll progress
    const scrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollY / totalHeight) * 100;
    
    // Update scroll progress
    setScrollProgress(progress);
    
    // Show/hide back to top button
    setShowBackToTop(scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, [prefersReducedMotion]);

  return { scrollProgress, showBackToTop, scrollToTop };
};

export default useScrollProgress;