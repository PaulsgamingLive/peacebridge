
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransition3DProps {
  children: React.ReactNode;
}

const PageTransition3D: React.FC<PageTransition3DProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('page-enter-3d');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('page-exit-active-3d');

      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('page-enter-3d');
      }, 300);

      const enterTimeout = setTimeout(() => {
        setTransitionStage('page-enter-active-3d');
      }, 350);

      return () => {
        clearTimeout(timeout);
        clearTimeout(enterTimeout);
      };
    }
  }, [location, displayLocation]);

  return (
    <div className="perspective-container">
      <div className={`page-transition-3d ${transitionStage}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition3D;
