/**
 * Formats a number with comma as thousands separator
 * @param {number} num - The number to format
 * @returns {string} - The formatted number
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Gets the appropriate color class based on the current theme
 * @param {boolean} darkMode - Whether dark mode is active
 * @param {string} darkClass - The class to use in dark mode
 * @param {string} lightClass - The class to use in light mode
 * @returns {string} - The appropriate class
 */
export const getThemeClass = (darkMode, darkClass, lightClass) => {
  return darkMode ? darkClass : lightClass;
};

/**
 * Creates a gradient class string based on the current theme
 * @param {boolean} darkMode - Whether dark mode is active
 * @returns {string} - The gradient class string
 */
export const getGradientClass = (darkMode) => {
  return `bg-gradient-to-r ${
    darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
  }`;
};

/**
 * Calculates and returns an animation delay based on index
 * @param {number} index - The index of the item
 * @param {number} baseDelay - The base delay in milliseconds
 * @returns {number} - The calculated delay
 */
export const getAnimationDelay = (index, baseDelay = 150) => {
  return index * baseDelay;
};