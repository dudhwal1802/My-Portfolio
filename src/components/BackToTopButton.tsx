import * as React from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToHash } from "@/lib/scroll";

export default function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        variant="social"
        size="icon"
        className="rounded-full"
        aria-label="Back to top"
        onClick={() => {
          scrollToHash("#home", { durationMs: 350 });
          window.history.pushState(null, "", "#home");
        }}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
}
