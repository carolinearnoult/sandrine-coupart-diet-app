import React, { useState }from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Articles from '../Articles';
import Footer from '../Footer';



function Home() {
 
  return (
    <>
      <Cards />
      <HeroSection />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;