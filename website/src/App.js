import AboutUs from './Components/about';
import club_data from './club_data.json';
import Navbar from './Components/navbar';
import Homepage from './Components/homepage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage data={club_data.main} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
