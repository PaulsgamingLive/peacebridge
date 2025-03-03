
import { useRef, useEffect } from 'react';

type TiltOptions = {
  max: number;
  perspective: number;
  scale: number;
};

export function use3DTilt(options: Partial<TiltOptions> = {}) {
  const {
    max = 15, // maximum tilt rotation in degrees
    perspective = 1000, // transformation perspective in px
    scale = 1.05, // scale on hover
  } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let updateCall: number | null = null;
    let position = {
      x: 0,
      y: 0,
    };
    let width = 0;
    let height = 0;
    
    const setTransition = () => {
      element.style.transition = `transform 0.2s ease-out`;
    };
    
    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    };
    
    const updateElementStyle = () => {
      const centerX = position.x / width;
      const centerY = position.y / height;
      
      const rotateX = max * (0.5 - centerY);
      const rotateY = max * (centerX - 0.5);
      
      element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };
    
    const resetElementStyle = () => {
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      position = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      
      if (updateCall !== null) {
        cancelAnimationFrame(updateCall);
      }
      
      updateCall = requestAnimationFrame(updateElementStyle);
    };
    
    const handleMouseEnter = () => {
      updateElementPosition();
      setTransition();
      setTimeout(() => {
        element.style.transition = '';
      }, 200);
    };
    
    const handleMouseLeave = () => {
      setTransition();
      resetElementStyle();
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, perspective, scale]);
  
  return ref;
}
