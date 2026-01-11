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


function App() {

  return (
    <>
      <Header />
      <Hero />
      <ThingsILove />
      <About />
      <Skills />
      <Tools />
      <Certificates />
      <Projects/>
      <ProjectShowcase/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
