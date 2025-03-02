
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Peace Bridge
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#stories" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Stories
          </a>
          <a 
            href="#timeline" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Timeline
          </a>
          <a 
            href="#dialogue" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Dialogue
          </a>
          <Button 
            variant="default" 
            className="rounded-full px-6 hover-lift"
          >
            Join Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 p-6">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#stories" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </a>
            <a 
              href="#timeline" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </a>
            <a 
              href="#dialogue" 
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dialogue
            </a>
            <Button 
              variant="default" 
              className="rounded-full px-6 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
