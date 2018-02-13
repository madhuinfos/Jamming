import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

let track = {
  uri: '',
  ID: 1,
  Name: 'song1',
  Artist: 'song artist',
  Album: 'song album'
};

let track1 = {
  uri: '',
  ID: 2,
  Name: 'song2',
  Artist: 'song2 artist',
  Album: 'song2 album'
};

let track2 = {
  uri: '',
  ID: 3,
  Name: 'song3',
  Artist: 'song3 artist',
  Album: 'song3 album'
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
    Spotify.search(searchTerm).then(
      tracks => this.setState({
        searchResults : tracks
      })
    );
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
