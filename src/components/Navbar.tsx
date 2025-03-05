
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Volume2, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { toggleHighContrast, toggleTextToSpeech, isHighContrast, isTtsEnabled, currentLanguage, changeLanguage } = useAccessibility();

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
        <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className={cn(
            "text-xl font-semibold",
            isHighContrast ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          )}>
            Peace Bridge
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8 mx-auto">
          {sectionLinks.map((link) => (
            <a 
              key={link.name}
              href={link.path}
              className={cn(
                "hover:text-primary transition-colors duration-200",
                isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80"
              )}
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/share-your-story"
            className={cn(
              "hover:text-primary transition-colors duration-200",
              isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80"
            )}
          >
            Share Story
          </Link>
          <Link 
            to="/mlas"
            className={cn(
              "hover:text-primary transition-colors duration-200",
              isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80"
            )}
          >
            MLAs
          </Link>
        </nav>

        {/* Accessibility Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(
                "rounded-full",
                isHighContrast ? "text-white hover:bg-gray-800 hover:text-yellow-300" : ""
              )}>
                <Sun className="h-5 w-5" />
                <span className="sr-only">Accessibility Options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={toggleHighContrast}>
                <Sun className="mr-2 h-4 w-4" />
                <span>{isHighContrast ? 'Disable' : 'Enable'} High Contrast</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleTextToSpeech}>
                <Volume2 className="mr-2 h-4 w-4" />
                <span>{isTtsEnabled ? 'Disable' : 'Enable'} Text to Speech</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                <Globe className="mr-2 h-4 w-4" />
                <span className={currentLanguage === 'en' ? 'font-bold' : ''}>English</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('ga')}>
                <Globe className="mr-2 h-4 w-4" />
                <span className={currentLanguage === 'ga' ? 'font-bold' : ''}>Irish (Gaeilge)</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('gd')}>
                <Globe className="mr-2 h-4 w-4" />
                <span className={currentLanguage === 'gd' ? 'font-bold' : ''}>Ulster Scots</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
      {isMenuOpen && (
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 shadow-lg animate-fade-in",
          isHighContrast ? "bg-black border-t border-white" : "bg-white/95 backdrop-blur-md"
        )}>
          <nav className="flex flex-col space-y-4 p-6">
            {sectionLinks.map((link) => (
              <a 
                key={link.name}
                href={link.path}
                className={cn(
                  "py-2 transition-colors duration-200",
                  isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/share-your-story"
              className={cn(
                "py-2 transition-colors duration-200",
                isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Share Story
            </Link>
            <Link
              to="/mlas"
              className={cn(
                "py-2 transition-colors duration-200",
                isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              MLAs
            </Link>
            
            {/* Accessibility Options in Mobile Menu */}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <button 
                onClick={toggleHighContrast}
                className={cn(
                  "flex items-center w-full py-2 transition-colors duration-200",
                  isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                )}
              >
                <Sun className="mr-3 h-5 w-5" />
                <span>{isHighContrast ? 'Disable' : 'Enable'} High Contrast</span>
              </button>
              
              <button 
                onClick={toggleTextToSpeech}
                className={cn(
                  "flex items-center w-full py-2 transition-colors duration-200",
                  isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                )}
              >
                <Volume2 className="mr-3 h-5 w-5" />
                <span>{isTtsEnabled ? 'Disable' : 'Enable'} Text to Speech</span>
              </button>
              
              <div className="flex flex-col space-y-2 mt-2">
                <span className={cn(
                  isHighContrast ? "text-white" : "text-foreground/80"
                )}>
                  <Globe className="inline-block mr-2 h-5 w-5" /> Language:
                </span>
                
                <button 
                  onClick={() => changeLanguage('en')}
                  className={cn(
                    "flex items-center pl-7 py-1 transition-colors duration-200",
                    currentLanguage === 'en' ? "font-bold" : "",
                    isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  English
                </button>
                
                <button 
                  onClick={() => changeLanguage('ga')}
                  className={cn(
                    "flex items-center pl-7 py-1 transition-colors duration-200",
                    currentLanguage === 'ga' ? "font-bold" : "",
                    isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  Irish (Gaeilge)
                </button>
                
                <button 
                  onClick={() => changeLanguage('gd')}
                  className={cn(
                    "flex items-center pl-7 py-1 transition-colors duration-200",
                    currentLanguage === 'gd' ? "font-bold" : "",
                    isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  Ulster Scots
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
