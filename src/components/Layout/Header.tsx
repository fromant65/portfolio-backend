"use client"

import { motion } from "framer-motion"
import "./Header.css"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "formacion", label: "Formación" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.div className="logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div className="logo-symbol">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 10 L15 50 M15 10 L35 10 M15 28 L30 28"
                stroke="url(#gradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 15 L45 15 M35 15 L35 45"
                stroke="url(#gradient2)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="45" cy="25" r="2" fill="url(#gradient1)" opacity="0.7" />
              <circle cx="20" cy="35" r="1.5" fill="url(#gradient2)" opacity="0.5" />
              <path
                d="M10 45 L12 47 L10 49"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Backend Dev</span>
        </motion.div>

        <nav className="navigation">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="nav-text">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
