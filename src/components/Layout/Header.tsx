"use client"

import { motion } from "framer-motion"
import "./Header.css"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: "inicio", label: "始" },
    { id: "experiencia", label: "経験" },
    { id: "proyectos", label: "項目" },
    { id: "formacion", label: "学習" },
    { id: "habilidades", label: "技能" },
    { id: "contacto", label: "連絡" },
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
          <span className="logo-symbol">宇</span>
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
              <span className="nav-kanji">{item.label}</span>
              <span className="nav-text">{item.id}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
