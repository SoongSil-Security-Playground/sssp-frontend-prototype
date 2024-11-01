import React from 'react';
import NavigationBar from '../components/navigationBar';
import ChallengeCard from '../components/challengeCard';
import Footer from '../components/footer';

function ChallengesPage({ isLoggedIn, toggleLogin }) {
    return (
        <div style={mainContainerStyle}>
            <NavigationBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            <div style={titleContainerStyle}>
                <h1 style={headerTextStyle}>Challenges</h1>
            </div>
            <div style={contentContainerStyle}>
                <ChallengeCard 
                    title="Unsolved Challenge"
                    description="This challenge has not been solved."
                    connection="server adderess is here."
                    tag="pwn"
                    isSolved={false}
                />
                <ChallengeCard 
                    title="Solved Challenge"
                    description="This challenge has been solved."
                    connection="server adderess is here."
                    tag="misc"
                    isSolved={true}
                />
                <ChallengeCard 
                    title="Solved Challenge"
                    description="This challenge has been solved."
                    connection="server adderess is here."
                    tag="misc"
                    isSolved={true}
                />
                <ChallengeCard 
                    title="Solved Challenge"
                    description="This challenge has been solved."
                    connection="server adderess is here."
                    tag="misc"
                    isSolved={true}
                />
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

export default ChallengesPage;