"use client";

import { motion } from "framer-motion";
import { Container, AnimatedText } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from "@/lib/animations";

export function Standard() {
  return (
    <section
      id="standard"
      className="relative py-24 md:py-32 section-dark overflow-hidden"
    >
      {/* Futuristic grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--steel-light) 1px, transparent 1px),
                            linear-gradient(90deg, var(--steel-light) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          perspective: "1000px",
          transform: "rotateX(60deg) translateY(-50%)",
          transformOrigin: "center center",
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportSettings}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={fadeInLeft}>
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-steel border border-steel/30 rounded-full bg-steel/5 mb-6">
              The Future
            </span>

            <h2 className="display-md text-arctic mb-6">
              <AnimatedText
                text="A New Industry Standard"
                variant="word"
                className="display-md text-arctic"
              />
            </h2>

            <div className="space-y-6 text-grey/70">
              <p className="text-lg">
                Sidekick Air sets a new benchmark for therapeutic equipment. Using
                precision drop-stitch technology, it delivers the strength and
                stability of a solid table without the limitations.
              </p>
              <p className="text-lg">
                It can be stored compactly, shipped efficiently, and set up
                anywhere care is needed — from clinics to stadiums, from homes to
                international travel.
              </p>
            </div>

            {/* AI Feature teaser */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-steel/10 to-copper/10 border border-steel/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-steel/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-steel"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-arctic mb-2">
                    Coming Soon: Clinical AI Coach
                  </h3>
                  <p className="text-grey/60">
                    Future models will feature built-in AI technology. Connect
                    through a simple QR code to a personalized digital companion
                    for treatment planning, business analytics, and professional
                    growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={fadeInRight}
            className="relative"
          >
            {/* Phone mockup with QR scanning */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-charcoal to-deep border-4 border-grey/20 overflow-hidden">
                {/* Screen content */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-deep overflow-hidden">
                  {/* App interface mockup */}
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 bg-charcoal/50 flex items-center justify-center">
                      <div className="w-20 h-1.5 bg-grey/30 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col items-center justify-center">
                      {/* QR Scanner visual */}
                      <motion.div
                        className="w-48 h-48 border-2 border-steel rounded-2xl relative mb-6"
                        animate={{
                          borderColor: [
                            "var(--electric-steel-blue)",
                            "var(--burnt-copper)",
                            "var(--electric-steel-blue)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {/* Corner brackets */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-l-4 border-t-4 border-steel rounded-tl" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-r-4 border-t-4 border-steel rounded-tr" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-4 border-b-4 border-steel rounded-bl" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-4 border-b-4 border-steel rounded-br" />

                        {/* Scanning line */}
                        <motion.div
                          className="absolute left-2 right-2 h-0.5 bg-steel"
                          animate={{ top: ["10%", "90%", "10%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl opacity-30">📱</span>
                        </div>
                      </motion.div>

                      <p className="text-sm text-grey/50 text-center">
                        Scan QR code on your<br />Sidekick Air table
                      </p>
                    </div>

                    {/* Bottom nav */}
                    <div className="h-16 bg-charcoal/50 flex items-center justify-around px-8">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-grey/20"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -right-8 top-1/4 px-4 py-2 rounded-lg bg-steel/20 border border-steel/30 text-sm text-arctic"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AI Insights
              </motion.div>
              <motion.div
                className="absolute -left-8 top-1/2 px-4 py-2 rounded-lg bg-copper/20 border border-copper/30 text-sm text-arctic"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                Treatment Plans
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
