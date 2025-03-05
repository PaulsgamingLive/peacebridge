
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Accessibility, Globe, Volume2, X } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from './ui/button';

const AccessibilityFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    isHighContrast, 
    isTtsEnabled, 
    currentLanguage, 
    toggleHighContrast, 
    toggleTextToSpeech, 
    changeLanguage 
  } = useAccessibility();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className={cn(
          "absolute bottom-16 right-0 p-4 rounded-lg shadow-lg w-64 mb-2",
          isHighContrast ? "bg-black border border-white" : "bg-white"
        )}>
          <button 
            className={cn(
              "absolute top-2 right-2 p-1 rounded-full",
              isHighContrast ? "text-white hover:text-yellow-300" : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </button>
          
          <h3 className={cn(
            "text-lg font-semibold mb-3",
            isHighContrast ? "text-white" : "text-gray-800"
          )}>
            Accessibility Options
          </h3>
          
          <div className="space-y-3">
            <button 
              onClick={toggleHighContrast}
              className={cn(
                "flex items-center w-full py-2 px-3 rounded",
                isHighContrast 
                  ? "bg-white text-black hover:bg-yellow-300" 
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              <Accessibility className="mr-2 h-4 w-4" />
              {isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
            </button>
            
            <button 
              onClick={toggleTextToSpeech}
              className={cn(
                "flex items-center w-full py-2 px-3 rounded",
                isHighContrast 
                  ? "bg-white text-black hover:bg-yellow-300" 
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              {isTtsEnabled ? 'Disable Text to Speech' : 'Enable Text to Speech'}
            </button>
            
            <div className="pt-2 border-t border-gray-200">
              <p className={cn(
                "text-sm mb-2",
                isHighContrast ? "text-white" : "text-gray-600"
              )}>
                <Globe className="inline-block mr-1 h-4 w-4" /> Language:
              </p>
              
              <div className="space-y-1 pl-2">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={cn(
                    "flex items-center w-full py-1 px-3 rounded text-sm",
                    currentLanguage === 'en' ? "font-bold" : "",
                    isHighContrast 
                      ? "text-white hover:text-yellow-300" 
                      : "text-gray-800 hover:bg-gray-100"
                  )}
                >
                  English
                </button>
                
                <button 
                  onClick={() => changeLanguage('ga')}
                  className={cn(
                    "flex items-center w-full py-1 px-3 rounded text-sm",
                    currentLanguage === 'ga' ? "font-bold" : "",
                    isHighContrast 
                      ? "text-white hover:text-yellow-300" 
                      : "text-gray-800 hover:bg-gray-100"
                  )}
                >
                  Irish (Gaeilge)
                </button>
                
                <button 
                  onClick={() => changeLanguage('gd')}
                  className={cn(
                    "flex items-center w-full py-1 px-3 rounded text-sm",
                    currentLanguage === 'gd' ? "font-bold" : "",
                    isHighContrast 
                      ? "text-white hover:text-yellow-300" 
                      : "text-gray-800 hover:bg-gray-100"
                  )}
                >
                  Ulster Scots
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "rounded-full w-12 h-12 shadow-lg",
          isHighContrast ? "bg-white text-black hover:bg-yellow-300" : "bg-primary hover:bg-primary/90"
        )}
        aria-label="Accessibility options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default AccessibilityFloatingButton;
