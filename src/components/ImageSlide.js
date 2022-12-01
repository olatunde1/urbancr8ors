import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../components/images/slide1.jpg';
import slide2 from '../components/images/slide2.jpg';
import slide3 from '../components/images/slide3.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>   
          <h3>Small House Near Wroclaw</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Luxury Residence in Forest</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Re-design Interior for Villa</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;