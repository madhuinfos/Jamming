import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {searchResults:{}};
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
