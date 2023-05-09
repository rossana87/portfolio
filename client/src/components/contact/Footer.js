import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <Container className="text-center">
        <Link className="footer-link" to={'https://www.linkedin.com/in/rossana-ventrella/'} as={Link} target="_blank">
          <FaLinkedin classaName='footer-icon' style={{ fontSize: '30px', color: '#f1d5b8' }} />
        </Link>
        <Link className="footer-link" to={'https://github.com/rossana87'} as={Link} target="_blank">
          <FaGithub className='footer-icon' style={{ fontSize: '30px', color: '#f1d5b8' }} />
        </Link>
        <Card.Text className='footer-copyright' style={{ margin: '20px 20px', fontSize: '12px' }}>
          Copyright © Rossana Ventrella
        </Card.Text>
      </Container>
    </section>
  )

}

export default Footer