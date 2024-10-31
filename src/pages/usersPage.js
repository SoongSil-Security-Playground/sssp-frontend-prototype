import React from 'react';
import NavigationBar from '../components/navigationBar';

function UsersPage({ isLoggedIn, toggleLogin }) {
    return (
        <div style={mainContainerStyle}>
            <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Users</h1>
            </div>
            <div style={contentContainerStyle}>
            </div>
        </div>
    );
}

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    margin: 0,
    paddingTop: '60px',
};

const titleContainerStyle = {
    marginTop: '50px',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    marginBottom: '2px',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'green',
};

export default UsersPage;
