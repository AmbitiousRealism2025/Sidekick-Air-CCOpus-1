"use client";

import { motion } from "framer-motion";
import { Container, AnimatedText } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const appFeatures = [
  {
    icon: "📋",
    title: "Setup & Mobility Guides",
    description: "Step-by-step instructions for any environment",
  },
  {
    icon: "🩺",
    title: "Treatment Protocols",
    description: "Condition-based protocols across massage, sports medicine, and rehab",
  },
  {
    icon: "📊",
    title: "Client Tracking",
    description: "Progress notes, outcomes, and follow-up care tools",
  },
  {
    icon: "🤝",
    title: "Professional Network",
    description: "Integration for collaboration and referrals",
  },
  {
    icon: "📅",
    title: "Smart Scheduling",
    description: "Client-side booking with Sidekick-certified therapists",
  },
  {
    icon: "🏠",
    title: "Remote Care",
    description: "At-home functionality for clients with Sidekick Air",
  },
  {
    icon: "📚",
    title: "Continuing Education",
    description: "Skills development pathways and learning modules",
  },
  {
    icon: "📈",
    title: "Data Insights",
    description: "Refine outcomes and elevate performance with analytics",
  },
  {
    icon: "⌚",
    title: "Wearable Integration",
    description: "Connect with health tracking devices for smarter recovery",
  },
  {
    icon: "🔔",
    title: "Automated Follow-ups",
    description: "Client reminders, home programs, and progress reports",
  },
];

export function App() {
  return (
    <section
      id="app"
      className="relative py-24 md:py-32 section-light overflow-hidden"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportSettings}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-steel border border-steel/30 rounded-full bg-steel/5 mb-6">
              Sidekick Care App
            </span>
            <h2 className="display-md text-charcoal mb-6">
              <AnimatedText
                text="Care Connected"
                variant="word"
                className="display-md text-charcoal"
              />
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-charcoal/60">
              The Sidekick Care app extends your reach by connecting therapists,
              clients, and performance data into one intelligent platform.
            </p>
          </motion.div>

          {/* App mockup with features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left features */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-4 space-y-6"
            >
              {appFeatures.slice(0, 5).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-grey/30 transition-colors"
                >
                  <div className="flex-shrink-0 text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center - App mockup */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-4"
            >
              <div className="relative mx-auto max-w-xs">
                {/* Phone frame */}
                <div className="relative aspect-[9/19] rounded-[3rem] bg-charcoal p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-3 rounded-[2.5rem] bg-arctic overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal rounded-b-2xl" />

                    {/* App content mockup */}
                    <div className="h-full pt-8 px-4 pb-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="h-2 w-20 bg-charcoal/20 rounded mb-1" />
                          <div className="h-4 w-32 bg-charcoal rounded" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-steel/20" />
                      </div>

                      {/* Stats cards */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-steel/10">
                          <div className="text-xl font-bold text-steel">24</div>
                          <div className="text-xs text-charcoal/50">This Week</div>
                        </div>
                        <div className="p-3 rounded-xl bg-copper/10">
                          <div className="text-xl font-bold text-copper">98%</div>
                          <div className="text-xs text-charcoal/50">Satisfaction</div>
                        </div>
                      </div>

                      {/* Client list */}
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 rounded-lg bg-white/50"
                          >
                            <div className="w-8 h-8 rounded-full bg-grey" />
                            <div className="flex-1">
                              <div className="h-2 w-24 bg-charcoal/20 rounded mb-1" />
                              <div className="h-2 w-16 bg-charcoal/10 rounded" />
                            </div>
                            <div className="w-6 h-6 rounded bg-steel/20" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-steel text-white text-sm font-semibold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Coming Soon
                </motion.div>
              </div>
            </motion.div>

            {/* Right features */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-4 space-y-6"
            >
              {appFeatures.slice(5).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-grey/30 transition-colors"
                >
                  <div className="flex-shrink-0 text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-charcoal/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
