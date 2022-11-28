import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import banner from '../components/images/banner.jpg';

export default function App() {
  return (
    <MDBContainer>
      <MDBRow around className='BannerPage'>
        <MDBCol size='8' >
          <h1 className='section-subtitle'>ABOUT US</h1>
          <h2>We Are The Leader In The <br /> Architectural</h2>
          <p>For each project we establish relationships with partners who we know will <br /> help us create added value for your project. As well as bringing together the <br /> public and private sectors, we make sector-overarching links to gather <br /> knowledge and to learn from each other</p>
          <div className='YearsOfExperience'>
            <h1>26</h1>
            <p>Years <br /> Of Working <br />  Experience </p>
          </div>
        </MDBCol>
        <MDBCol size='4' >
          <img src={banner} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}