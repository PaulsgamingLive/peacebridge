
import React from 'react';
import { cn } from '@/lib/utils';
import { Volume2 } from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from './ui/button';

interface TextToSpeechProps {
  text: string;
  className?: string;
}

const TextToSpeech = ({ text, className }: TextToSpeechProps) => {
  const { isTtsEnabled, speakText, isHighContrast } = useAccessibility();
  
  if (!isTtsEnabled) return null;
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "p-1 h-auto", 
        isHighContrast ? "text-yellow-300 hover:text-white" : "text-primary hover:text-primary/80",
        className
      )}
      onClick={() => speakText(text)}
      aria-label="Read aloud"
    >
      <Volume2 className="h-4 w-4" />
    </Button>
  );
};

export default TextToSpeech;
