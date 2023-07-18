import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faSlack
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Components/navbar";

const Homepage = (props) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const description = `Wee are a ${props.data.address.city} based ${props.data.occupation}. ${props.data.description}`;
    let currentIndex = 0;
    let timer;

    const type = () => {
      if (currentIndex < description.length - 1) {
        setTypedText((prevText) => prevText + description[currentIndex]);
        currentIndex++;
        timer = setTimeout(type, 100);
      }
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, [props.data.description, props.data.address.city, props.data.occupation]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div
        className="bg-cover text-white w-screen h-screen flex items-center justify-center"
        style={{ backgroundImage: `url("/images/bg2.jpg")` }}
      >
        <div className="text-center mx-auto w-1/2">
          <h1 className="text-white pb-8 font-bold text-8xl md:text-blue-900 sm:text-red-900">We Are {props.data.name}.</h1>
          <p className="text-white text-2xl pt-8">{typedText}</p>
          <div className="social-icons mt-4 pt-4 space-x-8">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl" />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-3xl" />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
            </a>
            <a href="https://www.github.com">
              <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
            </a>
            <a href="https://www.slack.com">
              <FontAwesomeIcon icon={faSlack} className="text-white text-3xl" />
            </a>
          </div>
          {/* <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded" onClick={handleGetStartedClick}>
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage