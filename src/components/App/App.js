import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
// import Spotify from "../../util/Spotify";

const App = () => {
const mockData = "Song 1";

/*
const mockDataObject = 
*/
return (
  <div>
    <h1>
      Ja<span className="highlight">mmm</span>ing
    </h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults mockData={mockData} />
        <Playlist />
      </div>
    </div>
  </div>
);
};

export default App;






/*
 return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults mockData={mockData} />
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
*/