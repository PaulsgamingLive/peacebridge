import React from 'react';
import { Link } from 'react-router-dom';
// Assuming NavigationMenuItem and navigationMenuTriggerStyle are defined elsewhere.  Replace with your actual imports if different.
const NavigationMenuItem = ({ children }) => <li>{children}</li>;
const navigationMenuTriggerStyle = () => ({});


function NavigationMenu() {
  return (
    <nav>
      <ul>
        <NavigationMenuItem>
          <Link to="/mlas" className={navigationMenuTriggerStyle()}>
            MLAs
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/members-salaries" className={navigationMenuTriggerStyle()}>
            Members' Salaries
          </Link>
        </NavigationMenuItem>
      </ul>
    </nav>
  );
}

export default NavigationMenu;