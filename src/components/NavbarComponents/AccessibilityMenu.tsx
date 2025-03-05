
import React from 'react';
import { cn } from "@/lib/utils";
import { Globe, Sun, Volume2 } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const AccessibilityMenu = () => {
  const { 
    toggleHighContrast, 
    toggleTextToSpeech, 
    isHighContrast, 
    isTtsEnabled, 
    currentLanguage, 
    changeLanguage 
  } = useAccessibility();

  return (
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
  );
};

export default AccessibilityMenu;
