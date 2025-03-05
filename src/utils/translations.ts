
// Define the types for our translations
type Language = 'en' | 'ga' | 'gd';

type TranslationRecord = Record<string, Record<Language, string>>;

// Main translations object
export const translations: TranslationRecord = {
  // Navigation
  'nav.about': {
    en: 'About',
    ga: 'Eolas',
    gd: 'Aboot',
  },
  'nav.stories': {
    en: 'Stories',
    ga: 'Scéalta',
    gd: 'Stories',
  },
  'nav.timeline': {
    en: 'Timeline',
    ga: 'Amlíne',
    gd: 'Timeline',
  },
  'nav.dialogue': {
    en: 'Dialogue',
    ga: 'Comhrá',
    gd: 'Dialogue',
  },
  'nav.share': {
    en: 'Share Story',
    ga: 'Roinn Scéal',
    gd: 'Share Story',
  },
  'nav.mlas': {
    en: 'MLAs',
    ga: 'MLAnna',
    gd: 'MLAs',
  },
  
  // Accessibility
  'a11y.highContrast.enable': {
    en: 'Enable High Contrast',
    ga: 'Cumasaigh Codarsnacht Ard',
    gd: 'Enable High Contrast',
  },
  'a11y.highContrast.disable': {
    en: 'Disable High Contrast',
    ga: 'Díchumasaigh Codarsnacht Ard',
    gd: 'Disable High Contrast',
  },
  'a11y.tts.enable': {
    en: 'Enable Text to Speech',
    ga: 'Cumasaigh Téacs go Caint',
    gd: 'Enable Text tae Speech',
  },
  'a11y.tts.disable': {
    en: 'Disable Text to Speech',
    ga: 'Díchumasaigh Téacs go Caint',
    gd: 'Disable Text tae Speech',
  },
  'a11y.language': {
    en: 'Language',
    ga: 'Teanga',
    gd: 'Leid',
  },
  
  // Common UI elements
  'ui.readMore': {
    en: 'Read More',
    ga: 'Léigh Tuilleadh',
    gd: 'Read Mair',
  },
  'ui.back': {
    en: 'Back',
    ga: 'Ar ais',
    gd: 'Back',
  },
  'ui.next': {
    en: 'Next',
    ga: 'Ar aghaidh',
    gd: 'Next',
  },
};

// Helper function to get a translation
export const getTranslation = (key: string, language: Language): string => {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  return translations[key][language] || translations[key].en;
};
