import React, { useState, useCallback } from "react";

import "./SearchBar.css";

const SearchBar = () => {

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" />
      <button>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;