import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

let track = {
  id: 1,
  name: 'song1',
  artist: 'song artist',
  album: 'song album',
  isRemoval: true
};

let track1 = {
  id: 2,
  name: 'song2',
  artist: 'song2 artist',
  album: 'song2 album',
  isRemoval: false
};

let track2 = {
  id: 3,
  name: 'song3',
  artist: 'song3 artist',
  album: 'song3 album',
  isRemoval: true
};

let playlist = {
  name: 'First Playlist',
  tracks: [track1, track, track]
};

let tracks = [track, track1, track1, track, track2];


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        searchResults: tracks,
        playlist: playlist
      };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
  };

  addTrack(track){
    const selectedTrack = this.state.playlist.tracks.find(
      playListTrack => playListTrack.id === track.id
    );

    if(selectedTrack === undefined){
      playlist.tracks.push(track);
      this.setState({playlist: playlist});
    }
  };

  removeTrack(track){
    const selectedTrackIndex = this.state.playlist.tracks.findIndex(
      playListTrack => playListTrack.id === track.id
    );

    if(selectedTrackIndex >= 0){
      playlist.tracks.splice(selectedTrackIndex, 1);
      this.setState({playlist: playlist});
    }
  };

  updatePlaylistName(name){
    debugger;
    let newPlaylist = {...this.state.playlist};
    newPlaylist.name = name;
    this.setState({playlist : newPlaylist});
  };

  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <SearchBar />
    <div className="App">
      <SearchResults onAdd ={this.addTrack} searchResults ={this.state.searchResults} />
      <div className="App-playlist">
      <Playlist onNameChange = {this.updatePlaylistName} onRemove ={this.removeTrack}  playlist = {this.state.playlist}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
