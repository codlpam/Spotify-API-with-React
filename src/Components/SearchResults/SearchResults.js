import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js'

function Results(props){
    console.log("Music Array in SearchResults:", props.searchResults);
    return (
        <div className="results">
            <div className="topBanner">
                <h1>Results</h1>
            </div>
            <TrackList tracks={props.searchResults}/>
        </div>
    )
}

export default Results;