"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: "word" | "letter" | "line";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  variant = "word",
  delay = 0,
  as: Component = "span",
}: AnimatedTextProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: variant === "letter" ? 0.03 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: variant === "line" ? 40 : 20,
      rotateX: variant === "word" ? -15 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  if (variant === "line") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className={cn("overflow-hidden", className)}
      >
        <motion.div variants={itemVariants}>
          <Component className={className}>{text}</Component>
        </motion.div>
      </motion.div>
    );
  }

  const items = variant === "letter" ? text.split("") : text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className={cn("flex flex-wrap", className)}
      style={{ perspective: "1000px" }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {item}
          {variant === "word" && index < items.length - 1 && (
            <span>&nbsp;</span>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}
