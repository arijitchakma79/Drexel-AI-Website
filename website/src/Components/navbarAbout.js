import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarAbout = () => {
  return (
    <nav className="bg-blue-900 py-2">
      <ul className="flex justify-between max-w-6xl mx-auto px-4">
        <li>
          <NavLink to="/about/purpose" className="text-white hover:text-gray-200">
            Our Purpose
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/team" className="text-white hover:text-gray-200">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/contact" className="text-white hover:text-gray-200">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAbout;
