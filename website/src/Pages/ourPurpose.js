import React from "react";
import Navbar from "../Components/navbar";
import NavbarAbout from "../Components/navbarAbout";
import PurposeComponent from "../Components/purpose";

const Purpose = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='text-blue-900 pt-12 text-2xl text-bold pb-4 pl-8'>ABOUT DREXEL AI: </h1>
            <NavbarAbout />
            <PurposeComponent/>
            
        </div>
    )
}

export default Purpose