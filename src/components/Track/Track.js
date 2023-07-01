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
        <p>
        Text Test
        </p>
      </div>
    </div>
  );
};

export default Track;