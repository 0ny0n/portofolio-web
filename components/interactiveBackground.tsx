"use client"

import React, { useEffect, useRef } from "react"

type Props = {
  mode?: "stars" | "rain"
  followCursor?: boolean
  starColor?: string
  rainColor?: string
  maxStars?: number
}

export default function InteractiveBackground({
  mode = "stars",
  followCursor = true,
  starColor = "#ffffff",
  rainColor = "rgba(255,255,255,0.7)",
  maxStars = 220,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const starsRef = useRef<Star[]>([])
  const dropsRef = useRef<Drop[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (typeof window === "undefined") {
      console.warn("Window is undefined, skipping canvas setup")
      return
    }

    const canvas = canvasRef.current
    if (!canvas) {
      console.error("Canvas element is null")
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      console.error("Failed to get 2D context")
      return
    }
    const context = ctx as CanvasRenderingContext2D

    let width = 0
    let height = 0
    const DPR = Math.max(1, window.devicePixelRatio || 1)

    const stars = starsRef.current
    const drops = dropsRef.current

    function initParticles() {
      try {
        if (mode === "stars") {
          stars.length = 0
          const starCount = Math.max(30, Math.min(maxStars, Math.floor((width * height) / 9000)))
          for (let i = 0; i < starCount; i++) {
            const depth = Math.random()
            stars.push({
              baseX: Math.random() * width,
              baseY: Math.random() * height,
              x: 0,
              y: 0,
              size: (Math.random() * 1.6 + 0.5) * (1 - depth * 0.6),
              depth,
              phase: Math.random() * Math.PI * 2,
              twinkle: Math.random() * 0.05 + 0.01,
            })
          }
          stars.forEach((s) => {
            s.x = s.baseX
            s.y = s.baseY
          })
        } else if (mode === "rain") {
          drops.length = 0
          const dropCount = Math.floor((width * height) / 2000) // Increased density
          for (let i = 0; i < dropCount; i++) {
            drops.push({
              x: Math.random() * width,
              y: Math.random() * (height + 50) - 50,
              length: 10 + Math.random() * 20, // Longer, varied raindrops
              speed: 400 + Math.random() * 300, // Wider speed range
              opacity: 0.3 + Math.random() * 0.5, // Varying opacity
              sway: Math.random() * 0.02 - 0.01, // Random lateral sway
            })
          }
        }
      } catch (error) {
        console.error("Error initializing particles:", error)
      }
    }

    function resize() {
      try {
        const rect = canvas.getBoundingClientRect()
        width = rect.width || window.innerWidth
        height = rect.height || window.innerHeight
        canvas.width = Math.floor(width * DPR)
        canvas.height = Math.floor(height * DPR)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        context.setTransform(DPR, 0, 0, DPR, 0, 0)
        initParticles()
      } catch (error) {
        console.error("Error during resize:", error)
      }
    }
    resize()
    window.addEventListener("resize", resize)

    const mouse = { x: width / 2, y: height / 2 }
    const handleMove = (e: MouseEvent) => {
      try {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
      } catch (error) {
        console.error("Error handling mouse move:", error)
      }
    }
    if (followCursor) {
      window.addEventListener("mousemove", handleMove)
    }

    let last = performance.now()

    if (mode === "stars") {
      type Star = {
        baseX: number
        baseY: number
        x: number
        y: number
        size: number
        depth: number
        phase: number
        twinkle: number
      }

      function drawStars(t: number) {
        try {
          const dt = (t - last) / (1000 / 60)
          last = t
          context.clearRect(0, 0, width, height)

          const cx = width / 2
          const cy = height / 2

          for (const s of stars) {
            const px = followCursor ? (mouse.x - cx) * 0.02 * (1 - s.depth) : 0
            const py = followCursor ? (mouse.y - cy) * 0.02 * (1 - s.depth) : 0
            const tx = s.baseX + px
            const ty = s.baseY + py

            s.x += (tx - s.x) * 0.06 * dt
            s.y += (ty - s.y) * 0.06 * dt

            s.phase += s.twinkle * dt
            const alpha = 0.4 + 0.6 * Math.sin(s.phase)

            context.beginPath()
            context.fillStyle = hexToRgba(starColor, alpha)
            context.arc(s.x, s.y, s.size, 0, Math.PI * 2)
            context.fill()
          }

          rafRef.current = requestAnimationFrame(drawStars)
        } catch (error) {
          console.error("Error in drawStars:", error)
        }
      }

      rafRef.current = requestAnimationFrame(drawStars)
    } else if (mode === "rain") {
      type Drop = {
        x: number
        y: number
        length: number
        speed: number
        opacity: number
        sway: number
      }

      function drawRain(t: number) {
        try {
          const dt_sec = (t - last) / 1000
          last = t
          context.clearRect(0, 0, width, height)

          const cx = width / 2
          const angle = followCursor ? (mouse.x - cx) / (width / 2) * (Math.PI / 12) : 0
          const vaporizeRadius = 50 // Radius around cursor where drops vaporize

          for (const d of drops) {
            const vy = d.speed * dt_sec
            const vx = vy * Math.tan(angle) + d.sway * d.speed * dt_sec // Add sway

            d.x += vx
            d.y += vy

            d.x = ((d.x % width) + width) % width
            if (d.y > height + d.length) {
              d.y -= height + d.length * 2
              d.opacity = 0.3 + Math.random() * 0.5 // Reset opacity on respawn
            }

            // Calculate distance to cursor
            const dx = d.x - mouse.x
            const dy = d.y - mouse.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            let drawOpacity = d.opacity
            if (followCursor && distance < vaporizeRadius) {
              drawOpacity *= (distance / vaporizeRadius) // Fade out near cursor
              if (distance < vaporizeRadius * 0.2) {
                drawOpacity = 0 // Completely invisible very close to cursor
              }
            }

            const total_speed = Math.sqrt(vx * vx + vy * vy) / dt_sec || 1
            const ux = (vx / dt_sec) / total_speed
            const uy = (vy / dt_sec) / total_speed

            const tailX = d.x - ux * d.length
            const tailY = d.y - uy * d.length

            context.beginPath()
            context.strokeStyle = hexToRgba(rainColor, drawOpacity)
            context.lineWidth = 1.5 // Slightly thicker for realism
            context.moveTo(tailX, tailY)
            context.lineTo(d.x, d.y)
            context.stroke()
          }

          rafRef.current = requestAnimationFrame(drawRain)
        } catch (error) {
          console.error("Error in drawRain:", error)
        }
      }

      rafRef.current = requestAnimationFrame(drawRain)
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      window.removeEventListener("resize", resize)
      if (followCursor) {
        window.removeEventListener("mousemove", handleMove)
      }
    }
  }, [mode, followCursor, starColor, rainColor, maxStars])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}

function hexToRgba(hex: string, alpha = 1) {
  try {
    const hx = hex.replace("#", "")
    const r = parseInt(hx.length === 3 ? hx[0] + hx[0] : hx.substring(0, 2), 16)
    const g = parseInt(hx.length === 3 ? hx[1] + hx[1] : hx.substring(2, 4), 16)
    const b = parseInt(hx.length === 3 ? hx[2] + hx[2] : hx.substring(4, 6), 16)
    return `rgba(${r},${g},${b},${alpha})`
  } catch (error) {
    console.error("Error in hexToRgba:", error)
    return `rgba(255,255,255,${alpha})`
  }
}