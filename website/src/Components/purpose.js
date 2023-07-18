import React from "react";


const PurposeComponent = (props) => {
  //Function which makes a list of our "what we do points"
  const renderList = (list) => {          
    return list.map((item, index) => (
      <li key={index} className="list-disc ml-4">
        {item}
      </li>
    ));
  };
  
  return (
    <div>
      <div>
        <h1 className="text-2xl pt-4 pb-4">Who We Are</h1>
        <p>{props.data.AboutUS.whoWeAre}</p>
      </div>
      <div>
        <h1 className="text-2xl">Mission</h1>
        <p>{props.data.AboutUS.mission}</p>
      </div>
      <div>
        <h1 className="text-2xl">What We Do</h1>
        <ul className="list-inside">{renderList(props.data.AboutUS.WhatWeDo)}</ul>
      </div>
      <div>
        <p>{props.data.AboutUS.last}</p>
      </div>
    </div>
  );
};

export default PurposeComponent;
