"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center"
      >
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">About</span>
        <h2 className="font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.15] text-ink">
          A model&rsquo;s explanation for its own output is often made up after the fact.
        </h2>
        <p className="max-w-[52ch] text-[17px] leading-relaxed text-muted sm:text-[19px]">
          I reverse-engineer transformers with causal circuit analysis (activation patching, ablation,
          sufficiency and comprehensiveness scoring against ERASER metrics) to test whether a stated
          explanation is causally load-bearing, not just fluent.
        </p>
      </motion.div>
    </section>
  );
}
