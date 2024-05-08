import logo from './logo.svg';
import './App.css';
import Playlist from "./Components/Playlist/Playlist";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from "./Components/SearchResults/SearchResults";

import React, {useState} from 'react';

var CLIENT_ID = 'replace with id';
const REDIRECT_URI = 'http://localhost:3000/'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  let accessToken;
 
  
  async function createToken() {
    if (accessToken) {
        return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
        accessToken = accessTokenMatch[1];
        return accessToken;
    }

    console.log('Redirecting to Spotify authorization URL');
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    window.location = accessUrl;
  }
      
  async function createPlaylist() {
      if(!playlistName || !playlist){
        return;
      } 
      const accessToken = await createToken()
      let userId;
      let playlistId;
      const trackUris = playlist.map((track) => track.uri);
      try {
          const response = await fetch('https://api.spotify.com/v1/me', {
              headers: {
                  Authorization: `Bearer ${accessToken}`,
              },
          }).then(response => response.json())
          userId = response.id;
          return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',  
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: playlistName})
          }).then(response => response.json()
        ).then(jsonReponse => {
          playlistId = jsonReponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({uris: trackUris})
          })
        }).then(() => {
          setPlaylist([]);
          setPlaylistName('');
        })
          
          
      } catch (error) {
          console.error('Error creating playlist:', error);
      }
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  } 
  
  async function search(searchInput) {
      const accessToken = await createToken();
      if (!accessToken) {
          console.log('Access token not available. User needs to authorize first.');
      }
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (!response.ok) {
          console.log('Failed to search for tracks');
      }
      const data = await response.json();
      const topTracks = data.tracks.items.slice(0, 10);
      const extractedTracks = topTracks.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          album: track.album.name,
          uri: track.uri
      }));
      if (extractedTracks.length === 0) {
        // If no tracks found, set a message in the search results
          setSearchResults([{ id: 'no-results', name: 'No results found' }]);
      } else {
          setSearchResults(extractedTracks);
      }
  }
  

  const addTrack = (track) => {
    if (!playlist.some(item => item.id === track.id)) {
      setPlaylist([...playlist, track]);

      const updatedSearchResults = searchResults.filter(item => item.id !== track.id);
      setSearchResults(updatedSearchResults);
    }
  }

  const removeTrack = (track) => {
    const updatedPlaylist = playlist.filter(item => item.id !== track.id);
    setPlaylist(updatedPlaylist);

    setSearchResults([...searchResults, track]);
  }
  
  
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="containers">
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        <Playlist 
        playlist={playlist}
        playlistName={playlistName} 
        onRemove={removeTrack}
        onNameChange={updatePlaylistName} 
        onSave={createPlaylist} />
      </div>
    </div>
  );
}

export default App;

