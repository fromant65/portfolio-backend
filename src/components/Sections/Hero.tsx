"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, TrendingUp } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const skills = [
    { icon: Code, label: "Clean Code", delay: 0.2 },
    { icon: Database, label: "Databases", delay: 0.4 },
    { icon: Server, label: "APIs", delay: 0.6 },
    { icon: TrendingUp, label: "Economics", delay: 0.8 },
  ];

  return (
    <section className="hero">
      {/* ---------------------------------- */}
      {/* 1) Contenido principal (texto + stats + skills) */}
      {/* ---------------------------------- */}
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
            <span className="title-main">Fulvio Todone</span>
            <span className="title-sub">Backend Developer - Arquitecto de Sistemas Digitales</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construyendo sistemas robustos y escalables que impulsan el futuro digital. Combinando la precisión
            técnica con la elegancia del diseño minimalista y la lógica de los mercados económicos.
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
              <span className="stat-number">20+</span>
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
          {skills.map(({ icon: Icon, label, delay }) => (
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
    </section>
  );
};

export default Hero;
