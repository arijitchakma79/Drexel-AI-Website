import AboutUs from './Pages/about';
import club_data from './club_data.json';
import Navbar from './Components/navbar';
import Homepage from './Pages/homepage';
import ResearchPage from './Pages/research';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Purpose from './Pages/ourPurpose';
import TeamPage from './Pages/team';
import ContactUs from './Pages/contactUs';
import ContactUsPage from './Pages/contactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage data={club_data.main} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path ="/about/purpose" element= {<AboutUs />}/>
          <Route path ="/about/team" element={<TeamPage />}/>
          <Route path ="/about/contact" element={<ContactUsPage />}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
