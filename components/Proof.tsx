"use client";

import { motion } from "framer-motion";

const links = [
  { href: "https://arxiv.org/abs/2603.09988", label: "arXiv:2603.09988" },
  { href: "https://pypi.org/project/glassbox-mech-interp/", label: "PyPI" },
  { href: "https://github.com/designer-coderajay/glassbox-mech", label: "GitHub" },
  {
    href: "https://huggingface.co/spaces/designer-coderajay/Glassbox-AI-2.0-Mechanistic-Interpretability-tool",
    label: "Live demo"
  }
];

export default function Proof() {
  return (
    <section id="proof" className="relative overflow-hidden py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center"
      >
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Proof</span>

        <p className="max-w-[56ch] font-serif text-[clamp(22px,3.4vw,32px)] leading-relaxed text-ink">
          Glassbox AI ships with <em className="italic">932 tests</em> passing across 9 architecture families and
          1,000 PyPI downloads a month. Every number here is checked against the repo, not rounded up.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line px-4 py-2 font-mono text-[12.5px] font-bold uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
