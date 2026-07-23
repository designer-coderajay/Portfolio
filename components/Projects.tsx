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

const projects = [
  {
    title: "Causally-Grounded Mechanistic Interpretability",
    tag: "M.Sc. Thesis · Dec 2025 – May 2026",
    body: "Evaluates a model circuit the same way you'd evaluate an explanation: does removing it break the output (sufficiency), and does keeping everything else still break it (comprehensiveness)? On GPT-2's IOI task the discovered circuit beat an attention-only baseline on 75% of prompts, scored 100% sufficiency, but only 22% comprehensiveness. Sufficiency alone oversells how reliable an explanation is.",
    href: "https://github.com/designer-coderajay/Causally-Grounded-Mechanistic-Interpretability"
  },
  {
    title: "Glassbox AI",
    tag: "Feb 2026 – Mar 2026",
    body: "An open-source mechanistic interpretability toolkit that finds the causal circuit behind a transformer prediction and turns it into EU AI Act Annex IV documentation automatically. 1,000+ PyPI downloads a month, live HuggingFace demo, CI passing on 9 architecture families.",
    href: "https://github.com/designer-coderajay/glassbox-mech"
  },
  {
    title: "Enterprise Agentic AI Platform",
    tag: "May 2025 – Jun 2025",
    body: "A multi-agent system on LangGraph coordinating three MCP servers (Postgres, documents, notifications) with hybrid RAG, built to take a rough MVP into something enterprise-shaped. FastAPI streamed data over WebSockets to a Next.js frontend, Celery handled async work, Langfuse and Prometheus/Grafana gave it real observability, all containerized with Docker Compose.",
    href: "https://github.com/designer-coderajay/enterprise-agentic-ai-platform"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="mx-auto max-w-page px-6 sm:px-10"
      >
        <motion.span variants={item} className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">
          Projects
        </motion.span>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener"
              variants={item}
              className="flex flex-col gap-3 border border-line p-6 transition-colors hover:border-ink"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-faint">{p.tag}</span>
              <h3 className="font-serif text-[20px] leading-snug text-ink">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">{p.body}</p>
              <span className="mt-auto pt-2 font-mono text-[12px] font-bold uppercase tracking-wide text-accent">
                View on GitHub &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
