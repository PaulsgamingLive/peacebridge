
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatBotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatBotButton = ({ onClick, isOpen }: ChatBotButtonProps) => {
  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-8 md:right-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            size="icon"
            variant="default"
            className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
              isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
            }`}
            aria-label={isOpen ? "Close chat" : "Open chat"}
          >
            <MessageCircle className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{isOpen ? 'Close chat' : 'Ask us anything'}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ChatBotButton;
