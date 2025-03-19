import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ServiceCard = ({ service }) => {
  const { darkMode } = useTheme();
  const Icon = service.icon;
  
  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}>
      <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      } group-hover:bg-gradient-to-r ${
        darkMode ? 'group-hover:from-violet-500 group-hover:to-fuchsia-500' : 'group-hover:from-emerald-500 group-hover:to-teal-500'
      } transition-colors duration-300`}>
        <Icon 
          size={28} 
          className={`${
            darkMode ? 'text-violet-400' : 'text-teal-600'
          } group-hover:text-white transition-colors duration-300`} 
        />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{service.description}</p>
    </div>
  );
};

export default ServiceCard;