import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

const Navbar = () => {
  return (
    <div className="bg-blue-900 bg-opacity-50">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="w-1/4"></div>
          {/* About us section */}
          <NavLink to="/about" className="text-red-700 hover:text-gray-900 font-medium">
            About Us
          </NavLink>

          {/* Research Section */}
          <NavLink to="/research" className="text-red-700 hover:text-gray-900 font-medium">
            Research
          </NavLink>

          {/* Project Section */}
          <NavLink to="/projects" className="text-red-700 hover:text-gray-900 font-medium">
            Projects
          </NavLink>

          {/* Events */}
          <NavLink to="/events" className="text-red-700 hover:text-gray-900 font-medium">
            Events
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
