
import React from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from './ui/button';
import { Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import TranslatedText from './TranslatedText';

const demoText = {
  en: "Hello! This is a demonstration of the text-to-speech feature. Click the button to hear this text read aloud. You can enable or disable text-to-speech from the accessibility menu.",
  ga: "Dia duit! Is léiriú é seo ar an ngné téacs go hurlabhra. Cliceáil an cnaipe chun an téacs seo a chloisteáil os ard. Is féidir leat téacs go hurlabhra a chumasú nó a dhíchumasú ón roghchlár inrochtaineachta.",
  gd: "Halò! Seo taisbeanadh den fheart teacsa-gu-còmhradh. Cliog air a' phutan gus an teacsa seo a chluinntinn àrd-guthach. Faodaidh tu teacsa-gu-còmhradh a chur an comas no à comas bhon chlàr-taice ruigsinneachd."
};

const TextToSpeechDemo = () => {
  const { isTtsEnabled, speakText, currentLanguage, isHighContrast } = useAccessibility();

  const handleSpeakClick = () => {
    const text = demoText[currentLanguage] || demoText.en;
    speakText(text);
  };

  return (
    <section className={cn(
      "py-12 px-6", 
      isHighContrast ? "bg-black text-white" : "bg-slate-50"
    )}>
      <div className="max-w-4xl mx-auto">
        <h2 className={cn(
          "text-2xl font-bold mb-4 text-center",
          isHighContrast ? "text-white" : "text-slate-800"
        )}>
          Text-to-Speech Demo
        </h2>
        
        <div className={cn(
          "p-6 rounded-lg mb-6",
          isHighContrast ? "bg-gray-900 border border-white" : "bg-white shadow-md"
        )}>
          <TranslatedText
            id="tts-demo-text"
            translations={demoText}
            as="p"
            className={cn(
              "mb-6 text-lg leading-relaxed",
              isHighContrast ? "text-white" : "text-slate-700"
            )}
            enableTTS={true}
          />
          
          <div className="flex justify-center">
            <Button 
              onClick={handleSpeakClick}
              className={cn(
                "flex items-center gap-2",
                isHighContrast ? "bg-white text-black hover:bg-yellow-300" : "bg-primary hover:bg-primary/90"
              )}
              disabled={!isTtsEnabled}
            >
              <Volume2 className="h-5 w-5" />
              Read Aloud
            </Button>
          </div>
          
          {!isTtsEnabled && (
            <p className={cn(
              "mt-4 text-center text-sm",
              isHighContrast ? "text-yellow-300" : "text-red-500"
            )}>
              Text-to-speech is currently disabled. Enable it in the accessibility menu to use this feature.
            </p>
          )}
        </div>
        
        <div className={cn(
          "text-center text-sm",
          isHighContrast ? "text-gray-300" : "text-slate-500"
        )}>
          Note: Text-to-speech functionality depends on your browser's speech synthesis capabilities and may vary across different browsers and devices.
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechDemo;
