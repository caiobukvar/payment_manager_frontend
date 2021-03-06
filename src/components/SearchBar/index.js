import React, { useContext } from 'react';
import searchIcon from '../../assets/search.svg';
import SearchContext from '../../contexts/SearchContext';

function SearchBar() {
    const { setSearchTerm } = useContext(SearchContext);

    return (
        <div className="search-box-container flex-row space-between items-center">
            <input type="text"
                className="search-box-input font-search"
                placeholder="Procurar por nome, e-mail ou CPF"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex-row search-box-btn content-center">
                <img src={searchIcon} alt="searchImg" className="search-box-image" />
                <button className="pad-side">BUSCAR</button>
            </div>
        </div>
    );
}

export default SearchBar;