import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Navbar = () => {
  return (
    <div className="bg-blue-900 bg-opacity-50">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-white text-2xl">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          {/* About us section */}
          <NavLink to="/about" className="text-red-700 hover:text-gray-900 font-medium text-xl">
            About Us
          </NavLink>

          {/* Research Section */}
          <NavLink to="/research" className="text-red-700 hover:text-gray-900 font-medium text-xl">
            Research
          </NavLink>

          {/* Project Section */}
          <NavLink to="/projects" className="text-red-700 hover:text-gray-900 font-medium text-xl">
            Projects
          </NavLink>

          {/* Events */}
          <a href=" https://drexel.campuslabs.com/engage/organization/drexelai" className="text-red-700 hover:text-gray-900 font-medium text-xl">
            Events
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
