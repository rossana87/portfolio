import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <Container>
        <div className='skills-container'>
          <h3 className='skills-header'>Skills</h3>
          <Row>
            <Col lg={{ span: 5, offset: 1 }} className="mb-4 mb-lg-0">
              <Card className="skills-card">
                <Card.Body>
                  <Card.Title className='skills-title'>Front-end Skills</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul>
                        <li>Bootstrap</li>
                        <li>SASS</li>
                        <li>npm / pip</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 5 }} className="ml-lg-4">
              <Card className="skills-card">
                <Card.Body>
                  <Card.Title className='skills-title'>Back-end Skills</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>PostgreSQL</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Skills