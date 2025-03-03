
import React from 'react';
import { cn } from '@/lib/utils';

export type MessageType = 'user' | 'bot';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === 'user';
  
  return (
    <div
      className={cn(
        "mb-4 flex w-max max-w-[80%] animate-in fade-in slide-in-from-bottom-2 duration-300",
        isUser ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-3",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
      >
        <p className="text-sm">{message.content}</p>
        <span className="mt-1 block text-right text-xs opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
