import React from "react";
import '../index.css';



const Navbar = () => {
  return (
    <div className="bg-blue-900 bg-opacity-50">
      <nav className="container mx-auto py-4">
      <div className="flex justify-between">
        
        <div className="w-1/4"></div>
          {/*About us section */}
          <a href="#about" className ="text-red-700 hover:text-gray-900 font-medium ">
            About Us
          </a>

          {/*Research Section*/}
          <a href="#research" className ="text-red-700 hover:text-gray-900 font-medium ">
            Research  
          </a>

          {/*Project Section*/}
          <a href="#projects" className ="text-red-700 hover:text-gray-900 font-medium ">
            Projects
          </a>

          {/*Events */}
          <a href="#events" className ="text-red-700 hover:text-gray-900 font-medium ">
            Events
          </a>

        
      </div>
        
      </nav>
      
    </div>
  );
};

export default Navbar;


