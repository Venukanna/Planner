import React from 'react';
import './Header.css'; // Import the component-specific CSS


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>Home</li>
          <li>Top Destinations</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
