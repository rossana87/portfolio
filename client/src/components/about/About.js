import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Skills from '../about/Skills'


const About = () => {
  return (
    <section id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <h3 className='about-header'>About me</h3>
            <Card.Body>
              {/* <Image className='profile-pic' src="https://res.cloudinary.com/dtu5wu4i9/image/upload/v1683452977/Portfolio/cc7c4146-22c3-4772-9b78-dfb17f90dffb_loixus.jpg" thumbnail /> */}
              <Card.Text className='about-description'>
                I was introduced to coding at university and during this time I mainly used HTML and CSS, which I loved, but I felt quite restricted by the nature of the language. This led me to undertake an immersive Software Engineering Course at General Assembly to help me make a complete 180-degree change in my career as a developer.
                <br />
                <br />
                When I&apos;m not coding, you&apos;ll find me practising <span className='about-hobby'> Calisthenics</span> or <span className='about-hobby'>knitting</span> on the sofa.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Skills />
      </Container>

    </section>
  )
}

export default About 