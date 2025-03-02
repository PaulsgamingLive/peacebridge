
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, HandshakeIcon } from 'lucide-react';

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (subTextRef.current) observer.observe(subTextRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (subTextRef.current) observer.unobserve(subTextRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 pt-40 md:pt-48 z-10 text-center">
        <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-1.5 rounded-full mb-8 text-sm font-medium">
          <span className="mr-2">Building Peace Together</span>
          <HandshakeIcon size={16} />
        </div>
        
        <h1 
          ref={textRef}
          className="scroll-trigger text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-balance"
        >
          <span className="relative">
            From Division <br className="md:hidden" />
            <span className="text-primary">to Dialogue</span>
          </span>
        </h1>
        
        <p 
          ref={subTextRef}
          className="scroll-trigger text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 md:mb-12 text-balance"
        >
          Creating spaces for understanding, healing, and reconciliation between communities with a history of conflict.
        </p>
        
        <div ref={buttonRef} className="scroll-trigger flex flex-col md:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8 py-6 text-base hover-lift group relative overflow-hidden"
          >
            <span className="relative z-10">Start a Conversation</span>
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base hover-lift group"
          >
            <span>Learn More</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-foreground/60"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
