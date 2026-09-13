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
    label: "ML & Research",
    tags: ["PyTorch", "TransformerLens", "Hugging Face", "scikit-learn", "NumPy", "Pandas", "XGBoost", "LightGBM", "SHAP"]
  },
  {
    label: "LLM & Agents",
    tags: [
      "LLM Evaluation",
      "RAG (vector + BM25 hybrid)",
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Qdrant",
      "LlamaIndex",
      "Prompt Engineering"
    ]
  },
  {
    label: "Cloud & MLOps",
    tags: [
      "Azure ML (SDK v2)",
      "Azure OpenAI",
      "Azure AI Search",
      "MLflow",
      "FastAPI",
      "REST APIs",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Streamlit"
    ]
  },
  {
    label: "Focus",
    tags: [
      "Mechanistic Interpretability",
      "Causal Circuit Analysis",
      "Model Evaluation & Observability",
      "Reproducible ML Pipelines",
      "EU AI Act Annex IV Documentation",
      "Python Packaging (PyPI)"
    ]
  },
  {
    label: "Languages",
    tags: ["English (C1)", "German (B1)", "Marathi (Native)"]
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

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
