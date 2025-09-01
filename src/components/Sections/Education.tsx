"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar, Trophy } from "lucide-react"
import "./Education.css"

const Education = () => {
  const education = [
    {
      degree: "Licenciatura en Ciencias de la Computación",
      institution: "Universidad Nacional de Rosario",
      location: "Rosario, Argentina",
      period: "2023 - Presente",
      status: "En proceso",
      gpa: "8.8/10",
      description:
        "Carrera que brinda formación integral en informática, algoritmos y sistemas. Su plan de estudios abarca desde ciencias básicas hasta ingeniería de software, preparando a los estudiantes para la investigación y el desarrollo tecnológico.",
    },
    {
      degree: "Tecnico en Informatica Profesional y Personal",
      institution: "Instituto Politécnico Superior",
      location: "Rosario, Argentina",
      period: "2015 - 2020",
      status: "Completado",
      gpa: "7.4/10",
      description:
        "Formación técnica y profesional en el área de la computación y el desarrollo de software.",
    },
    {
      degree: "Licenciatura en Ciencias Económicas",
      institution: "Universidad Nacional de Rosario",
      location: "Rosario, Argentina",
      period: "2021 - 2023",
      status: "Pausado",
      gpa: "8.3/10",
      description:
        "Formación técnica y profesional en el área de la computación y el desarrollo de software.",
    },
  ]

  const recognitions = [
    {
      name: "Mencion de Honor - Olimpiada Matemática Argentina",
      year: "2017",
      level: "Nacional",
      description: "Mención de honor en el certamen nacional de la Olimpiada Matemática Argentina",
      icon: "🏆",
    },
    {
      name: "Subcampeon - Olimpiada Matemática Argentina",
      year: "2017",
      level: "Provincial",
      description: "Segundo lugar en la Olimpiada Matemática Santafesina",
      icon: "🥈",
    },
    {
      name: "Mención de Honor - Olimpiada Matemática del Cono Sur",
      year: "2016",
      level: "Internacional",
      description: "Mencion de honor en el selectivo para la Olimpiada Matemática del Cono Sur",
      icon: "🏆",
    },
  ]

  // const courses = [
  //   {
  //     name: "Machine Learning for Economics",
  //     provider: "Stanford Online",
  //     duration: "12 semanas",
  //     year: "2023",
  //   },
  //   {
  //     name: "Microservices Architecture Patterns",
  //     provider: "Pluralsight",
  //     duration: "8 semanas",
  //     year: "2023",
  //   },
  //   {
  //     name: "Advanced PostgreSQL Performance",
  //     provider: "Udemy",
  //     duration: "6 semanas",
  //     year: "2022",
  //   },
  //   {
  //     name: "Distributed Systems Design",
  //     provider: "MIT OpenCourseWare",
  //     duration: "16 semanas",
  //     year: "2022",
  //   },
  // ]

  return (
    <section className="education">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          {/*kyouiku */}
          <span className="title-kanji">教育</span>
          <span className="title-text">Formación Académica</span>
        </h2>
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reconocimientos */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="subsection-title">
            <Trophy className="subsection-icon" />
            Reconocimientos Matemáticos
          </h3>

          <div className="recognitions-grid">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                className="recognition-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="recognition-icon">{recognition.icon}</div>
                <div className="recognition-content">
                  <h4 className="recognition-name">{recognition.name}</h4>
                  <div className="recognition-meta">
                    <span className="recognition-year">{recognition.year}</span>
                    <span className="recognition-level">{recognition.level}</span>
                  </div>
                  <p className="recognition-description">{recognition.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cursos Adicionales
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
        */}
      </div> 

      <div className="education-decoration">
        <img src="/src/assets/space-orbit.png" alt="" className="decoration-orbit" />
        <img src="/src/assets/constellation.png" alt="" className="decoration-constellation" />
      </div>
    </section>
  )
}

export default Education
