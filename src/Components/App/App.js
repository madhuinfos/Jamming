import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

let track = {
  uri: '',
  id: 1,
  name: 'song1',
  artist: 'song artist',
  album: 'song album',
  isRemoval: true
};

let track1 = {
  uri: '',
  id: 2,
  name: 'song2',
  artist: 'song2 artist',
  album: 'song2 album',
  isRemoval: false
};

let track2 = {
  uri: '',
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
      this.savePlayList = this.savePlayList.bind(this);
      this.search = this.search.bind(this);
  };

  addTrack(track){
    const selectedTrack = this.state.playlist.tracks.find(
      playListTrack => playListTrack.id === track.id
    );

    if(selectedTrack === undefined){
      let newPlaylist = {...this.state.playlist};
      newPlaylist.tracks.push(track);
      this.setState({playlist: newPlaylist});
    }
  };

  removeTrack(track){
    const selectedTrackIndex = this.state.playlist.tracks.findIndex(
      playListTrack => playListTrack.id === track.id
    );

    let newPlaylist = {...this.state.playlist};
    if(selectedTrackIndex >= 0){
      newPlaylist.tracks.splice(selectedTrackIndex, 1);
      this.setState({playlist: newPlaylist});
    }
  };

  updatePlaylistName(name){
    debugger;
    let newPlaylist = {...this.state.playlist};
    newPlaylist.name = name;
    this.setState({playlist : newPlaylist});
  };

  savePlayList(){
    let trackURIs = this.state.playlist.tracks.map(x => x.uri);
  };

  search(searchTerm){
    Spotify.search(searchTerm).then(x => console.log('request executed'));
    console.log(searchTerm);
  }

  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <SearchBar onSearch ={this.search} />
    <div className="App">
      <SearchResults onAdd ={this.addTrack} searchResults ={this.state.searchResults} />
      <div className="App-playlist">
        <Playlist onSave = {this.savePlayList} onNameChange = {this.updatePlaylistName} onRemove ={this.removeTrack}  playlist = {this.state.playlist}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
