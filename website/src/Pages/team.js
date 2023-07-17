import React from 'react';
import Team from "../Components/teamCom";
import Navbar from "../Components/navbar";
import NavbarAbout from "../Components/navbarAbout";
import club_data from "../club_data.json";
import Ambassadors from '../Components/ambassadors';

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75%' }}>
          <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>Meet Our Team</h1>
          <NavbarAbout />
          <div>
          <h1 className='p-6 text-bold text-2xl'>Current E-Boards</h1>
            <Team data={club_data} />
        </div>
        <div> 
        <h1 className='p-6 text-bold text-2xl'>Our Ambassadors</h1>
        <Ambassadors data={club_data}/>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
