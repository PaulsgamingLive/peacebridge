
import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import ChatMessage, { Message, MessageType } from './ChatMessage';
import ChatInput from './ChatInput';
import ChatBotButton from './ChatBotButton';
import { useToast } from '@/hooks/use-toast';

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: 'Hi there! I\'m the Peace Bridge assistant. How can I help you today?',
    timestamp: new Date(),
  },
];

// This would normally come from a real backend or API
const BOT_RESPONSES: Record<string, string> = {
  default: "I'm here to help connect communities and foster understanding. What would you like to know about Peace Bridge?",
  greet: "Hello! I'm the Peace Bridge assistant. I can tell you about our mission, programs, or how to get involved.",
  about: "Peace Bridge creates spaces for understanding, healing, and reconciliation between communities with a history of conflict, particularly focusing on Protestant and Catholic relations.",
  join: "We'd love to have you join us! You can sign up for our community dialogues, volunteer as a facilitator, or donate to support our programs.",
  story: "You can share your story on our 'Share Your Story' page. Your experiences help others understand different perspectives.",
  contact: "You can reach our team at contact@peacebridge.org or use the form on our website.",
  thanks: "You're welcome! I'm glad I could help. Let me know if you need anything else.",
  programs: "We offer dialogue sessions, community events, educational workshops, and reconciliation programs designed to build bridges between communities.",
  communities: "We work primarily with Protestant and Catholic communities, but our programs are open to anyone interested in peace-building and reconciliation.",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const processMessage = (msg: string): string => {
    const lowerMsg = msg.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return BOT_RESPONSES.greet;
    } else if (lowerMsg.includes('about') || lowerMsg.includes('mission') || lowerMsg.includes('what is')) {
      return BOT_RESPONSES.about;
    } else if (lowerMsg.includes('join') || lowerMsg.includes('volunteer') || lowerMsg.includes('participate')) {
      return BOT_RESPONSES.join;
    } else if (lowerMsg.includes('story') || lowerMsg.includes('share')) {
      return BOT_RESPONSES.story;
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone')) {
      return BOT_RESPONSES.contact;
    } else if (lowerMsg.includes('thank')) {
      return BOT_RESPONSES.thanks;
    } else if (lowerMsg.includes('program') || lowerMsg.includes('offering') || lowerMsg.includes('services')) {
      return BOT_RESPONSES.programs;
    } else if (lowerMsg.includes('communities') || lowerMsg.includes('people') || lowerMsg.includes('who')) {
      return BOT_RESPONSES.communities;
    } else {
      return BOT_RESPONSES.default;
    }
  };

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: processMessage(content),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <ChatBotButton onClick={toggleChat} isOpen={isOpen} />
      
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 w-[90%] max-w-[370px] rounded-lg border bg-background shadow-xl md:bottom-24 md:right-8 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Peace Bridge Assistant</h3>
            <button
              onClick={toggleChat}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div 
            ref={chatContainerRef}
            className="h-[350px] overflow-y-auto p-4"
          >
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex items-center space-x-2 px-4 py-2 text-muted-foreground">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      )}
    </>
  );
};

export default ChatBot;
