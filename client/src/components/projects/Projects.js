import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { BiLink } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'

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
                <Card.Title>Cali-Kulture
                  <Link className="footer-link" to={'https://cali-kulture.herokuapp.com/'} as={Link} target="_blank">
                    <BiLink style={{ fontSize: '20px', color: '#f1d5b8', marginRight: '10px', marginLeft: '10px' }} />
                  </Link>
                  <Link className="footer-link" to={'https://github.com/rossana87/Project_4'} as={Link} target="_blank">
                    <SiGithub style={{ fontSize: '20px', color: '#f1d5b8' }} />
                  </Link>
                </Card.Title>
                <Card.Text>Calisthenics is a booking app where the user can book classes of the day through the calendar only if they are registered.
                  It is a full-stack app built from scratch using Python and Django to serve data from PostgreSQL database, which was then consumed by React.js app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Project 3 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Wanderlust} />
              <Card.Body>
                <Card.Title>Wanderlust
                  <Link className="footer-link" to={'https://project-3-wanderlust.herokuapp.com/'} as={Link} target="_blank">
                    <BiLink style={{ fontSize: '20px', color: '#f1d5b8', marginRight: '10px', marginLeft: '10px' }} />
                  </Link>
                  <Link className="footer-link" to={'https://github.com/rossana87/Project_3_Wanderlust'} as={Link} target="_blank">
                    <SiGithub style={{ fontSize: '20px', color: '#f1d5b8' }} />
                  </Link>
                </Card.Title>
                <Card.Text className='wanderlust'>In this travelling app, the user can take some inspiration depending from the weather around the world.
                  It is a full-stack app built using a Express API to serve data from a Mongo Database and consumed by React.js app.
                </Card.Text>
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
                <Card.Title>Hardvard Art Museum
                  <Link className="footer-link" to={'https://rosie-harvard-api.netlify.app/'} as={Link} target="_blank">
                    <BiLink style={{ fontSize: '20px', color: '#f1d5b8', marginRight: '10px', marginLeft: '10px' }} />
                  </Link>
                  <Link className="footer-link" to={'https://github.com/rossana87/Project_2'} as={Link} target="_blank">
                    <SiGithub style={{ fontSize: '20px', color: '#f1d5b8' }} />
                  </Link>
                </Card.Title>
                <Card.Text>In this 2-day hackathon we built a React app using the Harvard Museum API. I worked mainly on the React side, fetching data from the external API </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Project 1 */}
          <Col lg={6} className="mb-4">
            <Card className='projects-card'>
              <Card.Img variant="top" src={Snake} />
              <Card.Body>
                <Card.Title>Snake
                  <Link className="footer-link" to={'https://rossana87.github.io/Project_1/'} as={Link} target="_blank">
                    <BiLink className='footer-icon' style={{ fontSize: '20px', color: '#f1d5b8', marginRight: '10px', marginLeft: '10px' }} />
                  </Link>
                  <Link className="footer-link" to={'https://github.com/rossana87/Project_1'} as={Link} target="_blank">
                    <SiGithub className='footer-icon' style={{ fontSize: '20px', color: '#f1d5b8' }} />
                  </Link>
                </Card.Title>
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