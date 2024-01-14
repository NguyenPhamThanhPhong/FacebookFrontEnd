import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    };
  
    return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />  
      </div>
    );
  };

export default SearchBar;
