import React from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import "../styles/ChallengeInfoCard.css";

const ChallengeInfoCard = ({ title, category, tag, state, onEdit, onDelete, checked, onCheck }) => {
    return (
        <div className="information-box">
            <div className="label label-check">
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={onCheck} 
                    aria-label={`Select ${title}`} 
                />
            </div>
            <div className="label label-title">{title}</div>
            <div className="label label-category">{category}</div>
            <div className="label label-tag">{tag}</div>
            <div className="label label-state">{state}</div>
            <div className="label label-actions">
                <span className="actions">
                    <img 
                        src={editIcon} 
                        alt="Edit" 
                        onClick={onEdit} 
                        aria-label="Edit challenge"
                    />
                    <img 
                        src={deleteIcon} 
                        alt="Delete" 
                        onClick={onDelete} 
                        aria-label="Delete challenge"
                    />
                </span>
            </div>
        </div>
    );
};

export default ChallengeInfoCard;
