import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/home/Home'
import About from './components/about/About'
import NavBar from './components/common/NavBar'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'

const App = () => {

  return (

    <div className='site-wrapper'>
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>

  )
}

export default App
