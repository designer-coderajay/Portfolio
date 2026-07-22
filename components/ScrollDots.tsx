"use client";

import { useEffect, useState } from "react";

const sections = [
  "top",
  "about",
  "experience",
  "projects",
  "finding",
  "approach",
  "skills",
  "proof",
  "contact"
];

export default function ScrollDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let ticking = false;

    function updateActive() {
      ticking = false;
      const line = window.scrollY + window.innerHeight / 2;
      let current = 0;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = i;
      });
      setActive(current);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 sm:flex"
    >
      {sections.map((id, i) => (
        <button
          key={id}
          type="button"
          aria-label={`Go to ${id} section`}
          aria-current={active === i}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          className="group flex items-center justify-end py-1"
        >
          <span
            className="h-px bg-faint transition-all duration-300 group-hover:bg-ink"
            style={{
              width: active === i ? 22 : 10,
              backgroundColor: active === i ? "var(--ink)" : "var(--faint)"
            }}
          />
        </button>
      ))}
    </nav>
  );
}
