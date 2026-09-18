"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "p" | "h1" | "h2";
  delay?: number;
  id?: string;
  style?: CSSProperties;
  /** Extra DOM props (e.g. data-parallax) passed straight through. */
  [prop: `data-${string}`]: string | undefined;
}

/**
 * Scroll reveal — mirrors the template's `.reveal` / `.stagger` / `.mask`
 * system, but fully state-driven: `is-in` is rendered by React, never
 * toggled via direct DOM manipulation. Mutating classes outside React breaks
 * hydration (server HTML vs client DOM) whenever React reconciles those
 * nodes afterwards (navigation, Fast Refresh, Suspense retries).
 *
 * Notes:
 * - `.stagger` parents work by merging the class: <Reveal className="xp stagger">
 * - `.mask` children reveal automatically under an `.is-in` ancestor
 *   (template CSS: `.is-in .mask > *`), so masked headings only need an
 *   `<Reveal as="h1" className="mask">` wrapper (CSS: `.mask.is-in > *`).
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  id,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      const t = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(t);
    }
    // Already in view on mount (mirrors the template's revealVisible).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      const t = window.setTimeout(() => setInView(true), delay);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay) window.setTimeout(() => setInView(true), delay);
            else setInView(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={cn("reveal", className, inView && "is-in")}
      id={id}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
