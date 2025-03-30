import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../contexts/ThemeContext';

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
      <div className="relative overflow-hidden">
        <ImageWithFallback 
          src={project.image === "https://placehold.co/600x400" ? project.icon : project.image} 
          alt={project.title} 
          className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
          fallbackIcon={project.icon}
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
          darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
        } text-white`}>
          {project.category}
        </div>
        
        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <a 
              href={project.liveUrl || "#"} 
              className="px-4 py-2 bg-white text-gray-900 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a 
              href={project.codeUrl || "#"} 
              className="px-4 py-2 bg-white text-gray-900 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Code size={16} /> Code
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-fuchsia-500">{project.title}</h3>
        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-full ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;