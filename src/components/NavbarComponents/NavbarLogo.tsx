
import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { useAccessibility } from '@/hooks/useAccessibility';

const NavbarLogo = () => {
  const { isHighContrast } = useAccessibility();
  
  return (
    <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
      <span className={cn(
        "text-xl font-semibold",
        isHighContrast ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
      )}>
        Peace Bridge
      </span>
    </Link>
  );
};

export default NavbarLogo;
