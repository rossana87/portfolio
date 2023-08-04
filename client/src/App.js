import { createContext, useState  } from 'react'
import { BrowserRouter } from 'react-router-dom'


// Components
import Home from './components/home/Home'
import About from './components/about/About'
import NavBar from './components/common/NavBar'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

const App = () => {

  return (
    <div className='site-wrapper'>  
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </BrowserRouter>   
    </div>

  )
}

export default App
