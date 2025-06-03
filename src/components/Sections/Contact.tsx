"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import "./Contact.css"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fromant65@gmail.com",
      link: "mailto:fromant65@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 341 507-3270",
      link: "tel:+543415073270",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Rosario, Argentina",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@fromant65",
      link: "https://github.com/fromant65",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/fulvio-todone",
      link: "https://www.linkedin.com/in/fulvio-todone/",
    },
  ]

  return (
    <section className="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">
          {/* renraku */}
          <span className="title-kanji">連絡</span>
          <span className="title-text">Contacto</span>
        </h2>
      </motion.div>

      <div className="contact-content">
        {/* Información de Contacto */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="contact-section-title">Información de Contacto</h3>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon">
                  <info.icon size={20} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="social-links">
            <h4 className="social-title">Redes Sociales</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <social.icon size={24} />
                  <div className="social-info">
                    <span className="social-label">{social.label}</span>
                    <span className="social-username">{social.username}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mensaje de Disponibilidad */}
        <motion.div
          className="availability-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="contact-section-title">Disponibilidad</h3>

          <div className="availability-card">
            <div className="availability-status">
              <div className="status-indicator active"></div>
              <span className="status-text">Disponible para nuevos proyectos</span>
            </div>

            <div className="availability-details">
              <div className="detail-item">
                <span className="detail-label">Modalidad:</span>
                <span className="detail-value">Remoto / Híbrido / Presencial</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Tipo de proyecto:</span>
                <span className="detail-value">Desarrollo Web / Sistemas</span>
              </div>
            </div>

            <div className="collaboration-types">
              <h4 className="collaboration-title">Tipos de Colaboración</h4>
              <div className="collaboration-list">
                <div className="collaboration-item">
                  <span className="collaboration-icon">🚀</span>
                  <span className="collaboration-text">Desarrollo de MVP</span>
                </div>
                <div className="collaboration-item">
                  <span className="collaboration-icon">⚡</span>
                  <span className="collaboration-text">Optimización de sistemas</span>
                </div>
                <div className="collaboration-item">
                  <span className="collaboration-icon">🏗️</span>
                  <span className="collaboration-text">Arquitectura de software</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decoración */}
      <motion.div
        className="contact-decoration"
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <img src="/src/assets/zen-wave.png" alt="" className="decoration-zen" />
        <img src="/src/assets/space-orbit.png" alt="" className="decoration-orbit" />
      </motion.div>
    </section>
  )
}

export default Contact
