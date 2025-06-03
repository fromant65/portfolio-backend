"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import "./Experience.css"

const Experience = () => {
  const experiences = [
    {
      title: "Team Leader & Fullstack Developer",
      company: "Fiduxion",
      location: "Rosario, Argentina",
      period: "2024 - Presente",
      description:
        "Diseño y desarrollo de páginas web y sistemas especializados.",
      technologies: ["Typescript", "Next.js", "MySQL", "TRPC", "Drizzle"],
      achievements: [
        "Creación de diversos sistemas de gestión y contabilidad",
        "Definición de prácticas y procesos ágiles adaptados al entorno",
      ],
    },
    {
      title: "Profesor ayudante de programación",
      company: "Universidad Nacional de Rosario",
      location: "Rosario, Argentina",
      period: "2024 - 2025",
      description:
        "Mi tarea fue asistir en clases de programación a ingresantes de la Lic. en Ciencias de la Computación, así como corregir exámenes y generar documentación útil para los alumnos.",
    },    
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remoto",
      period: "2023 - 2025",
      description:
        "Desarrollo completo de aplicaciones web desde la concepción hasta el deployment. Trabajo directo con clientes y definición de arquitectura técnica.",
      technologies: ["Typescript", "Next.js", "Firebase", "TRPC", "ShadCN", "Excel"],
      achievements: [
        "Análisis de seguridad de APIs externas",
        "Desarrollo de sistemas web y Excel",
      ],
    },
    {
      title: "Scripting para aprendizaje de lenguajes",
      company: "Código abierto",
      location: "Remoto",
      period: "2022 - 2024",
      description: 
        "El trabajo consistió en generar scripts de análisis de datos y textos, emparejado con la generación de flashcards, para facilitar y guiar el estudio de lenguajes como Inglés y Japonés",
      technologies: ["Javascript", "Python", "REGEX", "Bunpro"],
      achievements: [
        "Generación de miles de flashcards con contenido extraído de textos y música",
        "Categorización de vocabulario y flashcards para facilitar su estudio"
      ]
    }
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
            {exp.technologies &&
              <div className="technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            }

            {exp.achievements &&
              <div className="achievements">
                <h4 className="achievements-title">Logros Destacados:</h4>
                <ul className="achievements-list">
                  {exp.achievements?.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            }
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
