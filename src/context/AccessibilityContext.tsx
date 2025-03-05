
import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ga' | 'gd';

interface AccessibilityContextType {
  isHighContrast: boolean;
  isTtsEnabled: boolean;
  currentLanguage: Language;
  toggleHighContrast: () => void;
  toggleTextToSpeech: () => void;
  changeLanguage: (lang: Language) => void;
  speakText: (text: string) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType>({
  isHighContrast: false,
  isTtsEnabled: false,
  currentLanguage: 'en',
  toggleHighContrast: () => {},
  toggleTextToSpeech: () => {},
  changeLanguage: () => {},
  speakText: () => {},
});

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    const saved = localStorage.getItem('highContrast');
    return saved === 'true';
  });
  
  const [isTtsEnabled, setIsTtsEnabled] = useState(() => {
    const saved = localStorage.getItem('textToSpeech');
    return saved === 'true';
  });
  
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  // Apply high contrast mode to the document
  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', isHighContrast.toString());
  }, [isHighContrast]);

  // Save TTS preference
  useEffect(() => {
    localStorage.setItem('textToSpeech', isTtsEnabled.toString());
  }, [isTtsEnabled]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleTextToSpeech = () => {
    setIsTtsEnabled(prev => !prev);
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  // Text-to-speech functionality
  const speakText = (text: string) => {
    if (isTtsEnabled && 'speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language based on current selection
      switch (currentLanguage) {
        case 'ga':
          utterance.lang = 'ga-IE'; // Irish
          break;
        case 'gd':
          utterance.lang = 'gd'; // Scottish Gaelic (closest to Ulster Scots)
          break;
        default:
          utterance.lang = 'en-GB'; // Default to British English
      }
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AccessibilityContext.Provider
      value={{
        isHighContrast,
        isTtsEnabled,
        currentLanguage,
        toggleHighContrast,
        toggleTextToSpeech,
        changeLanguage,
        speakText,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
