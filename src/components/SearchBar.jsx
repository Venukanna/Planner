// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search your destination"
    />
  );
};

export default SearchBar;
