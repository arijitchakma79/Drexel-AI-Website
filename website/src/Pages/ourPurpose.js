import React from "react";
import Navbar from "../Components/navbar";
import NavbarAbout from "../Components/navbarAbout";

const Purpose = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>ABOUT DREXEL AI: </h1>
            <NavbarAbout />
            <p>This is the purpose page</p>
            
        </div>
    )
}

export default Purpose