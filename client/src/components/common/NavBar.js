import { Link } from 'react-scroll'


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


import Logo from '../../images/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand 
          to="/" 
          as={Link} 
          className='logo'>
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse 
          id="basic-navbar-nav" 
          className='justify-content-end'>
          <Nav>
            <Link 
              className='nav-link' 
              activeClass='active' 
              to='home' 
              spy={true} 
              smooth={true} 
              offset={-106} 
              duration={300}>Home</Link>
            <Link 
              className='nav-link' 
              activeClass='active' 
              to='about' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={300}>About</Link>
            <Link 
              className='nav-link' 
              activeClass='active' 
              to='projects' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={300}>Projects</Link>
            <Link 
              className='nav-link' 
              activeClass='active' 
              to='contact' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={300}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar 