import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <Container className='footer-container'>
        <Card.Body className='footer-body'>
          <Card.Title className='footer-title'>
            <Link className="footer-link" to={'https://www.linkedin.com/in/rossana-ventrella/'} as={Link} target="_blank">
              <div><FaLinkedin className="footer-icon" /></div>
            </Link>
            <Link className="footer-link" to={'https://github.com/rossana87'} as={Link} target="_blank">
              <div><FaGithub className="footer-icon" /></div>
            </Link>
          </Card.Title>
          <Card.Text>
            Copyright © Rossana Ventrella
          </Card.Text>
        </Card.Body>
      </Container>
    </section>
  )

}

export default Footer