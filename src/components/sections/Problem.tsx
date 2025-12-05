"use client";

import { motion } from "framer-motion";
import { Container, AnimatedText } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const painPoints = [
  {
    icon: "⚖️",
    title: "Excessive Weight",
    description: "Traditional tables often exceed 35–45 pounds, creating daily physical strain.",
  },
  {
    icon: "🔄",
    title: "Awkward Balance",
    description: "Carrying through tight spaces, stairs, and vehicles feels like wrestling an anchor.",
  },
  {
    icon: "📦",
    title: "Bulky Storage",
    description: "Tables consume valuable space in homes, clinics, and vehicles.",
  },
  {
    icon: "⏱️",
    title: "Setup Fatigue",
    description: "Complex assembly wastes energy before a single client session begins.",
  },
  {
    icon: "⚠️",
    title: "Durability Trade-offs",
    description: "Lighter tables sacrifice strength, causing instability during treatment.",
  },
  {
    icon: "🚚",
    title: "Freight Limitations",
    description: "Oversized dimensions drive up shipping costs and limit outreach.",
  },
  {
    icon: "🎨",
    title: "Lack of Branding",
    description: "Few options exist for customization or professional visibility.",
  },
  {
    icon: "🌍",
    title: "Environmental Impact",
    description: "Conventional materials and shipping increase waste and carbon footprint.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 section-light overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(var(--graphite-charcoal) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
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
          <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-charcoal/60 border border-charcoal/20 rounded-full mb-6">
              The Problem
            </span>
            <h2 className="display-md text-charcoal mb-6">
              <AnimatedText
                text="Tools Haven't Evolved With The Profession"
                variant="word"
                className="display-md text-charcoal"
              />
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-charcoal/60">
              For decades, therapy tables have remained unchanged — heavy frames,
              fixed dimensions, and outdated construction.
            </p>
          </motion.div>

          {/* Pain points grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-6 bg-white rounded-2xl border border-grey/50 hover:border-copper/50 transition-all duration-300 hover:shadow-lg hover:shadow-copper/5"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {point.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Transition statement */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto text-balance">
              These are not minor inconveniences — they are obstacles that silently
              wear down even the most passionate professionals.
            </p>
            <motion.div
              className="mt-8 inline-flex items-center gap-2 text-copper font-semibold"
              whileHover={{ x: 5 }}
            >
              <span>Sidekick Air checks every box</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
