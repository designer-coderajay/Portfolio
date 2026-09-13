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
    title: "Explanation Multiplicity: Circuit-Level Interpretability Evidence Does Not Survive Defensible Analytic Variation",
    tag: "arXiv:2608.13754 · 2026",
    links: [
      { href: "https://arxiv.org/abs/2608.13754", label: "arXiv" },
      { href: "https://www.semanticscholar.org/paper/887c711301bfbc8c0781bfbf2d130abb2d22dafb", label: "Semantic Scholar" },
      { href: "https://pith.science/paper/2608.13754", label: "Pith review" },
      {
        href: "https://github.com/designer-coderajay/Circuit-level-interpretability-evidence-does-not-survive-defensible-analytic-variation",
        label: "Code"
      }
    ],
    body: "Circuits recovered by mechanistic interpretability tools are not unique: the same model, task, and method can return different circuits depending on ablation operator, corruption distribution, and metric choice. This measures how far an EU AI Act Annex IV conformity claim built from a discovered circuit moves across the space of defensible analytic specifications, and tests whether that movement is distinguishable from a size-matched random circuit baseline."
  },
  {
    title: "Causal Attribution for Agentic Decisions: Estimators, Coupling, and a Traceability Specification",
    tag: "arXiv:2609.06445 · 2026",
    links: [
      { href: "https://arxiv.org/abs/2609.06445", label: "arXiv" },
      { href: "https://www.semanticscholar.org/paper/547cc9e4b2607b4467d5d2f7502627306c7a43ff", label: "Semantic Scholar" },
      { href: "https://github.com/designer-coderajay/Causal-Attribution-for-Agentic-Decisions", label: "Code" }
    ],
    body: "Multi-agent systems produce decisions that no single deployer can fully attribute. This shows the standard marginal-effect estimator can return the same value for a causally inert step and a decisive one — under common random numbers, it returns an exact zero for a decisive step on roughly one run in ten, so a zero does not certify that a step did nothing. Derives a coupling that preserves estimability and a traceability specification bridging the gap between the EU AI Act's Article 86 explanation rights (Aug 2026) and its deferred documentation requirements (Dec 2027)."
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
        <motion.p variants={item} className="mt-3 text-[14px] text-faint">
          Two papers live on arXiv. Rest unpublished — links go live on release.
        </motion.p>

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
                {p.links ? (
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="font-mono text-[12px] font-bold uppercase tracking-wide text-accent underline underline-offset-4"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wide text-accent">
                    In progress
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
