import React from 'react';

import './SearchResults.css';
import { ResultsView } from './ResultsView';

function SearchResults({results}) {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <ResultsView result={result} key={id} />
            })
        }
    </div>
  )
}

export default SearchResults
