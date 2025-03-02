
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const programs = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Facilitated Dialogues",
    description: "Small group conversations led by trained facilitators in safe, neutral spaces.",
    schedule: "Weekly sessions"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community Projects",
    description: "Collaborative initiatives that bring different communities together around shared goals.",
    schedule: "Ongoing"
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Workshops & Training",
    description: "Skill-building in conflict resolution, active listening, and collaborative problem-solving.",
    schedule: "Monthly events"
  }
];

const DialogueSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<(HTMLDivElement | null)[]>([]);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

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
    programsRef.current.forEach(program => {
      if (program) observer.observe(program);
    });
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      programsRef.current.forEach(program => {
        if (program) observer.unobserve(program);
      });
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section id="dialogue" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="scroll-trigger text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Get Involved</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Join the Conversation</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover opportunities to participate in dialogue and community-building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              ref={el => programsRef.current[index] = el}
              className={cn(
                "scroll-trigger overflow-hidden border-border/40 bg-card/30 backdrop-blur-sm",
                "transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card/50 hover-lift"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-foreground/70 mb-4">{program.description}</p>
                <div className="text-sm text-foreground/60">
                  <span className="font-medium">Schedule:</span> {program.schedule}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          ref={formRef}
          className="scroll-trigger max-w-3xl mx-auto"
        >
          <Card className="border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How would you like to get involved?"
                    required
                    className="min-h-32 bg-background/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-full hover-lift group"
                  disabled={isSubmitting}
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DialogueSection;
