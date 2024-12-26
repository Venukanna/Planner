import React from 'react';
import './SearchBar.css'; // Import the component-specific CSS


const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for a destination..." />
    </div>
  );
};

export default SearchBar;
