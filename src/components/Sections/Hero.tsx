"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, TrendingUp } from "lucide-react"
import "./Hero.css"

const Hero = () => {
  const skills = [
    { icon: Code, label: "Clean Code", delay: 0.2 },
    { icon: Database, label: "Databases", delay: 0.4 },
    { icon: Server, label: "APIs", delay: 0.6 },
    { icon: TrendingUp, label: "Economics", delay: 0.8 },
  ]

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="title-main">Backend Developer</span>
            <span className="title-sub">Arquitecto de Sistemas Digitales</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construyendo sistemas robustos y escalables que impulsan el futuro digital. Combinando la precisión técnica
            con la elegancia del diseño minimalista y la lógica de los mercados económicos.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos Completados</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Líneas de Código</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-skills"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {skills.map(({ icon: Icon, label, delay }, index) => (
            <motion.div
              key={label}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-icon">
                <Icon size={24} />
              </div>
              <span className="skill-label">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-decorations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="decoration constellation">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="2" fill="#8b5cf6" opacity="0.8" />
            <circle cx="45" cy="15" r="1.5" fill="#06b6d4" opacity="0.6" />
            <circle cx="70" cy="25" r="2.5" fill="#8b5cf6" opacity="0.9" />
            <circle cx="90" cy="35" r="1" fill="#06b6d4" opacity="0.5" />
            <circle cx="30" cy="50" r="1.8" fill="#8b5cf6" opacity="0.7" />
            <circle cx="60" cy="60" r="2" fill="#06b6d4" opacity="0.8" />
            <circle cx="100" cy="65" r="1.5" fill="#8b5cf6" opacity="0.6" />
            <path
              d="M20 20 L45 15 L70 25 M70 25 L90 35 M30 50 L60 60 L100 65"
              stroke="url(#constellationGradient)"
              strokeWidth="1"
              opacity="0.4"
              fill="none"
            />
            <defs>
              <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="decoration zen-circle">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 50 Q30 20, 50 25 Q70 30, 80 50 Q75 70, 50 75 Q30 80, 25 60"
              stroke="url(#zenGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              strokeLinecap="round"
            />
            <circle cx="85" cy="45" r="1" fill="#8b5cf6" opacity="0.5" />
            <circle cx="15" cy="55" r="1.5" fill="#06b6d4" opacity="0.6" />
            <defs>
              <linearGradient id="zenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: "#06b6d4", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
