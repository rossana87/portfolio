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
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683470520/Portfolio/pika-1683470509778-1x_bvxgqn.jpg' />
              <Card.Body>
                <Card.Title>Cali-Kulture</Card.Title>
                <Card.Text>Calisthenics booking app - The user is able to find classes of the day through the calendar and book them only if they are registered. Classes can also be cancelled from the booking page.
                  <br />
                  <br />
                  It is a full-stack app built from scratch using Python and Django to serve data from PostgreSQL database, which was then consumed by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683470948/Portfolio/pika-1683470933165-1x_mbervn.jpg' />
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
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683469994/Portfolio/pika-1683469976269-1x_uqe8ki.jpg' />
              <Card.Body>
                <Card.Title>Hardvard Art Museum</Card.Title>
                <Card.Text>In this 2-day hackathon we built a React app using the Harvard Museum API. I worked mainly on the React side, fetching data from the external API </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src='https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683471096/Portfolio/pika-1683471085400-1x_pjxxac.jpg' />
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