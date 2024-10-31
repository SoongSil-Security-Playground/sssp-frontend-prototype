import React from 'react';
import NavigationBar from '../components/navigationBar';

function MainPage({isLoggedIn, toggleLogin}) {
  return (
    <div style={mainContainerStyle}>
        <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        <div style={bannerStyle}>
    
        </div>
    </div>
  );
}

const mainContainerStyle = {
    textAlign: 'center',
    margin: 0,
}

const bannerStyle = {
    backgroundColor: 'var(--light-grey)',
    height: '300px',
    marginLeft: -100,
    marginRight: -100,
    justifyContents: 'center',
    alignItems: 'center',
};

export default MainPage;