
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAccessibility } from '@/hooks/useAccessibility';

// Import sub-components
import NavbarLogo from './NavbarComponents/NavbarLogo';
import DesktopNavigation from './NavbarComponents/DesktopNavigation';
import AccessibilityMenu from './NavbarComponents/AccessibilityMenu';
import MobileMenu from './NavbarComponents/MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isHighContrast } = useAccessibility();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate section links that work from any page
  const sectionLinks = [
    { name: 'About', path: isHomePage ? '#about' : '/#about' },
    { name: 'Stories', path: isHomePage ? '#stories' : '/#stories' },
    { name: 'Timeline', path: isHomePage ? '#timeline' : '/#timeline' },
    { name: 'Dialogue', path: isHomePage ? '#dialogue' : '/#dialogue' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent",
        isHighContrast ? "bg-black text-white border-b border-white" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Navigation - Centered */}
        <DesktopNavigation sectionLinks={sectionLinks} />

        {/* Accessibility Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <AccessibilityMenu />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2",
            isHighContrast ? "text-white" : "text-foreground"
          )} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        sectionLinks={sectionLinks} 
      />
    </header>
  );
};

export default Navbar;
