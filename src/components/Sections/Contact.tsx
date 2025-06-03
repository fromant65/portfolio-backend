"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from "lucide-react"
import "./Contact.css"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev@ejemplo.com",
      link: "mailto:dev@ejemplo.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 11 1234-5678",
      link: "tel:+541112345678",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Buenos Aires, Argentina",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@miusuario",
      link: "https://github.com/miusuario",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/miusuario",
      link: "https://linkedin.com/in/miusuario",
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
          <span className="title-kanji">連絡</span>
          <span className="title-text">Contacto</span>
        </h2>
        <p className="section-subtitle">Construyamos juntos el futuro de la tecnología</p>
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

          <motion.div
            className="download-cv"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="cv-button">
              <Download size={20} />
              <span>Descargar CV</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Formulario de Contacto */}
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="contact-section-title">Envíame un Mensaje</h3>

          <form className="contact-form">
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Tu nombre completo"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" name="email" className="form-input" placeholder="tu@email.com" required />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label htmlFor="subject" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="¿En qué puedo ayudarte?"
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Cuéntame sobre tu proyecto o idea..."
                rows={5}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              <span>Enviar Mensaje</span>
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Decoración */}
      <motion.div
        className="contact-decoration"
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="decoration-symbol">和</div>
      </motion.div>
    </section>
  )
}

export default Contact
