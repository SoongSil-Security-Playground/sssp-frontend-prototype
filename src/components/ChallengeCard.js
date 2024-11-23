import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChallengeModal from './ChallengeModal';

function ChallengeCard({ name, description, points, category, createdAt, filePath, isSolved }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log("Opening modal");
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log("Closing modal");
        setIsModalOpen(false);
    };

    useEffect(() => {
        console.log("isModalOpen state in ChallengeCard:", isModalOpen);
    }, [isModalOpen]);

    return (
        <div>
            <div 
                style={{ ...cardContainerStyle, ...(isSolved ? blueBackStyle : whiteBackStyle) }} 
                onClick={handleOpenModal}
            >
                <h3 style={{ ...titleStyle, ...(isSolved ? whiteTextStyle : blueTextStyle) }}>{name}</h3>
                <div style={descriptionContainerStyle}>
                    <p style={pointsStyle}>{points}</p>
                    <p style={{ ...descriptionStyle, ...(isSolved ? whiteTextStyle : blueTextStyle) }}>{description}</p>
                </div>
                <div style={{ ...categoryContainerStyle, ...(isSolved ? whiteBackStyle : blueBackStyle) }}>
                    <p style={{ ...categoryStyle, ...(isSolved ? blueTextStyle : whiteTextStyle) }}>{category}</p>
                </div>
            </div>

            <ChallengeModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                name={name}
                description={description}
                points={points}
                category={category}
                createdAt={new Date(createdAt).toLocaleString()}
                filePath={filePath}
                isSolved={isSolved}
            />
        </div>
    );
}

ChallengeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    isSolved: PropTypes.bool.isRequired,
};

const cardContainerStyle = {
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: '22vw',
    height: '25vh',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--dark-blue)',
    overflow: 'hidden',
    cursor: 'pointer',
};

const whiteBackStyle = {
    backgroundColor: 'white',
};

const blueBackStyle = {
    backgroundColor: 'var(--dark-blue)',
};  

const whiteTextStyle = {
    color: 'white',
};

const blueTextStyle = {
    color: 'var(--dark-blue)',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
    margin: 0,
    marginBottom: '0px',
};

const descriptionContainerStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: '22vw',
    height: '50px',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
};

const descriptionStyle = {
    fontSize: '16px',
    color: 'var(--dark-blue)',
    margin: 0,
    marginBottom: '10px',
};

const pointsStyle = {
    fontSize: '16px',
    color: 'var(--dark-blue)',
    margin: 0,
    fontWeight: 'bold',
    marginBottom: '10px',
};

const categoryContainerStyle = {
    borderRadius: '18px',
    backgroundColor: 'var(--dark-blue)',
    width: '6vw',
    height: '3.5vh',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--dark-blue)',
};

const categoryStyle = {
    fontSize: '16px',
    color: 'white',
    margin: 0,
    marginBottom: '10px',
};

export default ChallengeCard;