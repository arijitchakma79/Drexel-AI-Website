import React from 'react';
import NavbarAbout from '../Components/navbarAbout';
import Navbar from '../Components/navbar';
import PurposeComponent from '../Components/purpose';
import club_data from '../club_data.json';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75%' }}>
          <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>ABOUT DREXEL AI: </h1>
          <NavbarAbout />
          <PurposeComponent data={club_data.main} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
