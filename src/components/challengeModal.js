import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ChallengeModal({ isOpen, onClose, title, description, tag, isSolved }) {
    useEffect(() => {
        console.log("ChallengeModal isOpen prop:", isOpen);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div style={overlayStyle} onClick={handleOverlayClick}>
            <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} style={closeButtonStyle}>×</button>
                <h2 style={titleStyle}>{title}</h2>
                <p style={descriptionStyle}>{description}</p>
                <div style={{...tagStyle, backgroundColor: isSolved ? 'lightgrey' : 'var(--dark-blue)'}}>
                    <p style={{ color: isSolved ? 'var(--dark-blue)' : 'white' }}>{tag}</p>
                </div>
                {isSolved ? (
                    <p style={solvedStyle}>solved</p>
                ) : (
                    <div style={inputContainerStyle}>
                        <input type="text" placeholder="flag" style={inputStyle} />
                        <button style={submitButtonStyle}>submit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

ChallengeModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    isSolved: PropTypes.bool.isRequired,
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    width: '400px',
    position: 'relative',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
};

const descriptionStyle = {
    fontSize: '16px',
    color: 'grey',
    marginTop: '10px',
};

const tagStyle = {
    borderRadius: '18px',
    padding: '5px 10px',
    display: 'inline-block',
    marginTop: '10px',
};

const solvedStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--dark-blue)',
    marginTop: '20px',
};

const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
};

const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid var(--dark-blue)',
    marginRight: '10px',
    flex: '1',
};

const submitButtonStyle = {
    padding: '8px 16px',
    backgroundColor: 'var(--dark-blue)',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
};

export default ChallengeModal;