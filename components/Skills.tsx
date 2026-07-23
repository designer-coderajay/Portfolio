"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.8, 0.3, 1] } }
};

const groups = [
  {
    label: "Programming",
    tags: ["Python", "SQL"]
  },
  {
    label: "Tools & Frameworks",
    tags: ["PyTorch", "TransformerLens", "Hugging Face", "scikit-learn", "LangGraph", "MCP", "Qdrant", "LlamaIndex"]
  },
  {
    label: "Expertise",
    tags: [
      "Mechanistic Interpretability",
      "Foundational Models",
      "Multi-Agent Systems",
      "Reproducible ML Pipelines",
      "Quantitative Research"
    ]
  },
  {
    label: "Languages",
    tags: ["English (C1)", "German (B1)", "Hindi (native)", "French (beginner)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="mx-auto max-w-page px-6 sm:px-10"
      >
        <motion.span variants={item} className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">
          Skills
        </motion.span>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {groups.map((g) => (
            <motion.div key={g.label} variants={item}>
              <h3 className="font-serif text-[19px] text-ink">{g.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[12.5px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
