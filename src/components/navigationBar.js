import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function NavigationBar({ isLoggedIn, toggleLogin }) {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link to="/" style={linkStyle}>
          <img src={logo} alt="algo" style={logoImageStyle} />
        </Link>
      </div>
      <div style={globalBarStyle}>
        <Link to="/users" style={linkStyle}>
          <button style={buttonStyle}>Users</button>
        </Link>
        <Link to="/scoreboard" style={linkStyle}>
          <button style={buttonStyle}>Scoreboard</button>
        </Link>
        <Link to="/challenges" style={linkStyle}>
          <button style={buttonStyle}>Challenges</button>
        </Link>
        <Link to="/notifications" style={linkStyle}>
          <button style={buttonStyle}>Notifications</button>
        </Link>
      </div>

      {isLoggedIn ? (
        <>
          <div style={privBarStyle}>
            <Link to="/mypage" style={linkStyle}>
              <button style={buttonWhiteBlueStyle}>My Page</button>
            </Link>
            <button style={buttonBlueStyle} onClick={toggleLogin}>logout →</button>
          </div>
        </>
      ) : (
        <>
          <div style={privBarStyle}>
            <Link to="/login" style={linkStyle}>
              <button style={buttonBlueStyle}>login →</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  width: '100%',
  top: 0,
  backgroundColor: 'white',
};

const logoStyle = {
    marginLeft: '100px',
    marginRight: '200px',
};

const globalBarStyle = {
    backgroundColor: 'transparent',
    marginLeft: '100px',
    marginRight: '100px',
};

const privBarStyle = {
    backgroundColor: 'transparent',
    display: 'flex-end',
    marginRight: '50px',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'var(--text-color)',
  cursor: 'pointer',
  margin: '0 5px',
};

const buttonBlueStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'var(--medium-blue)',
  color: '#FFFFFF',
  cursor: 'pointer',
  margin: '0 5px',
  borderRadius: '8px',
};

const buttonWhiteBlueStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  backgroundColor: 'white',
  color: 'var(--dark-blue)',
  cursor: 'pointer',
  margin: '0 5px',
};

const logoImageStyle = {
  height: '60px',
  width: 'auto',
};

export default NavigationBar;
