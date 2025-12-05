"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AirflowLinesProps {
  count?: number;
  className?: string;
}

// Generate deterministic "random-looking" values based on index
// This ensures same values on server and client
function seededValue(index: number, seed: number): number {
  const x = Math.sin(index * 9999 + seed) * 10000;
  return x - Math.floor(x);
}

export function AirflowLines({ count = 8, className }: AirflowLinesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const left = 10 + seededValue(i, 1) * 80;
        const delay = seededValue(i, 2) * 3;
        const duration = 4 + seededValue(i, 3) * 2;
        const height = 40 + seededValue(i, 4) * 40;

        return (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${left}%`,
              width: "2px",
              height: `${height}px`,
              background:
                "linear-gradient(to top, transparent, var(--electric-steel-blue), transparent)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [-20, -100, -180],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
