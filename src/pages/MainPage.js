import React from 'react';
import Footer from '../components/Footer';
import banner from '../assets/images/logo_big.png';
import logo from '../assets/images/logo.png';

function MainPage() {
  return (
    <div style={mainContainerStyle}>
        <div style={contentContainerStyle} >
            <div style={bannerStyle}>
                <img src={banner} alt="banner" style={bannerImageStyle} />
            </div>
            <div style={textContainerStyle}>
                <div style={headerStyle}>
                    <h1 style={headerTextStyle}>What is </h1>
                    <img src={logo} alt="logo" style={logoImageStyle} />
                    <h1 style={headerTextStyle}>?</h1>
                </div>
                <div style={bodyStyle}>
                    <b style={textStyle}>Soongsil Security Playground</b>
                    <b style={textStyle}>&nbsp;</b>
                    <b style={textBoldStyle}>• Customize Your Platform</b>
                    <b style={textBoldStyle}>• Host and Manage Competitions</b>
                    <b style={textBoldStyle}>• Enjoy the Game!</b>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflowX: 'hidden',
};

const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

const bannerStyle = {
    backgroundColor: '#D8E0E3',
    minHeight: '600px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const bannerImageStyle = {
    marginTop: '70px',
    height: '300px',
};

const textContainerStyle = {
    backgroundColor: 'white',
    minHeight: '500px',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '100px',
    boxSizing: 'border-box',
    transform: 'translateX(-180px)',
};


const headerStyle = {
    alignItems: 'center',
    justifyContents: 'center',
    display: 'flex',
    
};

const logoImageStyle = {
    height: '80px',
};

const headerTextStyle = {
    color: 'var(--dark-blue)',
    fontSize: '42px',
};

const bodyStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '20px',
};

const textStyle = {
    color: 'var(--dark-blue)',
    fontSize: '20px',
};

const textBoldStyle = {
    color: 'var(--dark-blue)',
    fontSize: '20px',
    fontWeight: 600,
};

export default MainPage;