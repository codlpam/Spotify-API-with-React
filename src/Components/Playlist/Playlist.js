import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css'; 

function Playlist(props) {

    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    }

    return (
        <div className="playlistContainer">

            <div className="playlist"> 
                <h1>Playlist</h1>
                <input type="text" onChange={handleNameChange} className="playlistName" placeholder="Playlist Name"/>
                <TrackList
                    tracks={props.playlist}
                    isRemoval={true}
                    onRemove={props.onRemove}
                />
            </div>
            <div className="bottom">
                <button>Add to Spotify</button>
            </div>
            
        </div>
        
    );
}

export default Playlist; 