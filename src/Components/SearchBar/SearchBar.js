import React from 'react';
import './SearchBar.css';

function Search(){

    const onSearchHandler = (e) => {
        console.log("search")
    }

    return (
        <form onSubmit={onSearchHandler} className="form">
            <input type="text" className="search"/>
            <button type="submit" className="search-button">
                &#x1F50E;&#xFE0E;
            </button>
        </form>
        
        
    )
}

export default Search;