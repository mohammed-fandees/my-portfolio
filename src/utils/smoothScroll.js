/**
 * Smoothly scrolls to the element with the specified ID
 * @param {string} targetId - The ID of the element to scroll to (without the # symbol)
 * @param {number} offset - The offset from the top of the element (in pixels)
 * @param {boolean} prefersReducedMotion - Whether the user prefers reduced motion
 */
export const smoothScrollTo = (targetId, offset = 80, prefersReducedMotion = false) => {
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
    
    return true;
  }
  
  return false;
};

/**
 * Sets up smooth scrolling for all anchor links in the document
 * @param {boolean} prefersReducedMotion - Whether the user prefers reduced motion
 * @param {Function} onNavigate - Optional callback to call after navigation
 */
export const setupSmoothScrolling = (prefersReducedMotion = false, onNavigate = null) => {
  const handleAnchorClick = function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    // Extract the ID without the # symbol
    const id = targetId.substring(1);
    const result = smoothScrollTo(id, 80, prefersReducedMotion);
    
    if (result && onNavigate) {
      onNavigate();
    }
  };
  
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
  });
  
  return () => {
    anchorLinks.forEach(anchor => {
      anchor.removeEventListener('click', handleAnchorClick);
    });
  };
};
