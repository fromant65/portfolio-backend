"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";
import { Logo } from "./logo";

interface HeaderProps {
  activeSection: string;
  //-  setActiveSection: (section: string) => void;
  changeSection: (section: string) => void;
}

const Header = ({ activeSection, changeSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio", jp: "最初" },
    { id: "experiencia", label: "Experiencia", jp: "経験" },
    { id: "proyectos", label: "Proyectos", jp: "企画" },
    { id: "formacion", label: "Formación", jp: "教育" },
    { id: "habilidades", label: "Habilidades", jp: "能力" },
    { id: "contacto", label: "Contacto", jp: "連絡" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickItem = (id: string) => {
    changeSection(id);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo />
          <span className="logo-text">Backend Dev</span>
        </motion.div>
        <button className="hamburger-button" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="navigation">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""
                }`}
              onClick={() => handleClickItem(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="nav-labels">
                <span className="nav-text">{item.label}</span>
                <span className="nav-jp">{item.jp}</span>
              </div>
            </motion.button>
          ))}
        </nav>

      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    className={`mobile-nav-button ${activeSection === item.id ? "active" : ""
                      }`}
                    onClick={() => handleClickItem(item.id)}
                  >
                    <span className="mobile-nav-label">{item.label}</span>
                    <span className="mobile-nav-jp">{item.jp}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Fondo semitransparente detrás del menú (solo en móvil y cuando esté abierto) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
