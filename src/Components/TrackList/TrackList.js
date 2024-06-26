import React from 'react';
import Track from '../Track/Track'; 
import './TrackList.css'; 

const TrackList = (props) => {
  return (
      <div className="trackList">
          {props.tracks && props.tracks.map((track) => {
              return (
                    <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isAdded={props.isAdded}
                    onRemove={props.onRemove}
                />
              )
          })}
      </div>
  );
};

  
  export default TrackList;