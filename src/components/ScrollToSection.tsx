import React from 'react';

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ 
  targetId, 
  children, 
  className = '', 
  onClick 
}) => {
  const scrollToSection = () => {
    // Execute onClick callback first
    if (onClick) {
      onClick();
    }

    // Use setTimeout to ensure any state updates from onClick are processed
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Get navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      // Calculate the position to scroll to
      const elementRect = targetElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - navbarHeight - 20; // 20px extra padding
      
      // Scroll to the calculated position
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
    }, 50); // Small delay to ensure DOM updates
  };

  return (
    <button
      onClick={scrollToSection}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default ScrollToSection;