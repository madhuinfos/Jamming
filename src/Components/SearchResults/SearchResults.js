import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

class SearchResults extends React.Component{
  render(){
    return(<div className="SearchResults">
      <TrackList onAdd ={this.props.onAdd} tracks = {this.props.searchResults}/>
      <h2>Results</h2>
    </div>);
  }
}

export default SearchResults;
