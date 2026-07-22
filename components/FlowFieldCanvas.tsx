"use client";

import { useEffect, useRef } from "react";

type Line = {
  points: { x: number; y: number }[];
  seed: number;
  baseY: number;
};

export default function FlowFieldCanvas({
  className,
  fading
}: {
  className?: string;
  fading: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fadingRef = useRef(fading);
  fadingRef.current = fading;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : 500;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const lineCount = 16;
    const lines: Line[] = Array.from({ length: lineCount }, (_, i) => ({
      points: [],
      seed: i * 0.7 + 1,
      baseY: (i + 0.5) * (1 / lineCount)
    }));

    const mouse = { x: -9999, y: -9999, active: false };
    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
    }
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let t = 0;
    let opacity = 1;

    function draw() {
      t += reduceMotion ? 0 : 0.0035;

      const targetOpacity = fadingRef.current ? 0 : 1;
      opacity += (targetOpacity - opacity) * 0.06;

      ctx!.clearRect(0, 0, width, height);
      if (opacity > 0.01) {
        ctx!.strokeStyle = getComputedStyle(canvas!).color;
        ctx!.lineWidth = 1;

        lines.forEach((line) => {
          const pts: { x: number; y: number }[] = [];
          const steps = 44;
          for (let i = 0; i <= steps; i++) {
            const fx = i / steps;
            const x = fx * width;
            let y =
              line.baseY * height +
              Math.sin(fx * 3.2 + t * 1.2 + line.seed) * height * 0.055 +
              Math.sin(fx * 7 + t * 2 + line.seed * 1.6) * height * 0.018;

            if (mouse.active) {
              const dx = x - mouse.x;
              const dy = y - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy) + 1;
              const radius = 260;
              const pull = Math.max(0, 1 - dist / radius) ** 2 * 90;
              const angle = Math.atan2(mouse.y - y, mouse.x - x);
              y += Math.sin(angle) * pull;
            }

            pts.push({ x, y });
          }

          ctx!.globalAlpha = opacity * 0.55;
          ctx!.beginPath();
          pts.forEach((p, i) => (i === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y)));
          ctx!.stroke();
        });
      }

      raf = requestAnimationFrame(draw);
    }

    if (reduceMotion) {
      opacity = fadingRef.current ? 0 : 1;
      draw();
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
