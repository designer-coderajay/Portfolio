"use client";

import { motion } from "framer-motion";

export default function TeamJoin() {
  return (
    <section id="contact" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        className="mx-auto grid max-w-page gap-16 px-6 sm:grid-cols-2 sm:px-10"
      >
        <div>
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">About</span>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            M.Sc. in Interdisciplinary Engineering (Hochschule Trier), researching mechanistic
            interpretability and LLM faithfulness evaluation. I build evaluation tooling that turns
            interpretability findings into audit-ready evidence, not slide-deck claims.
          </p>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Trier, Germany. Available full-time now. German residence permit, no sponsorship required &mdash; open
            to relocation within Germany and the DACH region. Open to full-time ML engineer, AI safety and
            governance, and PhD positions.
          </p>

          <div className="mt-10 border-t border-line pt-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Education</span>
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <p className="text-[15px] font-semibold text-ink">M.Sc. Interdisciplinary Engineering</p>
                <p className="text-[13.5px] text-faint">Hochschule Trier · 2023&ndash;2026 · Grade 1.8, Thesis 1.0, Top 2%</p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-ink">B.E., Automotive Engineering</p>
                <p className="text-[13.5px] text-faint">Government College of Engineering and Research · 2018&ndash;2021 · Grade 7.95/10, Top 3%</p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-ink">Diploma, Mechanical Engineering</p>
                <p className="text-[13.5px] text-faint">Sandip Polytechnic, Nashik · 2015&ndash;2018 · Grade 87.65/100, Top 1%</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Certifications</span>
            <ul className="mt-4 flex flex-col gap-2 text-[14.5px] text-muted">
              <li>Microsoft Certified: Azure AI Engineer Associate (AI-102), Azure AI Fundamentals (AI-900)</li>
              <li>Anthropic, Claude Code in Action</li>
              <li>BlueDot Impact, Technical AI Safety (30-hour cohort)</li>
              <li>Google, AI Essentials</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,48px)] font-normal text-ink">Let&rsquo;s talk.</h2>

          <div className="mt-10">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">Availability</span>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              If you&rsquo;re hiring for interpretability, AI safety, or eval work, let&rsquo;s talk.
            </p>
            <a
              href="/Ajay-Mahale-Resume.pdf"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 border border-line px-5 py-2.5 font-mono text-[13px] font-bold text-ink transition-colors hover:border-ink"
            >
              Resume &rarr;
            </a>
          </div>

          <div className="mt-10">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-faint">General inquiries</span>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">Press, collaboration, or curiosity. All welcome.</p>
            <a
              href="mailto:mahale.ajay01@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 border border-line px-5 py-2.5 font-mono text-[13px] font-bold text-ink transition-colors hover:border-ink"
            >
              Say hello &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
