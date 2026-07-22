---
noteId: "feb541d0860b11f1b0746d1eab0774f0"
tags: []

---

# Ajay Mahale — Portfolio

Source for [ajay-mahale's portfolio](https://designer-coderajay.github.io) — AI researcher/engineer, founder of Glassbox AI. Mechanistic interpretability, LLM faithfulness evaluation, and EU AI Act-ready explainability tooling.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Generative-art backgrounds (`FlowFieldCanvas`, `NeuralField`) run on plain Canvas 2D, no external libraries.

## Structure

- `app/` — root layout, global styles, single page (`page.tsx`)
- `components/` — one component per section: `Hero`, `About`, `Experience`, `Projects`, `Finding`, `Approach`, `Couplet`, `Skills`, `Proof`, `TeamJoin`, plus `Navbar`, `Footer`, `ScrollDots`, and the two canvas backgrounds
- `public/` — resume PDF, OG image

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```
