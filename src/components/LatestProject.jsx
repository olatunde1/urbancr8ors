import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Box } from '@mui/material';
import { Container } from 'react-bootstrap';
import Example from './Projects/projectOne'

export default function App() {
  return (
    <Box className='latest'>
        <Container>
        <h1 className='latestProjectCaption'>LATEST PROJECTS</h1>
        {/* <div class="vertical-title hidden-xs hidden-sm"><span>our works</span></div> */}
        {/* <marquee>The Best Among Equal</marquee> */}
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                <MDBCol sm='6'>
                    <MDBCard className='eachCard'>
                    <MDBCardBody className='cardDetails'>
                        <MDBCardTitle>
                            <h1>UCAM <br /> Minimalist Apartment</h1>
                        </MDBCardTitle>
                        <MDBCardText>
                        With supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                        <MDBBtn className='action' onClick={ <Example />}>See Project <i class="icon ion-ios-arrow-right"></i></MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                    
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className='eachCard'>
                    <MDBCardBody className='cardDetails'>
                        <MDBCardTitle>
                        <h1>Scadinavan <br /> Living Room </h1>
                        </MDBCardTitle>
                        <MDBCardText>
                        With supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                        <MDBBtn className='action' href='#'>Go somewhere</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className='eachCard'>
                    <MDBCardBody className='cardDetails'>
                        <MDBCardTitle>
                            <h1>Office For <br /> Fashion Brand Store</h1>
                        </MDBCardTitle>
                        <MDBCardText>
                        With supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                        <MDBBtn className='action' href='#'>Go somewhere</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBCard className='eachCard'>
                    <MDBCardBody className='cardDetails'>
                        <MDBCardTitle>
                            <h1>The Luxury <br /> Interior Design</h1>
                        </MDBCardTitle>
                        <MDBCardText>
                        With supporting text below as a natural lead-in to additional content.
                        </MDBCardText>
                        <MDBBtn className='action' href='#'>Go somewhere</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </Container>
    </Box>
    
  );
}