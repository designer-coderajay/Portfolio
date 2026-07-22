"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlowFieldCanvas from "./FlowFieldCanvas";

const REVEAL_THRESHOLD = 60;

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setRevealed(window.scrollY > REVEAL_THRESHOLD);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="top" className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-[8%] mx-auto h-[45%] max-w-4xl text-faint">
        <FlowFieldCanvas className="h-full w-full" fading={revealed} />
      </div>

      <motion.div
        animate={{ opacity: revealed ? 0.14 : 1 }}
        transition={{ duration: 0.9, ease: [0.16, 0.8, 0.3, 1] }}
        className="relative flex flex-col items-center gap-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 0.8, 0.3, 1] }}
          className="max-w-2xl font-serif text-[clamp(24px,4vw,38px)] leading-[1.3] text-ink"
        >
          AI researcher and engineer. I measure whether a model&rsquo;s explanation is actually true.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 0.8, 0.3, 1] }}
          className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-faint"
        >
          <span>Founder of</span>
          <span className="rounded-full border border-line px-3 py-1 font-bold text-ink">Glassbox AI</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ opacity: revealed ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-10 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
      >
        Scroll
      </motion.div>
    </div>
  );
}
