
import React from 'react';
import { cn } from "@/lib/utils";
import { Globe, Sun, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '@/hooks/useAccessibility';
import NavigationLink from './NavigationLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sectionLinks: Array<{ name: string; path: string }>;
}

const MobileMenu = ({ isOpen, onClose, sectionLinks }: MobileMenuProps) => {
  const { 
    toggleHighContrast, 
    toggleTextToSpeech, 
    isHighContrast, 
    isTtsEnabled, 
    currentLanguage, 
    changeLanguage 
  } = useAccessibility();

  if (!isOpen) return null;

  return (
    <div className={cn(
      "md:hidden absolute top-full left-0 right-0 shadow-lg animate-fade-in",
      isHighContrast ? "bg-black border-t border-white" : "bg-white/95 backdrop-blur-md"
    )}>
      <nav className="flex flex-col space-y-4 p-6">
        {sectionLinks.map((link) => (
          <NavigationLink 
            key={link.name}
            path={link.path}
            name={link.name}
            onClick={onClose}
          />
        ))}
        <Link
          to="/share-your-story"
          className={cn(
            "py-2 transition-colors duration-200",
            isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
          )}
          onClick={onClose}
        >
          Share Story
        </Link>
        <Link
          to="/mlas"
          className={cn(
            "py-2 transition-colors duration-200",
            isHighContrast ? "text-white hover:text-yellow-300" : "text-foreground/80 hover:text-primary"
          )}
          onClick={onClose}
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
  );
};

export default MobileMenu;
