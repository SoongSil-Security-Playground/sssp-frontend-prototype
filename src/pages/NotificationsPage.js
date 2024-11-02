import React from 'react';
import NotificationCard from '../components/NotificationCard';
import Footer from '../components/Footer';

function NotificationsPage() {
    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Notifications</h1>
            </div>
            <div style={contentContainerStyle}>
                <NotificationCard />
            </div>
            <Footer />
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
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
};

export default NotificationsPage;