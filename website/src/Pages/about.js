import React from 'react';
import NavbarAbout from '../Components/navbarAbout';
import Navbar from '../Components/navbar';


const AboutPage = () => {
  return (
    <div>
    <Navbar />
      <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>ABOUT DREXEL AI: </h1>
      <NavbarAbout />
      {/* Rest of the content */}
    </div>
  );
};

export default AboutPage;
