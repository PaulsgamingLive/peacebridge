
/**
 * Adds a 3D tilt effect to DOM elements
 * @param selector - CSS selector for elements to apply effect to
 * @param options - Configuration options for the tilt effect
 */
export const add3DTiltEffect = (
  selector: string, 
  options: {
    perspective?: number;
    maxTilt?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    reset?: boolean;
    glare?: boolean;
    maxGlare?: number;
  } = {}
) => {
  const defaults = {
    perspective: 1000,   // Perspective value for 3D space
    maxTilt: 20,         // Maximum tilt rotation (degrees)
    scale: 1.05,         // Scale on hover
    speed: 300,          // Speed of transition
    transition: true,    // Smooth transition on mouseenter/leave
    reset: true,         // Reset transform on mouseleave
    glare: false,        // Enable glare effect
    maxGlare: 0.5,       // Maximum glare opacity
  };

  const config = { ...defaults, ...options };
  
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    let glareElement: HTMLElement | null = null;
    
    // Add glare effect if enabled
    if (config.glare) {
      const glareWrap = document.createElement('div');
      glareWrap.className = 'js-tilt-glare';
      glareWrap.style.position = 'absolute';
      glareWrap.style.top = '0';
      glareWrap.style.left = '0';
      glareWrap.style.width = '100%';
      glareWrap.style.height = '100%';
      glareWrap.style.overflow = 'hidden';
      glareWrap.style.pointerEvents = 'none';
      
      glareElement = document.createElement('div');
      glareElement.className = 'js-tilt-glare-inner';
      glareElement.style.position = 'absolute';
      glareElement.style.top = '50%';
      glareElement.style.left = '50%';
      glareElement.style.backgroundImage = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)';
      glareElement.style.width = '200%';
      glareElement.style.height = '200%';
      glareElement.style.transform = 'rotate(180deg) translate(-50%, -50%)';
      glareElement.style.transformOrigin = '0% 0%';
      glareElement.style.opacity = '0';
      
      glareWrap.appendChild(glareElement);
      (element as HTMLElement).appendChild(glareWrap);
      (element as HTMLElement).style.overflow = 'hidden';
    }
    
    // Prepare the element
    if ((element as HTMLElement).style.position === '') {
      (element as HTMLElement).style.position = 'relative';
    }
    
    (element as HTMLElement).style.transformStyle = 'preserve-3d';
    if (config.transition) {
      (element as HTMLElement).style.transition = `transform ${config.speed}ms cubic-bezier(.03,.98,.52,.99)`;
    }
    
    const handleMouseEnter = () => {
      if (config.transition) {
        (element as HTMLElement).style.transition = `transform ${config.speed}ms cubic-bezier(.03,.98,.52,.99)`;
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calculate tilt
      const tiltX = ((mouseY / height) * 2 - 1) * config.maxTilt * -1;
      const tiltY = ((mouseX / width) * 2 - 1) * config.maxTilt;
      
      // Apply transform
      const transform = `perspective(${config.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${config.scale}, ${config.scale}, ${config.scale})`;
      (element as HTMLElement).style.transform = transform;
      
      // Apply glare if enabled
      if (config.glare && glareElement) {
        const glareSize = Math.sqrt(width * width + height * height);
        const glareOpacity = (mouseX / width) * config.maxGlare;
        glareElement.style.opacity = glareOpacity.toString();
      }
    };
    
    const handleMouseLeave = () => {
      if (config.reset) {
        (element as HTMLElement).style.transform = `perspective(${config.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
      
      // Reset glare if enabled
      if (config.glare && glareElement) {
        glareElement.style.opacity = '0';
      }
      
      if (config.transition) {
        (element as HTMLElement).style.transition = `transform ${config.speed}ms cubic-bezier(.03,.98,.52,.99)`;
      }
    };
    
    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    // Store the event handlers for potential cleanup
    (element as any).__tilt = {
      handleMouseEnter,
      handleMouseMove,
      handleMouseLeave
    };
  });
  
  // Return a cleanup function
  return () => {
    elements.forEach(element => {
      const handlers = (element as any).__tilt;
      if (handlers) {
        element.removeEventListener('mouseenter', handlers.handleMouseEnter);
        element.removeEventListener('mousemove', handlers.handleMouseMove);
        element.removeEventListener('mouseleave', handlers.handleMouseLeave);
        delete (element as any).__tilt;
      }
    });
  };
};

// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
  add3DTiltEffect('.card-3d', { 
    maxTilt: 10,
    glare: true,
    maxGlare: 0.3
  });
  
  add3DTiltEffect('.button-3d', { 
    maxTilt: 5,
    scale: 1.03
  });
});
