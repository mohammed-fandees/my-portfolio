/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  // Define animation styles
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { opacity: 0, transform: 'translateY(30px)' };
        case 'fade-down':
          return { opacity: 0, transform: 'translateY(-30px)' };
        case 'fade-left':
          return { opacity: 0, transform: 'translateX(-30px)' };
        case 'fade-right':
          return { opacity: 0, transform: 'translateX(30px)' };
        case 'zoom-in':
          return { opacity: 0, transform: 'scale(0.9)' };
        default:
          return { opacity: 0 };
      }
    }
    
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
    };
  };
  
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationStyles(),
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;