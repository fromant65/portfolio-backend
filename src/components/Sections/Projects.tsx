"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "Joya App",
      category: "Profesional",
      description:
        "Aplicación de gestión de insumos, gastos fijos y productos para empresas gastronómicas, con la opción para generar presupuestos personalizados para clientes",
      technologies: ["Typescript", "Next.js", "MySQL", "TRPC", "Drizzle"],
      features: [
        "Gestión de gastos fijos y variables",
        "Creación personalizada de productos con cálculo de precios sugeridos",
        "Generación de presupuestos",
        "Gestión de clientes",
        "Analytics generales sobre usuarios",
      ],
      links: {
        demo: "https://joyaapp.com",
      },
      status: "En producción",
    },
    {
      title: "Robot",
      category: "Personal",
      description:
        "Trabajo práctico final individual para la materia Estructuras de Datos y Algoritmos I. Consiste en un robot que busca atravesar una grilla de celdas con obstáculos desconocida en la menor cantidad de movimientos posible. El mismo fue aprobado con nota perfecta.",
      technologies: ["C", "Python"],
      features: [
        "Implementacion de algoritmos de path finding (Floodfill, D* Lite)",
        "Generador de entornos aleatorios",
      ],
      links: {
        github: "https://github.com/fromant65/Robot",
      },
      status: "Finalizado",
    },
    {
      title: "Standfit Insumos",
      category: "Profesional",
      description:
        "Sistema de gestión interno para la empresa de producción de máquinas de gimnasio Standfit, localizada en Goya, Corrientes.",
      technologies: ["Typescript", "Next.js", "Firebase", "TRPC", "ShadCN"],
      features: [
        "Manejo de insumos para tapicería",
        "Creación de máquinas",
        "Gestion de órdenes de clientes y pedidos hacia tapiceros",
        "Estadísticas generales",
        "Sistema de gestión para tapiceros"
      ],
      status: "Beta",
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
          {/*kikaku */}
          <span className="title-kanji">企画</span>
          <span className="title-text">Proyectos</span>
        </h2>
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
            <div className="project-header">
              <div className="project-title-section">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <div className="project-category">{project.category}</div>
                  <div className="project-status">{project.status}</div>
                </div>
              </div>
              <div className="project-links">
                {project.links?.demo &&
                <a href={project.links.demo} className="project-link" target="_blank">
                  <ExternalLink size={18} />
                </a>
                }
                {project.links?.github &&
                <a href={project.links.github} className="project-link" target="_blank">
                  <Github size={18} />
                </a>
                }
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
          </motion.div>
        ))}
      </div>

      <div className="projects-decoration">
        <img src="/src/assets/economic-chart.png" alt="" className="decoration-chart" />
        <img src="/src/assets/zen-wave.png" alt="" className="decoration-wave" />
      </div>
    </section>
  )
}

export default Projects
