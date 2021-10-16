import React from 'react';
import searchIcon from '../../assets/search.svg';

function SearchBar() {
    return (
        <div className="search-box-container flex-row space-between items-center">
            <input type="text" className="search-box-input" />
            <div className="flex-row search-box-btn content-center">
                <img src={searchIcon} alt="searchImg" className="search-box-image" />
                <button className="pad-side">BUSCAR</button>
            </div>
        </div>
    );
}

export default SearchBar;