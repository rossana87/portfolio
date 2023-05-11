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
                I was introduced to coding at university and during this time I mainly used HTML and CSS, which I loved, but I felt quite restricted by the nature of the language. This led me to undertake an immersive Software Engineering Course at General Assembly to help me make a complete 180-degree change in my career as a developer.
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