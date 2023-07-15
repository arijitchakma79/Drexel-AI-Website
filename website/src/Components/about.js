import React from 'react';

const AboutUs = (props) => {
  return (
    <div className='bg-cover' w-screen h-screen style={{ backgroundImage: `url("/images/pxfuel.jpg")` }}>
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
    </div>
  );
};

export default AboutUs;
