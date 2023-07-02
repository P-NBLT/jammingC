import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
// import Spotify from "../../util/Spotify";

const App = () => {
  
  const mockData = "Test From Apps.js";  

  const mockData1 = [
    {
    id: 1,
    name: "Song 1",
    artist: "Artist 1",
    album: "Album 1"
    },
    {
    id: 2,
    name: "Song 2",
    artist: "Artist 2",
    album: "Album 2"
    },
  ];

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
      < div className="App-playlist">
          <SearchResults 
            mockData={mockData}
            mockData1={mockData1}          
          />
          <Playlist />
          <>
          {mockData1.map((item) => (
           <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.album}</div>
              <div>{item.artist}</div>
            </div>
          ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
