"use client";

import { motion } from "framer-motion";

export default function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center"
      >
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Tool</span>
        <h2 className="font-serif text-[clamp(30px,5vw,52px)] font-normal leading-[1.15] text-ink">
          Glassbox AI: audits that write their own paperwork.
        </h2>
        <p className="max-w-[56ch] text-[17px] leading-relaxed text-muted sm:text-[19px]">
          Glassbox AI finds the causal circuit behind a transformer prediction with activation patching, scores
          it for sufficiency and comprehensiveness, and writes EU AI Act Annex IV documentation as structured,
          content-hashed JSON, about 1.8s per analysis on GPT-2 Small (Apple M2 Pro), 15&ndash;37&times; faster
          than ACDC depending on circuit size. 932 tests passing in CI across 9 architecture families, GPT-2
          through Llama-3.
        </p>
      </motion.div>
    </section>
  );
}
