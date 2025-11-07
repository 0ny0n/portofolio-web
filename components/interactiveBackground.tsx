// components/InteractiveBackground.tsx
"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  mode?: "stars" | "rain";
  followCursor?: boolean;
  rainColor?: string;
  style?: React.CSSProperties;
};

type Drop = {
  x: number;
  y: number;
  length: number;
  speed: number;
};

export default function InteractiveBackground({
  mode = "stars",
  followCursor = true,
  rainColor = "rgba(255,255,255,0.7)",
  style,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const dropsRef = useRef<Drop[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      console.warn("Window is undefined, skipping canvas setup");
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element is null");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }
    const context = ctx as CanvasRenderingContext2D;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const DPR = Math.max(1, window.devicePixelRatio ?? 1); // DPR😭😭😭??? OH DEVICE PIXEL RATIO?

    const drops = dropsRef.current;

    // initparticle
    (() => {
      if (!canvas || !context) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      context.setTransform(DPR, 0, 0, DPR, 0, 0);
      try {
        drops.length = 0;
        const dropCount = Math.floor((width * height) / 4000);
        for (let i = 0; i < dropCount; i++) {
          drops.push({
            x: Math.random() * width,
            y: Math.random() * (height + 50) - 50,
            length: 5 + Math.random() * 15,
            speed: 300 + Math.random() * 200,
          });
        }
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    })();

    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      try {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } catch (error) {
        console.error("Error handling mouse move:", error);
      }
    };
    if (followCursor) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let last = performance.now();

    function drawRain(t: number) {
      try {
        const dt_sec = (t - last) / 1000;
        last = t;
        context.clearRect(0, 0, width, height);

        const cx = width / 2;
        const angle = followCursor
          ? ((mouse.x - cx) / (width / 2)) * (Math.PI / 12)
          : 0;

        for (const d of drops) {
          const vy = d.speed * dt_sec;
          const vx = vy * Math.tan(angle);

          d.x += vx;
          d.y += vy;

          d.x = ((d.x % width) + width) % width;
          if (d.y > height + d.length) {
            d.y -= height + d.length * 2;
          }

          const total_speed = Math.sqrt(vx * vx + vy * vy) / dt_sec;
          const ux = total_speed ? vx / dt_sec / total_speed : 0;
          const uy = total_speed ? vy / dt_sec / total_speed : 1;

          const tailX = d.x - ux * d.length;
          const tailY = d.y - uy * d.length;

          context.beginPath();
          context.strokeStyle = rainColor;
          context.lineWidth = 1;
          context.moveTo(tailX, tailY);
          context.lineTo(d.x, d.y);
          context.stroke();
        }

        rafRef.current = requestAnimationFrame(drawRain);
      } catch (error) {
        console.error("Error in drawRain:", error);
      }
    }
    rafRef.current = requestAnimationFrame(drawRain);

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (followCursor) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [mode, followCursor, rainColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "transparent",
        height: "100vh",
        width: "100vw",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
