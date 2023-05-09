import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683534132/Portfolio/pika-1683534118428-1x_zv4qz6.webp' />
              <Card.Body>
                <Card.Title>Cali-Kulture</Card.Title>
                <Card.Text>Calisthenics is a booking app where the user is able to find classes of the day through the calendar and book them only if they are registered.
                  <br />
                  <br />
                  It is a full-stack app built from scratch using Python and Django to serve data from PostgreSQL database, which was then consumed by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683534800/Portfolio/Screenshot_2023-05-08_at_09.32.40_zu4gn2.png' />
              <Card.Body>
                <Card.Title>Wanderlust</Card.Title>
                <Card.Text>In this travelling app, the user gets some inspiration according to the weather.
                  <br />
                  <br />
                  It is a full-stack app built using a Express API to serve data from a Mongo Database and consumend by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683535251/Portfolio/project2_x9q4ap.png' />
              <Card.Body>
                <Card.Title>Hardvard Art Museum</Card.Title>
                <Card.Text>In this 2-day hackathon we built a React app using the Harvard Museum API. I worked mainly on the React side, fetching data from the external API </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683531368/Portfolio/pika-1683471085400-1x_eoqyuy.jpg' />
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