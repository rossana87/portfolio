import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import Text from '../home/Text'
import Gif from '../../images/woman.gif'

const Home = () => {
  return (
    <section id='home'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} sm={8} md={6} lg={5}>
            <Card.Body>
              <Card.Title className='hello'>Hi, my name is</Card.Title>
              <Card.Title className='name'>Rossana</Card.Title>
              <Text />
            </Card.Body>
            <Card.Img src={Gif} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home