import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js'

function Results(props){
    return (
        <div className="results">
            <div className="topBanner">
                <h1>Results</h1>
            </div>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    )
}

export default Results;