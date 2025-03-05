
import React from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';
import TextToSpeech from './TextToSpeech';

interface TranslationContent {
  en: string;
  ga: string;
  gd: string;
}

interface TranslatedTextProps {
  id: string;
  translations: TranslationContent;
  as?: React.ElementType;
  className?: string;
  enableTTS?: boolean;
}

const TranslatedText = ({
  id,
  translations,
  as: Component = 'span',
  className,
  enableTTS = false
}: TranslatedTextProps) => {
  const { currentLanguage, isTtsEnabled } = useAccessibility();
  
  // Get the correct translation based on the current language
  const translatedText = translations[currentLanguage] || translations.en;
  
  return (
    <Component className={className} id={id}>
      {translatedText}
      {enableTTS && isTtsEnabled && (
        <TextToSpeech text={translatedText} className="ml-2 inline-flex" />
      )}
    </Component>
  );
};

export default TranslatedText;
