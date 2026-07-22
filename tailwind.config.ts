import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-dark": "var(--accent-dark)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: { page: "1200px", prose: "640px" },
      boxShadow: {
        card: "0 1px 2px rgba(11,14,20,0.04), 0 12px 32px -16px rgba(11,95,255,0.18)",
        glow: "0 20px 60px -20px rgba(11,95,255,0.35)"
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(.16,.8,.3,1)"
      }
    }
  },
  plugins: []
};

export default config;
