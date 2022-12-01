import React from "react";
import Navbar from "./components/Header.js/Navbar";
import ImageSlide from './components/ImageSlide';
import Banner from './components/Banner';
import LatestProject from './components/LatestProject';
import Gallery from './components/Gallery/Gallery'





function App() {
  return(
    <>
    <Navbar />
    <ImageSlide />
    <Banner />
    <LatestProject />
    <projectOne />
    <Gallery />
    
    </>
  );
}

export default App;
