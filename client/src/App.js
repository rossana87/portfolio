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
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (

    <div className='site-wrapper'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
