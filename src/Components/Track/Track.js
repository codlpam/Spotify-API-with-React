import React from 'react';
import './Track.css';

function Track(props){
    
    const addTrack = () => {
        props.onAdd(props.track);
    }

    const removeTrack = () => {
        props.onRemove(props.track);
    }

    const renderButton = () => {
        if (props.isRemoval) {
            return <button onClick={removeTrack}>-</button>;
        } else {
            return <button onClick={addTrack}>+</button>;
        }
    }

    return (
        <div className="track">
            <div className="trackInfo">
                <h2>{props.track.songName}</h2>
                <h3>{props.track.artist}  |  {props.track.playlist}</h3>
            </div>
            <div className="_button">
                {renderButton()}
            </div>
        </div>
    )
}

export default Track;
