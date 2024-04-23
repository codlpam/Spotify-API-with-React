import React from 'react';
import './Track.css';

function Track(props){
    return (
        <>
            <div className="track">
                <div className="trackInfo">
                    <h2>{props.track.songName}</h2>
                    <h3>{props.track.artist}  |  {props.track.playlist}</h3>
                </div>
                <div className="plusButton">
                    <button>+</button>
                </div>
            </div>
        </>
    )
}

export default Track;