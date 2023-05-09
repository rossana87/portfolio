import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Cali from '../../images/cali.png'
import Wanderlust from '../../images/wanderlust.png'
import Harvard from '../../images/harvard.png'
import Snake from '../../images/snake.png'

const Projects = () => {
  return (
    <section id='projects'>
      <Container>
        <Row>
          <Col xs="12">
            <h3 className='projects-header'>Projects</h3>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Cali} />
              <Card.Body>
                <Card.Title>Cali-Kulture</Card.Title>
                <Card.Text>Calisthenics is a booking app where the user can book classes of the day through the calendar only if they are registered.
                  It is a full-stack app built from scratch using Python and Django to serve data from PostgreSQL database, which was then consumed by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Wanderlust} />
              <Card.Body>
                <Card.Title>Wanderlust</Card.Title>
                <Card.Text>In this travelling app, the user can take some inspiration depending from the weather around the world.
                  It is a full-stack app built using a Express API to serve data from a Mongo Database and consumed by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Harvard} />
              <Card.Body>
                <Card.Title>Hardvard Art Museum</Card.Title>
                <Card.Text>In this 2-day hackathon we built a React app using the Harvard Museum API. I worked mainly on the React side, fetching data from the external API </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Snake} />
              <Card.Body>
                <Card.Title>Snake</Card.Title>
                <Card.Text> First solo project built in vanilla JavaScript. I chose the game Snake as I was a huge fan of this game when I was a kid.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default Projects 