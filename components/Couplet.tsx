"use client";

import { motion } from "framer-motion";

export default function Couplet() {
  return (
    <section className="flex flex-col items-center gap-10 px-6 py-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 0.8, 0.3, 1] }}
        className="font-serif text-[clamp(20px,3vw,28px)] leading-relaxed text-ink"
      >
        Find the causal circuit <em className="italic">once</em>;
        <br />
        ship EU AI Act documentation with every audit.
      </motion.p>
    </section>
  );
}
