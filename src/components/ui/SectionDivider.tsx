"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "dark-to-light" | "light-to-dark" | "dark-to-deep" | "deep-to-dark";
  className?: string;
  direction?: "down" | "up";
}

export function SectionDivider({
  variant = "dark-to-light",
  className,
  direction = "down",
}: SectionDividerProps) {
  const colors = {
    "dark-to-light": {
      from: "var(--graphite-charcoal)",
      to: "var(--arctic-white)",
    },
    "light-to-dark": {
      from: "var(--arctic-white)",
      to: "var(--graphite-charcoal)",
    },
    "dark-to-deep": {
      from: "var(--graphite-charcoal)",
      to: "var(--deep-charcoal)",
    },
    "deep-to-dark": {
      from: "var(--deep-charcoal)",
      to: "var(--graphite-charcoal)",
    },
  };

  const { to } = colors[variant];

  return (
    <div
      className={cn("relative h-24 md:h-32 w-full overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points={
            direction === "down" ? "0,0 100,0 100,100" : "0,100 100,0 0,0"
          }
          style={{ fill: to }}
        />
      </svg>
    </div>
  );
}
