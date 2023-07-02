import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
        mockData={props.mockData} 
        tracks={props.mockData1} 
           
        />
    </div>
  );
};

export default SearchResults;

