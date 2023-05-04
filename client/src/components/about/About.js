import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'


const About = () => {
  return (
    <section id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={6}>
            <h3 className='about-section'>A LITTLE BIT ABOUT ME</h3>
            <Image className='profile-picture' variant="top" src="https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683214800/Portfolio/me_r6apeq.jpg" roundedCircle />
            <Card.Body>
              <Card.Text className='about-description'>
                <p>My enthusiasm, dedication,  project management skills and love for languages have enabled me to grow in my previous career.</p>
                <p>I was introduced to coding at university and during this time I mainly used HTML and CSS, which I loved, but I felt quite restricted by the nature of the language. This led me to undertake an immersive Software Engineering Course at General Assembly to help me make a complete 180-degree change in my career as a developer.</p>
                <p>When I&apos;m not on the computer, you can find me practising Calisthenics.</p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About 