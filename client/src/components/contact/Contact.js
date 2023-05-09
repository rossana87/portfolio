import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Footer from '../contact/Footer'

const Contact = () => {
  return (
    <section id='contact'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <h3 className='contact-header'>Get in touch</h3>
            <Card.Body className='contact-description'>
              Do you have a question, or would you like to say hello?
            </Card.Body>
            <Link className="contact-email" to={'mailto:rossana.ventrella@gmail.com'} as={Link} target="_blank">Email me</Link>
          </Col>
        </Row>
        <Footer />
      </Container>
    </section >
  )
}

export default Contact 