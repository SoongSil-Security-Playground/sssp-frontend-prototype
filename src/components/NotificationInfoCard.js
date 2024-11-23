import React, {useState} from 'react';
import PropTypes from 'prop-types';

function NotificationInfoCard({ title, content, timestamp }) {
    const [isVisible, setIsVisible] = useState(true);

    
    const handleDelete = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={cardContainerStyle}>
            <button style={deleteButtonStyle} onClick={handleDelete} aria-label="Delete notification">
            ×
            </button>
            <div>
                <h3 style={titleStyle}>{title}</h3>
                <p style={contentStyle}>{content}</p>
                <p style={timestampStyle}>{timestamp}</p>
            </div>
        </div>
    );
}

export default NotificationInfoCard;

NotificationInfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

const cardContainerStyle = {
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    textAlign: 'left',
    position: 'relative',
};

const deleteButtonStyle = {
    position: 'absolute',
    top: '0px',
    right: '16px',
    border: 'none',
    fontSize: '1.5em',
    color: '#999',
    backgroundColor: 'transparent',
    cursor: 'pointer', 
};

const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#006e93',
    margin: 0,
    marginBottom: '0px',
};

const contentStyle = {
    fontSize: '14px',
    color: 'black',
    margin: 0,
    marginBottom: '10px',
};

const timestampStyle = {
    fontSize: '12px',
    color: '#a0a0a0',
    margin: 0,
};