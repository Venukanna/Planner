import React, { useState } from 'react';
import './Login.css'; // Import page-specific CSS

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log('Login Successful:', { username });
      onLogin(true); // Notify MasterController that the user has logged in
    } else {
      alert('Please enter both username and password!');
    }
  };

  return (
    <div className="login">
      <header className="login-header">
        <h1>Login</h1>
      </header>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
