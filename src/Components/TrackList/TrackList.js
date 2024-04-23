import React from 'react';
import Track from '../Track/Track'; 
import './TrackList.css'; 

const TrackList = (props) => {
  return (
    <div className="trackList">
      {props.tracks && props.tracks.map((track) => {
        console.log(track);
        return (
          <Track 
          track={track}
          id={track.id}/>
        )
      })}
    </div>
  );
};
  
  export default TrackList;