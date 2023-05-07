import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Gif from '../../images/woman.gif'

import Text from '../home/Text'

const Home = () => {
  return (
    <section className='home_section' id='home'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} sm={8} md={6} lg={5}>
            <Card.Body className='home_card_body'>
              <Card.Title className='home_hello'>Hi, my name is</Card.Title>
              <Card.Title className='home_name'>Rossana</Card.Title>
              <Text />
            </Card.Body>
            <Card.Img className='home_image' src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683452977/Portfolio/cc7c4146-22c3-4772-9b78-dfb17f90dffb_loixus.jpg' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home