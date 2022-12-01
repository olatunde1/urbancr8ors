import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import image1 from '../Gallery/pictures/Slide4.JPG'
import Card from 'react-bootstrap/Card';
import {
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
import { Box } from '@mui/material';

function Example() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

return (
    <Container>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            <MDBCol sm='6'>
                <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                    {values.map((v) => (
                    <Button className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                    ))}
                </Card.Body>
                </Card>   
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Box className='container zoom-anim-dialogue w-100'>
                  <img className='w-100' src={image1} alt="" />
                    <h1>Triangle Concrete House On Lake</h1>
                    <p class="project-detail-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. magna aliquam erat volutpat enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in.</p>
                    <ul class="project-detail-list text-dark">
                        <li>
                        <span class="left">Clients:</span>
                        <span class="right">Ethan Hunt, John Doe</span>
                        </li>
                        <li>
                        <span class="left">Completion:</span>
                        <span class="right">February 5th, 2019</span>
                        </li>
                        <li>
                        <span class="left">Project Type:</span>
                        <span class="right">Villa, Residence</span>
                        </li>
                        <li>
                        <span class="left">Architects:</span>
                        <span class="right">Logan Cee, Paul</span>
                        </li>
                        <li>
                        <span class="left">Budget:</span>
                        <span class="right">$1 200 000</span>
                        </li>
                    </ul>
                  </Box>
                </Modal.Body>
                </Modal>
            </MDBCol>
            
        </MDBRow>
       
    </Container>
    );
}


export default Example;

