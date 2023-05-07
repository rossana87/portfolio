import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Gif from '../../images/woman.gif'

import Text from '../home/Text'
import Social from '../home/Social'
import Data from '../home/Data'


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
            <Card.Img className='home_image' src={Gif} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home