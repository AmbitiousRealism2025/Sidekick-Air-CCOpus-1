"use client";

import { motion } from "framer-motion";
import { Container, AnimatedText } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from "@/lib/animations";

const features = [
  {
    title: "Inflates in Minutes",
    description: "Quick setup means more time with clients and less time wrestling equipment.",
    stat: "< 5 min",
    statLabel: "Setup Time",
  },
  {
    title: "Rock-Solid 6\" Surface",
    description: "Drop-stitch technology delivers the stability of solid tables without the weight.",
    stat: "6\"",
    statLabel: "Thickness",
  },
  {
    title: "800+ lb Capacity",
    description: "Aerospace-grade materials provide exceptional strength for any treatment scenario.",
    stat: "800+",
    statLabel: "Pounds",
  },
  {
    title: "Yoga Mat Size",
    description: "Packs down small enough to fit anywhere — your car, closet, or carry-on.",
    stat: "4x",
    statLabel: "Smaller",
  },
];

const benefits = [
  "Modular frame system for complete flexibility",
  "Collapsible stand included",
  "Advanced fasteners for rock-solid stability",
  "Optional color customization",
  "Professional branding available",
  "Lightweight at under 25 lbs",
];

export function Difference() {
  return (
    <section
      id="difference"
      className="relative py-24 md:py-32 section-deep overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--electric-steel-blue) 0%, transparent 60%)",
          filter: "blur(100px)",
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
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-steel border border-steel/30 rounded-full bg-steel/5 mb-6">
              The Difference
            </span>
            <h2 className="display-md text-arctic mb-6">
              <AnimatedText
                text="Powerful. Portable. Purpose-Built."
                variant="word"
                className="display-md text-arctic"
              />
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-grey/70">
              Sidekick Air redefines what a therapy table can be — delivering unmatched
              performance in a fraction of the space and weight.
            </p>
          </motion.div>

          {/* Main features grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-b from-charcoal to-deep border border-white/5 hover:border-steel/30 transition-all duration-500">
                  {/* Stat */}
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-steel mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-grey/50 uppercase tracking-wider">
                      {feature.statLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-arctic mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-grey/60 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-steel" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product showcase and benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product visual placeholder */}
            <motion.div
              variants={fadeInLeft}
              className="relative aspect-square rounded-3xl bg-gradient-to-br from-charcoal via-deep to-charcoal border border-white/5 overflow-hidden"
            >
              {/* Placeholder for product image/3D render */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-steel/20 to-copper/20 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-40 h-40 rounded-full bg-deep flex items-center justify-center">
                      <span className="text-6xl">🛏️</span>
                    </div>
                  </motion.div>
                  <p className="text-grey/50 text-sm">
                    Product visualization
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-steel/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-steel/30 rounded-br-lg" />
            </motion.div>

            {/* Benefits list */}
            <motion.div variants={fadeInRight}>
              <h3 className="text-2xl font-bold text-arctic mb-8">
                Everything You Need, Nothing You Don&apos;t
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-steel/20 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-steel"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-arctic/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.p
                variants={fadeInUp}
                className="mt-8 text-xl text-copper font-medium"
              >
                Sidekick Air isn&apos;t just a table; it&apos;s an ally — built to move
                with the therapist.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
