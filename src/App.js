import React from "react";
import Navbar from "./components/Header.js/Navbar";
import ImageSlide from './components/ImageSlide';
import Banner from './components/Banner';
import LatestProject from './components/LatestProject'



function App() {
  return(
    <>
    <Navbar />
    <ImageSlide />
    <Banner />
    <LatestProject />
    
    </>
  );
}

export default App;
