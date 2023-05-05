import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import Text from '../home/Text'


const Home = () => {
  return (
    <section id='home'>
      <Container className='homepage'>
        <Row className='justify-content-center'>
          <Col>
            <div className="laptop icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
            <Card.Body className='text-center'>
              <Card.Title className='hello'>Hi, my name is</Card.Title>
              <Card.Title className='name'>Rossana</Card.Title>
              <Text />
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home