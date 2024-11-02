import React from 'react';
import ProfileForm from '../components/ProfileForm';
import Footer from '../components/Footer';

function MypagePage() {
    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Mypage</h1>
            </div>
            <div style={contentContainerStyle}>
                <ProfileForm />
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
};

const titleContainerStyle = {
    marginTop: '12vh',
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

export default MypagePage;