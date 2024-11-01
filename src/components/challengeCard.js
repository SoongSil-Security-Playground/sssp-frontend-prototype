import React from 'react';
import PropTypes from 'prop-types';

function ChallengeCard({ title, description, tag, isSolved }) {
    return (
        <div style={{...cardContainerStyle, ...(isSolved ? blueBackStyle : whiteBackStyle) }}>
            <h3 style={{...titleStyle, ...(isSolved ? whiteTextStyle : blueTextStyle)}}>{title}</h3>
            <div style={descriptionContainerStyle}>
                <p style={{...descriptionStyle, ...(isSolved ? whiteTextStyle : blueTextStyle) }}>{description}</p>
            </div>
            <div style={{...tagContainerStyle, ...(isSolved ? whiteBackStyle : blueBackStyle) }}>
                <p style={{...tagStyle, ...(isSolved ? blueTextStyle : whiteTextStyle)}}>{tag}</p>
            </div>
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
    width: '100%',
    maxWidth: '380px',
    height: '180px',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--dark-blue)',
    overflow: 'hidden',
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
    maxWidth: '330px',
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

const tagContainerStyle = {
    borderRadius: '18px',
    backgroundColor: 'var(--dark-blue)',
    width: '100%',
    maxWidth: '90px',
    maxHeight: '28px',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--dark-blue)',
};

const tagStyle = {
    fontSize: '16px',
    color: 'white',
    margin: 0,
    marginBottom: '10px',
};

export default ChallengeCard;