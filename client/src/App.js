import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import AboutPage from './components/about/AboutPage'
import NavBar from './components/common/NavBar'
import ContactPage from './components/contact/ContactPage'
import ProjectPage from './components/projects/ProjectPage'

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

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
