"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      location: "Buenos Aires, Argentina",
      period: "2022 - Presente",
      description:
        "Liderazgo técnico en el desarrollo de microservicios escalables. Implementación de arquitecturas cloud-native y optimización de bases de datos para aplicaciones de alto tráfico.",
      technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
      achievements: [
        "Reducción del 40% en tiempo de respuesta de APIs",
        "Implementación de CI/CD que redujo deployments de 2h a 15min",
        "Mentoreo de 5 desarrolladores junior",
      ],
    },
    {
      title: "Backend Developer",
      company: "FinTech Innovations",
      location: "Córdoba, Argentina",
      period: "2020 - 2022",
      description:
        "Desarrollo de sistemas financieros seguros y conformes con regulaciones. Integración con APIs bancarias y implementación de sistemas de pagos.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Kubernetes"],
      achievements: [
        "Procesamiento de +1M transacciones diarias",
        "Implementación de sistema de fraud detection",
        "Certificación PCI DSS Level 1",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupLab",
      location: "Mendoza, Argentina",
      period: "2019 - 2020",
      description:
        "Desarrollo completo de aplicaciones web desde la concepción hasta el deployment. Trabajo directo con stakeholders y definición de arquitectura técnica.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "GraphQL"],
      achievements: [
        "Lanzamiento de 3 productos MVP exitosos",
        "Crecimiento de userbase de 0 a 10K usuarios",
        "Implementación de analytics en tiempo real",
      ],
    },
  ]

  return (
    <section className="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-kanji">経験</span>
          <span className="title-text">Experiencia Profesional</span>
        </h2>
        <p className="section-subtitle">Mi trayectoria construyendo sistemas que escalan y perduran</p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="card-header">
              <div className="job-info">
                <h3 className="job-title">{exp.title}</h3>
                <div className="company-info">
                  <Briefcase size={16} />
                  <span className="company-name">{exp.company}</span>
                </div>
              </div>
              <div className="job-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="job-description">{exp.description}</p>

            <div className="technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="achievements">
              <h4 className="achievements-title">Logros Destacados:</h4>
              <ul className="achievements-list">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
