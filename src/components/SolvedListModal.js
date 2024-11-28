import React, { useState, useEffect } from 'react';

function SolvedListModal({isOpen, onClose, solvedChallenges}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("SolvedListModal isOpen prop:", isOpen);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={overlayStyle} onClick={handleOverlayClick}>
            <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} style={closeButtonStyle}>×</button>
                <h2 style={titleStyle}>Solved</h2>
                <div style={contentContainerStyle}>
                    hi
                </div>
            </div>
        </div>
    );
}

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
    width: '27vw',
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

const contentContainerStyle = {
    backgroundColor: 'green',
};

export default SolvedListModal;