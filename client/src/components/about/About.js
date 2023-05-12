
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
                Hi 👋! My name is Rossana, I&apos;m Italian and I have been living in London for the last ten years. Before moving to London I travelled all over the world, which instilled in me a lifelong <span className='about-hobby'>love of languages</span>, I speak Italian (obviously), English, and Russian.
                <br />
                <br />
                During my university years, I was introduced to coding, and while I loved using HTML and CSS, I felt limited by the language&apos;s constraints. This motivated me to broaden my knowledge to create more engaging websites, which led me to enrol in an immersive Software Engineering Course at General Assembly. This experience is allowing me to make a complete career shift and pursue development as a profession.
                <br />
                <br />
                In my free time, you&apos;ll find me practising <span className='about-hobby'>Calisthenics</span>. This is definitely my medicine for keeping myself healthy and happy. Committing to Calisthenics has helped me to build habits and consistency. During evenings, I enjoy spending my time <span className='about-hobby'>knitting</span> while relaxing on the sofa or perhaps even unravelling an old project.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About 