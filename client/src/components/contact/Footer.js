import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <section id='footer'>
      <Container className="text-center footer-container" style={{ marginTop: '30px' }}>
        <Link className="footer-link" to={'https://www.linkedin.com/in/rossana-ventrella/'} as={Link} target="_blank">
          <SiLinkedin className='footer-icon' style={{ fontSize: '30px', color: '#224B24', marginRight: '10px' }} />
        </Link>
        <Link className="footer-link" to={'https://github.com/rossana87'} as={Link} target="_blank">
          <SiGithub className='footer-icon' style={{ fontSize: '30px', color: '#224B24' }} />
        </Link>
        <Card.Text className='footer-copyright' style={{ margin: '20px 20px', fontSize: '12px' }}>
          Copyright © Rossana Ventrella
        </Card.Text>
      </Container>
    </section>
  )

}

export default Footer