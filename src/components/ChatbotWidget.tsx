import * as React from "react";
import { MessageSquare, X, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ChatbotMessage,
  generateAssistantReply,
  getInitialAssistantMessage,
} from "@/lib/chatbot";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

const ChatbotWidget = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<ChatbotMessage[]>(() => [getInitialAssistantMessage()]);

  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isOpen, messages.length]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatbotMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: trimmed,
    };

    const assistantMsg = generateAssistantReply(trimmed);

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
  }

  const panelClass = isMobile
    ? "fixed inset-x-3 bottom-20 z-50"
    : "fixed bottom-6 right-6 z-50 w-[420px]";

  const cardClass = isMobile ? "h-[70vh]" : "h-[520px]";

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="hero"
          size="icon"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-full"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className={panelClass}>
          <Card className={cardClass}>
            <CardHeader className="py-4">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-lg">Portfolio Chat</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pb-3">
              <div
                ref={scrollRef}
                className="max-h-[360px] md:max-h-[380px] overflow-auto pr-2"
              >
                <div className="space-y-4">
                  {messages.map((m) => (
                    <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                      <div
                        className={
                          m.role === "user"
                            ? "max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-primary-foreground"
                            : "max-w-[85%] rounded-2xl bg-accent px-4 py-3 text-accent-foreground"
                        }
                      >
                        <div className="whitespace-pre-line text-sm leading-relaxed">{m.text}</div>

                        {m.actions && m.actions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {m.actions.map((a) => (
                              <Button
                                key={`${m.id}-${a.href}`}
                                variant={m.role === "user" ? "secondary" : "outline"}
                                size="sm"
                                asChild
                              >
                                <a
                                  href={a.href}
                                  target={isExternalHref(a.href) ? "_blank" : undefined}
                                  rel={isExternalHref(a.href) ? "noopener noreferrer" : undefined}
                                >
                                  {a.label}
                                </a>
                              </Button>
                            ))}
                          </div>
                        )}

                        {m.suggestions && m.suggestions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {m.suggestions.map((s) => (
                              <Button
                                key={`${m.id}-s-${s}`}
                                variant="ghost"
                                size="sm"
                                onClick={() => send(s)}
                                className="border border-border"
                              >
                                {s}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              <form
                className="flex w-full items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isMobile ? "Ask anything…" : "Ask about skills, projects, contact…"}
                />
                <Button type="submit" variant="default" size="icon" aria-label="Send">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
