export function scrollToHash(hash: string, options?: { durationMs?: number }) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const durationMs = prefersReducedMotion ? 0 : (options?.durationMs ?? 350);

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const delta = targetY - startY;

  if (durationMs <= 0 || Math.abs(delta) < 1) {
    window.scrollTo({ top: targetY });
    return;
  }

  const start = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const tick = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / durationMs);
    const eased = easeOutCubic(t);

    window.scrollTo({ top: startY + delta * eased });

    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
