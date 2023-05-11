import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const About = () => {
  return (
    <section id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <h3 className='about-header'>About me</h3>
            <Card.Body>
              <Card.Text className='about-description'>
                During my university years, I was introduced to coding, and while I loved using HTML and CSS, I felt limited by the language&apos;s constraints. This motivated me to broaden my knowledge to create more engaging websites, which led me to enroll in an immersive Software Engineering Course at General Assembly. This experience allowed me to make a complete career shift and pursue development as a profession.
                <br />
                <br />
                When I&apos;m not coding, you&apos;ll find me practising <span className='about-hobby'> Calisthenics</span> or <span className='about-hobby'>knitting</span> on the sofa.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default About 