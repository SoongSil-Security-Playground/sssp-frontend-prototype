import React , { useState } from "react";
import ChallengeInfoCard from "../components/ChallengeInfoCard";
import SearchBar from "../components/SearchBar";
import { useNavigate, Link } from "react-router-dom";


function ChallSettingPage() {

    const [challenges, setChallenges] = useState([
        {id:1, title: "chall1", category: "pwn", tag: "none", state: "visible"},
        {id:2, title: "chall2", category: "web", tag: "none", state: "visible"},
        {id:3, title: "chall3", category: "crypto", tag: "none", state: "visible"},
        {id:4, title: "chall4", category: "rev", tag: "none", state: "visible"},
        {id:5, title: "chall5", category: "misc", tag: "none", state: "visible"},
        {id:6, title: "chall6", category: "pwn", tag: "none", state: "hidden"},
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleEdit = (challengeId) => {
        const challengeToEdit = challenges.find(challenge => challenge.id === challengeId);
        navigate(`/edit-challenge/${challengeId}`, { state: { challenge: challengeToEdit } });
    };

    const handleDelete = (challengeId) => {
        if (window.confirm("정말로 이 챌린지를 삭제하시겠습니까?")) {
            const updatedChallenges = challenges.filter(challenge => challenge.id !== challengeId);
            setChallenges(updatedChallenges);
        }
    };

    const filteredChallenges = challenges.filter(challenges => 
        (challenges.title && (challenges.title.toLowerCase().includes(searchTerm.toLowerCase()))) || 
        (challenges.category && (challenges.category.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    return (
        <div style={mainContainerStyle}>
            <div style={titleContainerStyle}>
                <h1>Challenges</h1>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div style={contentContatinerStyle}>
                <div style={addChallengeButtonStyle}>
                    <Link to='/add-challenge' style={buttonStyle}>
                        +
                    </Link>
                </div>
                <div style={{padding: '8px', width: '100%', overflowY: 'auto', maxHeight: '400px',}}>
                    {filteredChallenges.map(challenge => (
                        <ChallengeInfoCard
                            key={challenge.id}
                            title={challenge.title}
                            category={challenge.category}
                            tag={challenge.tag}
                            state={challenge.state}
                            onEdit={() => handleEdit(challenge.id)}
                            onDelete={() => handleDelete(challenge.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChallSettingPage;

const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 80px',
};

const titleContainerStyle = {
    marginTop: '6vh',
    width: '100%',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#006e93',
};

const contentContatinerStyle = {
    width: '100%',
};

const addChallengeButtonStyle = {
    display: 'flex',
    borderRadius: '16px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    padding: '12px 16px',
    margin: '8px',
};

const buttonStyle = {
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    alignContent: 'center',
}