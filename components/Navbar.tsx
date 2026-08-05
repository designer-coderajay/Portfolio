"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/designer-coderajay",
    icon: (
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.14-.02-2.06-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-mh",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    )
  },
  {
    label: "X",
    href: "https://x.com/AjayPMahale",
    icon: (
      <path d="M18.9 2H22l-7.5 8.57L23.3 22h-6.86l-5.37-6.6L4.9 22H1.78l8.02-9.17L1 2h7.03l4.86 6.03L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.36L17.7 20Z" />
    )
  },
  {
    label: "Email",
    href: "mailto:mahale.ajay01@gmail.com",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  },
  {
    label: "arXiv",
    href: "https://arxiv.org/abs/2603.09988",
    icon: (
      <path d="M12 2 2 22h4.2l2.4-5h6.8l2.4 5H22L12 2Zm0 5.3 2.7 6.2H9.3L12 7.3Z" />
    )
  }
];

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
        <a
          href="#top"
          aria-label="Ajay Mahale, home"
          className="inline-flex items-center text-ink transition-opacity hover:opacity-70"
        >
          <svg width="34" height="17" viewBox="0 0 50 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2 2 22h4.2l2.4-5h6.8l2.4 5H22L12 2Zm0 5.3 2.7 6.2H9.3L12 7.3Z" />
            <path d="M27 20 32 3l5 11 5-11 5 17H27Z" />
          </svg>
        </a>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {socials.map((s) =>
            s.href ? (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-bg-subtle"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
              </a>
            ) : null
          )}

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
      </div>
    </motion.nav>
  );
}
