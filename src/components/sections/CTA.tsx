"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Container, Button, AnimatedText, AirflowLines } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 section-deep overflow-hidden"
    >
      {/* Background elements */}
      <AirflowLines count={15} />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, var(--electric-steel-blue) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, var(--burnt-copper) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportSettings}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-copper border border-copper/30 rounded-full bg-copper/5 mb-8">
              Join the Movement
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp} className="mb-6">
            <AnimatedText
              text="Be Part of the Future"
              className="display-lg text-arctic"
              variant="word"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-grey/70 mb-12 max-w-xl mx-auto"
          >
            Join thousands of forward-thinking therapists who are ready to
            redefine how care is delivered.
          </motion.p>

          {/* Email signup form */}
          <motion.div variants={fadeInUp}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-full bg-charcoal border border-grey/20 text-arctic placeholder:text-grey/50 focus:outline-none focus:border-steel transition-colors"
                  />
                  <Button type="submit" size="lg" variant="primary">
                    Get Early Access
                  </Button>
                </div>
                <p className="mt-4 text-sm text-grey/50">
                  Be the first to know when Sidekick Air launches. No spam, ever.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-steel/10 border border-steel/30"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-arctic mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-grey/70">
                  We&apos;ll be in touch soon with exclusive updates and early access.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-16 border-t border-grey/10"
          >
            <p className="text-sm text-grey/50 mb-6">
              Trusted by professionals in
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-grey/30">
              <span className="text-lg font-semibold">Massage Therapy</span>
              <span className="text-grey/20">•</span>
              <span className="text-lg font-semibold">Sports Medicine</span>
              <span className="text-grey/20">•</span>
              <span className="text-lg font-semibold">Physical Rehabilitation</span>
              <span className="text-grey/20">•</span>
              <span className="text-lg font-semibold">Athletic Training</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Footer */}
      <motion.footer
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={viewportSettings}
        className="relative z-10 mt-24 pt-8 border-t border-grey/10"
      >
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-grey/50">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛏️</span>
              <span className="font-semibold text-arctic">Sidekick Air</span>
            </div>
            <p>© {new Date().getFullYear()} Sidekick Air. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-arctic transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-arctic transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-arctic transition-colors">
                Contact
              </a>
            </div>
          </div>
        </Container>
      </motion.footer>
    </section>
  );
}
