"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  Bot, 
  User,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

interface ChatWidgetProps {
  className?: string;
}

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI Fashion Stylist. I can help you discover your perfect style, find outfit recommendations, and answer any questions about fashion. What would you like to explore today?",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = [
    "Based on your style preferences, I'd recommend trying a casual chic look with denim and a blazer. Would you like to see some options?",
    "That's a great question! For formal events, I suggest focusing on classic silhouettes with modern touches. Let me show you some ideas.",
    "I love helping with seasonal styling! For this time of year, layering is key. What's your preferred color palette?",
    "Virtual try-on is one of my favorite features! You can see how any outfit looks on your 3D avatar before making a decision.",
    "Color coordination is an art! I can analyze your skin tone and suggest the most flattering colors for you.",
    "For a sustainable wardrobe, I recommend investing in versatile pieces that can be styled multiple ways. Let's explore some options!",
    "That outfit combination sounds interesting! I can help you visualize how it would look and suggest accessories to complete the look.",
    "Fashion trends are always evolving! I stay updated with the latest styles while considering your personal preferences and body type."
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        role: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className={cn("fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50", className)}
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="relative rounded-full w-16 h-16 shadow-brand group"
            >
              <MessageSquare className="h-6 w-6" />
              
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1">
                <Badge variant="success" size="sm" className="text-xs">
                  AI
                </Badge>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className={cn(
              "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden",
              isMinimized && "h-16",
              !isMinimized && "h-[calc(100vh-8rem)] sm:h-[600px]",
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-accent text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Fashion Stylist</h3>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 h-[calc(100%-8rem)] sm:h-[480px] overflow-y-auto">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        "flex space-x-3",
                        msg.role === "user" && "flex-row-reverse space-x-reverse"
                      )}
                    >
                      {/* Avatar */}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        msg.role === "user" 
                          ? "bg-primary text-white" 
                          : "bg-gradient-to-r from-primary to-accent text-white"
                      )}>
                        {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      
                      {/* Message */}
                      <div className={cn(
                        "max-w-[70%] p-3 rounded-2xl text-sm",
                        msg.role === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      )}>
                        {msg.content}
                        <div className={cn(
                          "text-xs mt-1 opacity-70",
                          msg.role === "user" ? "text-white/70" : "text-muted-foreground"
                        )}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-muted p-3 rounded-2xl rounded-bl-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about fashion, styling, or trends..."
                      className="flex-1 px-3 py-2 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      disabled={!message.trim()}
                      className="px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    <Sparkles className="h-3 w-3 inline mr-1" />
                    Powered by Fashioneer.ai
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
