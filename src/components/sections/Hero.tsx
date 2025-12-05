"use client";

import { motion } from "framer-motion";
import { Button, Container, AnimatedText, AirflowLines } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("difference")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--electric-steel-blue) 1px, transparent 1px),
                              linear-gradient(90deg, var(--electric-steel-blue) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Airflow animation */}
      <AirflowLines count={12} />

      {/* Glow orb - top right */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, var(--electric-steel-blue) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow orb - bottom left */}
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, var(--burnt-copper) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Tagline badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-copper border border-copper/30 rounded-full bg-copper/5">
              Reimagining Recovery
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-6">
            <AnimatedText
              text="Professional Strength."
              className="display-xl text-arctic glow-text"
              variant="word"
            />
          </div>
          <div className="mb-8">
            <AnimatedText
              text="Limitless Mobility."
              className="display-xl text-steel"
              variant="word"
              delay={0.3}
            />
          </div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-grey/80 mb-12 text-balance"
          >
            The revolutionary inflatable therapy table that transforms how professionals deliver care.
            Powerful enough for the clinic. Portable enough for anywhere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={scrollToFeatures}
            >
              Discover Sidekick Air
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("origin")?.scrollIntoView({ behavior: "smooth" })}
            >
              Read Our Story
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-grey/30 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-steel rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,100 100,60 100,100"
            style={{ fill: "var(--graphite-charcoal)" }}
          />
        </svg>
      </div>
    </section>
  );
}
