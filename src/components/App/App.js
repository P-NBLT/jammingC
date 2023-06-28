import {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className='searchPlaylist'>
      <div className="search">
        <h2>Search</h2>
        <SearchBar setResults={setResults}/>
        <SearchResults results={results} />
      </div>
      <div className='playlist'>
        <h2>Playlist (input title)</h2>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
