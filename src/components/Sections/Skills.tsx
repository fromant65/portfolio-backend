"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cloud, Brain, Users } from "lucide-react"
import "./Skills.css"

const Skills = () => {
  const technicalSkills = [
    {
      category: "Lenguajes de Programación",
      icon: Code,
      skills: [
        { name: "Python", level: 95, years: 5 },
        { name: "JavaScript/TypeScript", level: 90, years: 4 },
        { name: "Java", level: 85, years: 3 },
        { name: "Go", level: 80, years: 2 },
        { name: "Rust", level: 70, years: 1 },
        { name: "SQL", level: 95, years: 5 },
      ],
    },
    {
      category: "Bases de Datos",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 95, years: 5 },
        { name: "MongoDB", level: 85, years: 3 },
        { name: "Redis", level: 90, years: 4 },
        { name: "ClickHouse", level: 75, years: 2 },
        { name: "TimescaleDB", level: 80, years: 2 },
        { name: "Elasticsearch", level: 70, years: 2 },
      ],
    },
    {
      category: "Frameworks & APIs",
      icon: Server,
      skills: [
        { name: "FastAPI", level: 95, years: 4 },
        { name: "Node.js/Express", level: 90, years: 4 },
        { name: "Spring Boot", level: 85, years: 3 },
        { name: "Django", level: 80, years: 3 },
        { name: "GraphQL", level: 85, years: 2 },
        { name: "gRPC", level: 75, years: 2 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 90, years: 4 },
        { name: "Docker", level: 95, years: 5 },
        { name: "Kubernetes", level: 85, years: 3 },
        { name: "Terraform", level: 80, years: 2 },
        { name: "GitHub Actions", level: 85, years: 3 },
        { name: "Monitoring (Grafana/Prometheus)", level: 80, years: 2 },
      ],
    },
  ]

  const softSkills = [
    {
      name: "Liderazgo Técnico",
      description: "Capacidad para guiar equipos de desarrollo y tomar decisiones arquitectónicas críticas",
      icon: "🎯",
      level: 90,
    },
    {
      name: "Comunicación",
      description: "Habilidad para explicar conceptos técnicos complejos a audiencias diversas",
      icon: "💬",
      level: 95,
    },
    {
      name: "Resolución de Problemas",
      description: "Enfoque analítico para identificar y resolver desafíos técnicos complejos",
      icon: "🧩",
      level: 95,
    },
    {
      name: "Mentoring",
      description: "Experiencia desarrollando talento junior y compartiendo conocimiento",
      icon: "🌱",
      level: 85,
    },
    {
      name: "Adaptabilidad",
      description: "Flexibilidad para aprender nuevas tecnologías y adaptarse a cambios",
      icon: "🔄",
      level: 90,
    },
    {
      name: "Pensamiento Estratégico",
      description: "Visión a largo plazo para arquitecturas escalables y sostenibles",
      icon: "♟️",
      level: 85,
    },
  ]

  const economicSkills = [
    {
      name: "Análisis Econométrico",
      tools: ["Python (pandas, scikit-learn)", "R", "Stata"],
      level: 85,
    },
    {
      name: "Modelado Financiero",
      tools: ["Monte Carlo", "VaR", "Black-Scholes"],
      level: 80,
    },
    {
      name: "Series Temporales",
      tools: ["ARIMA", "GARCH", "Prophet"],
      level: 90,
    },
    {
      name: "Machine Learning Financiero",
      tools: ["TensorFlow", "PyTorch", "XGBoost"],
      level: 85,
    },
  ]

  return (
    <section className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-kanji">技能</span>
          <span className="title-text">Habilidades</span>
        </h2>
        <p className="section-subtitle">
          La síntesis perfecta entre expertise técnico, liderazgo humano y visión económica
        </p>
      </motion.div>

      <div className="skills-content">
        {/* Habilidades Técnicas */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="subsection-title">
            <Brain className="subsection-icon" />
            Habilidades Técnicas
          </h3>

          <div className="technical-skills">
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              >
                <div className="category-header">
                  <category.icon className="category-icon" />
                  <h4 className="category-title">{category.category}</h4>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-years">{skill.years} años</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="subsection-title">
            <Users className="subsection-icon" />
            Habilidades Blandas
          </h3>

          <div className="soft-skills">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="soft-skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="soft-skill-header">
                  <span className="soft-skill-icon">{skill.icon}</span>
                  <h4 className="soft-skill-name">{skill.name}</h4>
                </div>
                <p className="soft-skill-description">{skill.description}</p>
                <div className="soft-skill-meter">
                  <motion.div
                    className="soft-skill-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Económicas */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="subsection-title">
            <span className="economic-icon">📈</span>
            Expertise Económico
          </h3>

          <div className="economic-skills">
            {economicSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="economic-skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="economic-skill-name">{skill.name}</h4>
                <div className="economic-tools">
                  {skill.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="economic-tool">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="economic-level">
                  <span>Nivel: {skill.level}%</span>
                  <div className="economic-bar">
                    <motion.div
                      className="economic-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
