import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the War Game Platform</h1>
      <p>This is your main hub for all features and updates.</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link to="/register">
          <button style={buttonStyle}>Register</button>
        </Link>
        <Link to="/scoreboard">
          <button style={buttonStyle}>Scoreboard</button>
        </Link>
        <Link to="/notifications">
          <button style={buttonStyle}>Notifications</button>
        </Link>
        <Link to="/users">
          <button style={buttonStyle}>User List</button>
        </Link>
        <Link to="/my">
          <button style={buttonStyle}>My Page</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
};

export default MainPage;