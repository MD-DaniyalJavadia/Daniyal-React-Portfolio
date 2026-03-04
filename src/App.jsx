import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ThingsILove from './components/ThingsILove'
import About from './components/About'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectShowcase from './components/ProjectShowCase'
import { Helmet } from "react-helmet-async";


function App() {
  const skills = ["React", "Node.js", "Laravel", ".NET", "Flutter", "UI/UX Design"];

  return (
    <>
      <Helmet>
        <title>Daniyal Javadia - Full Stack Web Developer | .NET & Flutter Developer | UI/UX Designer</title>
        <meta name="description" content="Full Stack Web Developer, .NET Developer, Flutter Developer, and UI/UX Designer. Explore portfolio projects and tech blog." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniyal Javadia",
            "url": "https://daniyal-works-portfolio.vercel.app/",
            "jobTitle": "Full Stack Web Developer | .NET Developer | Flutter Developer | UI/UX Designer",
            "skills": ["React", "Node.js", "Laravel", ".NET", "Flutter", "UI/UX Design"]
          })}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <ThingsILove />
      <About />
      <Skills />
      <Tools />
      <Certificates />
      <Projects />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </>
  )
}

export default App
