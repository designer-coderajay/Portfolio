"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } }
};

const papers = [
  {
    title: "Explanation Multiplicity and the Instability of Conformity Claims",
    tag: "Target arXiv · Sep 2026",
    body: "Circuits recovered by mechanistic interpretability tools are not unique: the same model, task, and method can return different circuits depending on ablation operator, corruption distribution, and metric choice. This measures how far an EU AI Act Annex IV conformity claim built from a discovered circuit moves across the space of defensible analytic specifications, and tests whether that movement is distinguishable from a size-matched random circuit baseline."
  },
  {
    title: "Causal Attribution for Agentic Decisions",
    tag: "Target arXiv · Dec 2026",
    body: "Multi-agent systems produce decisions that no single deployer can fully attribute: observability tooling logs what happened but not what caused it. This tests whether observability-derived attribution actually tracks causally-measured attribution across real multi-agent traces, and whether it's systematically biased toward recency and verbosity."
  },
  {
    title: "What Monitorability Metrics Miss",
    tag: "Target ICLR 2027 · Sep 2026",
    body: "The published chain-of-thought monitorability autorater was validated against synthetic degradations, a broken reasoning trace. That checks whether the metric notices a chain of thought falling apart, not whether it notices a well-formed one that conceals its true cause, which is the actual safety concern. This runs the validation the metric's own authors flagged as outstanding."
  }
];

export default function CurrentWork() {
  return (
    <section id="current-work" className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="mx-auto max-w-page px-6 sm:px-10"
      >
        <motion.span variants={item} className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">
          Current Work
        </motion.span>

        <div className="mt-10 flex flex-col">
          {papers.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group -mx-6 grid gap-x-8 gap-y-3 px-6 py-10 transition-colors hover:bg-bg-subtle sm:-mx-10 sm:grid-cols-[1fr_2fr] sm:px-10"
            >
              <div>
                <h3 className="font-serif text-[20px] leading-snug text-ink">{p.title}</h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-faint">{p.tag}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[16px] leading-relaxed text-muted">{p.body}</p>
                <span className="font-mono text-[12px] font-bold uppercase tracking-wide text-accent">
                  In progress
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
