"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 0.8, 0.3, 1] } }
};

const roles = [
  {
    role: "Machine Learning Engineer",
    org: "BaseMotion AI, Berlin",
    dates: "Nov 2025 – Apr 2026",
    body: "Applied mechanistic circuit analysis (activation patching, ablation) to GPT-2 Small, scoring explanations against ERASER sufficiency/comprehensiveness metrics. Built the pipeline in PyTorch and TransformerLens with an automated test suite and CI for reproducible runs. Result: r = 0.009 between model confidence and explanation faithfulness: confidence carries no signal. Separately measured that fluent LLM-written explanations score 99% on perceived quality (ERASER), up from 60%, with no corresponding gain in mechanistic faithfulness."
  },
  {
    role: "Independent Researcher, Project Thesis & AI Safety",
    org: "Hochschule Trier",
    dates: "Apr 2024 – Sep 2025",
    body: "Synthesized 25+ papers across AI alignment, scalable oversight, and interpretability into structured technical reports, benchmarking robustness methodologies and cataloguing frontier LLM failure modes to establish baseline quantitative metrics for the field."
  },
  {
    role: "AI Engineer",
    org: "ICEICO Technologies, Nagpur",
    dates: "Feb 2021 – Mar 2023",
    body: "Built PyTorch training pipelines and tuned hyperparameters for internal prediction models, establishing reproducible baselines for testing. Shipped a Retrieval-Augmented Generation pipeline with LangChain to automate knowledge retrieval across production datasets."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto max-w-page px-6 sm:px-10"
      >
        <motion.span variants={item} className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">
          Experience
        </motion.span>

        <div className="mt-10 flex flex-col">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              variants={item}
              className={`grid gap-x-8 gap-y-2 border-line py-8 sm:grid-cols-[1fr_2fr] ${i !== 0 ? "border-t" : ""}`}
            >
              <div>
                <h3 className="font-serif text-[20px] text-ink">{r.role}</h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-faint">{r.org}</p>
                <p className="mt-1 font-mono text-[12px] text-faint">{r.dates}</p>
              </div>
              <p className="text-[16px] leading-relaxed text-muted">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
