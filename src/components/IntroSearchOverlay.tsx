import * as React from "react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type IntroSearchOverlayProps = {
  query: string;
  storageKey?: string;
  totalDurationMs?: number;
  onDone?: () => void;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function IntroSearchOverlay({
  query,
  storageKey = "intro_search_seen_v1",
  totalDurationMs = 1800,
  onDone,
}: IntroSearchOverlayProps) {
  const [visible, setVisible] = React.useState(false);
  const [typed, setTyped] = React.useState("");
  const [phase, setPhase] = React.useState<"typing" | "loading">("typing");
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    try {
      const seen = localStorage.getItem(storageKey) === "1";
      if (!seen) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [storageKey]);

  React.useEffect(() => {
    if (!visible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  React.useEffect(() => {
    if (!visible) return;

    const reduced = prefersReducedMotion();
    const typingBudget = Math.max(450, Math.floor(totalDurationMs * 0.62));
    const loadingBudget = Math.max(350, totalDurationMs - typingBudget);

    let typingTimer: number | undefined;
    let loadingTimer: number | undefined;
    let doneTimer: number | undefined;

    const finish = () => {
      try {
        localStorage.setItem(storageKey, "1");
      } catch {
        // ignore
      }
      setVisible(false);
      onDone?.();
    };

    if (reduced) {
      setTyped(query);
      setPhase("loading");
      setProgress(100);
      doneTimer = window.setTimeout(finish, 250);
      return () => {
        if (doneTimer) window.clearTimeout(doneTimer);
      };
    }

    setPhase("typing");
    setTyped("");
    setProgress(0);

    const perCharMs = Math.max(18, Math.floor(typingBudget / Math.max(1, query.length)));
    let idx = 0;

    typingTimer = window.setInterval(() => {
      idx += 1;
      setTyped(query.slice(0, idx));
      if (idx >= query.length && typingTimer) {
        window.clearInterval(typingTimer);
        setPhase("loading");
        const start = Date.now();
        loadingTimer = window.setInterval(() => {
          const elapsed = Date.now() - start;
          const pct = Math.min(100, Math.round((elapsed / loadingBudget) * 100));
          setProgress(pct);
          if (pct >= 100 && loadingTimer) {
            window.clearInterval(loadingTimer);
            doneTimer = window.setTimeout(finish, 120);
          }
        }, 30);
      }
    }, perCharMs);

    return () => {
      if (typingTimer) window.clearInterval(typingTimer);
      if (loadingTimer) window.clearInterval(loadingTimer);
      if (doneTimer) window.clearTimeout(doneTimer);
    };
  }, [visible, query, storageKey, totalDurationMs, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6">
          <div className="text-2xl md:text-3xl font-bold text-foreground">Search</div>
          <div className="text-sm text-muted-foreground mt-1">Finding Chandrabhan’s portfolio…</div>
        </div>

        <Card className="rounded-2xl border border-border bg-card">
          <div className="px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              <div className="flex-1">
                <div
                  className="h-12 w-full rounded-full border border-input bg-background px-5 flex items-center"
                  aria-label="Search input (animated)"
                >
                  <span className="text-base md:text-lg text-foreground">
                    {typed}
                    <span className="inline-block w-[1px] h-6 bg-foreground/70 align-middle ml-0.5 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>

            {phase === "loading" && (
              <div className="mt-5">
                <Progress value={progress} />
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
