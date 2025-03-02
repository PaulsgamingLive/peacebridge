
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Send, UserCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShareYourStory = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [community, setCommunity] = useState("community-a");
  const [quote, setQuote] = useState("");
  const [story, setStory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name || !email || !quote || !story) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    
    // This would normally connect to an API
    setTimeout(() => {
      toast({
        title: "Story submitted!",
        description: "Thank you for sharing your story with us.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setQuote("");
      setStory("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your experiences matter. Share your personal journey of building bridges across divided communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 sticky top-28">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Why Share?
                </CardTitle>
                <CardDescription>
                  Your story can inspire others on their journey toward reconciliation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Personal stories help others understand the human side of conflict resolution and peace-building.
                </p>
                <p className="text-sm">
                  By sharing your experience, you become part of a larger narrative of healing and community building.
                </p>
                <div className="p-3 bg-primary/5 rounded-md text-sm italic border border-primary/10">
                  "The greatest gift we can give to others is our authentic stories of transformation."
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="border-border/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5 text-primary" />
                  Your Information
                </CardTitle>
                <CardDescription>
                  Share your personal journey with our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Your email will not be published
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="community" className="text-sm font-medium">
                        Community
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            type="radio"
                            id="community-a"
                            name="community"
                            className="peer hidden"
                            checked={community === "community-a"}
                            onChange={() => setCommunity("community-a")}
                          />
                          <label
                            htmlFor="community-a"
                            className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-3 text-sm font-medium ring-offset-background peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2"
                          >
                            Community A
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="community-b"
                            name="community"
                            className="peer hidden"
                            checked={community === "community-b"}
                            onChange={() => setCommunity("community-b")}
                          />
                          <label
                            htmlFor="community-b"
                            className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-transparent p-3 text-sm font-medium ring-offset-background peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2"
                          >
                            Community B
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="quote" className="text-sm font-medium">
                      Memorable Quote *
                    </label>
                    <Input
                      id="quote"
                      placeholder="A short, memorable quote from your story"
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      A brief, impactful statement that captures the essence of your experience
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="story" className="text-sm font-medium">
                      Your Story *
                    </label>
                    <Textarea
                      id="story"
                      placeholder="Share your experience..."
                      className="min-h-32"
                      value={story}
                      onChange={(e) => setStory(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Please share your personal journey of building bridges across divided communities
                    </p>
                  </div>

                  <CardFooter className="px-0 pt-4">
                    <Button 
                      type="submit" 
                      className="w-full rounded-md flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Your Story"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourStory;
