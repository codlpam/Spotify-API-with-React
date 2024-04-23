import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css'; 

function Playlist(props) {
    return (
        <div className="playlistContainer">

            <div className="playlist"> 
                <h1>Playlist</h1>
                <span>Name:</span><input type="text" className="playlistName"/>
                <TrackList tracks={props.searchResults}/> 
            </div>
            <div className="bottom">
                <button>Add to Spotify</button>
            </div>
            
        </div>
        
    );
}

export default Playlist; 