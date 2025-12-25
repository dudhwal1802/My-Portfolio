import * as React from "react";
import { MessageSquare, X, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ChatbotMessage,
  ChatbotContext,
  generateAssistantReply,
  getInitialAssistantMessage,
} from "@/lib/chatbot";
import { scrollToHash } from "@/lib/scroll";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

const ChatbotWidget = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<ChatbotMessage[]>(() => [getInitialAssistantMessage()]);
  const [ctx, setCtx] = React.useState<ChatbotContext>({});
  const [isTyping, setIsTyping] = React.useState(false);

  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isOpen, messages.length]);

  React.useEffect(() => {
    if (!isOpen) return;
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeWithThanks();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, messages.length]);

  React.useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  function trackIntent(intent: string) {
    try {
      const key = "portfolio_chat_intents";
      const raw = sessionStorage.getItem(key);
      const parsed = raw ? (JSON.parse(raw) as Record<string, number>) : {};
      parsed[intent] = (parsed[intent] ?? 0) + 1;
      sessionStorage.setItem(key, JSON.stringify(parsed));
    } catch {
      // ignore
    }
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (isTyping) return;

    const userMsg: ChatbotMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);
    window.setTimeout(() => {
      const { message, nextContext, intent } = generateAssistantReply(trimmed, ctx);
      trackIntent(intent);
      setCtx(nextContext);
      setMessages((prev) => [...prev, message]);
      setIsTyping(false);
    }, 450);
  }

  function closeWithThanks() {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (!isOpen) return;

    const last = messages[messages.length - 1];
    const alreadyThanked = last?.role === "assistant" && /thanks|thank you|shukriya|dhanyavaad/i.test(last.text);

    if (!alreadyThanked) {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-thanks`,
          role: "assistant",
          text: "Thanks for visiting! If you want to connect, just pick a method — I’m here.",
          actions: [
            { label: "Go to Contact", href: "#contact" },
            { label: "WhatsApp", href: "https://wa.me/919660880910?text=" + encodeURIComponent("Hi Chandrabhan, I visited your portfolio and would like to connect.") },
          ],
          source: "Contact",
        },
      ]);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, 2000);
  }

  function onActionClick(href: string, e: React.MouseEvent) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    scrollToHash(href, { durationMs: 350 });
    window.history.pushState(null, "", href);
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
          onClick={() => (isOpen ? closeWithThanks() : setIsOpen(true))}
          className="rounded-full"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className={panelClass}>
          <Card className={cardClass} role="dialog" aria-label="Portfolio chat" aria-modal="true">
            <CardHeader className="py-4">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-lg">Portfolio Chat</CardTitle>
                <Button variant="ghost" size="icon" onClick={closeWithThanks} aria-label="Close">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Quick shortcuts */}
              <div className="mt-2 flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" className="border border-border" onClick={() => send("What skills do you have?")}
                  aria-label="Ask about skills"
                >
                  Skills
                </Button>
                <Button variant="ghost" size="sm" className="border border-border" onClick={() => send("Show your projects")}
                  aria-label="Ask about projects"
                >
                  Projects
                </Button>
                <Button variant="ghost" size="sm" className="border border-border" onClick={() => send("What certifications do you have?")}
                  aria-label="Ask about certifications"
                >
                  Certifications
                </Button>
                <Button variant="ghost" size="sm" className="border border-border" onClick={() => send("How can I contact you?")}
                  aria-label="Ask about contact"
                >
                  Contact
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pb-3">
              <div
                ref={scrollRef}
                className="max-h-[360px] md:max-h-[380px] overflow-auto pr-2"
                aria-live="polite"
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

                        {m.source && (
                          <div className="mt-2 text-xs text-muted-foreground">Source: {m.source}</div>
                        )}

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
                                  onClick={(e) => onActionClick(a.href, e)}
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

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl bg-accent px-4 py-3 text-accent-foreground">
                        <div className="text-sm text-muted-foreground">Typing…</div>
                      </div>
                    </div>
                  )}
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
                  ref={inputRef}
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
