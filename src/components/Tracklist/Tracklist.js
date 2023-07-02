import React from "react";

import "./TrackList.css";

import Track from "../Track/Track";

const mockData2 = [
  {
  id: 1,
  name: "Song 1 TrackList ",
  artist: "Artist 1 TrackList",
  album: "Album 1 TrackList"
  },
    {
  id: 2,
  name: "Song 2 TrackList",
  artist: "Artist 2 TrackList",
  album: "Album 2 TrackList"
  },
];

const TrackList = (props) => {
    return (
      <div className="TrackList">
          <Track              
            mockData={props.mockData}                             
          />
          <p>
            {JSON.stringify(props.tracks)}  
          </p>
          {mockData2.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.album}</div>
              <div>{item.artist}</div>
            </div>
          ))}
      </div>
    );
  };
  
  export default TrackList;


