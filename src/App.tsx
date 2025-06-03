import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Layout/Header"
import Hero from "./components/Sections/Hero"
import Experience from "./components/Sections/Experience"
import Projects from "./components/Sections/Projects"
import Education from "./components/Sections/Education"
import Skills from "./components/Sections/Skills"
import Contact from "./components/Sections/Contact"
import StarField from "./components/Effects/StarField"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])
  const changeSection = (nextSection: string) => {
    setIsLoading(true)

    window.scrollTo(0, 0)

    setTimeout(() => {
      setActiveSection(nextSection)
      setIsLoading(false)
    }, 500)
  }

  const sections = [
    { id: "inicio", component: Hero },
    { id: "experiencia", component: Experience },
    { id: "proyectos", component: Projects },
    { id: "formacion", component: Education },
    { id: "habilidades", component: Skills },
    { id: "contacto", component: Contact },
  ]

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loading-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="loading-symbol">開</div>
          <div className="loading-text">Cargando Portfolio...</div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="app">
      <StarField />
   <Header activeSection={activeSection} changeSection={changeSection} />

      <main className="main-content">
        <AnimatePresence mode="wait">
          {sections.map(
            ({ id, component: Component }) =>
              activeSection === id && (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="section-container"
                >
                  <Component />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
