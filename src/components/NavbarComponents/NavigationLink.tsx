
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { useAccessibility } from '@/hooks/useAccessibility';

interface NavigationLinkProps {
  path: string;
  name: string;
  onClick?: () => void;
}

const NavigationLink = ({ path, name, onClick }: NavigationLinkProps) => {
  const { isHighContrast } = useAccessibility();
  
  return (
    <a 
      href={path}
      className={cn(
        "hover:text-primary transition-colors duration-200",
        isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80"
      )}
      onClick={onClick}
    >
      {name}
    </a>
  );
};

export default NavigationLink;
