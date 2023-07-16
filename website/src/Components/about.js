import React from 'react';
import Navbar from './navbar';

const AboutUs = (props) => {
  return (
    <div>
    <header>
      <Navbar />
    </header>
    <div className='bg-cover' w-screen h-screen style={{ backgroundImage: `url("/images/pxfuel.jpg")` }}><h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      </div>
      
    </div>
  );
};

export default AboutUs;
