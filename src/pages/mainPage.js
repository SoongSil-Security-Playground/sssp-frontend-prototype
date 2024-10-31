import React from 'react';
import NavigationBar from '../components/navigationBar';

function MainPage({isLoggedIn, toggleLogin}) {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        <h1>Welcome to the War Game Platform</h1>
        <p>This is your main hub for all features and updates.</p>
    </div>
  );
}

export default MainPage;