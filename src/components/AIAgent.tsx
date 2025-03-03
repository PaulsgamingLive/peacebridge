import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const AIAgent = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you with peace-building and reconciliation today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput.trim() };
    const aiResponse = getAIResponse(userInput.trim());

    setMessages((prev) => [...prev, userMessage, aiResponse]);
    setUserInput("");
  };

  const getAIResponse = (input) => {
    // Simulate AI response logic
    const responses = [
      "Peace begins with understanding. How can I help you foster dialogue?",
      "Reconciliation is a journey. Let me know how I can assist.",
      "Building bridges requires empathy and action. What would you like to discuss?",
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return { sender: "ai", text: randomResponse };
  };

  return (
    <Card className="w-full max-w-md mx-auto border border-border/40 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Peace Bridge AI Agent
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-96">
        <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto border-b border-border/40">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2 rounded-lg max-w-xs",
                  message.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-background text-foreground"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center gap-2 p-4">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="rounded-full">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgent;
```

### Step 4: Review the code
- **Functionality**:
  - The component maintains a `messages` state to store the chat history.
  - The `handleSendMessage` function handles user input and appends AI responses.
  - The `getAIResponse` function simulates AI responses with predefined messages.

- **Styling**:
  - The component uses Tailwind CSS classes consistent with the project's conventions.
  - The `Card`, `Input`, and `Button` components are reused from the existing codebase.

- **Dependencies**:
  - The `cn` utility is used for conditional class names.
  - The `ScrollArea` component ensures the chat history is scrollable.

- **Completeness**:
  - The component is fully functional and meets all requirements specified in the task.

### Final Output
```
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const AIAgent = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you with peace-building and reconciliation today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput.trim() };
    const aiResponse = getAIResponse(userInput.trim());

    setMessages((prev) => [...prev, userMessage, aiResponse]);
    setUserInput("");
  };

  const getAIResponse = (input) => {
    // Simulate AI response logic
    const responses = [
      "Peace begins with understanding. How can I help you foster dialogue?",
      "Reconciliation is a journey. Let me know how I can assist.",
      "Building bridges requires empathy and action. What would you like to discuss?",
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return { sender: "ai", text: randomResponse };
  };

  return (
    <Card className="w-full max-w-md mx-auto border border-border/40 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Peace Bridge AI Agent
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-96">
        <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto border-b border-border/40">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "px-4 py-2 rounded-lg max-w-xs",
                  message.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-background text-foreground"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center gap-2 p-4">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="rounded-full">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgent;
