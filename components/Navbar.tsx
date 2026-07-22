"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 0.8, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" aria-label="Ajay Mahale, home" className="inline-flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true" className="text-ink">
            <circle cx="4.5" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="13.5" cy="9" r="3" fill="currentColor" />
            <line x1="7.5" y1="9" x2="10.5" y2="9" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-ink">
            Ajay Mahale
          </span>
        </a>

        <button
          type="button"
          onClick={toggle}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-bg-subtle"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path
                strokeLinecap="round"
                d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.4 5.6l-1.4 1.4M7 17l-1.4 1.4M18.4 18.4L17 17M7 7 5.6 5.6"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5a8.5 8.5 0 1 0 11.2 11.2z" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
