import React, { useCallback } from "react";

import "./Track.css";


const Track = (props) => {

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
        {props.mockData}
        </h3>
        <p>
        {props.mockData} | {props.mockData}
        </p>
        <h3>
          From Track.js - To App.js
        </h3>
        <p>
          {JSON.stringify(props.appObject)}
        </p>
      </div>
    </div>
  );
};

export default Track;


/*
        <>
        {mockData1.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.album}</div>
            <div>{item.artist}</div>
          </div>
        ))}
        </>
        */