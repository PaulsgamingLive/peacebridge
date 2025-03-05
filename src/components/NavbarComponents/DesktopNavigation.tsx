
import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';

interface DesktopNavigationProps {
  sectionLinks: Array<{ name: string; path: string }>;
}

const DesktopNavigation = ({ sectionLinks }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8 mx-auto">
      {sectionLinks.map((link) => (
        <NavigationLink 
          key={link.name}
          path={link.path}
          name={link.name}
        />
      ))}
      <NavigationLink path="/share-your-story" name="Share Story" />
      <NavigationLink path="/mlas" name="MLAs" />
    </nav>
  );
};

export default DesktopNavigation;
