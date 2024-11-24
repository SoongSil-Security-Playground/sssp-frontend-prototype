import React, {useState} from 'react';
import PropTypes from 'prop-types';
import editIcon from "../assets/images/edit.png";

function NotificationInfoCard({ title, content, onEdit}) {
    const [isEditHovered, setIsEditHovered] = useState(false);

    return (
        <div style={cardContainerStyle}>
            <div>
                <h3 style={titleStyle}>{title}</h3>
                <p style={contentStyle}>{content}</p>
            </div>
            <div style={actionsWrapperStyle}>
                <span 
                    style={actionStyle(isEditHovered)}
                    onMouseEnter={() => setIsEditHovered(true)} 
                    onMouseLeave={() => setIsEditHovered(false)}
                >
                    <img 
                        src={editIcon} 
                        alt="Edit" 
                        onClick={onEdit} 
                    />
                </span>
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
    display: 'flex',
    borderRadius: '16px',
    padding: '12px 16px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '8px',
    width: '100%',
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

const actionsWrapperStyle = {
    alignItems: 'center',
    display: 'flex',
    gap: '10px',
    marginRight: '10px',
};

const actionStyle = (isHovered) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    transition: 'transform 0.2s',
    transform: isHovered ? 'scale(1.1)' : 'none',
    opacity: isHovered ? '0.8' : '1',
});