import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/NotificationCard.css';

const NotificationCardDelete = ({ title, content, timestamp }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className='notification-card'>
            <button className="delete-button" onClick={handleDelete} aria-label="Delete notification">
                &times;
            </button>
            <div className="notification-card-info">
                <h3 className="notification-title">{title}</h3>
                <div className="notification-content">{content}</div>
                <div className="notification-timestamp">{new Date(timestamp).toLocaleString()}</div>
            </div>
        </div>
    );
}

NotificationCardDelete.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default NotificationCardDelete;
