import React from "react";

const PurposeComponent = (props) => {
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
        <h1 className="text-2xl">Who We Are</h1>
        <p>{props.data.AboutUS.whoWeAre}</p>
      </div>
      <div>
        <h1>Mission</h1>
        <p>{props.data.AboutUS.mission}</p>
      </div>
      <div>
        <h1>What We Do</h1>
        <ul className="list-inside">{renderList(props.data.AboutUS.WhatWeDo)}</ul>
      </div>
      <div>
        <p>{props.data.AboutUS.last}</p>
      </div>
    </div>
  );
};

export default PurposeComponent;
