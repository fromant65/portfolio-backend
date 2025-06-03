"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"
import "./Education.css"

const Education = () => {
  const education = [
    {
      degree: "Licenciatura en Sistemas de Información",
      institution: "Universidad Tecnológica Nacional",
      location: "Buenos Aires, Argentina",
      period: "2017 - 2021",
      status: "Graduado",
      gpa: "8.7/10",
      description:
        "Especialización en desarrollo de software, bases de datos y arquitectura de sistemas. Tesis sobre optimización de consultas en bases de datos distribuidas.",
      highlights: [
        "Mejor promedio de la promoción",
        "Ayudante de cátedra en Algoritmos y Estructuras de Datos",
        "Proyecto final: Sistema de gestión hospitalaria",
      ],
    },
    {
      degree: "Especialización en Ciencias Económicas",
      institution: "Universidad de Buenos Aires",
      location: "Buenos Aires, Argentina",
      period: "2022 - 2023",
      status: "Completado",
      gpa: "9.2/10",
      description:
        "Programa enfocado en econometría, análisis cuantitativo y modelado financiero. Integración de conocimientos económicos con desarrollo de software.",
      highlights: [
        "Especialización en econometría aplicada",
        "Proyecto: Modelo predictivo de inflación",
        "Certificación en análisis de series temporales",
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAP-2023-001",
      icon: "☁️",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-2023-002",
      icon: "⚙️",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2022",
      credentialId: "MDB-DEV-2022-003",
      icon: "🍃",
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PDE-2022-004",
      icon: "📊",
    },
  ]

  const courses = [
    {
      name: "Machine Learning for Economics",
      provider: "Stanford Online",
      duration: "12 semanas",
      year: "2023",
    },
    {
      name: "Microservices Architecture Patterns",
      provider: "Pluralsight",
      duration: "8 semanas",
      year: "2023",
    },
    {
      name: "Advanced PostgreSQL Performance",
      provider: "Udemy",
      duration: "6 semanas",
      year: "2022",
    },
    {
      name: "Distributed Systems Design",
      provider: "MIT OpenCourseWare",
      duration: "16 semanas",
      year: "2022",
    },
  ]

  return (
    <section className="education">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          <span className="title-kanji">学習</span>
          <span className="title-text">Formación Académica</span>
        </h2>
        <p className="section-subtitle">El conocimiento como base sólida para la innovación tecnológica</p>
      </motion.div>

      <div className="education-content">
        {/* Educación Formal */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="subsection-title">
            <GraduationCap className="subsection-icon" />
            Educación Formal
          </h3>

          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="edu-header">
                  <div className="edu-main">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <div className="edu-institution">
                      <BookOpen size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <div className="edu-meta">
                    <div className="edu-status">{edu.status}</div>
                    <div className="edu-gpa">Promedio: {edu.gpa}</div>
                  </div>
                </div>

                <div className="edu-details">
                  <div className="edu-info">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                    <span className="separator">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="edu-description">{edu.description}</p>

                  <div className="edu-highlights">
                    <h5>Destacados:</h5>
                    <ul>
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="subsection-title">
            <Award className="subsection-icon" />
            Certificaciones
          </h3>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                    <span className="cert-id">ID: {cert.credentialId}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cursos Adicionales */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="subsection-title">
            <BookOpen className="subsection-icon" />
            Formación Continua
          </h3>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="course-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="course-name">{course.name}</h4>
                <p className="course-provider">{course.provider}</p>
                <div className="course-meta">
                  <span>{course.duration}</span>
                  <span className="separator">•</span>
                  <span>{course.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
