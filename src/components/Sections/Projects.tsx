"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "EconoAPI",
      category: "Profesional",
      description:
        "API REST para análisis económico en tiempo real con machine learning integrado. Procesa datos macroeconómicos y genera predicciones de mercado.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "TensorFlow"],
      features: [
        "Análisis predictivo de mercados",
        "Dashboard en tiempo real",
        "API rate limiting avanzado",
        "Integración con 15+ fuentes de datos",
      ],
      metrics: {
        users: "10K+",
        requests: "1M+/día",
        uptime: "99.9%",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "En producción",
    },
    {
      title: "CloudSync",
      category: "Profesional",
      description:
        "Sistema de sincronización distribuida para aplicaciones multi-tenant. Arquitectura de microservicios con event sourcing.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Node.js", "Kubernetes", "MongoDB", "RabbitMQ", "Docker"],
      features: [
        "Sincronización en tiempo real",
        "Auto-scaling horizontal",
        "Event sourcing pattern",
        "Multi-tenant architecture",
      ],
      metrics: {
        users: "50K+",
        requests: "5M+/día",
        uptime: "99.95%",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "En producción",
    },
    {
      title: "CryptoTracker",
      category: "Personal",
      description:
        "Plataforma de análisis técnico para criptomonedas con algoritmos de trading automatizado y backtesting.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Go", "TimescaleDB", "WebSocket", "React", "D3.js"],
      features: [
        "Trading bot automatizado",
        "Análisis técnico avanzado",
        "Backtesting histórico",
        "Alertas personalizables",
      ],
      metrics: {
        users: "2K+",
        trades: "100K+",
        accuracy: "78%",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "Beta",
    },
    {
      title: "DevMetrics",
      category: "Personal",
      description:
        "Herramienta de análisis de productividad para equipos de desarrollo. Métricas DORA y insights de performance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Rust", "GraphQL", "ClickHouse", "Vue.js", "GitHub API"],
      features: [
        "Métricas DORA automatizadas",
        "Análisis de code review",
        "Burndown charts inteligentes",
        "Integración con Git providers",
      ],
      metrics: {
        teams: "50+",
        repos: "500+",
        insights: "Daily",
      },
      links: {
        demo: "#",
        github: "#",
      },
      status: "Open Source",
    },
  ]

  return (
    <section className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-kanji">項目</span>
          <span className="title-text">Proyectos</span>
        </h2>
        <p className="section-subtitle">Soluciones que transforman ideas en sistemas robustos y escalables</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <div className="project-category">{project.category}</div>
                <div className="project-status">{project.status}</div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.links.demo} className="project-link">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.links.github} className="project-link">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-features">
                <h4 className="features-title">Características clave:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-metrics">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span className="metric-value">{value}</span>
                    <span className="metric-label">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
