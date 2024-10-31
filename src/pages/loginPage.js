import React from 'react';
import NavigationBar from '../components/navigationBar';

function LoginPage({isLoggedIn, toggleLogin}) {
    return (
        <div style={mainContainerStyle}>
            {/* <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} /> */}
            <h1 style={headerTextStyle}>LOGIN</h1>
            <b1 style={headerTextStyle}>hello</b1>
            <div style={loginContainerStyle}>
                
            </div>
        </div>
    );
  }
  
  const mainContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    flexDirection: 'column',
    margin: 0,
};

const loginContainerStyle = {
    backgroundColor: 'white',
    border: '2px solid var(--medium-grey)',
    marginTop: '10px',
    height: '300px',
    width: '500px',
    borderRadius: '10px',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    margin: 0,
}

export default LoginPage;