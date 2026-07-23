"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; hub: boolean };

export default function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    function seed() {
      const area = width * height;
      const count = Math.min(70, Math.max(24, Math.round(area / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hub: Math.random() < 0.15
      }));
    }

    function resize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const widthChanged = Math.abs(newWidth - width) > 2;
      width = newWidth;
      height = newHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Mobile browser chrome hides/shows on scroll and fires resize with the
      // same width — only reseed on an actual width change, not that jitter.
      if (widthChanged || particles.length === 0) seed();
    }
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };
    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    }
    function onTouchEnd() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    const linkDist = 130;
    const repelRadius = 150;
    let raf = 0;

    function step() {
      ctx!.clearRect(0, 0, width, height);
      const dotColor = getComputedStyle(canvas!).getPropertyValue("--network-rgb").trim() || "120,120,110";

      if (!reduceMotion) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repelRadius) {
            const force = (1 - dist / repelRadius) * 3.2;
            p.x += (dx / (dist || 1)) * force;
            p.y += (dy / (dist || 1)) * force;
          }

          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        });
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const linkAlpha = (particles[i].hub || particles[j].hub ? 0.5 : 0.35) * (1 - dist / linkDist);
            ctx!.strokeStyle = `rgba(${dotColor}, ${linkAlpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      particles.forEach((p) => {
        const radius = p.hub ? 2.6 : 1.6;
        if (p.hub) {
          const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
          glow.addColorStop(0, `rgba(${dotColor}, 0.35)`);
          glow.addColorStop(1, `rgba(${dotColor}, 0)`);
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = `rgba(${dotColor}, ${p.hub ? 0.9 : 0.75})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      });

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    step();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}
