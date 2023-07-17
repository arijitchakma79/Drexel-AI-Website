import React from 'react';
import Navbar from '../Components/navbar';
import PurposeComponent from '../Components/purpose';
import club_data from '../club_data.json';
import TeamPage from './team';
import ContactUsPage from './contactUs';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75%' }}>
          <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>ABOUT DREXEL AI: </h1>
          <PurposeComponent data={club_data.main} />
          <TeamPage/>
          <ContactUsPage/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
