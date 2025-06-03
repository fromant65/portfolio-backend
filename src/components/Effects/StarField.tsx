"use client"

import { useEffect, useRef } from "react"
import "./StarField.css"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  twinkle: number
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 8000)

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
        })
      }

      starsRef.current = stars
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star, index) => {
        // Update star position
        star.y += star.speed
        star.twinkle += 0.02

        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = -10
          star.x = Math.random() * canvas.width
        }

        // Calculate twinkling effect
        const twinkleOpacity = star.opacity + Math.sin(star.twinkle) * 0.3

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${Math.max(0, twinkleOpacity)})`
        ctx.fill()

        // Add some cyan stars for variety
        if (index % 7 === 0) {
          ctx.fillStyle = `rgba(6, 182, 212, ${Math.max(0, twinkleOpacity * 0.7)})`
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="star-field" />
}

export default StarField
