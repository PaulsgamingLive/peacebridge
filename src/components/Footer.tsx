
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Peace Bridge</h3>
            <p className="text-foreground/70 max-w-md">
              Creating spaces for understanding, healing, and reconciliation between communities with a history of conflict.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#stories" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Stories
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#dialogue" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <address className="not-italic text-foreground/70 space-y-2">
              <p>123 Peace Street</p>
              <p>Harmony City</p>
              <p className="mt-4">info@peacebridge.org</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Peace Bridge. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
