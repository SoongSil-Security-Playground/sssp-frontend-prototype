import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, description }) {
    return (
        <div style={cardContainerStyle}>
            <div style={profileImageContainerStyle}>
                <span style={profileIconStyle}></span>
            </div>
            <div style={textContainerStyle}>
                <p style={nameStyle}>name</p>
                <p style={descriptionStyle}>description</p>
                {/* <p style={nameStyle}>{name}</p> */}
                {/* <p style={descriptionStyle}>{description}</p> */}
            </div>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const cardContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '1000px',
    margin: '10px auto',
};

const profileImageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    marginLeft: '30px',
    marginRight: '15px',
};

const profileIconStyle = {
    fontSize: '20px',
    color: '#5a5a5a',
};

const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
};

const nameStyle = {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
};

const descriptionStyle = {
    margin: 0,
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'lightgrey',
};

export default UserCard;