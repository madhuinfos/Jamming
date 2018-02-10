import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';

let track = {
  name: 'song1',
  artist: 'song artist',
  album: 'song album',
  isRemoval: true
}

let track1 = {
  name: 'song2',
  artist: 'song2 artist',
  album: 'song2 album',
  isRemoval: false
}

let tracks = [track, track1, track1, track, track1];

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {searchResults: tracks};
  }

  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchResults searchResults ={this.state.searchResults} />
      <div className="App-playlist">
      </div>
    </div>
  </div>
    );
  }
}

export default App;
