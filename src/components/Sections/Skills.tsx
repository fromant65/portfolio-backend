"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cloud, Brain, Users, Globe } from "lucide-react"
import "./Skills.css"

const Skills = () => {
  const technicalSkills = [
    {
      category: "Lenguajes de Programación",
      icon: Code,
      skills: [
        { name: "Python", experience: "5 años", specialty: "Backend & ML" },
        { name: "JavaScript/TypeScript", experience: "4 años", specialty: "Full Stack" },
        { name: "Java", experience: "3 años", specialty: "Enterprise" },
        { name: "Go", experience: "2 años", specialty: "Microservicios" },
        { name: "Rust", experience: "1 año", specialty: "Performance" },
        { name: "SQL", experience: "5 años", specialty: "Optimización" },
      ],
    },
    {
      category: "Bases de Datos",
      icon: Database,
      skills: [
        { name: "PostgreSQL", experience: "5 años", specialty: "OLTP & Analytics" },
        { name: "MongoDB", experience: "3 años", specialty: "Document Store" },
        { name: "Redis", experience: "4 años", specialty: "Caching & Pub/Sub" },
        { name: "ClickHouse", experience: "2 años", specialty: "Analytics" },
        { name: "TimescaleDB", experience: "2 años", specialty: "Time Series" },
        { name: "Elasticsearch", experience: "2 años", specialty: "Search & Logs" },
      ],
    },
    {
      category: "Frameworks & APIs",
      icon: Server,
      skills: [
        { name: "FastAPI", experience: "4 años", specialty: "High Performance APIs" },
        { name: "Node.js/Express", experience: "4 años", specialty: "Real-time Apps" },
        { name: "Spring Boot", experience: "3 años", specialty: "Enterprise APIs" },
        { name: "Django", experience: "3 años", specialty: "Rapid Development" },
        { name: "GraphQL", experience: "2 años", specialty: "Flexible APIs" },
        { name: "gRPC", experience: "2 años", specialty: "Microservicios" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", experience: "4 años", specialty: "Serverless & Containers" },
        { name: "Docker", experience: "5 años", specialty: "Containerización" },
        { name: "Kubernetes", experience: "3 años", specialty: "Orquestación" },
        { name: "Terraform", experience: "2 años", specialty: "IaC" },
        { name: "GitHub Actions", experience: "3 años", specialty: "CI/CD" },
        { name: "Monitoring", experience: "2 años", specialty: "Observabilidad" },
      ],
    },
  ]

  const softSkills = [
    {
      name: "Liderazgo Técnico",
      description: "Capacidad para guiar equipos de desarrollo y tomar decisiones arquitectónicas críticas",
      icon: "🎯",
      strength: "Fuerte",
    },
    {
      name: "Comunicación",
      description: "Habilidad para explicar conceptos técnicos complejos a audiencias diversas",
      icon: "💬",
      strength: "Excelente",
    },
    {
      name: "Resolución de Problemas",
      description: "Enfoque analítico para identificar y resolver desafíos técnicos complejos",
      icon: "🧩",
      strength: "Excelente",
    },
    {
      name: "Mentoring",
      description: "Experiencia desarrollando talento junior y compartiendo conocimiento",
      icon: "🌱",
      strength: "Fuerte",
    },
    {
      name: "Adaptabilidad",
      description: "Flexibilidad para aprender nuevas tecnologías y adaptarse a cambios",
      icon: "🔄",
      strength: "Excelente",
    },
    {
      name: "Pensamiento Estratégico",
      description: "Visión a largo plazo para arquitecturas escalables y sostenibles",
      icon: "♟️",
      strength: "Fuerte",
    },
  ]

  const economicSkills = [
    {
      name: "Análisis Econométrico",
      tools: ["Python (pandas, scikit-learn)", "R", "Stata"],
      focus: "Modelado predictivo",
    },
    {
      name: "Modelado Financiero",
      tools: ["Monte Carlo", "VaR", "Black-Scholes"],
      focus: "Gestión de riesgo",
    },
    {
      name: "Series Temporales",
      tools: ["ARIMA", "GARCH", "Prophet"],
      focus: "Forecasting",
    },
    {
      name: "Machine Learning Financiero",
      tools: ["TensorFlow", "PyTorch", "XGBoost"],
      focus: "Trading algorithms",
    },
  ]

  const languages = [
    {
      name: "Español",
      flag: "🇦🇷",
      native: true,
      skills: {
        listening: 100,
        reading: 100,
        speaking: 100,
        writing: 100,
      },
    },
    {
      name: "Inglés",
      flag: "🇺🇸",
      native: false,
      skills: {
        listening: 95,
        reading: 98,
        speaking: 90,
        writing: 92,
      },
    },
    {
      name: "Japonés",
      flag: "🇯🇵",
      native: false,
      skills: {
        listening: 70,
        reading: 75,
        speaking: 65,
        writing: 68,
      },
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
          {/*nouryoku */}
          <span className="title-kanji">能力</span>
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
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="skill-main">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-specialty">{skill.specialty}</span>
                      </div>
                      <span className="skill-experience">{skill.experience}</span>
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
                  <div className="soft-skill-title-section">
                    <h4 className="soft-skill-name">{skill.name}</h4>
                    <span className="soft-skill-strength">{skill.strength}</span>
                  </div>
                </div>
                <p className="soft-skill-description">{skill.description}</p>
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
                <div className="economic-header">
                  <h4 className="economic-skill-name">{skill.name}</h4>
                  <span className="economic-focus">{skill.focus}</span>
                </div>
                <div className="economic-tools">
                  {skill.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="economic-tool">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="subsection-title">
            <Globe className="subsection-icon" />
            Idiomas
          </h3>

          <div className="languages-grid">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="language-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="language-header">
                  <span className="language-flag">{language.flag}</span>
                  <div className="language-info">
                    <h4 className="language-name">{language.name}</h4>
                    {language.native && <span className="native-badge">Nativo</span>}
                  </div>
                </div>

                <div className="language-skills">
                  {Object.entries(language.skills).map(([skill, level]) => (
                    <div key={skill} className="language-skill">
                      <div className="skill-label-section">
                        <span className="skill-label">{skill}</span>
                        <span className="skill-percentage">{level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="skills-decoration">
        <img src="/src/assets/zen-wave.png" alt="" className="decoration-wave" />
        <img src="/src/assets/economic-chart.png" alt="" className="decoration-chart" />
      </div>
    </section>
  )
}

export default Skills
