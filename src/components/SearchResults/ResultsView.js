import React from 'react'
import './ResultsView.css'



export const ResultsView = ({ result }) => {

  return (
    <div 
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
        {result.name}
 
    </div>
  );
}
