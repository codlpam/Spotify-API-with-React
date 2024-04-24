import logo from './logo.svg';
import './App.css';
import Playlist from "./Components/Playlist/Playlist";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";
import React, {useState, useCallback} from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([
    { id: 1, songName: "Bohemian Rhapsody", artist: "Queen", playlist: "Classic Hits" },
    { id: 2, songName: "Shape of You", artist: "Ed Sheeran", playlist: "Top 40" },
    { id: 3, songName: "Stairway to Heaven", artist: "Led Zeppelin", playlist: "Rock Classics" },
    { id: 4, songName: "Billie Jean", artist: "Michael Jackson", playlist: "80s Groove" },
    { id: 5, songName: "Rolling in the Deep", artist: "Adele", playlist: "Pop Hits" },
    { id: 6, songName: "Hotel California", artist: "Eagles", playlist: "Classic Rock" },
    { id: 7, songName: "Smells Like Teen Spirit", artist: "Nirvana", playlist: "90s Grunge" },
    { id: 8, songName: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", playlist: "Party Mix" },
    { id: 9, songName: "Sweet Child o' Mine", artist: "Guns N' Roses", playlist: "Rock Anthems" },
    { id: 10, songName: "Wonderwall", artist: "Oasis", playlist: "Indie Favorites" }
  ])
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  const addTrack = (track) => {
    if (!playlist.some(item => item.id === track.id)) {
      setPlaylist([...playlist, track]);
      console.log('Track added to playlist:', track);
      console.log('Updated playlist:', playlist); 
    }
  }

  const removeTrack = (track) => {
    const updatedPlaylist = playlist.filter(item => item.id !== track.id);
    setPlaylist(updatedPlaylist);
  }
  
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }
  
  return (
    <div className="App">
      <SearchBar/>
      <div className="containers">
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        <Playlist 
        playlist={playlist}
        playlistName={playlistName}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}/>
      </div>
    </div>
  );
}

export default App;
