import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarAbout = () => {
  return (
    <nav className="bg-white border-b-2 border-black py-2">
      <ul className="flex justify-between max-w-6xl mx-auto px-4">
        <li>
          <NavLink to="/about/purpose" className="text-blue-900 hover:text-gray-200">
            Our Purpose
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/team" className="text-blue-900 hover:text-gray-200">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/contact" className="text-blue-900 hover:text-gray-200">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAbout;
