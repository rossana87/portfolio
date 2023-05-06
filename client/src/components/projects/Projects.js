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
            <h5 className='display-4 mt-4 mb-5 text-center'>PROJECTS</h5>
          </Col>
          <Col lg="4" md="6" sm="12" className='art'>
            <Card>
              <div className="card-image"></div>
              <Card.Body>
                <Card.Text>xxxx</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects 