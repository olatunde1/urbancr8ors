import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../components/images/banner.jpg'
import Box from '@mui/material/Box';

function ResponsiveExample() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='BannerPage'>
        <Col  xs={12} md={8}>
          <h1 className='section-subtitle'>ABOUT US</h1>
          <h2>We Are The Leader In The <br /> Architectural</h2>
          <p>For each project we establish relationships with partners who we know will  help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other</p>
          <Box className='YearsOfExperience'>
            <h1>26</h1> 
            <p>Years <br /> Of Working <br /> Experience </p>
          </Box>

        </Col>
        <Col xs={6} md={4}>
          <img src={banner} alt='Thanks'/>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveExample;