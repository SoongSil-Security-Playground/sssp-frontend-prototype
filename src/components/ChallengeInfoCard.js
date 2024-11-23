import React, { useState } from "react";
import editIcon from "../assets/images/edit.png";
import deleteIcon from "../assets/images/delete.png";

function ChallengeInfoCard({id, title, category, tag, state, onEdit, onDelete}) {
    const [isEditHovered, setIsEditHovered] = useState(false);
    const [isDeleteHovered, setIsDeleteHovered] = useState(false);

    return (
        <div style={cardContainerStyle}>
            <div style={contentWrapperStyle}>
                <div style={iconStyle}>
                    <span>😊</span>
                </div>
                <div style={titleStyle}>{title}</div>
                <div style={categoryStyle}>{category}</div>
                <div style={tagStyle}>{tag}</div>
                <div style={stateStyle}>{state}</div>
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
                <span 
                    style={actionStyle(isDeleteHovered)}
                    onMouseEnter={() => setIsDeleteHovered(true)} 
                    onMouseLeave={() => setIsDeleteHovered(false)}
                >
                    <img 
                        src={deleteIcon} 
                        alt="Delete" 
                        onClick={onDelete} 
                    />
                </span>
            </div>
        </div>
    );
}

export default ChallengeInfoCard;

const cardContainerStyle = {
    display: 'flex',
    borderRadius: '16px',
    padding: '12px 16px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    margin: '8px',
};

const contentWrapperStyle = {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: '12px',
    padding: '8px',
};

const iconStyle = {
    marginRight: '8px',
};

const titleStyle = {
    fontWeight: 'bold',
    color: '#006e93',
};

const categoryStyle = {
    color: 'grey',
};

const tagStyle = {
    color: 'grey',
};

const stateStyle ={
    fontWeight: 'semibold',
    color: '#006e93',
};


const actionsWrapperStyle = {
    alignItems: 'center',
    display: 'flex',
    gap: '10px',
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