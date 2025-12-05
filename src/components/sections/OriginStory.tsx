"use client";

import { motion } from "framer-motion";
import { Container, AnimatedText } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from "@/lib/animations";

export function OriginStory() {
  const timelineSteps = [
    {
      year: "25 Years",
      title: "The Boston Bodyworker",
      description:
        "Drew Freedman built his career around a single mission — to help people feel better. Each session reflected not only skill but compassion.",
    },
    {
      year: "The Pause",
      title: "A Moment of Reflection",
      description:
        "When it came time to close the practice, it brought reflection — questions about identity, direction, and legacy.",
    },
    {
      year: "The Discovery",
      title: "A Paddleboard Changed Everything",
      description:
        "As he inflated the board, something extraordinary happened. The strength and structure echoed the support he depended on throughout his career.",
    },
    {
      year: "Today",
      title: "Sidekick Air Is Born",
      description:
        "Not as a product, but as a continuation of purpose. A way to honor professionals who dedicate their lives to helping others heal.",
    },
  ];

  return (
    <section
      id="origin"
      className="relative py-24 md:py-32 section-dark overflow-hidden"
    >
      {/* Warm copper gradient overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, var(--burnt-copper) 0%, transparent 60%)",
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportSettings}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-24">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-copper border border-copper/30 rounded-full bg-copper/5 mb-6">
              Our Origin
            </span>
            <h2 className="display-lg text-arctic mb-6">
              <AnimatedText
                text="Where Purpose Meets Innovation"
                variant="word"
                className="display-lg text-arctic"
              />
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-grey/70">
              Every great innovation starts with a moment of clarity. This is ours.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-copper/50 via-copper to-copper/50" />

            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 bg-copper rounded-full ring-4 ring-charcoal z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="inline-block text-sm font-semibold text-copper mb-2">
                    {step.year}
                  </span>
                  <h3 className="text-2xl font-bold text-arctic mb-3">
                    {step.title}
                  </h3>
                  <p className="text-grey/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            variants={fadeInUp}
            className="max-w-3xl mx-auto mt-24 text-center"
          >
            <div className="text-6xl text-copper/30 mb-4">&ldquo;</div>
            <p className="text-2xl md:text-3xl text-arctic/90 italic mb-6 text-balance">
              This material could redefine the therapy table. Not just another
              version of what already existed, but something fundamentally better.
            </p>
            <footer className="text-copper font-medium">
              — Drew Freedman, Founder
            </footer>
          </motion.blockquote>
        </motion.div>
      </Container>
    </section>
  );
}
