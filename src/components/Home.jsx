import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Audience from './Audience';
import Contact from './Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Audience />
      <Contact />
    </main>
  );
};

export default Home;
