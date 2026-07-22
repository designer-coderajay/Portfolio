"use client";

import { motion } from "framer-motion";

export default function Finding() {
  return (
    <section id="finding" className="relative overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center"
      >
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Finding</span>
        <h2 className="font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.15] text-ink">
          Confidence doesn&rsquo;t predict <em className="italic">faithfulness</em>.
        </h2>
        <p className="max-w-[56ch] text-[17px] leading-relaxed text-muted sm:text-[19px]">
          Model confidence predicts explanation faithfulness almost not at all: r = 0.009, measured with causal
          circuit analysis on GPT-2 Small (Indirect Object Identification task). The 6-head IOI circuit explains
          61.4% of the logit difference and is <em className="italic">sufficient</em> on its own, but removing it
          still leaves 78% of the signal intact through backup heads — it isn&rsquo;t <em className="italic">necessary</em>.
        </p>
      </motion.div>
    </section>
  );
}
