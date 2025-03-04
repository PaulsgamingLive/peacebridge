
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Peace Bridge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {sectionLinks.map((link) => (
            <a 
              key={link.name}
              href={link.path}
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/share-your-story"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Share Story
          </Link>
          <Link 
            to="/mlas"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            MLAs
          </Link>
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
            {sectionLinks.map((link) => (
              <a 
                key={link.name}
                href={link.path}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/share-your-story"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Share Story
            </Link>
            <Link
              to="/mlas"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              MLAs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
