import { useState, useCallback } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const predefinedResponses = [
  "Peace begins with understanding. How can I help you foster dialogue?",
  "Reconciliation is a journey. Let me know how I can assist.",
  "Building bridges requires empathy and action. What would you like to discuss?",
];

/**
 * Custom hook to manage the AI agent's state and functionality.
 * This includes message history, user interactions, and predefined responses.
 */
const useAIAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! How can I assist you with peace-building and reconciliation today?",
    },
  ]);

  const addMessage = useCallback((message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  const getAIResponse = useCallback((userInput: string): Message => {
    const randomResponse =
      predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
    return { sender: "ai", text: randomResponse };
  }, []);

  const sendMessage = useCallback(
    (userInput: string) => {
      if (!userInput.trim()) return;

      const userMessage: Message = { sender: "user", text: userInput.trim() };
      const aiResponse = getAIResponse(userInput.trim());

      addMessage(userMessage);
      addMessage(aiResponse);
    },
    [addMessage, getAIResponse]
  );

  return {
    messages,
    sendMessage,
  };
};

export default useAIAgent;
