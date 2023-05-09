import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { BiChevronsRight } from 'react-icons/bi'


const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <Container>
        <div className='skills-container'>
          <h3 className='skills-header'>Skills</h3>
          <Row>
            <Col lg={6} className="mb-4 col-sm-6">
              <Card className="skills-card">
                <Card.Body>
                  <Card.Title className='skills-title'>Front-end</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <ul>
                        <li><BiChevronsRight className='skills-icon' />HTML5</li>
                        <li><BiChevronsRight className='skills-icon' />CSS3</li>
                        <li><BiChevronsRight className='skills-icon' />JavaScript</li>
                        <li><BiChevronsRight className='skills-icon' />React.js</li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul>
                        <li><BiChevronsRight className='skills-icon' />Bootstrap</li>
                        <li><BiChevronsRight className='skills-icon' />SASS</li>
                        <li><BiChevronsRight className='skills-icon' />npm / pip</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4 col-sm-6">
              <Card className="skills-card">
                <Card.Body>
                  <Card.Title className='skills-title'>Back-end</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <ul>
                        <li><BiChevronsRight className='skills-icon' />Node.js</li>
                        <li><BiChevronsRight className='skills-icon' />Express</li>
                        <li><BiChevronsRight className='skills-icon' />MongoDB</li>
                        <li><BiChevronsRight className='skills-icon' />Mongoose</li>
                      </ul>
                    </Col>
                    <Col xs={6}>
                      <ul>
                        <li><BiChevronsRight className='skills-icon' />Python</li>
                        <li><BiChevronsRight className='skills-icon' />Django</li>
                        <li><BiChevronsRight className='skills-icon' />PostgreSQL</li>
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