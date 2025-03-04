
import React from 'react';
import { Link } from 'react-router-dom';

// Define proper types for the NavigationMenuItem component
const NavigationMenuItem = ({ children }: { children: React.ReactNode }) => <li>{children}</li>;

// Define a proper function for navigation menu trigger style
const navigationMenuTriggerStyle = () => "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max";

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
