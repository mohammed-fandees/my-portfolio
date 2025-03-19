import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

// eslint-disable-next-line no-unused-vars
const ImageWithFallback = ({ src, alt, className, fallbackIcon: FallbackIcon }) => {
  const [error, setError] = useState(false);
  const { darkMode } = useTheme();
  
  return error ? (
    <div className={`flex items-center justify-center ${className} ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <FallbackIcon size={48} className={darkMode ? "text-gray-600" : "text-gray-400"} />
    </div>
  ) : (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
      loading="lazy" 
    />
  );
};

export default ImageWithFallback;