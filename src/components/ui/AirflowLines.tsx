"use client";

import { motion } from "framer-motion";

interface AirflowLinesProps {
  count?: number;
  className?: string;
}

export function AirflowLines({ count = 8, className }: AirflowLinesProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const left = 10 + Math.random() * 80;
        const delay = Math.random() * 3;
        const duration = 4 + Math.random() * 2;
        const height = 40 + Math.random() * 40;

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
