
import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Story {
  id: string;
  name: string;
  avatar: string;
  community: string;
  quote: string;
  story: string;
}

const StoriesSection = () => {
  const [selectedCommunity, setSelectedCommunity] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stories: Story[] = [
    {
      id: "1",
      name: "Sarah McBride",
      avatar: "S",
      community: "protestant",
      quote: "I never thought I would sit across from someone I once considered an enemy.",
      story: "Growing up, I was taught to fear and distrust the other side. Through this program, I've come to understand that we share the same hopes and dreams for our children. Now we work together on a community garden project."
    },
    {
      id: "2",
      name: "Michael O'Connor",
      avatar: "M",
      community: "catholic",
      quote: "The weight of history feels lighter when we carry it together.",
      story: "My family lost people in the conflict. I carried that anger for decades. Meeting people from the other community and hearing their stories helped me see that we all suffered. Now I help facilitate dialogue sessions."
    },
    {
      id: "3",
      name: "Rachel Donnelly",
      avatar: "R",
      community: "protestant",
      quote: "The first conversation was the hardest, but it changed everything.",
      story: "I avoided these conversations for years. When I finally participated in a dialogue session, I was surprised by how much we had in common. We've formed a women's group that meets monthly to discuss community issues."
    },
    {
      id: "4",
      name: "Thomas Murphy",
      avatar: "T",
      community: "catholic",
      quote: "Our communities were divided, but our future doesn't have to be.",
      story: "As a teacher, I see how the next generation can move beyond our conflicts. I'm working with other educators to develop curriculum that helps young people understand our shared history without inheriting our divisions."
    }
  ];

  const filteredStories = selectedCommunity === "all" 
    ? stories 
    : stories.filter(story => story.community === selectedCommunity);

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
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, [filteredStories]);

  return (
    <section id="stories" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="scroll-trigger text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">Personal Journeys</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Stories of Transformation</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Real experiences from individuals who have crossed divides and built new relationships.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-background/50 backdrop-blur-sm">
              <TabsTrigger 
                value="all"
                onClick={() => setSelectedCommunity("all")}
              >
                All Stories
              </TabsTrigger>
              <TabsTrigger 
                value="protestant"
                onClick={() => setSelectedCommunity("protestant")}
              >
                Protestant
              </TabsTrigger>
              <TabsTrigger 
                value="catholic"
                onClick={() => setSelectedCommunity("catholic")}
              >
                Catholic
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredStories.map((story, index) => (
            <Card 
              key={story.id}
              ref={el => cardsRef.current[index] = el}
              className={cn(
                "scroll-trigger overflow-hidden border-border/40 bg-card/20 backdrop-blur-sm",
                "transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:bg-card/40"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start mb-6">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {story.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{story.name}</h3>
                    <p className="text-sm text-foreground/70">
                      {story.community === "protestant" ? "Protestant" : "Catholic"}
                    </p>
                  </div>
                  <Quote size={24} className="ml-auto text-primary/40" />
                </div>
                
                <blockquote className="text-lg md:text-xl font-medium mb-4 italic text-foreground/90">
                  "{story.quote}"
                </blockquote>
                
                <p className="text-foreground/70">
                  {story.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/share-your-story">
            <Button 
              variant="outline" 
              className="rounded-full px-6 hover-lift"
            >
              Share Your Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
