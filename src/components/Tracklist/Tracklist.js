import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";

const TrackList = (props) => {
    return (
      <div className="TrackList">
            <Track mockData={props.mockData}/>
      </div>
    );
  };
  
  export default TrackList;