import React, { useState } from 'react';
import './SearchBar.css';

function Search(props){

    const [searchInput, setSearchInput] = useState('')

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    }

    const search = () => {
        props.onSearch(searchInput)
    }

    return (
        <div className="form">
            <input type="text" className="search" onChange={handleSearchChange}/>
            <button onClick={search} className="search-button">
                &#x1F50E;&#xFE0E;
            </button>
        </div>
        
        
    )
}

export default Search;