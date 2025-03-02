
import React, { useEffect, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const pillars = [
    {
      title: "Understanding",
      description: "Creating opportunities to learn about different perspectives and experiences, fostering empathy between divided communities."
    },
    {
      title: "Dialogue",
      description: "Facilitating meaningful conversations that acknowledge past harms while focusing on building a shared future."
    },
    {
      title: "Healing",
      description: "Providing spaces for processing trauma and grief, allowing individuals and communities to move forward."
    },
    {
      title: "Reconciliation",
      description: "Working toward new relationships built on mutual respect, shared values, and collaborative problem-solving."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="scroll-trigger mb-16"
        >
          <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Building Bridges of Understanding</h2>
          <p className="text-lg text-foreground/80 max-w-2xl">
            We believe that lasting peace comes through honest dialogue, shared experiences, and a commitment to understanding one another's perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              ref={el => itemRefs.current[index] = el}
              className={cn(
                "scroll-trigger p-6 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm",
                "transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:bg-card/50"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="font-semibold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-foreground/70">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Separator className="mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              ref={el => itemRefs.current[4] = el}
              className="scroll-trigger"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision for Peace</h3>
              <p className="text-foreground/80 mb-6">
                We envision communities that have moved beyond historical divisions to build a shared future based on mutual respect and understanding.
              </p>
              <p className="text-foreground/80">
                Through facilitated dialogue, educational programs, and community projects, we create spaces where healing can begin and new relationships can form.
              </p>
            </div>
            
            <div 
              ref={el => itemRefs.current[5] = el}
              className="scroll-trigger relative h-64 md:h-80 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-card/30 backdrop-blur-md flex items-center justify-center p-8 text-center">
                <blockquote className="text-lg md:text-xl italic">
                  "Peace is not merely the absence of conflict, but the presence of justice and mutual understanding."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
