import { useEffect } from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Notification = ({ type, message, onClose }) => {
  const { darkMode } = useTheme();
  
  // Auto-close notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  // Determine styles based on notification type and theme
  const getBgColor = () => {
    if (type === 'success') {
      return darkMode ? 'bg-green-800/90' : 'bg-green-100';
    } else {
      return darkMode ? 'bg-red-800/90' : 'bg-red-100';
    }
  };
  
  const getTextColor = () => {
    if (type === 'success') {
      return darkMode ? 'text-green-200' : 'text-green-800';
    } else {
      return darkMode ? 'text-red-200' : 'text-red-800';
    }
  };
  
  const getIconColor = () => {
    if (type === 'success') {
      return darkMode ? 'text-green-400' : 'text-green-600';
    } else {
      return darkMode ? 'text-red-400' : 'text-red-600';
    }
  };
  
  const Icon = type === 'success' ? CheckCircle : AlertTriangle;
  
  return (
    <div className={`fixed top-6 right-6 z-50 max-w-md rounded-lg shadow-lg transition-all duration-300 animate-slide-in ${getBgColor()} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-start p-4">
        <div className="flex-shrink-0">
          <Icon className={`w-6 h-6 ${getIconColor()}`} />
        </div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${getTextColor()}`}>
            {message}
          </p>
        </div>
        <button 
          onClick={onClose}
          className={`ml-4 flex-shrink-0 inline-flex ${getTextColor()} hover:opacity-75 focus:outline-none transition-opacity duration-200`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Notification;