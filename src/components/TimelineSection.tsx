
import React, { useEffect, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  link?: {
    url: string;
    label: string;
  };
}

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events: TimelineEvent[] = [
    {
      year: "1998",
      title: "Good Friday Agreement",
      description: "A major political agreement that effectively ended decades of violence and established a framework for peaceful governance.",
      link: {
        url: "https://en.wikipedia.org/wiki/Good_Friday_Agreement",
        label: "Wikipedia: Good Friday Agreement"
      }
    },
    {
      year: "2005",
      title: "Community Dialog Initiative",
      description: "Launch of cross-community programs designed to facilitate conversations between divided groups."
    },
    {
      year: "2010",
      title: "Shared Education Program",
      description: "Schools from different communities began formal partnerships, allowing students to learn together."
    },
    {
      year: "2015",
      title: "Reconciliation Fund",
      description: "Establishment of funding specifically for grassroots reconciliation projects across communities."
    },
    {
      year: "2020",
      title: "Digital Peace Archive",
      description: "Creation of an online repository for stories, artifacts, and educational resources related to the peace process."
    },
    {
      year: "Present",
      title: "Ongoing Journey",
      description: "The work continues through countless individual and community efforts to build understanding and cooperation."
    }
  ];

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
    eventRefs.current.forEach(event => {
      if (event) observer.observe(event);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      eventRefs.current.forEach(event => {
        if (event) observer.unobserve(event);
      });
    };
  }, []);

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={sectionRef}
          className="scroll-trigger text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Historical Context</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Journey to Peace</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Key moments in the ongoing process of reconciliation and community building.
          </p>
        </div>

        <div className="relative">
          {/* Timeline stem */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-px"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 relative">
            {events.map((event, index) => (
              <div 
                key={event.year}
                ref={el => eventRefs.current[index] = el}
                className={cn(
                  "scroll-trigger relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Event dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary/80 border-4 border-background transform -translate-x-1/2 md:-translate-x-2.5 translate-y-1.5 z-10"></div>
                
                {/* Content for even/odd positioning */}
                <div className={cn(
                  "md:pr-12",
                  index % 2 !== 0 ? "md:col-start-2 md:pr-0 md:pl-12" : ""
                )}>
                  <div className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-foreground/70 mb-3">{event.description}</p>
                    
                    {event.link && (
                      <a 
                        href={event.link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/70 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        {event.link.label}
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Empty column for layout */}
                {index % 2 !== 0 ? <div></div> : <div className="hidden md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
