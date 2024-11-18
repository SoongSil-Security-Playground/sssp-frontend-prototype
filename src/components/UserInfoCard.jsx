import React from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import "../styles/UserInfoCard.css";

const UserInfoCard = ({ name, email, content, onEdit, onDelete }) => {
    return (
        <div className="information-box">
            <div className="label-checkbox"><input type="checkbox" /></div>
            <div className="user-info">
                <span className="user-icon">👤</span>
                <span className="label label-name">{name}</span>
            </div>
            <div className="label label-email">{email}</div>
            <div className="label label-content">{content}</div>
            <div className="label label-actions">
                <span className="actions">
                    <img 
                        src={editIcon} 
                        alt="Edit" 
                        onClick={onEdit} 
                    />
                    <img 
                        src={deleteIcon} 
                        alt="Delete" 
                        onClick={onDelete} 
                    />
                </span>
            </div>
        </div>
    );
};

export default UserInfoCard;