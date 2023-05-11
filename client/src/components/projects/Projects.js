import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


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
          {/* Project 4 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Cali} />
              <Card.Body>
                <Card.Title className='projects-title'>Cali-Kulture
                </Card.Title>
                <Card.Text className='projects-subtitle'>Solo project - 1.5 weeks</Card.Text>
                <Card.Text>Calisthenics is a booking app and the user can book classes of the day through the calendar.
                  It is a full-stack app built from scratch using Python and Django to serve data from PostgreSQL database, which was then consumed by React.js app.
                </Card.Text>
                <div className='projects-button-container'>
                  <Link className="projects-button" to={'https://cali-kulture.herokuapp.com/'} as={Link} target="_blank">View site</Link>
                  <Link className="projects-button" to={'https://github.com/rossana87/Project_4'} as={Link} target="_blank">GitHub</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Project 3 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Wanderlust} />
              <Card.Body>
                <Card.Title className='projects-title'>Wanderlust
                </Card.Title>
                <Card.Text className='projects-subtitle'>Group project - 1 week</Card.Text>
                <Card.Text className='wanderlust'>In this travelling app, the user can take some inspiration depending from the weather around the world.
                  It is a full-stack app built using an Express API to serve data from a Mongo Database and consumed by React.js app.
                </Card.Text>
                <div className='projects-button-container'>
                  <Link className="projects-button" to={'https://project-3-wanderlust.herokuapp.com/'} as={Link} target="_blank">View site</Link>
                  <Link className="projects-button" to={'https://github.com/rossana87/Project_3_Wanderlust'} as={Link} target="_blank">GitHub</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* Project 2 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Harvard} />
              <Card.Body>
                <Card.Title className='projects-title'>Hardvard Art Museum
                </Card.Title>
                <Card.Text className='projects-subtitle'>Group project - 36 hours</Card.Text>
                <Card.Text>In this hackathon we built a React app using the Harvard Museum API. I worked mainly on the React side, fetching data from the external API </Card.Text>
                <div className='projects-button-container'>
                  <Link className="projects-button" to={'https://rosie-harvard-api.netlify.app/'} as={Link} target="_blank">View site</Link>
                  <Link className="projects-button" to={'https://github.com/rossana87/Project_2'} as={Link} target="_blank">GitHub</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Project 1 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Snake} />
              <Card.Body>
                <Card.Title className='projects-title'>Snake
                </Card.Title>
                <Card.Text className='projects-subtitle'>Solo project - 1 week</Card.Text>
                <Card.Text className='snake'> First solo project built in vanilla JavaScript. I chose the game Snake as I was a huge fan of this game when I was a kid. Would you like to play? Give it a go!
                </Card.Text>
                <div className='projects-button-container'>
                  <Link className="projects-button" to={'https://rossana87.github.io/Project_1/'} as={Link} target="_blank">View site</Link>
                  <Link className="projects-button" to={'https://github.com/rossana87/Project_1'} as={Link} target="_blank">GitHub</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default Projects 