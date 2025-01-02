import React from 'react';
import './Logout.css'; // Import page-specific CSS

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    console.log('Logout Successful');
    onLogout(false); // Notify MasterController that the user has logged out
  };

  return (
    <div className="logout">
      <header className="logout-header">
        <h1>Logout</h1>
      </header>
      <p>You are logged in.</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
