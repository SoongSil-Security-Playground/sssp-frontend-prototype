import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ChallengeModal({ isOpen, onClose, title, description, connection, tag, isSolved }) {
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
                <div style={tagContainerStyle}>
                    <p style={tagStyle}>{tag}</p>
                </div>
                <div style={informationContainerStyle}>
                    <p style={descriptionStyle}>{description}</p>
                    <p style={connectionStyle}>{connection}</p>
                    <button style={downloadButtonStyle}>Download</button>
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

const tagContainerStyle = {
    borderRadius: '18px',
    backgroundColor: 'var(--dark-blue)',
    width: '100%',
    maxWidth: '90px',
    maxHeight: '28px',
    margin: '10px auto',
    marginTop: '-10px',
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

const informationContainerStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: '330px',
    maxHeight: '300px',
    margin: '10px auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 0,
    gap: 0,
};

const descriptionStyle = {
    fontSize: '16px',
    color: 'grey',
    marginTop: '10px',
    marginBottom: '0px',
};

const connectionStyle = {
    fontSize: '16px',
    color: 'var(--medium-blue)',
    marginTop: '0px',
};

const downloadButtonStyle = {
    backgroundColor: 'white',
    color: 'var(--light-blue)',
    border: '1px solid var(--light-blue)',
    borderRadius: '5px',
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
    marginBottom: '10px',
};

const inputStyle = {
    padding: '8px',
    borderRadius: '20px',
    border: '1px solid var(--dark-blue)',
    marginLeft: '20px',
    marginRight: '10px',
    flex: '5',
};

const submitButtonStyle = {
    padding: '8px 16px',
    backgroundColor: 'var(--medium-blue)',
    color: 'white',
    borderRadius: '15px',
    marginRight: '20px',
    cursor: 'pointer',
    border: 'none',
    flex: '1',
};

export default ChallengeModal;