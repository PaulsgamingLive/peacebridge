
import { useContext } from 'react';
import { AccessibilityContext } from '@/context/AccessibilityContext';

export const useAccessibility = () => {
  return useContext(AccessibilityContext);
};
